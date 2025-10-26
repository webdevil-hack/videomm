"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  LogOut,
  User,
  Settings2,
  PlaySquare,
  GalleryHorizontalEnd,
  Wand2,
  Film,
  Layers,
  ListVideo,
  Sparkles,
  Scissors,
  Video,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/apis/shortstack", label: "ShortStack", icon: Wand2 },
  { href: "/apis/creatomate", label: "CreatoMate", icon: Layers },
  { href: "/apis/pandly", label: "Pandly", icon: Film },
  { href: "/apis/tavas", label: "Tavas", icon: ListVideo },
  { href: "/apis/promptclip", label: "PromptClip", icon: Scissors },
  { href: "/apis/luckyedit", label: "LuckyEdit", icon: Sparkles },
  { href: "/apis/ltx", label: "LTX Video", icon: Video },
  { href: "/apis/vant", label: "Vant 2.1", icon: GalleryHorizontalEnd },
  { href: "/profile", label: "Profile", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group/sidebar sticky top-0 h-screen glass-panel p-3 md:p-4 flex flex-col border-r",
        collapsed ? "w-[72px]" : "w-64"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <Logo className={collapsed ? "opacity-0 pointer-events-none" : ""} />
        <button
          aria-label="Toggle sidebar"
          className="btn-ghost h-8 w-8 rounded-md border text-sm"
          onClick={() => setCollapsed((v) => !v)}
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto pr-1">
        <ul className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition card-hover border",
                    active
                      ? "bg-[--muted] border-[--accent]"
                      : "bg-transparent border-transparent hover:border-[--accent]"
                  )}
                  href={item.href}
                >
                  <Icon className="h-4 w-4 text-[--accent]" />
                  <span className={cn("truncate", collapsed && "hidden")}>{
                    item.label
                  }</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-3">
        <Link
          href="/logout"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition card-hover border bg-transparent hover:border-[--accent]"
        >
          <LogOut className="h-4 w-4 text-red-400" />
          <span className={cn(collapsed && "hidden")}>Logout</span>
        </Link>
      </div>
    </motion.aside>
  );
}
