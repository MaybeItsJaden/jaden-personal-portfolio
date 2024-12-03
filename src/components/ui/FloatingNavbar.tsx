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
import { Hamburger } from "./Hamburger";

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
  const [isOpen, setIsOpen] = useState(false);
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
          "sticky top-4 z-[100]",
          "mx-4 md:mx-auto",
          "rounded-full border border-white/[0.1] bg-black/50 backdrop-blur-md",
          "transition-all duration-300",
          isOpen ? "w-full max-w-md" : "w-14 md:w-fit",
          className,
        )}
      >
        <nav
          className={cn(
            "flex items-center gap-6",
            "px-3 py-3",
            isOpen ? "justify-between" : "justify-start md:justify-center",
          )}
        >
          <Hamburger
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          />
          <div
            className={cn(
              "flex items-center gap-6",
              isOpen ? "flex" : "hidden md:flex",
            )}
          >
            {navItems.map((navItem: NavItem, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                onClick={() => setIsOpen(false)}
                className="relative text-sm font-medium text-slate-100 transition-colors hover:text-slate-300"
              >
                {navItem.name}
              </Link>
            ))}
          </div>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
