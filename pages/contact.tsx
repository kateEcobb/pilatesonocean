import React from 'react'
import type { NextPage } from 'next'
import { Grid, Typography } from '@mui/material'

const Contact: NextPage = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Grid item xs={2}>
          <Typography variant="h6">Email</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">isabel@pilatesonocean.com</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Phone</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">555-555-5555</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact
