import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center h-screen ">
      <div className="bg-[url('../../public/photos-by-lanty-O38Id_cyV4M-unsplash.jpg')] sm:h-[50%] h-[50%]  w-[100%] bg-no-repeat bg-cover ">
        <div className="h-[100%]  w-[100%]  bg-black/[0.4] backdrop-brightness-75">
          <div className="flex h-[35%] justify-center flex-col items-center ">
            <p className={`font-regular text-center leading-[1rem] sm:leading-[4rem] sm:text-[3rem] text-[2.4rem]  ${lobster.className} text-[#ffffff]`}>
              Nuestra Historia
            </p>
            <div className=" w-[45%] sm:w-[15%] h-[1.1rem] border-solid border-b-[1px] border-[#ffffff]" />
          </div>
        </div>
      </div>
      <div className="h-[80%] sm:h-[64%] w-[77%] sm:w-[60%] absolute top-[14%] sm:top-[25%] bg-[#f8f8f8] z-0 sm:h-[80%] ">
        <div className="flex flex-col sm:flex-row justify-between h-[100%]">
          <div className="bg-[url('../../public/pexels-alina-skazka-14822267.jpg')] h-[30%] sm:h-[100%] sm:w-[50%] w-[100%] bg-no-repeat bg-cover"></div>
          <div className="h-[70%] sm:h-[100%] sm:w-[50%] bg-[#ffffff] flex flex-col px-[1.9rem] sm:px-[4rem] justify-evenly items-center ">
            <h3 className="font-[590] leading-[2.2rem] sm:leading-[3.8rem] sm:text-[3.8rem] text-[2.3rem]  font-platNomor text-[#222222]">
              Conocenos un poco mas
            </h3>
           {/*  <p className="font-bold  sm:leading-[2rem] sm:text-[3rem] text-[1.4rem]  font-bell text-[#222222]">
              2028
            </p> */}
            <p className="font-light   sm:leading-[1.4rem] sm:text-[1.2rem] text-[1rem]  font-bell text-[#222222]">
              Se fundo la empresa, con el fin de organizar eventos que cumplan un nivel de exelencia, a partir de ese momento, hemos podido expandirnos por toda la region y consolidarnos en la industria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;

{
  /* <div className="h-[30rem]"></div>
      <div className="h-[30%] flex flex-col items-center justify-center">
        <div className="sm:h-[5%] h-[30%]" />
        <div className="flex sm:h-[50%] w-[70%] h-[40%] flex-col sm:flex-row sm:justify-around justify-between items-center">
          <h2 className="font-platNomor sm:w-[38%] font-bold sm:text-left text-center sm:text-[5rem] text-[3.2rem] text-[#222222] sm:leading-[4.7rem] leading-[2.8rem]">
            Eventos a tu medida
          </h2>
          <div className="w-[1px] border" />
          <p className="font-bell font-[10] w-[80%] sm:w-[40%] font-light sm:text-left text-center sm:text-[1.7rem] text-[1.3rem] text-[#222222] leading-[1.6rem]">
            Nos dedicamos a entender tus necesidades para crear eventos que
            reflejen tu personalidad y estilo
          </p>
        </div>
      </div> */
}
