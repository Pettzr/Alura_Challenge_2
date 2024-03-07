const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite:database.sqlite');

const Despesa = require('./DespesaModel')(Sequelize, sequelize, DataTypes);
const Receita = require('./ReceitaModel')(Sequelize ,sequelize, DataTypes);

Despesa.sync( { force: false } );
Receita.sync( { force: false } );

module.exports = {
    Despesa,
    Receita,
}
