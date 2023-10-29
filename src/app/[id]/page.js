import { FirstSection, Footer, SecondSection, ThirdSection } from "../components";

export default function Home({ params }) {
    const { id } = params;
  return (
    <>
      <FirstSection empresa={id} />
      <SecondSection empresa={id}/>
      <ThirdSection empresa={id}/>
      <Footer empresa={id}/>
    </>
  );
}
