import type { ReactNode } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

export function SiteLayout({ children, solidHeader }: { children: ReactNode; solidHeader?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <Header solid={solidHeader ?? false} />
      <main>{children}</main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
