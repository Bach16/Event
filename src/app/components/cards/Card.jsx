
const Card = ({name,img}) => {
  return (
    <div
      className={` bg-center bg-no-repeat bg-cover h-[22rem] sm:h-[30rem] w-[15rem] sm:w-[15rem] `}
      style={{ backgroundImage: `url(${img.src})`}}
    >
      <div className="h-[100%] w-[100%] font-[10] font-bell text-white flex justify-center items-center  bg-black/[0.4] backdrop-brightness-75">
        <h4 className=" text-[3.1rem] ">{name}</h4>
      </div>
    </div>
  );
};

export default Card;
