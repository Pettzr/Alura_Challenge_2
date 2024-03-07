const express = require('express');
const resumoMesMiddleware = require('../middlewares/resumoMesMiddleware.js');
const router = express.Router();

router.get('/resumo/:ano/:mes', resumoMesMiddleware, (req, res) => {
  res.json(req.resumo);
});

module.exports = router;