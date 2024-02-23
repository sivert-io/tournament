import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { Titlebar } from "@/components/Titlebar/Titlebar";
import "react-loading-skeleton/dist/skeleton.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SkeletonTheme } from "react-loading-skeleton";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Tournament",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-base-1 text-white" lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${inter.className} w-screen h-screen`}>
        <NextAuthSessionProvider>
          <SkeletonTheme baseColor="#222" highlightColor="#888">
            <main className="flex flex-col w-full h-full">
              <Titlebar />
              <div className="flex w-full h-full">
                <Sidebar />
                {children}
              </div>
            </main>
          </SkeletonTheme>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
