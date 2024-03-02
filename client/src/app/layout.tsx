import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { Titlebar } from "@/components/Titlebar/Titlebar";
import "react-loading-skeleton/dist/skeleton.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SkeletonTheme } from "react-loading-skeleton";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

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
      <body className={`${inter.className} w-screen h-screen`}>
        <NextAuthSessionProvider>
          <ThemeProvider>
            <SkeletonTheme baseColor="#333" highlightColor="#555">
              <main className="flex flex-col w-full h-full">
                <Titlebar />
                <div className="flex w-full h-full overflow-scroll">
                  <Sidebar />
                  {children}
                </div>
              </main>
            </SkeletonTheme>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
