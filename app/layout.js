"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} bg-[#F8F9FA]`}>
          <div className="flex ">
            <Sidebar />
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
