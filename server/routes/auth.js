const express = require('express');
const router = express.Router();
const { signupValidator, validatorResult}  = require('../middleware/validator');
const { singUpController } = require('../controllers/auth');

router.post('/signup', signupValidator, validatorResult, signupController);




module.exports = router;
