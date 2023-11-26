import React from "react";
import { FaRegHandshake } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { AiOutlineTrophy } from "react-icons/ai";

function Service() {
  return (
    <div className="py-[5rem] bg-gray-100 flex items-center justify-center">
      <div className="flex px-5 justify-center flex-wrap w-full">
        <div className="md:max-w-[30%]">
          <h1 className="md:text-4xl text-xl text-[#4DD1BE] font-medium max-w-[300px]">
            WHY WORK WITH US !
          </h1>
          <p className="text-slate-600 leading-7 pt-3">
            Discover how our commitment to innovation, expertise, and
            future-focused solutions sets us apart in transforming your tech
            aspirations into reality.
          </p>
        </div>
        <div className="md:max-w-[70%]">
          <div className="flex gap-2 text-center flex-wrap justify-end">
            <div className="md:max-w-[30%] flex flex-col justify-center items-center border-[1px] p-2 border-slate-400">
              <FaRegHandshake className="text-3xl text-[#5F4DD1]" />
              <h2 className="py-2 text-xl text-slate-900">
                Innovation at our Core
              </h2>
              <p className="text-slate-600 leading-7">
                We don’t just adapt to changes; we drive them. Our team thrives
                on pushing the boundaries of technology, constantly seeking new
                solutions to tomorrow’s challenges.
              </p>
            </div>
            <div className="md:max-w-[30%] flex flex-col justify-center items-center border-[1px] p-2 border-slate-400">
              <AiOutlineTrophy className="text-3xl text-[#5F4DD1]" />
              <h2 className="py-2 text-xl text-slate-900">
                Collaborative Partnership
              </h2>
              <p className="text-slate-600 leading-7">
                We believe in working together. Collaboration fuels innovation.
                We work side by side with you, fostering an environment where
                ideas flourish and solutions exceed expectations.
              </p>
            </div>
            <div className="md:max-w-[30%] flex flex-col justify-center items-center border-[1px] p-2 border-slate-400">
              <TbAdjustmentsHorizontal className="text-3xl text-[#5F4DD1]" />
              <h2 className="py-2 text-xl text-slate-900">
                Client-Centric Approach
              </h2>
              <p className="text-slate-600 leading-7">
                Your success is our priority. We don’t just deliver solutions;
                we build relationships. Understanding your unique needs allows
                us to tailor innovative tech solutions that drive your business
                forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
