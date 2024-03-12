const Controller = require('./IndexController.js');
const RevenueServices = require('../services/RevenueServices.js');


const revenueServices = new RevenueServices();

class RevenueController extends Controller {
    constructor(){
        super(revenueServices);
    }
}

module.exports = RevenueController;