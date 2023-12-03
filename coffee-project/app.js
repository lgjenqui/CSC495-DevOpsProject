const express = require('express');
const { coffees, specialCoffees, orders } = require('./data');

const app = express();
const PORT = 3000;

let LaunchDarkly = require('launchdarkly-node-client-sdk');
let user = {
    key: 'developer'
};

let ldClient
if (require.main === module) {
    ldClient = LaunchDarkly.initialize('656c96c2d17aa20fa5a462a9', user);
}

app.use(express.json());
app.use(express.static('public'));
module.exports = app;

let flagValue = false
function updateFlagValue () {
    flagValue = ldClient.variation('featureFlag', false);
    console.log('Feature flag \'featureFlag\' is ' + flagValue + ' for this user');
}

if (require.main === module) {
    ldClient.waitForInitialization ().then(function() {
        updateFlagValue();
        ldClient.on('change', (allChanges) => {
            console.log('Flags changed:', JSON.stringify(allChanges));
            updateFlagValue(); // Update flagValue on change
        });
    }).catch(function(error) {
        console.log('SDK failed to initialize: ' + error);
        process.exit(1);
    });
}

// Endpoint to fetch available coffees
app.get('/coffees', (req, res) => {
    const availableCoffees = flagValue ? specialCoffees : coffees;
    res.json(availableCoffees);
});

// Endpoint to place an order
app.post('/order', (req, res) => {
    const { coffeeId, quantity } = req.body;

    const coffeeArray = flagValue ? specialCoffees : coffees;
    const coffee = coffeeArray.find(c => c.id === coffeeId);

    if (!coffee) {
        return res.status(400).json({ error: 'Invalid coffee ID' });
    }

    const order = {
        orderId: orders.length + 1,
        coffeeName: coffee.name,
        quantity,
        total: coffee.price * quantity
    };

    orders.push(order);

    res.status(201).json(order);
});

// Endpoint to fetch all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

// Start the server only when this script is run directly, not when imported as a module
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });
}
