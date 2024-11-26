"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "sticky top-4 mx-auto w-fit z-[100] rounded-full border border-white/[0.1] bg-black/50 px-6 py-3 shadow-lg backdrop-blur-md",
          className
        )}
      >
        <nav className="flex items-center justify-center gap-6">
          {navItems.map((navItem: NavItem, idx: number) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative text-sm font-medium text-slate-100 transition-colors hover:text-slate-300"
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
