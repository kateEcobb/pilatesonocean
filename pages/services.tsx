import React from "react";
import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Contact: NextPage = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Typography variant="h4" pt={5} pb={3}>
            Services + Pricing
          </Typography>

          <Typography variant="h6" gutterBottom py={2}>
            All in-studio sessions are tailored to your individual needs and
            goals.
          </Typography>
          <Grid container px={0}>
            <Grid xs={3}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ fontStyle: "italic" }}
              >
                Private sessions
              </Typography>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6" gutterBottom>
                $110 per session, five for $525, or ten for $1,000.
              </Typography>
            </Grid>
          </Grid>
          <Grid container px={0}>
            <Grid xs={3}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ fontStyle: "italic" }}
              >
                Semi-private sessions
              </Typography>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6" gutterBottom>
                $140 per session, or $70 per person.
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom py={2}>
            For those located outside of San Francisco, virtual sessions on Zoom
            are available. All sessions are tailored to your individual needs
            and space/equipment limitations. Virtual sessions are effective and
            engaging whether you have all the equipment or nothing at all.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
