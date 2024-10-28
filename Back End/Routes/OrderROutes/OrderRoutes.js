const express = require('express');
const createOrder = require('../../controllers/OrderControllers/createOrder');
const getOrders = require('../../controllers/OrderControllers/getOrders');
const router = express.Router();

router.post('/createOrder', createOrder);

router.get('/getOrders/:email', getOrders);

module.exports = router;