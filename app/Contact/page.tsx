import type { Metadata } from "next";
import ContactComponent from "@/components/contactComponent/ContactComponent";
import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import React from "react";

export const metadata: Metadata = {
  title: "Contact WittyLoop Tech",
  description:
    "Reach out to us effortlessly using our contact information and we'll be glad to provide the support you need.",
  robots: "all",
};

function page() {
  return (
    <div>
      <div>
        <HeaderBanner title="Talk To Us" bgImg="mobile.jpg" />
        <ContactComponent />
      </div>
    </div>
  );
}

export default page;
