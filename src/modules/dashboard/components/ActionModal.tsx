'use client';

import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

interface ActionModalsProps {
  type: 'delete' | 'resend';
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export function ActionModal({ type, open, onClose, onConfirm }: ActionModalsProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white max-w-sm rounded-xl px-6 py-8 flex flex-col items-center justify-center">
        {type === 'resend' ? (
          <>
            <CheckCircle2 size={48} className="text-green-500 mb-4" />
            <p className="text-center text-lg font-medium">
              The user has been successfully invited.
            </p>
          </>
        ) : (
          <>
            <AlertTriangle size={48} className="text-white mb-4" />
            <p className="text-center text-lg font-medium">
              Are you sure you want to <span className="text-red-500">delete this</span> user
            </p>
            <div className="mt-6 flex gap-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="border border-white text-white"
              >
                No
              </Button>
              <Button
                onClick={() => {
                  onConfirm?.();
                  onClose();
                }}
                className="bg-yellow-400 hover:bg-yellow-300 text-black"
              >
                Yes
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
