const categoriaArgs = require('../utils/categoriaErroMsg')

module.exports = (Sequelize ,sequelize, DataTypes) => {

    const categorias = ['Alimentação', 'Saúde', 'Moradia', 'Transporte', 'Educação', 'Lazer', 'Imprevistos', 'Outras']

    const Despesa = sequelize.define('despesas', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        valor: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        data: {
            type: DataTypes.DATEONLY,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        categoria: {
            type: DataTypes.ENUM,
            values: categorias,
            defaultValue: 'Outras',
            allowNull: false,
            validate: {
                isIn: {
                    args: [categorias],
                    msg: categoriaArgs(categorias)
                }
            }
        }
    });
        return Despesa;
};