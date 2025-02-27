import styled from 'styled-components'

export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const RecipeCard = styled.div`
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

export const RecipeImage = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const RecipeTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
  text-align: center;
`
