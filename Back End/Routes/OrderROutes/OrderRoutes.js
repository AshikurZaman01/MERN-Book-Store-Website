const express = require('express');
const createOrder = require('../../controllers/OrderControllers/createOrder');
const router = express.Router();

router.post('/createOrder', createOrder);

module.exports = router;