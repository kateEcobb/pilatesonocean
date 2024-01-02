"use client";
import React, { FC, SyntheticEvent, useState, useRef } from "react";
import {
  Typography,
  Box,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { usePathname } from "next/navigation";
import Copyright from "../Copyright";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import header from "../../public/images/header.jpg";
import dynamic from "next/dynamic";
import { StyledTabs, StyledTab } from "../LinkTabs";

// const StyledTabs = dynamic(() =>
//   import("../LinkTabs").then((mod) => mod.StyledTabs),
// );
// const StyledTab = dynamic(() =>
//   import("../LinkTabs").then((mod) => mod.StyledTab),
// );

const ROUTE_VALUES = {
  "/": 0,
  "/services": 1,
  "/contact": 2,
};

const Nav = ({ spanColor, scrollYProgress }: any) => {
  const pathname = usePathname();
  const [linkValue, setLinkValue] = useState(ROUTE_VALUES[pathname as string]);

  const handleNavigation = (event: SyntheticEvent, newValue: number) =>
    setLinkValue(newValue);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.8],
    [theme.typography.h3.fontSize, theme.typography.h4.fontSize],
  );
  return (
    <>
      {/* @ts-ignore */}
      <AnimatedTitle my={3} variant="h3" style={{ fontSize }}>
        Pilates on Ocean
      </AnimatedTitle>
      <Box my={2}>
        <StyledTabs
          value={linkValue}
          onChange={handleNavigation}
          spanColor={spanColor}
          orientation={isDesktop ? "horizontal" : "vertical"}
          variant="fullWidth"
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const initialColor = isDesktop ? theme.palette.primary.main : theme.colors[4];
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["#ffffff00", theme.palette.secondary.main],
  );

  const color = useTransform(
    scrollYProgress,
    [0, 0.8],
    [initialColor, theme.palette.primary.main],
  );

  return (
    <>
      <Header style={{ color, backgroundColor }}>
        <Nav spanColor={color} scrollYProgress={scrollYProgress} />
      </Header>

      <ImageContainer ref={ref}>
        <Image
          alt="pilates"
          src={header}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
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
  overflow: "hidden",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "75vh",
  position: "relative",
}));

export default Main;
