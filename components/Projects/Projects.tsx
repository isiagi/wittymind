import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/uriel.png";
import img2 from "@/public/assets/top.png";
import Link from "next/link";

const project = [
  {
    id: 1,
    title: "Hitex Consortium Limited",
    image:
      "https://portfolio-website-seven-ruddy.vercel.app/assets/port-8d2ecc2e.png",
    link: "https://www.hitexconsortium.com/",
  },
  {
    id: 2,
    title: "Top Movers Uganda",
    image: img2,
    link: "https://www.topmoversandpackersuganda.com/",
  },
  {
    id: 3,
    title: "Uriel Dental Clinic",
    image: img1,
    link: "https://www.urieldentalclinic.com/",
  },
];

function Projects() {
  return (
    <div className="px-5 py-7 bg-gray-100">
      <div>
        <div className="text-center py-7">
          <h1 className="font-medium text-3xl text-[#876120]">Projects</h1>
          <p className="text-md text-[#233547] py-4">
            Some of projects We Have worked On Sofar
          </p>
        </div>

        <div className="py-7 grid grid-cols-fluid gap-3">
          {project.map(({ id, title, image, link }) => (
            <Link target="_blank" href={link} key={id}>
              <div className="rounded ">
                <div className="relative">
                  <Image
                    src={image}
                    alt="service"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <h2 className="py-2 text-xl text-[#205487]">{title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
