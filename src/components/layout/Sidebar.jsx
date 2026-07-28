"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Wrench,
  FolderOpen,
  ClipboardList,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Tools",
    href: "/tools",
    icon: Wrench,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: FolderOpen,
  },
  {
    title: "Borrow Records",
    href: "/borrow-records",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white">
      <nav className="p-5 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}