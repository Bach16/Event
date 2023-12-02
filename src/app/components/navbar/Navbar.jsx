import capitalize from "@/assets/capitalize";
import space from "@/assets/space";
import { Marcellus } from "next/font/google";
import React from "react";
const marcellus = Marcellus({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const Navbar = ({ empresa }) => {
  return (
    <nav className="fixed z-50 top-0 left-0 right-0 sm:bg-[#222222] h-[3.7rem] sm:flex sm:justify-center mt-[1rem] sm:mt-0">
      <ul className="text-[#ffffff] flex items-center justify-center sm:justify-between w-[90%]">
        <li>
          <div className="">
            <a href="#section-1">
              <p
                className={`text-[#ffffff] text-[1.2rem] sm:text-[1.45rem] font-extrabold ${marcellus.className}`}
              >
                {empresa?.length ? space(capitalize(empresa)) : "Empresa"}
              </p>
            </a>
          </div>
        </li>
        <li className="sm:flex hidden text-[1rem] w-[20%] justify-around">
          <a href="#section-2">
            <p>Servicios</p>
          </a>
          <a href="#section-3">
            <p>Nosotros</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
