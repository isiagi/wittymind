import Image from "next/image";
import React from "react";

const serviceData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Web development is the process of creating a website that is visually appealing and user-friendly.",
    img: "/assets/web.jpg",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Mobile development is the process of creating a mobile application that is visually appealing and user-friendly.",
    img: "/assets/mobile.jpg",
  },
  {
    id: 3,
    title: "Custom Software",
    description:
      "Custom software is the process of creating a software that is visually appealing and user-friendly.",
    img: "/assets/home.jpg",
  },
  {
    id: 4,
    title: "Cloud Native Apps",
    description:
      "Cloud native apps is the process of creating a cloud native application that is visually appealing and user-friendly.",
    img: "/assets/cloud.jpg",
  },
];

function Services() {
  return (
    <div>
      <div className="px-5">
        <div className="text-center py-10">
          <h2 className="font-medium text-2xl">Services</h2>
          <p className="text-md">View our services</p>
        </div>
        <div className="grid grid-cols-fluid gap-10">
          {serviceData.map(({ id, title, description, img }) => (
            <div key={id} className="rounded border-[1px]">
              <div className="relative">
                <Image
                  src={img}
                  alt="service"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="py-2 text-xl">{title}</h2>
                <p className="leading-6">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
