import Link from 'next/link'
import React from 'react'
import { Abel } from "next/font/google";

const abel = Abel({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const Footer = () => {

  
  return (
    <footer className={` border-[1px] ${abel.className} border-solid border-t-[#c1c1c1] text-[#222222] h-[7rem] font-bell flex justify-center items-center`}>
        <p>© 2023 Empresa | Hecho por 
          <Link href="https://www.linkedin.com/in/ismael-rojas-villacreses-583438252/" target="_blank" rel="noopener noreferrer"> Mateo Rojas</Link>
          <Link href="https://www.linkedin.com/in/dave-rojas-villacreses/" target="_blank" rel="noopener noreferrer"> y David Rojas</Link>
        </p>
    </footer>
  )
}

export default Footer