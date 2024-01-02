import React from "react";
import type { NextPage } from "next";
import { Container, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

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
            <Grid xs={3}>
              <Typography variant="h6" style={{ fontStyle: "italic" }}>
                Email:
              </Typography>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6">
                <Link href="mailto:isabel@pilatesonocean.com">
                  isabel@pilatesonocean.com
                </Link>
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
                Address:
              </Typography>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h6" gutterBottom>
                <Link
                  target="_blank"
                  href="http://maps.google.com/?q=1967 ocean ave, san francisco, ca 94127"
                >
                  1967 Ocean Ave
                  <br />
                  San Francisco, CA 94127
                </Link>
              </Typography>
            </Grid>
          </Grid>

          <Map
            initialViewState={{
              zoom: 12,
              latitude: 37.7259398,
              longitude: -122.4635402,
            }}
            style={{ height: 400 }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker latitude={37.7259398} longitude={-122.4635402} />
          </Map>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
