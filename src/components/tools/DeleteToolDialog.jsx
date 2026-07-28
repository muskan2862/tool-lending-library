"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { deleteTool } from "@/services/toolService";

export default function DeleteToolDialog({
  open,
  setOpen,
  tool,
  refreshTools,
}) {
  const handleDelete = async () => {
    try {
      await deleteTool(tool.id);

      console.log(
        "[Analytics] User interacted with Feature Complete CRUD"
      );

      refreshTools();

      setOpen(false);
    } catch (error) {
      console.error(error);

      alert("Unable to delete tool.");
    }
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={setOpen}
    >
      <AlertDialogContent>

        <AlertDialogHeader>

          <AlertDialogTitle>
            Delete Tool
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to delete
            <strong> {tool?.name}</strong>?

            <br />

            This action cannot be undone.
          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}