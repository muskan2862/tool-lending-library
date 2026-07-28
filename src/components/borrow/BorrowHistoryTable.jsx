"use client";

import { useState } from "react";
import ReturnToolDialog from "./ReturnToolDialog";

export default function BorrowHistoryTable({
  records,
  loading,
  refreshTools,
  refreshBorrowRecords,
}) {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [returnOpen, setReturnOpen] = useState(false);

  const handleReturn = (record) => {
    setSelectedRecord(record);
    setReturnOpen(true);
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-center text-gray-500">
          Loading borrow records...
        </p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        <p className="text-center text-gray-500">
          No borrow records found.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto rounded-xl bg-white shadow">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Tool
              </th>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Borrower
              </th>

              <th className="px-6 py-4 text-left">
                Email
              </th>

              <th className="px-6 py-4 text-left">
                Borrow Date
              </th>

              <th className="px-6 py-4 text-left">
                Due Date
              </th>

              <th className="px-6 py-4 text-left">
                Returned Date
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {records.map((record) => (

              <tr
                key={record.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="px-6 py-4 font-medium">
                  {record.tools?.name}
                </td>

                <td className="px-6 py-4">
                  {record.tools?.category}
                </td>

                <td className="px-6 py-4">
                  {record.borrower_name}
                </td>

                <td className="px-6 py-4">
                  {record.borrower_email || "-"}
                </td>

                <td className="px-6 py-4">
                  {record.borrowed_date}
                </td>

                <td className="px-6 py-4">
                  {record.due_date}
                </td>

                <td className="px-6 py-4">
                  {record.returned_date || "-"}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      record.status === "Borrowed"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {record.status}
                  </span>

                </td>

                <td className="px-6 py-4 text-center">

                  {record.status === "Borrowed" ? (

                    <button
                      onClick={() => handleReturn(record)}
                      className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                    >
                      Return
                    </button>

                  ) : (

                    <span className="text-gray-500">
                      Returned
                    </span>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <ReturnToolDialog
        open={returnOpen}
        setOpen={setReturnOpen}
        borrowRecord={selectedRecord}
        refreshTools={refreshTools}
        refreshBorrowRecords={refreshBorrowRecords}
      />
    </>
  );
}