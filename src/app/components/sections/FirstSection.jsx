import capitalize from "@/assets/capitalize";
import space from "@/assets/space";
import { Lobster, Lora, Marcellus, Noto_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
const marcellus = Marcellus({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
const lora = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

const FirstSection = ({ empresa }) => {
  return (
    <>
      <div
      id="section-1"
        className={`  bg-[url('../../public/jeremy-wong-weddings-K8KiCHh4WU4.jpg')] bg-no-repeat bg-fixed bg-cover bg-center  `}
      >
        <div
          className={`h-[30rem] sm:h-screen bg-black/[0.4] backdrop-brightness-75 relative flex justify-center items-center`}
        >
          <div className="h-[80%] sm:h-[40%] flex flex-col justify-around items-center">
            <div className="flex flex-col justify-between items-center">
              <p className="font-light leading-[2rem] text-[1.14rem] sm:text-[1.25rem]  text-center font-platNomor text-[#ffffff]">
                Creamos experiencias inolvidables.
              </p>
              <h1
                className={`font-regular leading-[2.8rem] sm:leading-[4rem] sm:text-[5rem] text-[3rem] text-center ${lora.className} text-[#ffffff]`}
              >
                Hacemos realidad tus eventos
              </h1>
            </div>
            <button className="sm:w-[15%] w-[85%] font-semibold h-[2.3rem] rounded-full bg-[#ffffff]">
              <Link
                href={"https://api.whatsapp.com/send?phone=593993272165"}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex w-[100%] h-[100%] justify-center items-center"
              >
                Cotiza tu evento
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
