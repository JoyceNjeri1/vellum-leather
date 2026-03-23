"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ZoomImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          style={{ filter: "brightness(0.82) contrast(1.06)" }}
          priority={false}
        />
      </motion.div>

      {/* Dark overlay gradients for luxury/industrial contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.35)_0%,rgba(59,47,47,0.25)_55%,rgba(11,11,11,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}

