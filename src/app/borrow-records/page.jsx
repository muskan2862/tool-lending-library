"use client";

import { useEffect, useState } from "react";

import Layout from "@/components/layout/Layout";
import BorrowHistoryTable from "@/components/borrow/BorrowHistoryTable";

import { getBorrowRecords } from "@/services/borrowService";
import useTools from "@/hooks/useTools";

export default function BorrowRecordsPage() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const { refreshTools } = useTools();

  const fetchBorrowRecords = async () => {
    try {
      setLoading(true);

      const data = await getBorrowRecords();

      setRecords(data || []);
    } catch (error) {
      console.error("Error fetching borrow records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBorrowRecords();
  }, []);

  return (
    <Layout>
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Borrow Records
        </h1>

        <p className="mt-2 text-gray-500">
          View all borrowed and returned tools.
        </p>

      </div>

      <BorrowHistoryTable
        records={records}
        loading={loading}
        refreshTools={refreshTools}
        refreshBorrowRecords={fetchBorrowRecords}
      />
    </Layout>
  );
}