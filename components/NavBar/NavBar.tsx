import React from "react";

function NavBar() {
  return (
    <div className="flex min-h-[10vh] justify-between items-center bg-blue-600 px-5">
      <h1>WittyMind Tech</h1>

      <div>
        <ul className="flex gap-5 font-medium text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
