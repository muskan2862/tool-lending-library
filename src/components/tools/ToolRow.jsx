"use client";

import { Pencil, Trash2, PackageCheck, RotateCcw } from "lucide-react";

export default function ToolRow({
  tool,
  onEdit,
  onDelete,
  onBorrow,
  onReturn,
}) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">{tool.name}</td>

      <td className="px-6 py-4">{tool.category}</td>

      <td className="px-6 py-4">{tool.quantity}</td>

      <td className="px-6 py-4">{tool.location}</td>

      <td className="px-6 py-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            tool.status === "Available"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {tool.status}
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">

          {tool.status === "Available" ? (
            <button
              onClick={() => onBorrow(tool)}
              className="rounded border bg-blue-600 p-2 text-white hover:bg-blue-700"
              title="Borrow Tool"
            >
              <PackageCheck size={18} />
            </button>
          ) : (
            <button
              onClick={() => onReturn(tool)}
              className="rounded border bg-green-600 p-2 text-white hover:bg-green-700"
              title="Return Tool"
            >
              <RotateCcw size={18} />
            </button>
          )}

          <button
            onClick={() => onEdit(tool)}
            className="rounded border p-2 hover:bg-gray-100"
            title="Edit"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(tool)}
            className="rounded border p-2 text-red-600 hover:bg-red-50"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </td>
    </tr>
  );
}