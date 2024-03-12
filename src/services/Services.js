const { Op, Sequelize } = require('sequelize');
const dataSource = require('../models');

class Services {
    constructor(modelName){
        this.modelName = modelName;
    }

    async getAllElementsService(){
        return await dataSource[this.modelName].findAll();
    }

    async getIdElementService(idElement){
        return await dataSource[this.modelName].findByPk(idElement);
    }

    async getQueryDescriptionElementService(queryDescricao) {
        return await dataSource[this.modelName].findAll({
            where: {
                description: {
                    [Op.like]: `%${queryDescription}%`
                }
            }
        });
    }

    async getElementByDateService(year, month) {
        return await dataSource[this.modelName].findAll({
            where: Sequelize.where(
                Sequelize.fn('strftime', '%Y-%m', Sequelize.col('date')),
                `${year}-${month.toString().padStart(2, '0')}`
            )
        });
    }

    async postElementService(elementData){
        return await dataSource[this.modelName].create(elementData);
    }


    async putIdElementService(idElement, elementData){
         await dataSource[this.modelName].update(elementData, {
            where: {
                id: idElement
            }
        });
        const updatedElement = await dataSource[this.modelName].findByPk(idElement)
        return updatedElement;

    }

    async deleteIdElementService(idElement){
        return await dataSource[this.modelName].destroy({
            where: {
                id: idElement
            }
        });
    
    };
};

module.exports = Services;