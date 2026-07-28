"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ToolForm from "./ToolForm";

export default function EditToolModal({
  open,
  setOpen,
  tool,
  refreshTools,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>
          <DialogTitle>
            Edit Tool
          </DialogTitle>
        </DialogHeader>

        <ToolForm
          tool={tool}
          onSuccess={() => {
            refreshTools();
            setOpen(false);
          }}
        />

      </DialogContent>
    </Dialog>
  );
}