const categorieArgs = require('../utils/categorieErrorMsgUtils')

module.exports = (Sequelize ,sequelize, DataTypes) => {

    const categories = ['Alimentação', 'Saúde', 'Moradia', 'Transporte', 'Educação', 'Lazer', 'Imprevistos', 'Outras']

    const Expense = sequelize.define('expenses', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        value: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        categorie: {
            type: DataTypes.ENUM,
            values: categories,
            defaultValue: 'Outras',
            allowNull: false,
            validate: {
                isIn: {
                    args: [categories],
                    msg: categorieArgs(categories)
                }
            }
        }
    });
        return Expense;
};