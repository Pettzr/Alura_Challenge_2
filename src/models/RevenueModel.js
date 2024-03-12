module.exports = (Sequelize, sequelize, DataTypes) => {
    const Revenue = sequelize.define('revenues', {
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
        }
    });
    return Revenue;
};