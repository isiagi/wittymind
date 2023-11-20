import AboutComponent from "@/components/aboutComponent/AboutComponent";
import Clients from "@/components/clients/Clients";
import Cta from "@/components/cta/Cta";
import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import Services from "@/components/services/Services";
import Service from "@/components/why/Why";
import React from "react";

function page() {
  return (
    <div>
      <HeaderBanner title="About Us" />
      <div className="px-5 py-8">
        <AboutComponent />
      </div>
      <Service />
      <Clients />
      <Services />
      <Cta />
    </div>
  );
}

export default page;
