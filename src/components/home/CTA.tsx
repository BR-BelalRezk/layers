"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function CTA() {
  const animation = useRef<AnimationPlaybackControls>();
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);
  useEffect(() => {
    if (animation.current) {
      if (hover) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [hover]);
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.ul
          ref={scope}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium cursor-pointer group"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="group-hover:text-lime-400 transition duration-500">
                Try it for free
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
