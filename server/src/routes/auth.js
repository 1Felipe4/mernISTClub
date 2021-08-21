import express from 'express';
// import controller
import { signup, accountActivation, signin } from '../controllers/auth';
//import validators
import { userSignupValidator, userSigninValidator } from '../validators/auth';
import runValidation from '../validators';


const router = express.Router();

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation, signin);

export default router;