import express from "express";
import { registerController, loginController, testController } from '../controllers/authController.js'
import { isAdmin, requiresSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

//dummy test routes
router.get('/test', requiresSignIn, isAdmin, testController)

export default router