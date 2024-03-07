const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: './database.sqlite'
});

sequelize.authenticate()
.then(() => {
    console.log('Conectado com sucesso!')
    return 'Operação realizada com sucesso!';
})
.catch(erro => {
    console.log('Erro ao conectar com o banco de dados:', erro);
});

module.exports = sequelize;
