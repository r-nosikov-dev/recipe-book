import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import RecipeListPage from './pages/RecipeListPage'
import RecipeInfoPage from './pages/RecipeInfoPage'

// Create a custom MUI theme with Lora font
const theme = createTheme({
  typography: {
    fontFamily: 'Lora, serif', // Use Lora as the default font
  },
  palette: {
    primary: {
      main: '#1976d2', // Keep MUI's default blue for buttons
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeListPage />} />
          <Route path="/recipe/:id" element={<RecipeInfoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
