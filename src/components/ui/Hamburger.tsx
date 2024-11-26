import { cn } from "@/utils/cn";

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const Hamburger = ({ isOpen, onClick, className }: HamburgerProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col justify-center items-center w-8 h-8 space-y-1.5 transition-all",
        className
      )}
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-6 bg-slate-100 transform transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-slate-100 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-slate-100 transform transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
}; 