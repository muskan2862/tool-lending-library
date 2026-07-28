"use client";

import {
  Package,
  CheckCircle,
  Wrench,
  FolderOpen,
} from "lucide-react";

import StatCard from "./StatCard";
import useTools from "@/hooks/useTools";

export default function DashboardStats() {
  const { tools, loading } = useTools();

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-36 animate-pulse rounded-xl bg-gray-200"
          />
        ))}
      </div>
    );
  }

  const totalTools = tools.length;

  const availableTools = tools.filter(
    (tool) => tool.status === "Available"
  ).length;

  const borrowedTools = tools.filter(
    (tool) => tool.status === "Borrowed"
  ).length;

  const categories = new Set(
    tools.map((tool) => tool.category)
  ).size;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Tools"
        value={totalTools}
        icon={Package}
      />

      <StatCard
        title="Available"
        value={availableTools}
        icon={CheckCircle}
      />

      <StatCard
        title="Borrowed"
        value={borrowedTools}
        icon={Wrench}
      />

      <StatCard
        title="Categories"
        value={categories}
        icon={FolderOpen}
      />

    </div>
  );
}