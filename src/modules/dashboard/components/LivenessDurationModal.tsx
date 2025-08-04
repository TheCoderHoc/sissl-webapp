'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DurationModalProps {
  open: boolean;
  onClose: () => void;
  value: Record<string, number>;
  actions: string[];
  idToName: Map<string, string>;
  onSave: (updated: Record<string, number>) => void;
}

export default function DurationModal({
  open,
  onClose,
  value,
  actions,
  idToName,
  onSave,
}: DurationModalProps) {
  const [durations, setDurations] = useState<Record<string, number>>(value);

  useEffect(() => {
    if (open) setDurations(value);
  }, [open, value]);

  const handleChange = (actionId: string, seconds: string) => {
    const numeric = parseInt(seconds, 10);
    setDurations(prev => ({
      ...prev,
      [actionId]: isNaN(numeric) ? 0 : numeric,
    }));
  };

  const handleSave = () => {
    onSave(durations);
    onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    bg-[#0a0a0a] border border-gray-700 p-6 rounded-lg z-50
                                    w-[348px] max-h-[90vh] overflow-y-auto">
          <Dialog.Title asChild>
            <div className="text-white font-semibold mb-2 text-lg">
              Set Duration for Each Action
            </div>
          </Dialog.Title>

          <Dialog.Description asChild>
            <p className="text-white text-sm mb-4">
              Choose the number of seconds each action should be performed for. Minimum is 0.
            </p>
          </Dialog.Description>

          <div className="space-y-4">
            {actions.map(actionId => {
              const current = durations[actionId] ?? 0;
              const increment = () => handleChange(actionId, (current + 1).toString());
              const decrement = () => handleChange(actionId, Math.max(0, current - 1).toString());
              const label = idToName.get(actionId) || actionId;

              return (
                <div key={actionId} className="flex items-center justify-between text-white">
                  <label className="text-sm">{label}</label>
                  <div className="flex items-center gap-2">
                    <div className="relative w-20">
                      <Input
                        type="number"
                        min={0}
                        value={current}
                        onChange={e => handleChange(actionId, e.target.value)}
                        className="w-full pr-8 text-white appearance-none"
                      />
                      <div className="absolute inset-y-0 right-1 flex flex-col justify-center space-y-1">
                        <button type="button" onClick={increment} className="p-1 hover:text-white transition">
                          <ChevronUp size={12} className="text-gray-400" />
                        </button>
                        <button type="button" onClick={decrement} className="p-1 hover:text-white transition">
                          <ChevronDown size={12} className="text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <span className="text-sm">secs</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between pt-6">
            <Button variant="outline" className="text-white" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-black" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
