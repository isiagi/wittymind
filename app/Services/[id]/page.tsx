import type { Metadata } from "next";
import Cta from "@/components/cta/Cta";
import Service from "@/components/why/Why";
import ServiceNav from "@/components/serviceNav/ServiceNav";

export const metadata: Metadata = {
  title: "Service detail WittyLoop Tech",
  description: "Service Detail offered at WittyLoop Tech",
  robots: "all",
};

function Page() {
  return (
    <div>
      <ServiceNav />
      <Service />
      <Cta />
    </div>
  );
}

export default Page;
