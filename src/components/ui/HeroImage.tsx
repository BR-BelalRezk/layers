"use client";
import { AnimationScope, motion } from "framer-motion";

import Image, { StaticImageData } from "next/image";
type Props = {
  src: StaticImageData;
  alt: string;
  className: string;
  scope: AnimationScope<HTMLElement>;
  initial: { opacity?: number; y?: number; x?: number };
};
export default function HeroImage({
  src,
  alt,
  className,
  scope,
  initial,
}: Props) {
  return (
    <motion.figure
      initial={initial}
      dragSnapToOrigin
      drag
      ref={scope}
      className={`hidden lg:block ${className}`}
    >
      <Image draggable={false} src={src} alt={alt} />
    </motion.figure>
  );
}
