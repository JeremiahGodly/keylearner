
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Music,
  Guitar,
  BarChart3,
  BookOpen,
  Piano,
  Info,
} from "lucide-react";
import { useI18n } from "@/context/i18n-context";

export function AppSidebar() {
  const pathname = usePathname();
  const { t } = useI18n();

  const menuItems = [
    { href: "/", label: t("Dashboard"), icon: LayoutDashboard },
    { href: "/theory", label: t("Music Theory"), icon: Music },
    { href: "/songs", label: t("Song Tutorials"), icon: Guitar },
    { href: "/progress", label: t("Progress"), icon: BarChart3 },
    { href: "/resources", label: t("Resources"), icon: BookOpen },
    { href: "/about", label: t("About Us"), icon: Info },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <Piano className="h-7 w-7 text-primary" />
          <span className="text-lg font-semibold tracking-tight">KeyLearner</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <p className="px-4 text-xs text-muted-foreground">© 2024 KeyLearner</p>
      </SidebarFooter>
    </Sidebar>
  );
}
