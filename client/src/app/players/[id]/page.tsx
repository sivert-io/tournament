"use client";
import NotFound from "@/app/not-found";
import { homeBreadcrumb } from "@/app/page";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PlayerBanner } from "@/components/Players/Player/PlayerBanner";
import { playersBreadcrumb } from "../page";
import { usePlayerInfo } from "@/hooks/usePlayerInfo";

export default function Page({ params }: { params: { id: string } }) {
  const { steam, gameStats, backgroundImage } = usePlayerInfo(params.id);

  if (steam === null) return <NotFound />;

  return (
    <PageWrapper
      breadCrumb={[
        homeBreadcrumb(),
        playersBreadcrumb(),
        {
          title: steam?.personaname || params.id,
        },
      ]}
    >
      <div className="flex flex-col w-full">
        <PlayerBanner
          avatarURL={steam?.avatarfull}
          name={steam?.personaname}
          stats={gameStats}
          bannerURL={backgroundImage}
        />
      </div>
    </PageWrapper>
  );
}
