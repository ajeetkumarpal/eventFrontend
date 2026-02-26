import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";

export default function Footer() {
  return (
    <div className=" text-gray-300 py-8 bg-black flex ">
      <div className="flex flex-row items-center gap-1.5 justify-start pl-28">
        <span className="font-semibold mr-4">Follow On:</span>
        <FaFacebook />
        <FaYoutube />
        <FaTwitter />
        <FaGoogle />
        <SiGmail />
      </div>
      <div className="text-center text text-yellow-400 ml-56  font-bold tracking-[2px]">
        <p>
          &copy; {new Date().getFullYear()} Indian Events. All rights reserved.
        </p>
      </div>
    </div>
  );
}
