import { FirstSection, SecondSection, ThirdSection } from "../../components";

export default function Home({ params }) {
  const { id } = params;
  console.log();

  return (
    <>
      <FirstSection empresa={id} />
      <SecondSection empresa={id}/>
      <ThirdSection empresa={id}/>
    </>
  );
}
