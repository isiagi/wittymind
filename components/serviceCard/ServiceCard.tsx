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
    <div className=" flex flex-col justify-between rounded border-[1px]">
      <div className="relative">
        <Image
          src={img}
          alt="service"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
        <div className="absolute bottom-0 p-4 bg-gray-300">
          <TbAdjustmentsHorizontal className="text-xl" />
        </div>
      </div>
      <div className="px-3">
        <h2 className="py-2 text-xl">{title}</h2>
        <p className="leading-6">{description}</p>
      </div>
      <div className="px-3">
        <Link href={to}>
          <p className="py-2">Learn More</p>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
