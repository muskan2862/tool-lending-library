"use client";

import { useEffect, useState } from "react";
import { getTools } from "@/services/toolService";

export default function useTools() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTools = async () => {
    try {
      console.log("Fetching tools from Supabase...");

      const data = await getTools();

      console.log("Supabase Data:", data);
      console.log("Number of tools:", data?.length);

      setTools(data || []);
    } catch (error) {
      console.error("Error fetching tools:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTools();
  }, []);

  return {
    tools,
    loading,
    refreshTools: fetchTools,
  };
}