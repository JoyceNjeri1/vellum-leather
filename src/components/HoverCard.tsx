"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function HoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      className={className}
      whileHover={{ y: -6 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 26,
      }}
    >
      {children}
    </motion.article>
  );
}

