import { RiSteamFill } from "@remixicon/react";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

export function Socials({ steamid }: { steamid?: string }) {
  if (!steamid) return null;

  return (
    <div className="flex gap-2 justify-end">
      <Button
        type="text"
        style={{
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        target="_blank"
        icon={
          <Image
            src="/leetifyIcon.svg"
            width={20}
            height={20}
            alt="leetify logo"
          />
        }
        href={`https://leetify.com/app/profile/${steamid}`}
      />
      <Button
        type="text"
        style={{
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        target="_blank"
        icon={<RiSteamFill size={20} />}
        href={`https://steamcommunity.com/profiles/${steamid}`}
      />
    </div>
  );
}
