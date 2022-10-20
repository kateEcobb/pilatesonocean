import React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" py={5}>
      {"Copyright © "}
      <MuiLink color="inherit" href="https://pilatesonocean.com/">
        Pilates on Ocean
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
