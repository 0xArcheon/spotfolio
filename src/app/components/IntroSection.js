import React from "react";
import { motion } from "framer-motion";
import BlurText from "./text/BlurText";
import TiltedCard from "./TiltedCard";

function IntroSection() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <main className="flex p-8 pt-2 max-md:flex-col max-sm:p-4">
      <div className="photo rounded-xl flex justify-center items-center">
        {/* <img src="this-is-2.jpg" alt="" className="object-contain rounded-xl" /> */}
        <TiltedCard
          imageSrc="/this-is-2.jpg"
          altText="Archeon"
          captionText="Namaste"
          containerHeight="225px"
          containerWidth="225px"
          imageHeight="225px"
          imageWidth="225px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text text-emerald-500 font-bold"></p>
          }
        />
      </div>
      <div className="introsection flex flex-col gap-4 pl-8 z-10 max-md:pt-8 max-md:pl-0">
        <div className="name z-10 text-4xl font-poppins text-left tracking-wider max-md:text-3xl">
          Amlan Saikia
        </div>
        <motion.div className="introtext rounded-xl text-justify font-normal">
          <BlurText
            text="I am a passionate software developer from Guwahati, India. When I'm not coding, you'll find me immersed in indie rock music or watching films. I find peace and inspiration in the mountains, they're my ultimate therapist."
            delay={50}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-justify"
          />
        </motion.div>
      </div>
    </main>
  );
}

export default IntroSection;
