import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[url('/assets/back.jpg')] bg-center bg-cover py-10">
      <div className="flex flex-wrap justify-between items-center px-5 gap-5">
        <div className="max-w-[450px]">
          <h1 className="font-bold text-white text-lg pb-3">WittyLoop Tech</h1>
          <p className="text-white leading-[35px]">
            Welcome to WittyLoop Tech, where expertise meets innovation. Our
            mission is to pioneer the future of technology with tailored
            solutions. Join us as we redefine the possibilities of the digital
            world.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-white text-lg pb-3">Important Links</h1>
          <div>
            <ul className="leading-[35px] text-white">
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href={"/About"}>
                <li>Abouts Us</li>
              </Link>
              <Link href={"/Services"}>
                <li>Services</li>
              </Link>
              <Link href={"/Contact"}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-white text-lg pb-3">Services</h1>
          <div>
            <ul className="leading-[35px] text-white">
              <Link href={"/Services/Web"}>
                <li>Web Development</li>
              </Link>
              <Link href={"/Services/Mobile"}>
                <li>Mobile Development</li>
              </Link>
              <Link href={"/Services/Custom"}>
                <li>Custom Software</li>
              </Link>
              <Link href={"/Services/Cloud"}>
                <li>Cloud Native Apps</li>
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
