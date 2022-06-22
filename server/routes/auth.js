const express = require('express');
const router = express.Router();
const { signupValidator, signInValidator, validatorResult}  = require('../middleware/validator');
const { signUpController, signInController } = require('../controllers/auth');

router.post('/signup', signupValidator, validatorResult, signUpController);
router.post('/signin', signInValidator, validatorResult, signInController);




module.exports = router;
