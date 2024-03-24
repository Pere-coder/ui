"use client";

import * as React from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react";
import { Session } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  const [session, setSession] = useState<Session|null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession()
    .then(session => setSession(session.data.session ?? null))
    .catch(error => { console.log("ERROR GETTING SESSIONS: ", error)})
  }, [])

  return (
    <div className="justify-between flex items-center mt-10 w-full px-10">
      <div className="text-4xl font-extrabold tracking-tight lg:text-5xl text-purple-900">Random Logo</div>
    <NavigationMenu className="flex justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Drop down links</NavigationMenuTrigger>
          <NavigationMenuContent >
            <NavigationMenuLink><h1  className="w-[100px] px-2 py-2">First link</h1></NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <div className="flex items-center gap-2">
        {session ? (
             <h1 className="hover:cursor-pointer">{session.user.email}</h1>
        ):  <h1 className="hover:cursor-pointer">My Avatar</h1>}
       
        <Avatar className="hover:cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {session ? (
            <Button variant="outline" onClick={async (e) => {
              e.preventDefault()
              setLoading(true);
              const { error} = await supabase.auth.signOut()
              setLoading(false);
              if (!error) setSession(null)
            }}
            disabled={loading}
            >{loading ? 'loading': 'Logout' }</Button>
        ): (
          <Link href="/SupabaseLogin">
            <Button variant="outline">Login</Button>
          </Link>
        )}
        
      </div>
    </NavigationMenu>
    </div>
  );
}
