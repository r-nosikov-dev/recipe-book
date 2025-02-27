import express from 'express'
import { getRecipes, getRecipeInfo } from '../controllers/recipeController'

const router = express.Router()

router.get('/', getRecipes) // GET /api/recipes
router.get('/:id', getRecipeInfo) // GET /api/recipes/:id

export default router
