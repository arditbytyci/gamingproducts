const express = require('express');
const router = express.Router();
const { signUpValidator, signInValidator, validatorResult }  = require('../middleware/validator');
const { signUpController, signInController } = require('../controllers/auth');


router.post('/SignUp', signUpValidator, validatorResult, signUpController);
router.post('/SignIn', signInValidator, validatorResult, signInController);





module.exports = router;
