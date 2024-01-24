import React from "react";
import avatar from "../assets/images/avatar.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className=" w-full h-20 shadow-sm z-[100]">
      <div className="flex justify-between items-center  px-2 2xl:px-16">
        <motion.div
          initial={{
            x: -500,
            opacity: 1,
            scale: 1.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <ul className="hidden md:flex items-center">
            <h1 className="text-2xl">sneakers</h1>
            <li className="ml-10 text-sm uppercase ">Collection</li>

            <li className="ml-10 text-sm uppercase ">Men</li>

            <li className="ml-10 text-sm uppercase ">Women</li>

            <li className="ml-10 text-sm uppercase ">About</li>

            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 1,
            scale: 1.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <h1>
            <img src={avatar} alt="avatar " className="h-10 w-10" />
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
