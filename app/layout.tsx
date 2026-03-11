import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landry Rugomoka | Azure Support Engineer",
  description:
    "Portfolio of Landry Rugomoka, an Azure Support Engineer with experience in Microsoft 365, Microsoft Entra ID, Windows support, cloud technologies, and security-focused operations.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}