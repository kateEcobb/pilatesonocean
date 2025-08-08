"use client";
import React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Box, styled, Container, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import alignment from "../public/images/alignment.jpg";
import dancing from "../public/images/isabelDancing.jpg";

const ColorBlock = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "100%",
  height: "100%",
  minHeight: "360px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

const Home: NextPage = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" pt={5} pb={3}>
            Welcome
          </Typography>
          <Box>
            <Typography variant="h6" gutterBottom>
              Located in Ingleside, a residential neighborhood of San Francisco,
              Pilates on Ocean is a small boutique studio that is tranquil and
              easily accessible. <br /> <br /> In the studio, sessions utilize
              Balanced Body apparatus, including the Reformer, Trapeze Table,
              and the Combo Chair to achieve various therapeutic,
              rehabilitative, and fitness benefits. Pilates on Ocean offers
              private and duet sessions tailored to a spectrum of fitness goals,
              ages, and abilities.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom>
            What is Pilates?
          </Typography>
          <Box>
            <Typography variant="h6" gutterBottom>
              Pilates is a form of exercise and body conditioning developed in
              the early 20th century by Joseph Pilates. Pilates focuses on
              strengthening specific muscle groups with exercises that are
              designed to strengthen the core, create efficiency in movement and
              build awareness of our body as a whole system. The six principles
              of Pilates — concentration, control, center, flow, precision and
              breathing — make for a balanced workout that is accessible for all
              bodies, regardless of injuries or limitations. Using a combination
              of apparatus and mat work, each session is custom tailored to the
              individual needs of the client(s).
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h4" gutterBottom>
            Why do Pilates?
          </Typography>
          <Box>
            <Typography variant="h6" gutterBottom>
              Because of our daily habits and often sedentary lifestyles, our
              muscles get tight, imbalanced and overused. Pilates works to
              counteract these ingrained movement patterns to improve overall
              posture and to bring our bodies back to a more neutral, efficient
              state of alignment. <br />
              The many benefits of Pilates include:
              <ul>
                <li>Injury prevention/rehabilitation</li>
                <li>Greater body awareness, balance and proprioception</li>
                <li>
                  Reduced tension in the body and an ease and efficiency in
                  everyday movement
                </li>
                <li>Overall improved posture/alignment</li>
              </ul>
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ColorBlock>
            <Image
              src={alignment}
              alt="alignment"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </ColorBlock>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <ColorBlock>
            <Image
              alt="Isabel Rosenstock"
              src={dancing}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </ColorBlock>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h4" gutterBottom>
            Isabel Rosenstock
          </Typography>
          <Box>
            <Typography variant="h6" gutterBottom>
              Isabel Rosenstock is a Certified Pilates Instructor and
              professional dancer dedicated to Pilates and studying the moving
              body. She began teaching Pilates in 2015 after personally
              experiencing its vast benefits. She is passionate about sharing
              this knowledge and helping her clients cultivate a sense of ease,
              freedom, and joy in their bodies.
              <br /> <br />
              Isabel’s highly sensitive approach to teaching allows her to work
              deeply with people to initiate change in their bodies. Her work
              emphasizes INJURY PREVENTION, INJURY REHABILITATION, & ENHANCED
              PHYSICAL / MENTAL WELLNESS.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h4" gutterBottom>
            Degrees and Certifications
          </Typography>
          <Box>
            <ul>
              <li>
                <Link href="https://www.basipilates.com/education/foundation-program-dance-specialization/">
                  Body Arts and Science (BASI™) Pilates Foundation Program with
                  Dance Specialization
                </Link>{" "}
                & BASI Pilates™ Comprehensive Apparatus Program with Dance
                Specialization
              </li>

              <ul>
                <li>
                  Both taught by mentor{" "}
                  <Link href="http://www.karenclippinger.com/index.htm">
                    Karen Clippinger
                  </Link>
                </li>
              </ul>
              <li>
                <Link href="https://www.basipilates.com/education/low-back-pain-pilates-flexion-based-programs/">
                  Low Back Pain & Pilates Workshop
                </Link>{" "}
                with Karen Clippinger
              </li>
              <li>
                California State University, Long Beach (2008-2012): B.F.A. in
                Dance
              </li>
            </ul>
            <Typography variant="h5">Additional training and work</Typography>
            <ul>
              <li>
                Janet Stone Yoga 200 hour Yoga Teacher Training Program 2021
              </li>
              <li>
                Core Pilates and Physical Therapy, apprentice under Julie
                Schottland-Cox, physical therapist/Pilates teacher
              </li>
              <li>
                <Link href="http://www.ribschiropractic.com/services---techniques/pilates.html">
                  Revitalize Integrated Body Systems
                </Link>
                , under Dr. Angelique Waite, D.C. + Blair Bodie, Pilates
                instructor
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
