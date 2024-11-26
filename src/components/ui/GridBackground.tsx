import React from 'react';
import { cn } from '../../lib/utils';

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  maskClassName?: string;
}

export function GridBackground({ 
  children, 
  className,
  maskClassName = "transparent 20%"
}: GridBackgroundProps) {
  return (
    <div className="relative w-full h-full">
      {/* Grid Background */}
      <div className={cn(
        "absolute inset-0 z-0 flex h-full w-full",
        "items-center justify-center",
        "bg-grid-black/[0.1] dark:bg-grid-white/[0.03]",
        className
      )}>
        {/* Radial Mask */}
        <div className={cn(
          "pointer-events-none absolute inset-0",
          "flex items-center justify-center bg-white",
          `[mask-image:radial-gradient(ellipse_at_center,${maskClassName},black)]`
        )} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 