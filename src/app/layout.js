import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import { Analytics } from "@vercel/analytics/react";

// Free stand-in for SpotifyMixUI (Circular); the full fallback stack lives in tailwind.config.js
const mix = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-mix",
});

export const metadata = {
  title: "Amlan Saikia",
  description: "Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mix.variable} font-sans`}>
        <div className="flex min-h-screen flex-col lg:h-screen">
          <Navbar />
          {/* Pages render two panels: <main> and <aside> */}
          <div className="grid flex-1 grid-cols-[minmax(0,1fr)] gap-2 px-2 pb-[88px] lg:min-h-0 lg:grid-cols-[280px_minmax(0,1fr)_300px] lg:grid-rows-[minmax(0,1fr)] lg:pb-0 xl:grid-cols-[320px_minmax(0,1fr)_340px]">
            <Sidebar />
            {children}
          </div>
          <PlayerBar />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
