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
            Contact
          </Typography>

          <Typography variant="h6" gutterBottom py={2}>
            Let&apos;s get in touch.
          </Typography>
          <Grid container p={0}>
            <Grid xs={1}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ fontStyle: "italic" }}
              >
                Email:
              </Typography>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6" gutterBottom>
                isabel@pilatesonocean.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
