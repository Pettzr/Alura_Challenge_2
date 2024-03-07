const { Op, Sequelize } = require('sequelize');
const dataSource = require('../models');

class Services {
    constructor(nomeDoModel){
        this.nomeDoModel = nomeDoModel;
    }

    async getAllElementsService(){
        return await dataSource[this.nomeDoModel].findAll();
    }

    async getIdElementService(idElement){
        return await dataSource[this.nomeDoModel].findByPk(idElement);
    }

    async getQueryDescricaoElementService(queryDescricao) {
        return await dataSource[this.nomeDoModel].findAll({
            where: {
                descricao: {
                    [Op.like]: `%${queryDescricao}%`
                }
            }
        });
    }

    async getElementByDateService(ano, mes) {
        return await dataSource[this.nomeDoModel].findAll({
            where: Sequelize.where(
                Sequelize.fn('strftime', '%Y-%m', Sequelize.col('data')),
                `${ano}-${mes.toString().padStart(2, '0')}`
            )
        });
    }

    async postElementService(elementData){
        return await dataSource[this.nomeDoModel].create(elementData);
    }


    async putIdElementService(idElement, elementData){
         await dataSource[this.nomeDoModel].update(elementData, {
            where: {
                id: idElement
            }
        });
        const updatedElement = await dataSource[this.nomeDoModel].findByPk(idElement)
        return updatedElement;

    }

    async deleteIdElementService(idElement){
        return await dataSource[this.nomeDoModel].destroy({
            where: {
                id: idElement
            }
        });
    
    };
};

module.exports = Services;