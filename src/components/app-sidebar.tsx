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
} from "lucide-react";

const menuItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/theory", label: "Music Theory", icon: Music },
  { href: "/songs", label: "Song Tutorials", icon: Guitar },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/resources", label: "Resources", icon: BookOpen },
];

export function AppSidebar() {
  const pathname = usePathname();

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
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
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
