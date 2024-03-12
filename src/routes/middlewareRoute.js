const express = require('express');
const monthSummaryMiddleware = require('../middlewares/monthSummaryMiddleware.js');
const loginMiddleware = require('../middlewares/loginMiddleware.js');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

const router = express.Router();

router.get('/summary/:year/:month', authenticationMiddleware , monthSummaryMiddleware, (req, res) => {
  res.json(req.summary);
});

router.post('/login', (req, res) => loginMiddleware(req, res));

module.exports = router;