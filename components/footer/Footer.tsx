import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[url('/assets/back.jpg')] bg-center bg-cover py-10">
      <div className="flex flex-wrap justify-between items-center px-5 gap-5">
        <div className="max-w-[450px]">
          <Image
            src={"/assets/logo.png"}
            alt="logos"
            width={150}
            height={150}
          />
          <p className="text-white leading-[35px]">
            Welcome to WittyLoop Tech, where expertise meets innovation. Our
            mission is to pioneer the future of technology with tailored
            solutions. Join us as we redefine the possibilities of the digital
            world.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-[#3278be] text-lg pb-3">
            Important Links
          </h1>
          <div>
            <ul className="leading-[35px] text-white font-semibold">
              <Link href={"/"}>
                <li className="hover:text-[#876120]">Home</li>
              </Link>
              <Link href={"/About"}>
                <li className="hover:text-[#876120]">Abouts Us</li>
              </Link>
              <Link href={"/Services"}>
                <li className="hover:text-[#876120]">Services</li>
              </Link>
              <Link href={"/Contact"}>
                <li className="hover:text-[#876120]">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[#3278be] text-lg pb-3">Services</h1>
          <div>
            <ul className="leading-[35px] text-white font-semibold">
              <Link href={"/Services/Web"}>
                <li className="hover:text-[#876120]">Web Development</li>
              </Link>
              <Link href={"/Services/Mobile"}>
                <li className="hover:text-[#876120]">Mobile Development</li>
              </Link>
              <Link href={"/Services/Custom"}>
                <li className="hover:text-[#876120]">Custom Software</li>
              </Link>
              <Link href={"/Services/Cloud"}>
                <li className="hover:text-[#876120]">Cloud Native Apps</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center mt-12 pt-4 border-t-[1px] font-semibold text-white">
        WittyLoop Tech @ 2023
      </p>
    </div>
  );
}

export default Footer;
