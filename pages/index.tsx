import React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        <Box>
          <Typography variant="body1" gutterBottom>
            Located in Ingleside, a residential neighborhood of San Francisco,
            Pilates on Ocean is a small boutique studio that is tranquil and
            easily accessible.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Typography variant="h4" gutterBottom>
          Isabel Rosenstock
        </Typography>
        <Box>
          <Typography variant="body1" gutterBottom>
            Isabel Rosenstock is a Certified Pilates Instructor and professional
            dancer dedicated to Pilates and studying the moving body. She began
            teaching Pilates in 2015 after personally experiencing its vast
            benefits. She is passionate about sharing this knowledge and helping
            her clients cultivate a sense of ease, freedom, and joy in their
            bodies.
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
  );
};

export default Home;
