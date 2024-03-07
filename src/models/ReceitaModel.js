module.exports = (Sequelize, sequelize, DataTypes) => {
    const Receita = sequelize.define('receitas', {
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
        }
    });
    return Receita;
};