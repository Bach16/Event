import { Anton, Marcellus, Merriweather } from "next/font/google";
import { CardContainer } from "..";
import capitalize from "@/assets/capitalize";
import space from "@/assets/space";

const marcellus = Marcellus({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const SecondSection = ({ empresa }) => {
  return (
    <div
      id="section-2"
      className="h-[87rem] flex justify-center items-center sm:h-[50rem] "
    >
      <div className=" flex flex-col justify-around items-center h-[90%] sm:h-[80%]">
        <div className="h-[5%] w-[100%] sm:h-[1%] flex flex-col justify-center items-center">
          <h3
            className={`font-regular leading-[1rem] ${marcellus.className}  sm:text-[1.2rem] text-[1.2rem]  text-[#272727]`}
          >
            {empresa?.length ? space(capitalize(empresa)) : "Empresa"}
          </h3>
          <h3
            className={`font-[1000] leading-[2.6rem] text-center sm:leading-[3rem] sm:text-[3rem] text-[2.5rem] ${merriweather.className}  text-[#222222]`}
          >
            Eventos a tu Medida
          </h3>
        </div>
        <div className=" bg-transparent w-[23%] sm:w-[15%] border-solid border-[1px] border-b-[#646264]" />
        <div className="flex flex-col items-center w-[100%] gap-3 mx-auto">
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
