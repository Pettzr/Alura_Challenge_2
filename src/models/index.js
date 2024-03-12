const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite:database.sqlite');

const Expense = require('./ExpenseModel')(Sequelize, sequelize, DataTypes);
const Revenue = require('./RevenueModel')(Sequelize ,sequelize, DataTypes);
const User = require('./UserModel');

Expense.sync( { force: false } );
Revenue.sync( { force: false } );
User.sync( { force: true } );

module.exports = {
    Expense,
    Revenue,
    User
}
