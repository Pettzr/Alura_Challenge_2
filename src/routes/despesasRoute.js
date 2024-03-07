const { Router } = require('express');
const DespesaController = require('../controllers/DespesaController.js');

const despesaController = new DespesaController();

const router = Router();

router.get('/despesas', (req, res) => despesaController.getElementsController(req, res));
router.post('/despesas', (req, res) => despesaController.postElementController(req, res));
router.get('/despesas/:id', (req, res) => despesaController.getIdElementController(req, res));
router.put('/despesas/:id', (req, res) => despesaController.putIdElementController(req, res));
router.delete('/despesas/:id', (req, res) => despesaController.deleteIdElementController(req, res));
router.get('/despesas/:ano/:mes', (req, res) => despesaController.getElementByDateController(req, res));

module.exports = router;