// routes/shop.js
const express = require('express');
const path = require('path');
const Product = require('../models/product');

const router = express.Router();

router.get('/', (req, res, next) => {
  Product.fetchAll((products) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  });
});

module.exports = router;
