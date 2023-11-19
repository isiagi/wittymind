import React from "react";

function Footer() {
  return (
    <div className="bg-gray-400 py-10">
      <div className="flex justify-between items-center px-5">
        <div>
          <h1>WittyMind</h1>
        </div>
        <div>
          <h1 className="font-medium pb-3">Important Links</h1>
          <div>
            <ul className="leading-7">
              <li>Home</li>
              <li>Abouts Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-medium pb-3">Services</h1>
          <div>
            <ul className="leading-7">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Custom Software</li>
              <li>Cloud Native Apps</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center pt-5">WittyMind Tech @ 2023</p>
    </div>
  );
}

export default Footer;
