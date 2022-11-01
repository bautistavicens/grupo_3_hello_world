const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController.js');
const userRoutes = require('../middlewares/userRoutes.js');


router.get('/', userRoutes, cartController.display);

/*+++++++++++++++++++++ Show Cart By ID +++++++++++++++++++++++*/
router.get('/:id', userRoutes, cartController.display);

/*+++++++++++++++++++++ Add Product To Cart +++++++++++++++++++++++*/
router.post('/:id/add', userRoutes, cartController.addProduct);

/*+++++++++++++++++++++ Delete Product From Cart +++++++++++++++++++++++*/
router.delete('/:id/eliminar', userRoutes, cartController.deleteProduct);


module.exports = router;