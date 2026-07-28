"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import BorrowForm from "./BorrowForm";

export default function BorrowToolModal({
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
            Borrow Tool
          </DialogTitle>
        </DialogHeader>

        {tool && (
          <BorrowForm
            tool={tool}
            refreshTools={refreshTools}
            onSuccess={() => {
              refreshTools();
              setOpen(false);
            }}
          />
        )}

      </DialogContent>
    </Dialog>
  );
}