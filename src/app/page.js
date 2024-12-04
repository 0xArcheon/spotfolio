"use client";
import Navbar from "./components/Navbar.js";
import MainCard from "./components/MainCard.js";
import RightCard from "./components/RightCard.js";

export default function Home() {
  return (
    <div className="flex">
      <MainCard />
      <RightCard />
    </div>
  );
}
