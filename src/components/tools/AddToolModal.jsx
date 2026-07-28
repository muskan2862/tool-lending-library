"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ToolForm from "./ToolForm";

export default function AddToolModal({
  open,
  setOpen,
  refreshTools,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent>

        <DialogHeader>

          <DialogTitle>
            Add New Tool
          </DialogTitle>

        </DialogHeader>

        <ToolForm
          onSuccess={() => {
            refreshTools();
            setOpen(false);
          }}
        />

      </DialogContent>
    </Dialog>
  );
}