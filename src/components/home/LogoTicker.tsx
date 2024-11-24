"use client";
import { motion } from "framer-motion";

import { logos } from "@/constants";
import Image from "next/image";
import { Fragment } from "react";

export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>
        <div className="overflow-hidden flex mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {logos.map((item) => (
                  <Image key={item.name} src={item.image} alt={item.name} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
