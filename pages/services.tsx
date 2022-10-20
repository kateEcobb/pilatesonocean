import React from "react";
import type { NextPage } from "next";
import { Grid, Typography } from "@mui/material";

const what = `Services/Pricing:



All in-studio sessions are tailored to your individual needs and goals.



PRIVATE SESSIONS: 110/session, 5 for 525, or 10 for 1000

SEMI-PRIVATE SESSIONS  : 140/session or 70 per person.

 

For those located outside of San Francisco, virtual sessions on Zoom are available.  All sessions are tailored to your individual needs and space/equipment limitations. Virtual sessions are effective and engaging whether you have all the equipment or nothing at all.`;

const Contact: NextPage = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Services
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
  );
};

export default Contact;
