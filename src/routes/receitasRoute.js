const { Router } = require('express');
const ReceitaController = require('../controllers/ReceitaController.js');

const receitaController = new ReceitaController();

const router = Router();

router.get('/receitas', (req, res) => receitaController.getElementsController(req, res));
router.post('/receitas', (req, res) => receitaController.postElementController(req, res));
router.get('/receitas/:id', (req, res) => receitaController.getIdElementController(req, res));
router.put('/receitas/:id', (req, res) => receitaController.putIdElementController(req, res));
router.delete('/receitas/:id', (req, res) => receitaController.deleteIdElementController(req, res));
router.get('/receitas/:ano/:mes', (req, res) => receitaController.getElementByDateController(req, res));


module.exports = router;