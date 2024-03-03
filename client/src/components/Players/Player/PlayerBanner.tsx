import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import { PlayerStats } from "@/types/stats";
import { colors } from "@/utils/colors";
import { replaceThousands } from "@/utils/number";
import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export function PlayerBanner({
  name,
  bannerURL,
  avatarURL,
  stats,
}: {
  name?: string;
  bannerURL?: string;
  avatarURL?: string;
  stats: PlayerStats | undefined | null;
}) {
  return (
    <div
      className="w-full rounded-2xl"
      style={{
        backgroundSize: "110%",
        backgroundPosition: "center",
        backgroundImage: `url(${bannerURL})`,
        backgroundColor: "black",
      }}
    >
      <div className="flex p-10 pb-14 pt-40 flex-col gap-4 w-full items-start">
        <div className="flex items-center justify-center gap-4 h-40">
          {avatarURL ? (
            <Image
              src={avatarURL}
              alt=""
              width={128}
              height={128}
              className="rounded-full"
            />
          ) : (
            <Skeleton circle width={128} height={128} />
          )}
          <div className="bg-black/40 p-4 w-80 flex flex-col gap-2 truncate text-ellipsis backdrop-blur rounded-lg">
            {name ? (
              <Title>{name}</Title>
            ) : (
              <Skeleton height={32} width="100%" />
            )}
            {!!stats?.cs && (
              <p className="text-sm font-medium">
                {lang.player.time_played}:{" "}
                {Math.round((stats.cs.total_time_played || 0) / 3600)}{" "}
                {lang.player.hours}
              </p>
            )}
            {stats === undefined && <Skeleton height={20} width="50%" />}
            {!!stats?.leetify && (
              <p className="text-sm font-medium">
                {lang.player.rating}:{" "}
                {replaceThousands(stats.leetify.rating.toString(), " ")}
              </p>
            )}
            {stats === undefined && <Skeleton height={20} width="50%" />}
          </div>
        </div>
      </div>
    </div>
  );
}
