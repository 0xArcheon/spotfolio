"use client";
import MainCard from "./components/MainCard.js";
import RightCard from "./components/RightCard.js";

export default function Home() {
  return (
    <div className="flex max-w-screen-2xl px-24">
      <MainCard />
      <RightCard />
    </div>
  );
}
