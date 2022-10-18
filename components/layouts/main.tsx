import React, { FC, SyntheticEvent, useState } from "react";
import {
  Typography,
  Container,
  Box,
  styled,
  useTheme,
  colors,
} from "@mui/material";
import Copyright from "../Copyright";
import { StyledTabs, StyledTab } from "../LinkTabs";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Nav = ({ sx }: any) => {
  const [linkValue, setLinkValue] = useState(0);

  const handleNavigation = (event: SyntheticEvent, newValue: number) =>
    setLinkValue(newValue);
  return (
    <>
      <Typography variant="h4" my={3}>
        Pilates on Ocean
      </Typography>
      <Box>
        <StyledTabs value={linkValue} onChange={handleNavigation} sx={sx}>
          <StyledTab label="Home" href="/" />
          <StyledTab label="Services" href="/services" />
          <StyledTab label="Contact" href="/contact" />
        </StyledTabs>
      </Box>
    </>
  );
};

const Main: FC<any> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const theme = useTheme();

  const color = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["#fff", theme.palette.primary.main]
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["#ffffff00", theme.palette.secondary.main]
  );

  return (
    <>
      <Header style={{ color, backgroundColor }}>
        <Nav sx={{ color, backgroundColor }} />
      </Header>

      <ImageContainer>
        <Image
          alt="pilates"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="https://media.self.com/photos/628e481b77d608f44f5f5abe/4:3/w_960,c_limit/what-is-pilates.jpeg"
        />
      </ImageContainer>
      <Container>
        {children}
        <Copyright />
      </Container>
    </>
  );
};

const Header = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "0px 20px",
  position: "fixed",
  zIndex: 1,
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "75vh",
  position: "relative",
}));

export default Main;
