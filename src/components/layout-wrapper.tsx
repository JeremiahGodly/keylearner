"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

const pageTitles: { [key: string]: string } = {
  "/": "Dashboard",
  "/theory": "Music Theory",
  "/songs": "Song Tutorials",
  "/progress": "Your Progress",
  "/resources": "Resource Library",
};

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
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
