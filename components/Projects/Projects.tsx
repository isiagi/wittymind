import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div className="px-5 py-7 bg-gray-100">
      <div>
        <div className="text-center py-7">
          <h1 className="font-medium text-3xl text-gray-900">Project</h1>
          <p className="text-md text-gray-500 py-4">
            Projects We Have worked On Sofar
          </p>
        </div>

        <div className="py-7 grid grid-cols-fluid gap-3">
          {[1].map((i) => (
            <div key={i} className="rounded ">
              <div className="relative">
                <Image
                  src={
                    "https://portfolio-website-seven-ruddy.vercel.app/assets/port-8d2ecc2e.png"
                  }
                  alt="service"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="py-2 text-xl">Web Development</h2>
                <p className="leading-6">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit primis
                  rutrum, nullam tempor malesuada laoreet tempus blandit pretium
                  etc.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
