"use client";

import { navbarItems } from "@/constants";
import { useActiveSection } from "@/context/ActiveSection";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLElement> & {
  id: (typeof navbarItems)[number];
};
export default function Section({ id, children, className, ...rest }: Props) {
  const ref = useRef(null);
  const { setActiveSection } = useActiveSection();
  const isInView = useInView(ref, { amount: 0.3 });
  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [id, isInView, setActiveSection]);
  return (
    <section
      {...rest}
      className={twMerge("scroll-mt-20", className)}
      ref={ref}
      id={id}
    >
      {children}
    </section>
  );
}
