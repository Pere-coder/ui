import Image from "next/image";
import Navbar from "@/components/Navbar/page"
import CardBox from "@/components/Card/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar/>
      <CardBox/>
    </main>
  );
}
