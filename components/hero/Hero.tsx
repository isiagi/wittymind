"use client";

import HeroText from "../HeroText/HeroText";
import { MdMiscellaneousServices } from "react-icons/md";
import { TextLoop } from "easy-react-text-loop";

function Hero() {
  return (
    <div className="min-h-[90vh] bg-[url('https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=400')] bg-no-repeat bg-cover">
      <div className="px-5 flex items-center  min-h-[90vh]">
        <div>
          <h1 className=" text-white">
            <HeroText />
          </h1>
          <div className="text-2xl font-medium text-gray-200 max-w-xl py-4">
            We are a team of passionate, creative people who are passionate
            about{" "}
            <TextLoop>
              <div>Technology</div>
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
    </div>
  );
}

export default Hero;
