import type React from "react";
import { cn } from "@/lib/utils";

interface BottleOption {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface BottleSelectorProps {
  options: BottleOption[];
  selectedBottle: string;
  onSelect: (id: string) => void;
}

export function BottleSelector({
  options,
  selectedBottle,
  onSelect,
}: BottleSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Choose your bottle</h2>
      <div className="grid grid-cols-3 gap-4">
        {options.map((bottle) => (
          <button
            key={bottle.id}
            onClick={() => onSelect(bottle.id)}
            className={cn(
              "p-4 rounded-lg border-2 transition-colors",
              selectedBottle === bottle.id
                ? "border-primary bg-primary/5"
                : "border-transparent hover:border-primary/50"
            )}
          >
            <div className="aspect-square relative flex items-center justify-center">
              {bottle.icon}
            </div>
            <p className="text-sm text-center mt-2">{bottle.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
