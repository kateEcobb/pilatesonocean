import React from 'react'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Layout from '../components/layouts/main'

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        MUI v5 + Next.js with TypeScript example
      </Typography>
    </Layout>
  )
}

export default Home
