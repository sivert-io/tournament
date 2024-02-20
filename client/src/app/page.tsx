"use client";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { useTournament } from "@/hooks/useTournament";
import { useSteam } from "@/hooks/useSteam";
import { lang } from "@/lang";
import Link from "next/link";

export default function Home() {
  const steam = useSteam();
  const { stage } = useTournament(0);

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        <Title>{lang.navbar.home}</Title>
        {steam && (
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium">
              {lang.home.relevant_tournaments}
            </h2>
            {stage && (
              <div>
                {stage.map((data) => (
                  <Link
                    className="underline underline-offset-2"
                    href={`/tournament/${data.id}`}
                    key={data.id}
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
