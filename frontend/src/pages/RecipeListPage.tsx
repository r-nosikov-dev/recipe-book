import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeList from '../components/RecipeList'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Stack, Button, Box, Typography } from '@mui/material'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Icon on map
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState([])
  const [filter, setFilter] = useState({ type: '', value: '' })

  useEffect(() => {
    const fetchRecipes = async () => {
      let url = `${import.meta.env.VITE_API_URL}`
      if (filter.type) url += `?${filter.type}=${filter.value}`
      try {
        const response = await axios.get(url)
        setRecipes(response.data)
      } catch (error) {
        console.error('Error fetching recipes:', error)
      }
    }
    fetchRecipes()
  }, [filter])

  const handleFilterChange = (type: string, value: string) => {
    setFilter({ type, value })
  }

  // Map
  const mapCenter: LatLngExpression = [40.73382872578918, -73.9997619425788]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        title={filter.value ? `Recipes by ${filter.value}` : 'All Recipes'}
        onFilterChange={handleFilterChange}
      />

      <Container
        maxWidth="lg"
        sx={{ flexGrow: 1, paddingTop: { xs: '64px', sm: 0 } }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginBottom: 2,
            justifyContent: 'center',
            marginTop: 2,
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Button
            onClick={() =>
              setFilter({ type: 'ingredient', value: 'chicken_breast' })
            }
          >
            Filter by Chicken
          </Button>
          <Button
            onClick={() => setFilter({ type: 'country', value: 'Canadian' })}
          >
            Filter by Canadian
          </Button>
          <Button
            onClick={() => setFilter({ type: 'category', value: 'Seafood' })}
          >
            Filter by Seafood
          </Button>
          <Button onClick={() => setFilter({ type: '', value: '' })}>
            Reset
          </Button>
        </Stack>

        <RecipeList recipes={recipes} />

        {/* Description before the map */}
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
          This is the location of a company specializing in IT solutions for the
          culinary industry, making your life easier.
        </Typography>

        {/* Map */}
        <Box sx={{ height: '400px', width: '100%', marginTop: 2 }}>
          <MapContainer
            center={mapCenter}
            zoom={18}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={mapCenter} icon={defaultIcon}>
              <Popup>IT Company</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}

export default RecipeListPage
