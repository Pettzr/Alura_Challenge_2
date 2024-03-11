const express = require('express');
const resumoMesMiddleware = require('../middlewares/resumoMesMiddleware.js');
const loginMiddleware = require('../middlewares/loginMiddleware.js');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

const router = express.Router();

router.get('/resumo/:ano/:mes', authenticationMiddleware , resumoMesMiddleware, (req, res) => {
  res.json(req.resumo);
});

router.post('/login', (req, res) => loginMiddleware(req, res));

module.exports = router;