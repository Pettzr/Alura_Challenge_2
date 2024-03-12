 function calculateTotalRevenues(revenues) {
     return revenues.reduce((total, revenue) => total + revenue.value, 0);
 }

 function calculateTotalExpenses(expenses) {
     return expenses.reduce((total, expense) => total + expense.value, 0);
 }

 function calculateTotal(revenues, expenses) {
     return calculateTotalRevenues(revenues) - calculateTotalExpenses(expenses);
 }

 function calculateExpensesByCategories(expenses) {
    return expenses.reduce((total, { categorie, value }) => {
        total[categorie] = total[categorie] || 0;
        total[categorie] += value;
        return total;
    }, {});
}

 module.exports = { calculateTotalRevenues, calculateTotalExpenses, calculateTotal, calculateExpensesByCategories}