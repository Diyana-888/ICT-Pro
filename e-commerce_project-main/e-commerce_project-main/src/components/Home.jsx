import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Box sx={{width: '1000px', margin: '0 auto', display: "flex", flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant='h1' sx={{ fontFamily: 'fantasy', width: '100%', textAlign:'center', mt: '10%'}}>
          Welcome to E-COM Store.
      </Typography>&nbsp;
      <Link to="/shop">
        <Button color="success" variant='contained' sx={{width: "150px"}}>Products</Button>
      </Link>
        </Box>
    </>
  )
}

export default Home