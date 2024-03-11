const express = require('express');
const receitas = require('./receitasRoute.js');
const despesas = require('./despesasRoute.js');
const middleware = require('./middlewareRoute.js')

module.exports = app => {
    app.use(
        express.json(),
        receitas,
        despesas,
        middleware
    );
};