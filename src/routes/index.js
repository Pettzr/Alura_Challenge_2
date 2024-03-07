const express = require('express');
const receitas = require('./receitasRoute.js');
const despesas = require('./despesasRoute.js');
const resumo = require('./resumoRoute.js')

module.exports = app => {
    app.use(
        express.json(),
        receitas,
        despesas,
        resumo
    );
};