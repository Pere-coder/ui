import Image from "next/image";
import Navbar from "@/components/Navbar/page"
import CardBox from "@/components/Card/page";
import Random from "@/components/Random/page"
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar/>
      {/* <CardBox/> */}
      <Random/>
    </main>
  );
}
