import ServiceCard from "../serviceCard/ServiceCard";
import { serviceData } from "@/utils/servicesData";

function Services() {
  return (
    <div>
      <div className="px-5">
        <div className="text-center py-10">
          <h2 className="font-medium text-2xl">Services</h2>
          <p className="text-md">View our services</p>
        </div>
        <div className="grid grid-cols-fluid gap-10">
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
    </div>
  );
}

export default Services;
