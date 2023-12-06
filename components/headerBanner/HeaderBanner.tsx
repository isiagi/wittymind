import React from "react";

interface props {
  title: string;
}

function HeaderBanner({ title }: props) {
  return (
    <div className="bg-[url('/assets/home.jpg')] min-h-[40vh] bg-no-repeat bg-cover bg-blend-overlay bg-[#3b3a3a99] bg-center flex items-center justify-center">
      <h3 className="text-3xl font-medium text-[#876120]">{title}</h3>
    </div>
  );
}

export default HeaderBanner;
