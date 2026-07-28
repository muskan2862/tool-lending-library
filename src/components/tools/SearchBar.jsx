"use client";

import { Search, Plus } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
  onAdd,
}) {
  return (
    <div className="flex items-center justify-between">

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border py-2 pl-10 pr-4"
        />

      </div>

      <button
        onClick={onAdd}
        className="flex items-center gap-2 rounded-lg bg-black px-5 py-2 text-white"
      >
        <Plus size={18} />

        Add Tool
      </button>

    </div>
  );
}