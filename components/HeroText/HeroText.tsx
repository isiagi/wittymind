"use client";

import { TypeAnimation } from "react-type-animation";

function HeroText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "WittyLoop Tech",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Your Tech Partner",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="md:text-4xl text-3xl font-bold inline-block text-[#205386]"
      repeat={Infinity}
    />
  );
}

export default HeroText;
