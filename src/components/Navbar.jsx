import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navbar } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-navColor w-full flex justify-between item-center pt-[20px] pb-[20px] navbar">
      <div>
        <img
          src={logo}
          alt="logo"
          className={`h-[40px] ml-[80px] ml-10 sm:ml-20  `}
        />
      </div>
      <div>
        <ul
          className={`list-none flex flex-1 sm:flex hidden justify-end item-center flex-row text-white gap-10 pt-[9px] font-poppins font-[500]`}
        >
          {navbar.map((nav, index) => (
            <li
              key={nav.id}
              className={`${index === nav.length - 1 ? "mr-0" : "mr-12"} navlist`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Hamburger Menu */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`w-[28px] h-[28px] object-contain mr-10`}
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[164px] rounded-xl sidebar text-white`}
      >
        <ul
          className={`list-none flex flex-col justify-end items-center flex-1`}
        >
          {navbar.map((nav, index) => (
            <li
              key={nav.id}
              className={`${index === nav.length - 1 ? "mb-0" : "mb-3"} list`}
            >
              <a href={`${nav.link}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
