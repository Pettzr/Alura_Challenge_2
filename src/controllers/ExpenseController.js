const Controller = require('./IndexController.js');
const ExpenseServices = require('../services/ExpenseServices.js');


const expenseServices = new ExpenseServices();

class ExpenseController extends Controller {
    constructor(){
        super(expenseServices);
    }
}

module.exports = ExpenseController;