module.exports = {
    collectCoverage: true,
    coverageReporters: ['text', 'cobertura'],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 40,
            lines: 50,
            statements: 70
        }
    }
};
