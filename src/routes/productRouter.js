const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController.js');

router.get('/:id', ProductController.display);

module.exports = router;