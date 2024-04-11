import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

interface ServiceCard {
  title: string;
  description: string;
  img: string;
  to: string;
}

function ServiceCard({ title, description, img, to }: ServiceCard) {
  return (
    <div className=" flex flex-col justify-between rounded border-[1px] group hover:scale-[1.01]">
      <div className="relative overflow-hidden">
        <Image
          src={img}
          alt="service"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="w-full h-[250px] group-hover:scale-110 transition ease-in-out duration-500"
        />
        <div className="absolute bottom-0 p-4 group-hover:bg-[#876120] bg-[#233547]">
          <TbAdjustmentsHorizontal className="text-xl text-white" />
        </div>
      </div>
      <div className="px-3">
        <h2 className="py-2 text-xl text-[#205386] font-medium">{title}</h2>
        <p className="leading-7 text-slate-600">{description}</p>
      </div>
      <div className="px-3">
        <Link href={to}>
          <p className="py-4 text-[#233547] font-semibold hover:text-[#876120]">
            Learn More
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
