"use client";
import MainCard from "./components/MainCard.js";
import RightCard from "./components/RightCard.js";

export default function Home() {
  return (
    <div className="flex px-24 max-w-screen-xl mx-auto">
      <MainCard />
      <RightCard />
    </div>
  );
}
