const Services = require('./Services.js')

class ExpenseServices extends Services {
    constructor() {
        super('Expense');
    }
}

module.exports = ExpenseServices;