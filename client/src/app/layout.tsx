import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { Titlebar } from "@/components/Titlebar/Titlebar";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { SidebarNew } from "@/components/Sidebar/SidebarNew";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConvertLinkTags } from "@/components/ConvertLinkTags/ConvertLinkTags";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tournament",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-base-1 text-white" lang="en">
      <body className={`${inter.className} w-screen h-screen flex`}>
        <ConvertLinkTags>
          <AntdRegistry>
            <ThemeProvider>
              <NextAuthSessionProvider>
                <SkeletonTheme baseColor="#333" highlightColor="#555">
                  <main className="flex flex-col w-full h-full">
                    <Titlebar />
                    <div className="flex w-full h-full overflow-scroll">
                      <SidebarNew />
                      {children}
                    </div>
                  </main>
                </SkeletonTheme>
              </NextAuthSessionProvider>
            </ThemeProvider>
          </AntdRegistry>
        </ConvertLinkTags>
      </body>
    </html>
  );
}
