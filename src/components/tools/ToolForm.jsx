"use client";

import { useEffect, useState } from "react";
import {
  createTool,
  updateTool,
} from "@/services/toolService";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ToolForm({
  tool = null,
  onSuccess,
}) {
  const isEdit = !!tool;

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    location: "",
    status: "Available",
    description: "",
  });

  useEffect(() => {
    if (tool) {
      setFormData({
        name: tool.name || "",
        category: tool.category || "",
        quantity: tool.quantity || "",
        location: tool.location || "",
        status: tool.status || "Available",
        description: tool.description || "",
      });
    }
  }, [tool]);

  const sanitizeInput = (value) => {
    return value.replace(/[<>]/g, "").trim();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.category.trim() ||
      !formData.quantity ||
      !formData.location.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const payload = {
      name: sanitizeInput(formData.name),
      category: sanitizeInput(formData.category),
      quantity: Number(formData.quantity),
      location: sanitizeInput(formData.location),
      status: formData.status,
      description: sanitizeInput(formData.description),
    };

    try {
      setLoading(true);

      if (isEdit) {
        await updateTool(tool.id, payload);
      } else {
        await createTool(payload);
      }

      console.log(
        "[Analytics] User interacted with Feature Complete CRUD"
      );

      if (onSuccess) {
        onSuccess();
      }

      if (!isEdit) {
        setFormData({
          name: "",
          category: "",
          quantity: "",
          location: "",
          status: "Available",
          description: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert(
        isEdit
          ? "Failed to update tool."
          : "Failed to add tool."
      );
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
          Tool Name *
        </label>

        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Category *
        </label>

        <Input
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Quantity *
        </label>

        <Input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Location *
        </label>

        <Input
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2"
        >
          <option value="Available">
            Available
          </option>

          <option value="Borrowed">
            Borrowed
          </option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <Textarea
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading
          ? isEdit
            ? "Updating..."
            : "Saving..."
          : isEdit
          ? "Update Tool"
          : "Add Tool"}
      </Button>
    </form>
  );
}