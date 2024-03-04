import { lang } from "@/lang";
import { GradientButton } from "@lobehub/ui";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function handleClick() {
  signIn("steam");
}

export function SignIn() {
  // Should we show our cool glow button or the official steam login button?
  const useOfficialButton =
    Number(process.env.NEXT_PUBLIC_USE_OFFICIAL_BUTTON) || 1;
  if (!!useOfficialButton)
    return (
      <GradientButton size="small" onClick={handleClick} glow={false}>
        {lang.user.sign_in}
      </GradientButton>
    );
  return (
    <button className="h-[35px] w-[180px]" onClick={handleClick}>
      <Image
        alt={lang.user.sign_in}
        src="https://community.cloudflare.steamstatic.com/public/images/signinthroughsteam/sits_01.png"
        width={180}
        height={35}
      />
    </button>
  );
}
