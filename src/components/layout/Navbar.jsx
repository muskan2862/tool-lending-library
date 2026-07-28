"use client";

import { Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">

      <div>
        <h1 className="text-xl font-bold text-gray-800">
          Tool Lending Library
        </h1>

        <p className="text-sm text-gray-500">
          Inventory Management System
        </p>
      </div>

      <div className="flex items-center gap-5">

        <button
          aria-label="Notifications"
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-2">

          <UserCircle
            size={34}
            className="text-gray-600"
          />

          <div>
            <p className="font-medium">
              Library Staff
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}