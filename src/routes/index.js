const express = require('express');
const revenues = require('./revenuesRoute.js');
const expenses = require('./expensesRoute.js');
const middleware = require('./middlewareRoute.js')

module.exports = app => {
    app.use(
        express.json(),
        revenues,
        expenses,
        middleware
    );
};