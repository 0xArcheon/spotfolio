"use client";
import MainCard from "./components/MainCard.js";
import RightCard from "./components/RightCard.js";

export default function Home() {
  return (
    <div className="flex px-24 max-w-screen-xl mx-auto max-lg:flex-col max-md:px-18 max-sm:px-8">
      <MainCard />
      <RightCard />
    </div>
  );
}
