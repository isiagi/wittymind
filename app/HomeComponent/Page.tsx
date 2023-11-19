import Projects from "@/components/Projects/Projects";
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
    </div>
  );
}

export default Page;
