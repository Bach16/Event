import { Card } from "..";
import img1 from "../../../../public/pexels-alina-skazka-14822267.jpg";
import img2 from "../../../../public/evelina-friman-hw_sKmjb0ns-unsplash.jpg";
import img3 from "../../../../public/pexels-ekaterina-10152716.jpg";

const CardContainer = () => {
  const servicios = [
    { id: 1, name: "Grados", img: img1 },
    { id: 2, name: "Catering", img: img2 },
    { id: 3, name: "Bodas", img: img3 },
  ];
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] place-items-center gap-8 sm:gap-[1.7rem] max-w-[350px] sm:max-w-[1000px] w-[100%] items-center justify-center">
      {servicios.map((e) => (
        <Card key={e.id} name={e.name} img={e.img} />
      ))}
    </div>
  );
};

export default CardContainer;
