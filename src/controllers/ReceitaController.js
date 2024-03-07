const Controller = require('./IndexController');
const ReceitaServices = require('../services/ReceitaServices.js');


const receitaServices = new ReceitaServices();

class ReceitaController extends Controller {
    constructor(){
        super(receitaServices);
    }
}

module.exports = ReceitaController;