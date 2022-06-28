import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const Main: FC<any> = ({ children }) => (
  <Container maxWidth="lg">
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
    </Box>
  </Container>
)

export default Main
