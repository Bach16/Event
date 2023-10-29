import Link from "next/link";
import React from "react";
import { Abel } from "next/font/google";
import capitalize from "@/assets/capitalize";

const abel = Abel({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const Footer = ({empresa}) => {
  return (
    <footer
      className={` border-[1px] ${abel.className} border-solid border-t-[#c1c1c1] text-[#222222] h-[7rem] font-bell flex flex-col sm:flex-row justify-center items-center`}
    >
      <p  >© 2023 {empresa?.length ? capitalize(empresa) : "Empresa"} | Hecho por </p>
      <div>
        <Link
          href={"https://api.whatsapp.com/send?phone=593993272165"}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:ml-[0.2rem]"
        >
          {" "}
          Mateo Rojas
        </Link>
        <Link
          href={"https://api.whatsapp.com/send?phone=593993272165"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          y David Rojas
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
