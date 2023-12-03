module.exports = {
    collectCoverage: true,
    coverageReporters: ['text', 'cobertura'],
    coverageThreshold: {
        global: {
            lines: 75,
            statements: 75
        }
    }
};
