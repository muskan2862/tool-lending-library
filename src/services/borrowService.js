import { supabase } from "@/lib/supabase";

/* ===========================
   BORROW TOOL
=========================== */
export async function borrowTool(borrowData) {
  // 1. Create borrow record
  const { data, error } = await supabase
    .from("borrow_records")
    .insert([borrowData])
    .select();

  if (error) {
    console.error("Borrow Error:", error);
    throw error;
  }

  // 2. Update tool status
  const { error: updateError } = await supabase
    .from("tools")
    .update({
      status: "Borrowed",
    })
    .eq("id", borrowData.tool_id);

  if (updateError) {
    console.error(updateError);
    throw updateError;
  }

  return data;
}

/* ===========================
   RETURN TOOL
=========================== */
export async function returnTool(recordId, toolId) {
  // Update borrow record
  const { error } = await supabase
    .from("borrow_records")
    .update({
      status: "Returned",
      returned_date: new Date().toISOString(),
    })
    .eq("id", recordId);

  if (error) {
    console.error(error);
    throw error;
  }

  // Update tool status
  const { error: toolError } = await supabase
    .from("tools")
    .update({
      status: "Available",
    })
    .eq("id", toolId);

  if (toolError) {
    console.error(toolError);
    throw toolError;
  }

  return true;
}

/* ===========================
   GET ALL BORROW RECORDS
=========================== */
export async function getBorrowRecords() {
  const { data, error } = await supabase
    .from("borrow_records")
    .select(`
      *,
      tools (
        id,
        name,
        category
      )
    `)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

/* ===========================
   ACTIVE BORROW RECORDS
=========================== */
export async function getActiveBorrowRecords() {
  const { data, error } = await supabase
    .from("borrow_records")
    .select(`
      *,
      tools (
        id,
        name,
        category
      )
    `)
    .eq("status", "Borrowed")
    .order("due_date");

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

/* ===========================
   OVERDUE RECORDS
=========================== */
export async function getOverdueTools() {
  const today = new Date().toISOString().split("T")[0];

  const { data, error } = await supabase
    .from("borrow_records")
    .select(`
      *,
      tools (
        name,
        category
      )
    `)
    .lt("due_date", today)
    .eq("status", "Borrowed");

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}