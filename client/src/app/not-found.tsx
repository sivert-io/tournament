"use client";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col gap-2 items-start justify-start">
        <Title>{lang.generic.not_found}</Title>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 font-medium text-sm bg-base-2 rounded-lg"
        >
          {lang.generic.go_back}
        </button>
      </div>
    </PageWrapper>
  );
}
