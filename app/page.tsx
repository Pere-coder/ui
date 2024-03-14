import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <div className="flex items-center gap-2 mt-10">
        <h1 className="text-white hover:cursor-pointer">My Avatar</h1>
        <Avatar className="hover:cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </main>
  );
}
