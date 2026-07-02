// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

// components & providers
import { Providers } from "./providers"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "iqBaL. | Portfolio",
  description: "Welcome to my full-stack web developer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning 
    >
      <body className="min-h-full flex flex-col bg-base-100 text-base-content">
        <Providers>
          <main className="flex-1">
            {children}
          </main>
        </Providers>
         <Analytics/>
      </body>
    </html>
  );
}