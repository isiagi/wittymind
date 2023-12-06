import React from "react";

function Banner() {
  return (
    <div className="bg-[#233547] mx-5 py-5 px-5 relative -bottom-10 rounded">
      <div className="grid grid-cols-fluid place-items-center">
        <div className="w-full border-r-2">
          <p className="text-xl font-medium text-white">
            Empowering Innovation, Crafting Tailored Solutions That Drive
            Success.
          </p>
        </div>
        <div className="w-full px-3">
          <p className="text-2xl font-medium text-[#3278be]">
            Where Seasoned Expertise Meets a Visionary Approach, Building
            Tomorrow&apos;s Solutions Today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
