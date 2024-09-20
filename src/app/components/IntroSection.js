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
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?t=st=1725607501~exp=1725611101~hmac=6fbd2cb00e0831eca36ecd60aa1f2ec49734e387e6c608540cdbb65d71ed0573&w=740"
          alt=""
          className="h-full object-contain rounded-xl"
        />
      </div>
    </main>
  );
}

export default IntroSection;
