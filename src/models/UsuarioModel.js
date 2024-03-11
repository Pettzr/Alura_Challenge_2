const {DataTypes} = require('sequelize')
const sequelize = require('../config/dbConfig')
const bcrypt = require('bcrypt')


const User = sequelize.define('users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    User.createDefaultUser = async function () {
        try {
            const hashedPassword = await bcrypt.hash('senha', 10); // Hash da senha
            await User.create({
                username: 'usuario',
                password: hashedPassword,
            });
            console.log('Usuário predefinido criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar usuário predefinido:', error);
        }
    };

module.exports = User;