"use client";

import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import ServiceDetail from "@/components/servicesDetails/ServiceDetail";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

function Page() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <HeaderBanner title="Service Details" />
      <div className="flex flex-wrap px-5 gap-10 py-10">
        <div className=" md:w-[30%] w-[100%] flex flex-col gap-3">
          <Link href={"/Services/Web"}>
            <div
              className={`${
                id === "Web" ? "bg-[#AFCBD6]" : "bg-gray-300"
              } bg-gray-300 px-5 flex items-center justify-between py-3`}
            >
              <h1>Web Development</h1>
              <FaAngleRight />
            </div>
          </Link>
          <Link href={"/Services/Mobile"}>
            <div
              className={`${
                id === "Mobile" ? "bg-[#AFCBD6]" : "bg-gray-300"
              } bg-gray-300 px-5 flex items-center justify-between py-3`}
            >
              <h1>Mobile Development</h1>
              <FaAngleRight />
            </div>
          </Link>
          <Link href={"/Services/Cloud"}>
            <div
              className={`${
                id === "Cloud" ? "bg-[#AFCBD6]" : "bg-gray-300"
              } bg-gray-300 px-5 flex items-center justify-between py-3`}
            >
              <h1>Cloud Development</h1>
              <FaAngleRight />
            </div>
          </Link>
          <Link href={"/Services/Custom"}>
            <div
              className={`${
                id === "Custom" ? "bg-[#AFCBD6]" : "bg-gray-300"
              } bg-gray-300 px-5 flex items-center justify-between py-3`}
            >
              <h1>Custom Development</h1>
              <FaAngleRight />
            </div>
          </Link>
        </div>
        <ServiceDetail id={id} />
      </div>
    </div>
  );
}

export default Page;
