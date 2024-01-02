"use client";
import * as React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Layout from "../../components/layouts/main";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>{children}</Layout>
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
