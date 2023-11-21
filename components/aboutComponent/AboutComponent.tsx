import Image from "next/image";
import React from "react";

function AboutComponent() {
  return (
    <div>
      <div className="grid grid-cols-fluid gap-4 py-6">
        <div>
          <Image
            src={"/assets/home.jpg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              borderTopRightRadius: "105px",
              borderBottomLeftRadius: "105px",
            }}
          />
        </div>
        <div>
          <p>WHO WE ARE</p>
          <h1>Highly Tailored IT Design, Management & Support Services.</h1>
          <p>
            Accelerate innovation with world-class tech teams We’ll match you to
            an entire remote team of incredible freelance talent for all your
            software development needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
