import React, { FC, SyntheticEvent, useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import Copyright from "../Copyright";
import { StyledTabs, StyledTab } from "../LinkTabs";

const Main: FC<any> = ({ children }) => {
  const [linkValue, setLinkValue] = useState(0);

  const handleNavigation = (event: SyntheticEvent, newValue: number) =>
    setLinkValue(newValue);
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom my={6}>
        Pilates on Ocean
      </Typography>
      <Box ml={"-16px"}>
        <StyledTabs value={linkValue} onChange={handleNavigation}>
          <StyledTab label="Home" href="/" />
          <StyledTab label="Services" href="/services" />
          <StyledTab label="Contact" href="/contact" />
        </StyledTabs>
      </Box>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
        <Copyright />
      </Box>
    </Container>
  );
};

export default Main;
