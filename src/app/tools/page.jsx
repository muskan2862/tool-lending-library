"use client";

import { useMemo, useState } from "react";

import Layout from "@/components/layout/Layout";
import SearchBar from "@/components/tools/SearchBar";
import ToolTable from "@/components/tools/ToolTable";
import AddToolModal from "@/components/tools/AddToolModal";

import useTools from "@/hooks/useTools";

export default function ToolsPage() {
  const { tools, loading, refreshTools } = useTools();

  const [search, setSearch] = useState("");
  const [openAddModal, setOpenAddModal] = useState(false);

  const filteredTools = useMemo(() => {
    if (!search.trim()) return tools;

    const keyword = search.toLowerCase();

    return tools.filter(
      (tool) =>
        tool.name?.toLowerCase().includes(keyword) ||
        tool.category?.toLowerCase().includes(keyword) ||
        tool.location?.toLowerCase().includes(keyword) ||
        tool.status?.toLowerCase().includes(keyword)
    );
  }, [tools, search]);

  return (
    <Layout>
      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Tool Management
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all tools in the lending library.
          </p>

        </div>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        onAdd={() => setOpenAddModal(true)}
      />

      <div className="mt-6">

        <ToolTable
          tools={filteredTools}
          loading={loading}
          refreshTools={refreshTools}
        />

      </div>

      <AddToolModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        refreshTools={refreshTools}
      />

    </Layout>
  );
}