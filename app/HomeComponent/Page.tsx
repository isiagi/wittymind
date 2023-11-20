import Projects from "@/components/Projects/Projects";
import Clients from "@/components/clients/Clients";
import Cta from "@/components/cta/Cta";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Why from "@/components/why/Why";
import React from "react";

function Page() {
  return (
    <div>
      <Hero />
      <Why />
      <Services />
      <Projects />
      <Cta />
      <Clients />
    </div>
  );
}

export default Page;
