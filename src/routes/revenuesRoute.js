const { Router } = require('express');
const RevenueController = require('../controllers/RevenueController.js');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware.js');

const revenueController = new RevenueController();

const router = Router();

router.get('/revenues', authenticationMiddleware, (req, res) => revenueController.getElementsController(req, res));
router.post('/revenues', authenticationMiddleware, (req, res) => revenueController.postElementController(req, res));
router.get('/revenues/:id', authenticationMiddleware, (req, res) => revenueController.getIdElementController(req, res));
router.put('/revenues/:id', authenticationMiddleware, (req, res) => revenueController.putIdElementController(req, res));
router.delete('/revenues/:id', authenticationMiddleware, (req, res) => revenueController.deleteIdElementController(req, res));
router.get('/revenues/:year/:month', authenticationMiddleware, (req, res) => revenueController.getElementByDateController(req, res));


module.exports = router;