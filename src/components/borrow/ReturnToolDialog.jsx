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

import { returnTool } from "@/services/borrowService";

export default function ReturnToolDialog({
  open,
  setOpen,
  borrowRecord,
  refreshTools,
  refreshBorrowRecords,
}) {
  const handleReturn = async () => {
    if (!borrowRecord) return;

    try {
      await returnTool(
        borrowRecord.id,
        borrowRecord.tool_id
      );

      console.log(
        "[Analytics] User returned a tool"
      );

      if (refreshTools) {
        refreshTools();
      }

      if (refreshBorrowRecords) {
        refreshBorrowRecords();
      }

      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Failed to return tool.");
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
            Return Tool
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to return

            <strong>
              {" "}
              {borrowRecord?.tools?.name}
            </strong>

            ?

            <br />
            The tool will become available again.
          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleReturn}
            className="bg-green-600 hover:bg-green-700"
          >
            Return Tool
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}