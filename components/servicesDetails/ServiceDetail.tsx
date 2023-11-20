import Image from "next/image";
import React, { ReactNode } from "react";

interface PageDetails {
  id: any;
}

function ServiceDetail({ id }: PageDetails) {
  return (
    <>
      {((): any => {
        switch (id) {
          case "Web":
            return (
              <ServiceDetailComponent
                title={"Web Development"}
                img={"/assets/web.jpg"}
              />
            );
          case "Mobile":
            return (
              <ServiceDetailComponent
                title={"Mobile Development"}
                img={"/assets/mobile.jpg"}
              />
            );
          case "Cloud":
            return (
              <ServiceDetailComponent
                title={"Cloud Development"}
                img={"/assets/cloud.jpg"}
              />
            );
          case "Custom":
            return (
              <ServiceDetailComponent
                title={"Custom Development"}
                img={"/assets/home.jpg"}
              />
            );

          default:
            return (
              <ServiceDetailComponent
                title={"Web Development"}
                img={"/assets/web.jpg"}
              />
            );
        }
      })()}
    </>
  );
}

interface DetailsComponent {
  title: string;
  img: string;
}

function ServiceDetailComponent({ title, img }: DetailsComponent) {
  return (
    <div className="flex-1">
      <div>
        <Image
          src={img}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />
      </div>
      <h2 className="text-xl font-medium">{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui.
        Minima consectetur rem eligendi distinctio possimus, fugit facilis quo
        quae minus animi, ipsum quas asperiores sunt aspernatur, eveniet
        dignissimos excepturi? Nobis, tenetur esse officia repudiandae, quas eos
        voluptas non cumque autem, debitis mollitia iure corporis nulla cum
        molestiae reiciendis. Accusantium commodi fugiat reiciendis facere nam
        odit voluptate, molestiae quia in!
      </p>
    </div>
  );
}

export default ServiceDetail;
