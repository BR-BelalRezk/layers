"use client";
import { transition } from "@/constants";
import { motion } from "framer-motion";
export default function Hamburger({ toggle }: { toggle?: boolean }) {
  const span_1 = toggle ? { translateY: 3, rotate: 45 } : {};
  const span_2 = toggle ? { translateY: -3, rotate: -45 } : {};
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => index).map((_, index) => (
        <motion.span
          key={index}
          className="bg-neutral-950 w-5 h-0.5 rounded-full"
          animate={index === 0 ? span_1 : span_2}
          transition={transition}
        />
      ))}
    </>
  );
}
