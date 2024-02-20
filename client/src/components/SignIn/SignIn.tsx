import { lang } from "@/lang";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

export function SignIn() {
  return (
    <button className="h-[35px] w-[180px]" onClick={() => signIn("steam")}>
      <Image
        alt={lang.navbar.sign_in}
        src="https://community.cloudflare.steamstatic.com/public/images/signinthroughsteam/sits_01.png"
        width={180}
        height={35}
      />
    </button>
  );
}
