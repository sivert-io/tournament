import { useTheme } from "antd-style";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

export function TeamBanner({
  name,
  bannerURL,
  avatarURL,
  editMode,
}: {
  name?: string;
  bannerURL?: string;
  avatarURL?: string;
  editMode?: boolean;
}) {
  const theme = useTheme();
  return (
    <div
      className="w-full rounded-2xl relative overflow-hidden"
      style={{ backgroundColor: theme.colorBgBlur }}
    >
      <div className="absolute flex items-start justify-center inset-0 select-none pointer-events-none">
        <video
          className="w-full h-auto"
          playsInline
          autoPlay
          muted
          loop
          src={bannerURL}
        />
      </div>
      <div className="flex p-10 pb-14 pt-40 flex-col gap-4 w-full items-start">
        <div className="flex items-center justify-center gap-4 h-40 z-10">
          {avatarURL ? (
            <Image
              src={avatarURL}
              alt=""
              width={128}
              height={128}
              className="rounded-full"
            />
          ) : editMode ? null : (
            <Skeleton circle width={128} height={128} />
          )}
          <div className="relative">
            <div className="bg-black/40 p-4 min-w-[20rem] max-w-[24rem] rounded-lg flex flex-col gap-2 truncate text-ellipsis backdrop-blur">
              {name ? (
                <Title level={2} style={{ margin: 0 }}>
                  {name}
                </Title>
              ) : editMode ? null : (
                <Skeleton height={32} width="100%" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
