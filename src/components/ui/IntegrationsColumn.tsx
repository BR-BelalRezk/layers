"use client";

import { motion } from "framer-motion";
import { integrations as integrationType } from "@/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

type Props = {
  integrations: typeof integrationType;
  className?: string;
  reverse?: boolean;
};

export default function IntegrationsColumn({
  integrations,
  className,
  reverse,
}: Props) {
  return (
    <motion.ul
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
          {integrations.map((item) => (
            <li
              key={item.name}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
            >
              <figure className="flex justify-center">
                <Image src={item.icon} alt={item.name} className="size-24" />
              </figure>
              <h3 className="text-3xl text-center mt-6">{item.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {item.description}
              </p>
            </li>
          ))}
        </Fragment>
      ))}
    </motion.ul>
  );
}
