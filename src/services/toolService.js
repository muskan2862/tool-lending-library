import { supabase } from "@/lib/supabase";

/* ===========================
   GET ALL TOOLS
=========================== */
export async function getTools() {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching tools:", error);
    throw error;
  }

  return data;
}

/* ===========================
   CREATE TOOL
=========================== */
export async function createTool(toolData) {
  const { data, error } = await supabase
    .from("tools")
    .insert([toolData])
    .select();

  if (error) {
    console.error("Error creating tool:", error);
    throw error;
  }

  return data;
}

/* ===========================
   UPDATE TOOL
=========================== */
export async function updateTool(id, updatedData) {
  const { data, error } = await supabase
    .from("tools")
    .update(updatedData)
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error updating tool:", error);
    throw error;
  }

  return data;
}

/* ===========================
   DELETE TOOL
=========================== */
export async function deleteTool(id) {
  const { error } = await supabase
    .from("tools")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting tool:", error);
    throw error;
  }

  return true;
}

/* ===========================
   GET TOOL BY ID
=========================== */
export async function getToolById(id) {
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching tool:", error);
    throw error;
  }

  return data;
}