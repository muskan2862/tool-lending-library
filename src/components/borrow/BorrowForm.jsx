"use client";

import { useState } from "react";
import { borrowTool } from "@/services/borrowService";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BorrowForm({
  tool,
  refreshTools,
  onSuccess,
}) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    borrower_name: "",
    borrower_email: "",
    due_date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sanitizeInput = (value) => {
    return value.replace(/[<>]/g, "").trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.borrower_name.trim() ||
      !formData.due_date
    ) {
      alert("Borrower Name and Due Date are required.");
      return;
    }

    try {
      setLoading(true);

      await borrowTool({
        tool_id: tool.id,
        borrower_name: sanitizeInput(formData.borrower_name),
        borrower_email: sanitizeInput(formData.borrower_email),
        due_date: formData.due_date,
        notes: sanitizeInput(formData.notes),
      });

      console.log(
        "[Analytics] User interacted with Borrow Tool"
      );

      refreshTools();

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Borrow Error:" , error);
      alert(error.message || "Unable to borrow tool.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Tool
        </label>

        <Input
          value={tool?.name || ""}
          disabled
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Borrower Name *
        </label>

        <Input
          name="borrower_name"
          value={formData.borrower_name}
          onChange={handleChange}
          placeholder="Enter borrower name"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Borrower Email
        </label>

        <Input
          type="email"
          name="borrower_email"
          value={formData.borrower_email}
          onChange={handleChange}
          placeholder="Enter borrower email"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Due Date *
        </label>

        <Input
          type="date"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Notes
        </label>

        <Textarea
          rows={4}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Optional notes"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? "Borrowing..." : "Borrow Tool"}
      </Button>
    </form>
  );
}