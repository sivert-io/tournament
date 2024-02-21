import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "@/providers/SessionProvider";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tournament",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-black" lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${inter.className} w-screen h-screen`}>
        <NextAuthSessionProvider>
          <main className="flex flex-col w-full h-full">
            <Navbar />
            {children}
          </main>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
