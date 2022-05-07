const express = require('express');
const router = express.Router();

const RegisterController = require('../controllers/registerController.js');

router.get('/', RegisterController.display);

module.exports = router;