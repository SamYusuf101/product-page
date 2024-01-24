import React from "react";
import avatar from "../assets/images/avatar.png";

const Header = () => {
  return (
    <div className=" w-full h-20 shadow-sm z-[100]">
      <div className="flex justify-between items-center  px-2 2xl:px-16">
        <ul className="hidden md:flex items-center">
          <h1 className="text-2xl">sneakers</h1>
          <li className="ml-10 text-sm uppercase ">Collection</li>

          <li className="ml-10 text-sm uppercase ">Men</li>

          <li className="ml-10 text-sm uppercase ">Women</li>

          <li className="ml-10 text-sm uppercase ">About</li>

          <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
        </ul>
        <h1>
          <img src={avatar} alt="avatar " className="h-10 w-10" />
        </h1>
      </div>
    </div>
  );
};

export default Header;
