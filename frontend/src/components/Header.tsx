import React, { useState } from 'react'
import {
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIcon from '@mui/icons-material/ArrowBack' // Import ArrowBackIcon for the back button

interface HeaderProps {
  title: string
  onFilterChange: (type: string, value: string) => void
  onBack?: () => void // Optional prop for back navigation
}

const Header: React.FC<HeaderProps> = ({ title, onFilterChange, onBack }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const filterButtons = [
    { label: 'Filter by Chicken', type: 'ingredient', value: 'chicken_breast' },
    { label: 'Filter by Canadian', type: 'country', value: 'Canadian' },
    { label: 'Filter by Seafood', type: 'category', value: 'Seafood' },
    { label: 'Reset', type: '', value: '' },
  ]

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensure space between back button, title, and menu
        position: { xs: 'fixed', sm: 'static' },
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Back button, visible only on desktop/tablet (sm and up) if onBack is provided */}
      {onBack && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="back"
          onClick={onBack}
          sx={{
            display: { xs: 'none', sm: 'block' }, // Hide on mobile (xs), show on tablets/desktops (sm and up)
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}

      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ margin: 0, flexGrow: 1, fontFamily: 'Lora, serif' }} // Ensure Lora for title
      >
        {title}
      </Typography>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
          },
        }}
      >
        <List>
          {filterButtons.map((button, index) => (
            <ListItem
              key={index}
              component="button"
              onClick={() => {
                onFilterChange(button.type, button.value)
                setDrawerOpen(false)
              }}
              sx={{ padding: 1 }}
            >
              <ListItemText
                primary={button.label}
                sx={{ fontFamily: 'Lora, serif' }}
              />{' '}
              {/* Ensure Lora for drawer items */}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default Header
