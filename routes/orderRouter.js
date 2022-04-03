const express = require('express');
const { createOrder, getAllBids } = require('../controllers/orderController');
const router = express.Router();
const orderModel = require('../models/orderModel');

router.route('/')
.post(createOrder)

router.route('/:orderId/bids')
.get(getAllBids)

module.exports = router;