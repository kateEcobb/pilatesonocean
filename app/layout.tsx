import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../components/layouts/main";
import theme from "../lib/styles/theme";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilates on Ocean",
  description:
    "Pilates on Ocean is a small boutique studio that is tranquil and easily accessible.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>{children}</Layout>
      </ThemeProvider>
    </html>
  );
}
