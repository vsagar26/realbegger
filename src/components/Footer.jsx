import React from "react";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="pb-8">
      <div className="w-full flex justify-around items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
          Copyright Ⓒ 2023 Real Wagger. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[30px] h-[30px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-8" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
