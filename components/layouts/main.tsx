import React, { FC } from 'react'
import { Typography, Container, Box } from '@mui/material'
import Copyright from '../Copyright'

const Main: FC<any> = ({ children }) => (
  <Container maxWidth="lg">
    <Typography variant="h2" gutterBottom my={4}>
      Pilates on Ocean
    </Typography>
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
      <Copyright />
    </Box>
  </Container>
)

export default Main
