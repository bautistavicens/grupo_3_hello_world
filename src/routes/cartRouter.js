const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController.js');
const userRoutes = require('../middlewares/userRoutes.js');


router.get('/', userRoutes, cartController.display);

router.post('/add/:id', userRoutes, cartController.addProduct);

router.get('/:id', userRoutes, cartController.display);



module.exports = router;