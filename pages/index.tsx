import React from 'react'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Image
          src="https://media.self.com/photos/628e481b77d608f44f5f5abe/4:3/w_2240,c_limit/what-is-pilates.jpeg"
          alt="woman doing pilates"
          height="550px"
          width="700px"
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h3" gutterBottom>
          About
        </Typography>
        <Box>
          <Typography variant="body1" gutterBottom>
            This is a placeholder.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3" gutterBottom>
          Services
        </Typography>
        <Box>
          <Typography variant="body1" gutterBottom>
            More placeholder
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Image
          src="https://media.self.com/photos/628e481b77d608f44f5f5abe/4:3/w_2240,c_limit/what-is-pilates.jpeg"
          alt="woman doing pilates"
          height="550px"
          width="700px"
        />
      </Grid>
    </Grid>
  )
}

export default Home
