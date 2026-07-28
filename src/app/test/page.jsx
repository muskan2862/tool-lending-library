"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function TestPage() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("tools")
        .select("*");

      if (error) {
        console.error("Supabase Error:", error.message);
      } else {
        console.log("Connected Successfully:", data);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Testing Supabase Connection...
      </h1>
      <p>Check the browser console.</p>
    </div>
  );
}