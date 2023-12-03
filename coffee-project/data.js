// data.js

const coffees = [
    { id: 1, name: 'Latte', price: 5 },
    { id: 2, name: 'Espresso', price: 3 },
    { id: 3, name: 'Cappuccino', price: 4 }
];

const specialCoffees = [
    { id: 1, name: 'Wild Timber Wolf Pack Latte', price: 2 },
    { id: 2, name: 'Howling Wolf Pack Espresso', price: 2 },
    { id: 3, name: 'Wild Timber Wolf Pack Latte', price: 2 }
];

let orders = []; // This will store our coffee orders

module.exports = { coffees, specialCoffees, orders };
