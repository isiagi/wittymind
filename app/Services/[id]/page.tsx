"use client";

import Cta from "@/components/cta/Cta";
import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import ServiceDetail from "@/components/servicesDetails/ServiceDetail";
import Service from "@/components/why/Why";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

function Page() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <HeaderBanner title={`${id} Development Details`} />
      <div className="flex flex-wrap px-5 gap-10 py-10">
        <div className=" md:w-[30%] w-[100%] flex flex-col gap-3">
          <Link href={"/Services/Web"}>
            <div
              className={`${
                id === "Web"
                  ? "bg-[#4DD1BE] text-white px-5 flex items-center justify-between py-3"
                  : "bg-[#4D90D2] text-white px-5 flex items-center justify-between py-3"
              }`}
            >
              <h1>Web Development</h1>
              <FaAngleRight />
            </div>
          </Link>
          <Link href={"/Services/Mobile"}>
            <div
              className={`${
                id === "Mobile"
                  ? "bg-[#4DD1BE] text-white px-5 flex items-center justify-between py-3"
                  : "bg-[#4D90D2] text-white px-5 flex items-center justify-between py-3"
              }`}
            >
              <h1>Mobile Development</h1>
              <FaAngleRight />
            </div>
          </Link>
          <Link href={"/Services/Cloud"}>
            <div
              className={`${
                id === "Cloud"
                  ? "bg-[#4DD1BE] text-white px-5 flex items-center justify-between py-3"
                  : "bg-[#4D90D2] text-white px-5 flex items-center justify-between py-3"
              }`}
            >
              <h1>Cloud Development</h1>
              <FaAngleRight />
            </div>
          </Link>
          <Link href={"/Services/Custom"}>
            <div
              className={`${
                id === "Custom"
                  ? "bg-[#4DD1BE] text-white px-5 flex items-center justify-between py-3"
                  : "bg-[#4D90D2] text-white px-5 flex items-center justify-between py-3"
              } `}
            >
              <h1>Custom Development</h1>
              <FaAngleRight />
            </div>
          </Link>
        </div>
        <ServiceDetail id={id} />
      </div>
      <Service />
      <Cta />
    </div>
  );
}

export default Page;
