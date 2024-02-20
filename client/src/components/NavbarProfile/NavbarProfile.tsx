import { lang } from "@/lang";
import { SteamProfile } from "next-auth-steam";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

export function NavbarProfile({ steam }: { steam: SteamProfile }) {
  return (
    <div className="flex gap-2 text-sm font-medium items-center">
      <div className="flex flex-col items-end text-xs">
        <p className="font-normal">{steam.personaname}</p>
        <button
          className="font-bold hover:underline underline-offset-2"
          onClick={() => signOut()}
        >
          {lang.navbar.sign_out}
        </button>
      </div>
      <Image
        src={steam.avatarfull}
        width={36}
        height={36}
        priority
        className="w-9 h-9 border border-blue-400"
        alt="ett profilbilde"
      />
    </div>
  );
}
