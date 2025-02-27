import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  RecipeContainer,
  RecipeCard,
  RecipeImage,
  RecipeTitle,
} from './styles/RecipeListStyles'

interface Recipe {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

interface RecipeListProps {
  recipes: Recipe[]
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const navigate = useNavigate()

  return (
    <RecipeContainer>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
        >
          <RecipeImage src={recipe.strMealThumb} alt={recipe.strMeal} />
          <RecipeTitle>{recipe.strMeal}</RecipeTitle>
        </RecipeCard>
      ))}
    </RecipeContainer>
  )
}

export default RecipeList
