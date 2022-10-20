import React, { FC, SyntheticEvent, useState } from "react";
import { Typography, Container, Box, styled, useTheme } from "@mui/material";
import Copyright from "../Copyright";
import { StyledTabs, StyledTab } from "../LinkTabs";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Nav = ({ spanColor }: any) => {
  const [linkValue, setLinkValue] = useState(0);

  const handleNavigation = (event: SyntheticEvent, newValue: number) =>
    setLinkValue(newValue);
  const { scrollYProgress } = useScroll();
  const theme = useTheme();

  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.8],
    [theme.typography.h3.fontSize, theme.typography.h4.fontSize]
  );
  return (
    <>
      <AnimatedTitle my={3} variant="h3" style={{ fontSize }}>
        Pilates on Ocean
      </AnimatedTitle>
      <Box>
        <StyledTabs
          value={linkValue}
          onChange={handleNavigation}
          spanColor={spanColor}
        >
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

  // const color = useTransform(
  //   scrollYProgress,
  //   [0, 0.8],
  //   ["#000", theme.palette.primary.main]
  // );
  const color = theme.palette.primary.main;
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["#ffffff00", theme.palette.secondary.main]
  );

  return (
    <>
      <Header style={{ color, backgroundColor }}>
        <Nav spanColor={color} />
      </Header>

      <ImageContainer>
        <Image
          alt="pilates"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="https://images.squarespace-cdn.com/content/v1/58fd589986e6c0f3d2883ba4/1504806723496-WEZDNGV5A2H9M1JP285Y/6P1B0175+2.jpg"
        />
      </ImageContainer>
      <>{children}</>
      <Copyright />
    </>
  );
};

const AnimatedTitle = motion(Typography);

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
