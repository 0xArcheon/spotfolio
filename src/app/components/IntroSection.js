import React from "react";
import BlurText from "./text/BlurText";

// Spotify's artist "About" card
function IntroSection() {
  return (
    <section>
      <h2 className="section-title mb-4">About</h2>
      <div className="grid overflow-hidden rounded-lg bg-spotify-surface transition-colors hover:bg-spotify-elevated md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <img
          src="/this-is-2.jpg"
          alt="This Is Amlan"
          className="aspect-square w-full object-cover"
        />
        <div className="flex flex-col justify-end gap-4 p-6">
          <p className="text-base font-bold">From Guwahati, India</p>
          <BlurText
            text="I am a passionate software developer from Guwahati, India. When I'm not coding, you'll find me immersed in indie rock music or watching films. I find peace and inspiration in the mountains, they're my ultimate therapist."
            delay={40}
            animateBy="words"
            direction="top"
            className="text-base text-spotify-near-white"
          />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
