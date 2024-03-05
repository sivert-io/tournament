import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { lang } from "@/lang";
import { homeBreadcrumb } from "@/utils/breadcrumbs";

export default function Home() {
  return (
    <PageWrapper breadCrumb={[homeBreadcrumb(false)]}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <PageTitle>{lang.sidebar.home}</PageTitle>
          <h2 className="text-lg font-bold flex items-center justify-start gap-2">
            <span className="bg-primary rounded-full w-2 h-2" />
            {lang.home.playing_right_now}
          </h2>
        </div>
      </div>
    </PageWrapper>
  );
}
