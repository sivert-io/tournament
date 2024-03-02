"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export function ConvertLinkTags({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const useNextNavigationSystem = (e: any) => {
      e.preventDefault();
      router.push(e.currentTarget.href);
    };

    const aLinks = document.querySelectorAll("a");
    aLinks.forEach((aLink) => {
      aLink.addEventListener("click", useNextNavigationSystem);
      aLink.setAttribute("test", "hello");
    });

    // clean up before the component is destroyed
    return () => {
      aLinks.forEach((aLink) => {
        aLink.removeEventListener("click", useNextNavigationSystem);
        aLink.removeAttribute("test");
      });
    };
  }, [pathname, router]);

  return children;
}
