"use client";

import { introText } from "@/constants";
import Tag from "../ui/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Intro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const words = introText.split(" ");
  const wordsIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  useEffect(() => {
    wordsIndex.on("change", (latest) => setCurrentWord(latest));
  }, [wordsIndex]);
  return (
    <section className="py-28 xl:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-24 lg:top-28 xl:top-32 2xl:top-36">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="text-4xl lg:text-6xl xl:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>{" "}
            <span>
              {words.map((word, index) => (
                <span
                  key={word}
                  className={twMerge(
                    " transition duration-500 text-white/15",
                    index < currentWord && "text-white"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-lime-400 block">
              That&apos;s why we built Layers.
            </span>
          </div>
        </div>
        <div ref={ref} className="h-[150vh]" />
      </div>
    </section>
  );
}
