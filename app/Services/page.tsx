import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import { serviceData } from "@/utils/servicesData";
import React from "react";

function page() {
  return (
    <div>
      <HeaderBanner title="Services" />
      <div className="grid grid-cols-fluid gap-10 px-5 py-8">
        {serviceData.map(({ id, title, description, img }) => (
          <ServiceCard
            key={id}
            title={title}
            description={description}
            img={img}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
