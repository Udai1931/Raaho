const express = require('express');
const { createBid } = require('../controllers/bidController');
const router = express.Router();

router.route('/:orderId/bids')
.post(createBid);

module.exports = router;