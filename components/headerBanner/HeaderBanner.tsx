import React from "react";

interface props {
  title: string;
  bgImg: string;
}

function HeaderBanner({ title, bgImg }: props) {
  return (
    <div
      style={{ backgroundImage: `url(/assets/${bgImg})` }}
      className={` min-h-[40vh] bg-no-repeat bg-cover bg-blend-overlay bg-black bg-opacity-60 bg-center flex items-center justify-center`}
    >
      <h3 className="text-3xl font-medium text-[#fff]">{title}</h3>
    </div>
  );
}

export default HeaderBanner;
