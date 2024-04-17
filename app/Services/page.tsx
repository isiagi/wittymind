import type { Metadata } from "next";
import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import { serviceData } from "@/utils/servicesData";
import React from "react";

export const metadata: Metadata = {
  title: "Services WittyLoop Tech",
  description: "View services offered at WittyLoop Tech",
  robots: "all",
};

function page() {
  return (
    <div>
      <HeaderBanner title="Services" bgImg="web.jpg" />
      <div className="grid grid-cols-fluid gap-10 px-5 py-8">
        {serviceData.map(({ id, title, description, img, to }) => (
          <ServiceCard
            key={id}
            title={title}
            description={description}
            img={img}
            to={to}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
