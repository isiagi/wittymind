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
          <h2 className="text-3xl text-[#205487]">WHO WE ARE</h2>
          <h1 className="pt-2 text-[#233547]">
            Highly Tailored IT Design, Management & Support Services.
          </h1>
          <p className="leading-7 text-slate-600 pt-5">
            WittyLoop Tech stands as a collective of forward-thinking minds
            passionately engaged in the relentless pursuit of technological
            innovation. As a team, we blend diverse expertise and unwavering
            enthusiasm to push the boundaries of what&apos;s possible in the
            tech sphere. We&apos;re not just a company; we&apos;re a community
            of tech enthusiasts, dedicated to crafting solutions that transcend
            conventional limits.
          </p>
          <p className="leading-7 text-slate-600 pt-5">
            At our core, we&apos;re driven by a mission to empower businesses
            and individuals with transformative technologies. With a firm
            commitment to excellence, we navigate the ever-evolving landscape of
            innovation, constantly seeking new opportunities to make an impact.
            Our ethos revolves around fostering creativity, embracing
            challenges, and cultivating an environment where ideas flourish into
            groundbreaking solutions that shape the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
