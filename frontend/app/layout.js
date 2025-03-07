import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import React from "react";
import { NextAppProvider } from "@toolpad/core/nextjs";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import Navbar from "./components/General/Navbar";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const NAVIGATION = [];
const BRANDING = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProviderWrapper> {/* Move theme logic here */}
            <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
             
              {children}
            </NextAppProvider>
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
