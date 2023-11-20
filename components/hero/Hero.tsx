"use client";

import HeroText from "../HeroText/HeroText";
import { MdMiscellaneousServices } from "react-icons/md";
import { TextLoop } from "easy-react-text-loop";
import Banner from "../banner/Banner";

function Hero() {
  return (
    <div className="min-h-[100vh] bg-[url('/assets/home.jpg')] bg-no-repeat bg-cover bg-blend-overlay bg-[#00000099] bg-center">
      <div>
        <div className="px-5 flex items-center min-h-[100vh]">
          <div>
            <h1 className=" text-white">
              <HeroText />
            </h1>
            <div className="md:text-2xl text-lg font-medium text-gray-200 max-w-md py-4">
              We are a team of passionate, creative people{" "}
              <span className="md:inline-block hidden">who are</span> passionate
              about{" "}
              <TextLoop>
                <div>Technology.</div>
                <div>Mobile Development.</div>
                <div>Web Development.</div>
                <div>Data Analysis.</div>
              </TextLoop>
            </div>
            <button className="bg-blue-600 p-2 text-white rounded flex items-center gap-1">
              View Services <MdMiscellaneousServices />
            </button>
          </div>
        </div>

        <Banner />
      </div>
    </div>
  );
}

export default Hero;
