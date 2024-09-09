import Navbar from "./components/Navbar.js";
import MainCard from "./components/MainCard.js";
import RightCard from "./components/RightCard.js";

export default function Home() {
  return (
    <div
      className="font-outfit h-fit bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-300 via-emerald-900 to-gray-900 text-white
   pattern-dots pattern-white-50 pattern-bg-white pattern-size-16 pattern-opacity-10"
    >
      <Navbar />
      <div className="flex">
        <MainCard />
        <RightCard />
      </div>
    </div>
  );
}
