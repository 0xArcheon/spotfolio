import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Amlan Saikia",
  description: "Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div
          className="max-h-max bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-300 via-emerald-900 to-gray-900
           text-white pattern-dots pattern-white-50 pattern-bg-white pattern-size-16 
           pattern-opacity-10 pb-24"
        >
          <Navbar />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
