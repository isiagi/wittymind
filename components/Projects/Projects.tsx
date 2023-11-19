import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div>
      <div>
        <div className="text-center py-7">
          <h1>Project</h1>
          <p>Projects We Have worked On Sofar</p>
        </div>

        <div className="py-7">
          <div className="md:p-3 p-2 rounded bg-slate-500">
            <div className="relative">
              <Image
                src={"/assets/home.jpg"}
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
