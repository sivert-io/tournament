import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import Title from "@/components/Title/Title";
import { lang } from "@/lang";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col gap-2">
        <Title>{lang.generic.not_found}</Title>
        <Link className="underline underline-offset-2" href="/">
          {lang.generic.go_back}
        </Link>
      </div>
    </PageWrapper>
  );
}
