import React, { FC, SyntheticEvent, useState } from "react";
import { Typography, Container, Box, styled } from "@mui/material";
import Copyright from "../Copyright";
import { StyledTabs, StyledTab } from "../LinkTabs";
import Image from "next/image";

const Main: FC<any> = ({ children }) => {
  const [linkValue, setLinkValue] = useState(0);

  const handleNavigation = (event: SyntheticEvent, newValue: number) =>
    setLinkValue(newValue);
  return (
    <>
      <Header>
        <Typography variant="h4" my={3}>
          Pilates on Ocean
        </Typography>
        <Box>
          <StyledTabs value={linkValue} onChange={handleNavigation}>
            <StyledTab label="Home" href="/" />
            <StyledTab label="Services" href="/services" />
            <StyledTab label="Contact" href="/contact" />
          </StyledTabs>
        </Box>
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

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "0px 20px",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "75vh",
  position: "relative",
}));

export default Main;
