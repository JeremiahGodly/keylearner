
"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/components/ui";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { useI18n } from "@/context/i18n-context";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const { t } = useI18n();

  const pageTitles: { [key: string]: string } = {
    "/": t("Dashboard"),
    "/theory": t("Music Theory"),
    "/songs": t("Song Tutorials"),
    "/progress": t("Your Progress"),
    "/resources": t("Resource Library"),
    "/about": t("About Us"),
  };

  const title = pageTitles[pathname] ?? "KeyLearner";

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset>
          <AppHeader title={title} />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

    