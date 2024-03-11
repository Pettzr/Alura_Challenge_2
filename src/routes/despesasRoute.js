const { Router } = require('express');
const DespesaController = require('../controllers/DespesaController.js');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

const despesaController = new DespesaController();

const router = Router();

router.get('/despesas', authenticationMiddleware, (req, res) => despesaController.getElementsController(req, res));
router.post('/despesas', authenticationMiddleware, (req, res) => despesaController.postElementController(req, res));
router.get('/despesas/:id', authenticationMiddleware, (req, res) => despesaController.getIdElementController(req, res));
router.put('/despesas/:id', authenticationMiddleware, (req, res) => despesaController.putIdElementController(req, res));
router.delete('/despesas/:id', authenticationMiddleware, (req, res) => despesaController.deleteIdElementController(req, res));
router.get('/despesas/:ano/:mes', authenticationMiddleware, (req, res) => despesaController.getElementByDateController(req, res));

module.exports = router;