import Image from "next/image";
import Navbar from "@/components/Navbar/page"
import PostCard from "@/components/PostCard/page";
import Random from "@/components/Random/page"
import Client from "@/components/Client/page"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar/>
      <div className="flex container items-center justify-around mx-auto ">
        <Client/>
        <PostCard/>
      </div>
    
      {/* <Random/> */}
    </main>
  );
}
