import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="flex min-h-[10vh] justify-between items-center fixed w-full px-5 border-b-[0.1px] z-10">
      <h1 className="font-bold text-white">WittyMind Tech</h1>

      <div>
        <ul className="flex gap-5 font-medium text-white">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/About"}>
            <li>About</li>
          </Link>
          <Link href={"/Services"}>
            <li>Service</li>
          </Link>
          <Link href={"/Contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
