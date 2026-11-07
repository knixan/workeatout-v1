import type { ReactNode } from "react";
import { LuCheck } from "react-icons/lu";

type ChipProps = {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
};

export default function Chip({ selected, onClick, children }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 font-heading text-sm font-medium transition-colors ${
        selected
          ? "border-sage bg-sage text-white"
          : "border-sage/40 bg-white text-sage hover:border-sage"
      }`}
    >
      {selected && <LuCheck aria-hidden className="size-4" />}
      {children}
    </button>
  );
}
