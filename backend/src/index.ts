import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import recipeRoutes from './routes/recipeRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Enable CORS for all origins (for development; restrict in production if needed)
app.use(cors())

app.use(express.json())
app.use('/api/recipes', recipeRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
