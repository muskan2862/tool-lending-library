"use client";

import { useState } from "react";

import ToolRow from "./ToolRow";
import EditToolModal from "./EditToolModal";
import DeleteToolDialog from "./DeleteToolDialog";

import BorrowToolModal from "@/components/borrow/BorrowToolModal";

export default function ToolTable({
  tools,
  loading,
  refreshTools,
}) {
  const [selectedTool, setSelectedTool] = useState(null);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [borrowOpen, setBorrowOpen] = useState(false);

  const handleEdit = (tool) => {
    setSelectedTool(tool);
    setEditOpen(true);
  };

  const handleDelete = (tool) => {
    setSelectedTool(tool);
    setDeleteOpen(true);
  };

  const handleBorrow = (tool) => {
    setSelectedTool(tool);
    setBorrowOpen(true);
  };

  const handleReturn = () => {
    window.location.href = "/borrow-records";
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        Loading...
      </div>
    );
  }

  if (!tools.length) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        No data found.
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto rounded-xl bg-white shadow">
        <table className="min-w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Tool</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Qty</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tools.map((tool) => (
              <ToolRow
                key={tool.id}
                tool={tool}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onBorrow={handleBorrow}
                onReturn={handleReturn}
              />
            ))}
          </tbody>

        </table>
      </div>

      <BorrowToolModal
        open={borrowOpen}
        setOpen={setBorrowOpen}
        tool={selectedTool}
        refreshTools={refreshTools}
      />

      <EditToolModal
        open={editOpen}
        setOpen={setEditOpen}
        tool={selectedTool}
        refreshTools={refreshTools}
      />

      <DeleteToolDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        tool={selectedTool}
        refreshTools={refreshTools}
      />
    </>
  );
}