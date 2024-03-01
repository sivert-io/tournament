import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import { MappedLeetifyData } from "@/types/leetify";
import { PlayerStats } from "@/types/stats";
import { colors } from "@/utils/colors";
import { replaceThousands } from "@/utils/number";
import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function PlayerBanner({
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
      className="w-full bg-center bg-cover"
      style={{
        backgroundImage: bannerURL ? bannerURL : `url(/player/banner.webp)`,
        backgroundColor: colors["base-3"],
      }}
    >
      <div className="flex p-10 pb-14 pt-40 flex-col gap-4 w-full items-start">
        <div className="flex items-center justify-center gap-4 h-40">
          {avatarURL ? (
            <Image
              src={avatarURL}
              alt=""
              width={160}
              height={160}
              className="w-40 h-40 rounded-full"
            />
          ) : (
            <Skeleton circle width={160} height={160} />
          )}
          <div className="bg-black/40 p-4 w-80 flex flex-col gap-2 truncate text-ellipsis backdrop-blur rounded-lg">
            {name ? (
              <Title>{name}</Title>
            ) : (
              <Skeleton height={28} width="100%" />
            )}
            {!!stats?.cs && (
              <p className="text-sm font-medium">
                {lang.player.time_played}:{" "}
                {Math.round((stats.cs.total_time_played || 0) / 3600)}{" "}
                {lang.player.hours}
              </p>
            )}
            {stats === undefined && <Skeleton height={18} width="50%" />}
            {!!stats?.leetify && (
              <p className="text-sm font-medium">
                {lang.player.rating}:{" "}
                {replaceThousands(stats.leetify.rating.toString(), " ")}
              </p>
            )}
            {stats === undefined && <Skeleton height={18} width="50%" />}
          </div>
        </div>
      </div>
    </div>
  );
}
