"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: [string, string, Record<string, unknown>?]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-DSS59F58D1", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
