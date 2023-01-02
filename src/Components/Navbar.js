import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "./menu.png"
const Navbar = () => {
   let Links = [
    { name: "Business", link: "/business" },
    { name: "Entertainment", link: "/entertainment" },
    { name: "General", link: "/general" },
    { name: "Health", link: "/health" },
    { name: "Science", link: "/science" },
    { name: "Sports", link: "/sports" },
    { name: "Technology", link: "/technology" },
  ];
   let [open, setOpen] = useState(false);
  return (
    <div className="w-full p-0 m-0 h-[55px] fixed top-0 bg-blue-900 hover:drop-shadow-2xl shadow-black  ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-5 top-2 cursor-pointer md:hidden"
        >
          <img
            src={menu}
            alt="M"
            className="h-7"
            name={open ? "close" : "menu"}
          />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 py-2 absolute rounded-lg md:static max-md:bg-blue-600 md:z-auto z-[-1] left-0 max-md:w-full md:pl-0 pl- transition-all duration-500 ease-in-out ${
            open ? "top-12 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="px-5 cursor-pointer transition ease-in-out hover:scale-105 hover:bg-black hover:font-bold max-md:py-1 hover:drop-shadow-2xl shadow-black rounded-md hover:text-black"
            >
              <Link
                to={link.link}
                className="text-white hover:text-xl duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
 