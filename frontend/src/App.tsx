import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RecipeListPage from './pages/RecipeListPage'
import RecipeInfoPage from './pages/RecipeInfoPage'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeListPage />} />
      <Route path="/recipe/:id" element={<RecipeInfoPage />} />
    </Routes>
  )
}

export default App
