import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const FirstSection = ({empresa}) => {
  return (
    <div
      className={`  bg-[url('../../public/photos-by-lanty-O38Id_cyV4M-unsplash.jpg')] bg-no-repeat bg-fixed bg-cover `}
    >
      <div
        className={`h-[30rem] sm:h-screen bg-black/[0.4] backdrop-brightness-75`}
      >
        <nav className="h-[10%] sm:flex sm:justify-center">
          <ul className="flex justify-center items-center sm:w-[90%] sm:p-[2rem] px-[1rem]">
            <li className="text-[#ffffff]">{empresa?.length ? empresa: "Empresa"}</li>
            
          </ul>
        </nav>
        <div className="flex h-[7%] sm:h-[25%]" />
        <div className="h-[80%] sm:h-[40%] flex flex-col justify-around items-center">
          <div className="flex flex-col justify-between items-center">
            <p className="font-light leading-[2rem] text-[1.14rem] sm:text-[1.25rem]  text-center font-platNomor text-[#ffffff]">
              Creamos experiencias inolvidables.
            </p>
            <h1 className={`font-regular leading-[3rem] sm:leading-[4rem] sm:text-[6rem] text-[3.8rem] text-center ${lobster.className} text-[#ffffff]`}>
              Hacemos realidad tus eventos
            </h1>
          </div>
          <button className="sm:w-[15%] w-[85%] border-[0.5px] border-solid border-[#222222] font-semibold h-[2.3rem] rounded-full bg-[#ffffff]">
            Cotiza tu evento
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
