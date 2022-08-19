/************* Requieres ************/
const express = require('express');
const router = express.Router();
const path = require('path');

/************* Middlewares Requieres ************/
const adminRoutes = require('../middlewares/adminRoutes.js');

/************* Controller Requiere ************/
const adminController = require('../controllers/adminController.js');


/*+++++++++++++++++++++ Products Routes +++++++++++++++++++++++*/
router.get('/panel', adminController.displayAdminPanel);

module.exports = router;