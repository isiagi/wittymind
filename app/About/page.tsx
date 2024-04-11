import type { Metadata } from "next";
import AboutComponent from "@/components/aboutComponent/AboutComponent";
import Clients from "@/components/clients/Clients";
import Cta from "@/components/cta/Cta";
import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import Services from "@/components/services/Services";
import Service from "@/components/why/Why";
import React from "react";

export const metadata: Metadata = {
  title: "About WittyLoop Tech",
  description:
    "Our tech company offers cutting-edge mobile apps, custom software, and website solutions. Let us help you achieve success with our expertise in web app and dashboard design.",
  robots: "all",
};

function page() {
  return (
    <div>
      <HeaderBanner title="About Us" bgImg="cloud.jpg" />
      <div className="px-5 py-8">
        <AboutComponent />
      </div>
      <Services />
      <Service />
      <Clients />
      <Cta />
    </div>
  );
}

export default page;
