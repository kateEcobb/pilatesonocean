import React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

const ColorBlock = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "100%",
  height: "100%",
}));

const Home: NextPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Located in Ingleside, a residential neighborhood of San Francisco,
            Pilates on Ocean is a small boutique studio that is tranquil and
            easily accessible. <br /> <br /> In the studio, sessions utilize
            Balanced Body apparatus, including the Reformer, Trapeze Table, and
            the Combo Chair to achieve various therapeutic, rehabilitative, and
            fitness benefits. Pilates on Ocean offers private and duet sessions
            tailored to a spectrum of fitness goals, ages, and abilities.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={6}>
        <ColorBlock p={4}>
          <Image
            alt="Pilates"
            width="550px"
            height="370px"
            src="https://images.squarespace-cdn.com/content/v1/5bd684607a1fbd17120da21d/1544213722447-OR8P1EGHUD88EUP3YBAS/pilates+side+plank+web+bw.png"
          />
        </ColorBlock>
      </Grid>

      <Grid xs={6}>
        <ColorBlock p={4}>
          <Image
            width="550px"
            alt="Isabel Rosenstock"
            height="370px"
            src="https://images.squarespace-cdn.com/content/v1/5bd684607a1fbd17120da21d/1544213492467-NNVCLRDXHWIRZ7E21VF2/dance+headshot+B_W+edited.png"
          />
        </ColorBlock>
      </Grid>
      <Grid xs={4}>
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
    </Grid>
  );
};

export default Home;
