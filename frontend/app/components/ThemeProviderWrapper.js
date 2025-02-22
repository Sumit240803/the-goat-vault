"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export default function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState(null); // Ensure no mismatch before hydration

  useEffect(() => {
    const storedMode = "light";
    setMode(storedMode);
  }, []);

  if (!mode) return null; // Prevent hydration mismatch

  const theme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
