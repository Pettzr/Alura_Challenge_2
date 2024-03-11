const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite:database.sqlite');

const Despesa = require('./DespesaModel')(Sequelize, sequelize, DataTypes);
const Receita = require('./ReceitaModel')(Sequelize ,sequelize, DataTypes);
const User = require('./UsuarioModel');

Despesa.sync( { force: false } );
Receita.sync( { force: false } );
User.sync( { force: true } );

module.exports = {
    Despesa,
    Receita,
    User
}
