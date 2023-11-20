import ContactComponent from "@/components/contactComponent/ContactComponent";
import HeaderBanner from "@/components/headerBanner/HeaderBanner";
import React from "react";

function page() {
  return (
    <div>
      <div>
        <HeaderBanner title="Talk To Us" />
        <ContactComponent />
      </div>
    </div>
  );
}

export default page;
