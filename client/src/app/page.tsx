"use client";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { useSteam } from "@/hooks/useSteam";
import { lang } from "@/lang";

export default function Home() {
  const steam = useSteam();

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        {steam && (
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium">
              {lang.home.relevant_tournaments}
            </h2>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
