"use client"
import { useParams, useRouter } from "next/navigation";
import { FirstSection, SecondSection, ThirdSection } from "./components";

export default function Home() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <FirstSection empresa={params?.slug} />
      <SecondSection empresa={params?.slug}/>
      <ThirdSection empresa={params?.slug}/>
    </>
  );
}
