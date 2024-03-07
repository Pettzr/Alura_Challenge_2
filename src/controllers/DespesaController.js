const Controller = require('./IndexController');
const DespesaServices = require('../services/DespesaServices.js');


const despesaServices = new DespesaServices();

class DespesaController extends Controller {
    constructor(){
        super(despesaServices);
    }
}

module.exports = DespesaController;