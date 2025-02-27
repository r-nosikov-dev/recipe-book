import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        padding: 2,
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Name Inc.{' '}
      </Typography>
      <Typography variant="body2">Address</Typography>
    </Box>
  )
}

export default Footer
