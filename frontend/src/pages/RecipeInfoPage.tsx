import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  InfoContainer,
  MainContent,
  Sidebar,
  RecipeName,
  SectionTitle,
  SidebarTitle,
  SidebarList,
} from './styles/RecipeInfoPageStyles'
import { Box, Button, Collapse, Stack, Typography, Link } from '@mui/material'

interface Recipe {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  [key: string]: string | null
}

interface CategoryRecipe {
  idMeal: string
  strMeal: string
}

const RecipeInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [categoryRecipes, setCategoryRecipes] = useState<CategoryRecipe[]>([])
  const [showRecipes, setShowRecipes] = useState(false)

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
      setRecipe(response.data)

      const categoryResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}?category=${response.data.strCategory}`,
      )
      setCategoryRecipes(categoryResponse.data)
    }
    fetchRecipe()
  }, [id])

  if (!recipe) return <div>Loading...</div>

  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith('strIngredient') && recipe[key])
    .map((key) => recipe[key] as string)

  const handleBack = () => {
    navigate('/')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        title={recipe.strMeal}
        onFilterChange={() => {}}
        onBack={handleBack}
      />

      <Box sx={{ flexGrow: 0 }}>
        <InfoContainer>
          <MainContent>
            <Box
              component="img"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              sx={{
                float: 'left',
                width: 300,
                borderRadius: 8,
                marginRight: 2,
              }}
            />
            <RecipeName>{recipe.strMeal}</RecipeName>
            <Link
              component="button"
              onClick={() => navigate(`/?country=${recipe.strArea}`)}
            >
              {recipe.strArea}
            </Link>
            <SectionTitle>Instructions</SectionTitle>
            <Typography>{recipe.strInstructions}</Typography>

            <SectionTitle>Ingredients</SectionTitle>
            <Stack spacing={1} direction="row" flexWrap="wrap">
              {ingredients.map((ingredient, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onClick={() => navigate(`/?ingredient=${ingredient}`)}
                >
                  {ingredient}
                </Button>
              ))}
            </Stack>
          </MainContent>

          <Sidebar>
            <SidebarTitle>More {recipe.strCategory} Recipes</SidebarTitle>
            <Button
              variant="contained"
              onClick={() => setShowRecipes((prev) => !prev)}
            >
              {showRecipes ? 'HIDE' : 'SHOW MORE'}
            </Button>
            <Collapse in={showRecipes} timeout="auto" unmountOnExit>
              <SidebarList>
                {categoryRecipes.map((r) => (
                  <Link
                    key={r.idMeal}
                    component="button"
                    onClick={() => navigate(`/recipe/${r.idMeal}`)}
                  >
                    {r.strMeal}
                  </Link>
                ))}
              </SidebarList>
            </Collapse>
          </Sidebar>
        </InfoContainer>
      </Box>

      <Footer />
    </Box>
  )
}

export default RecipeInfoPage
