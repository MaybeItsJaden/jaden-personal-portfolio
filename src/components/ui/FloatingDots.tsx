"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Dot {
  id: number;
  initialX: number;
  initialY: number;
  direction: "up" | "down" | "left" | "right";
  size: number;
}

export function FloatingDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // Responsive dot count based on screen size
    const getDotsCount = () => {
      const width = window.innerWidth;
      if (width < 640) return 8; // mobile
      if (width < 1024) return 12; // tablet
      return 15; // desktop
    };

    const createDots = () => {
      const newDots: Dot[] = Array.from({ length: getDotsCount() }, (_, i) => ({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        direction: ["up", "down", "left", "right"][
          Math.floor(Math.random() * 4)
        ] as Dot["direction"],
        size: Math.random() * 0.4 + 0.2, // Random size between 0.2vw and 0.6vw
      }));
      setDots(newDots);
    };

    // Initial creation
    createDots();

    // Update on resize
    const handleResize = () => {
      createDots();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white/30 backdrop-blur-[1px]"
          style={{
            width: `${dot.size}vw`,
            height: `${dot.size}vw`,
          }}
          initial={{
            x: `${dot.initialX}%`,
            y: `${dot.initialY}%`,
          }}
          animate={{
            x:
              dot.direction === "left"
                ? "-10%"
                : dot.direction === "right"
                  ? "110%"
                  : `${dot.initialX}%`,
            y:
              dot.direction === "up"
                ? "-10%"
                : dot.direction === "down"
                  ? "110%"
                  : `${dot.initialY}%`,
          }}
          transition={{
            duration: Math.random() * 10 + 15, // Random duration between 15-25s
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
