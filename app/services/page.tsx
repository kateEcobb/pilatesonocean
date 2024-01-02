"use client";
import React from "react";
import type { NextPage } from "next";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Pricing = ({ service, note = "" }) => (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    {service}
    <Typography variant="caption">{note}</Typography>
  </Box>
);

const pricingOptions = [
  { service: "Single session: $120", note: "" },
  { service: "Package of 5: $575", note: "(expires after 60 days)" },
  { service: "Package of 10: $1,100", note: "(expires after 120 days)" },
];

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
              <Typography variant="h6">
                {pricingOptions.map((option) => (
                  <Pricing key={option.service} {...option} />
                ))}
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
                $160 per session, or $80 per person.
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" gutterBottom py={2}>
            For those located outside of San Francisco, virtual sessions on Zoom
            are available. All sessions are tailored to your individual needs
            and space/equipment limitations. Virtual sessions are effective and
            engaging whether you have all the equipment or nothing at all.
          </Typography>
          <Typography variant="h6" gutterBottom py={2} fontWeight="bold">
            All appointments canceled or rescheduled with less than 24-hour
            notice will incur the full appointment fee.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
