import ThemeProvider from "../lib/styles/ThemeProvider";

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
    <html lang="en" style={{ position: "relative" }}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
