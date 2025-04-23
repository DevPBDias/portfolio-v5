import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevPBDias Portfolio",
  description: "Modern and Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolio.png" sizes="any" />
      </head>
      <body className={open.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
