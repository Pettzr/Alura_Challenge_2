const { Router } = require('express');
const ExpenseController = require('../controllers/ExpenseController.js');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware.js');

const expenseController = new ExpenseController();

const router = Router();

router.get('/expenses', authenticationMiddleware, (req, res) => expenseController.getElementsController(req, res));
router.post('/expenses', authenticationMiddleware, (req, res) => expenseController.postElementController(req, res));
router.get('/expenses/:id', authenticationMiddleware, (req, res) => expenseController.getIdElementController(req, res));
router.put('/expenses/:id', authenticationMiddleware, (req, res) => expenseController.putIdElementController(req, res));
router.delete('/expenses/:id', authenticationMiddleware, (req, res) => expenseController.deleteIdElementController(req, res));
router.get('/expenses/:year/:month', authenticationMiddleware, (req, res) => expenseController.getElementByDateController(req, res));

module.exports = router;