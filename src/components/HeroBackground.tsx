"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Vellum Leather background"
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.86) contrast(1.06)" }}
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlays for luxury/industrial contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,169,98,0.18)_0%,rgba(198,169,98,0)_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.65)_0%,rgba(59,47,47,0.35)_55%,rgba(11,11,11,0.94)_100%)]" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.42)_100%)]" />
    </div>
  );
}

