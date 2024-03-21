import express from 'express'
import { isAdmin, requiresSignIn } from '../middlewares/authMiddleware.js'
import {
    categoryController,
    createCategoryController,
    deleteCategoryController,
    singleCategoryController,
    updateCategoryController
} from '../controllers/categoryController.js'

const router = express.Router()

//routes
//create category
router.post('/create-category', requiresSignIn, isAdmin, createCategoryController);

//update category
router.put('/update-category/:id', requiresSignIn, isAdmin, updateCategoryController)

//get all category
router.get('/get-category', categoryController)

//get single category
router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete('/delete-category/:id', requiresSignIn, isAdmin, deleteCategoryController)

export default router