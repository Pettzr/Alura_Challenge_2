const RevenueService = require('../services/RevenueServices.js');
const ExpenseService = require('../services/ExpenseServices.js');
const { calculateTotalExpenses, calculateTotalRevenues, calculateTotal, calculateExpensesByCategories } = require('../utils/monthSummaryUtils');

async function monthSummaryMiddleware(req, res, next) {
  const { year, month } = req.params;

  const revenueService = new RevenueService();
  const expenseService = new ExpenseService();

  try {
    const [revenues, expenses] = await Promise.all([
      revenueService.getElementByDateService(year, month),
      expenseService.getElementByDateService(year, month),
    ]);

    req.summary = {
      totalRevenues: calculateTotalRevenues(revenues),
      totalExpenses: calculateTotalExpenses(expenses),
      total: calculateTotal(revenues, expenses),
      expensePorCategoria: calculateExpensesByCategories(expenses)
    };

    next();
    
  } catch (error) {
    next(error);
  }
}

module.exports = monthSummaryMiddleware;