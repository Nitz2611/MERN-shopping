import express from "express";
import { registerController, loginController, testController, forgotPasswordController } from '../controllers/authController.js'
import { isAdmin, requiresSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()

//routing
//REGISTER || POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

//Forget password || POST
router.post('/forgot-password', forgotPasswordController)

//dummy test routes
router.get('/test', requiresSignIn, isAdmin, testController)

//protected route auth user
router.get('/user-auth', requiresSignIn, (req, res) => {
    res.status(200).send({ ok: true });
})
//protected route auth admin
router.get('/admin-auth', requiresSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})


export default router