const { Router } = require('express');
const ReceitaController = require('../controllers/ReceitaController.js');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

const receitaController = new ReceitaController();

const router = Router();

router.get('/receitas', authenticationMiddleware, (req, res) => receitaController.getElementsController(req, res));
router.post('/receitas', authenticationMiddleware, (req, res) => receitaController.postElementController(req, res));
router.get('/receitas/:id', authenticationMiddleware, (req, res) => receitaController.getIdElementController(req, res));
router.put('/receitas/:id', authenticationMiddleware, (req, res) => receitaController.putIdElementController(req, res));
router.delete('/receitas/:id', authenticationMiddleware, (req, res) => receitaController.deleteIdElementController(req, res));
router.get('/receitas/:ano/:mes', authenticationMiddleware, (req, res) => receitaController.getElementByDateController(req, res));


module.exports = router;