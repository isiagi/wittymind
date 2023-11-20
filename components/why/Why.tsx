import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiOutlineTrophy } from "react-icons/ai";

function Service() {
  return (
    <div className="py-[5rem] bg-[#eee] flex items-center justify-center">
      <div className="flex px-5 justify-center flex-wrap w-full">
        <div className="md:max-w-[30%]">
          <h1 className="text-xl">Why Work With Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
        </div>
        <div className="md:max-w-[70%]">
          <div className="flex gap-2 text-center flex-wrap justify-end">
            <div className="md:max-w-[30%] flex flex-col justify-center items-center border-[1px] p-2 border-slate-400">
              <FaRegHandshake className="text-3xl" />
              <h2 className="py-2">Dedicated Team</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis
                rutrum, nullam tempor malesuada laoreet tempus blandit pretium
                etc.
              </p>
            </div>
            <div className="md:max-w-[30%] flex flex-col justify-center items-center border-[1px] p-2 border-slate-400">
              <TbAdjustmentsHorizontal className="text-3xl" />
              <h2 className="py-2">Flexibility</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis
                rutrum, nullam tempor malesuada laoreet tempus blandit pretium
                etc.
              </p>
            </div>
            <div className="md:max-w-[30%] flex flex-col justify-center items-center border-[1px] p-2 border-slate-400">
              <AiOutlineTrophy className="text-3xl" />
              <h2 className="py-2">Results</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit primis
                rutrum, nullam tempor malesuada laoreet tempus blandit pretium
                etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
