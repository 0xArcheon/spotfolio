import React from "react";

function IntroSection() {
  return (
    <main className="introsection h-60 flex gap-8 p-8 z-10">
      <div className="introtext p-8  w-3/4 rounded-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
        cupiditate quia quibusdam voluptatem perspiciatis perferendis est,
        obcaecati illo quisquam deleniti quis minima ipsum corrupti suscipit ab,
        tempore dicta minus.
      </div>
      <div className="photo rounded-xl">
        <img
          src="this-is.jpg"
          alt=""
          className="h-full object-contain rounded-xl"
        />
      </div>
    </main>
  );
}

export default IntroSection;
