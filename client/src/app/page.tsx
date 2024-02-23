"use client";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { useSteam } from "@/hooks/useSteam";
import { lang } from "@/lang";

export default function Home() {
  const steam = useSteam();

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">{lang.home.playing_right_now}</h2>
        </div>
      </div>
    </PageWrapper>
  );
}
