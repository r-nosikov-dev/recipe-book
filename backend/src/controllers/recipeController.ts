import axios from 'axios'
import { Request, Response } from 'express'

const BASE_URL =
  process.env.RECIPE_API_BASE_URL || 'https://www.themealdb.com/api/json/v1/1'

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const { ingredient, country, category } = req.query
    let url = `${BASE_URL}/search.php?s=`

    if (ingredient) url = `${BASE_URL}/filter.php?i=${ingredient}`
    else if (country) url = `${BASE_URL}/filter.php?a=${country}`
    else if (category) url = `${BASE_URL}/filter.php?c=${category}`

    const response = await axios.get(url)
    res.json(response.data.meals || [])
  } catch (error) {
    console.error('Error fetching recipes:', error) // Log the error for debugging
    res.status(500).json({ message: 'Error fetching recipes' })
  }
}

export const getRecipeInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const url = `${BASE_URL}/lookup.php?i=${id}`
    const response = await axios.get(url)
    res.json(response.data.meals[0] || {})
  } catch (error) {
    console.error('Error fetching recipe info:', error) // Log the error for debugging
    res.status(500).json({ message: 'Error fetching recipe info' })
  }
}
