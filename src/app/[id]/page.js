import {
  FirstSection,
  Footer,
  Navbar,
  SecondSection,
  ThirdSection,
} from "../components";

export default function Home({ params }) {
  const { id } = params;
  return (
    <>
      <Navbar empresa={id}/>
      <FirstSection empresa={id} />
      <SecondSection empresa={id} />
      <ThirdSection empresa={id} />
      <Footer empresa={id} />
    </>
  );
}
