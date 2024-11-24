"use client";

import Button from "../ui/Button";
import Section from "../ui/Section";
import design_1 from "@/assets/images/design-example-1.png";
import design_2 from "@/assets/images/design-example-2.png";
import HeroImage from "../ui/HeroImage";
import PointerCursor from "../ui/PointerCursor";
import cursor from "@/assets/images/cursor-you.svg";
import useHeroAnimation from "@/hooks/useHeroAnimation";

export default function Hero() {
  const {
    leftDesignScope,
    leftPointerScope,
    rightDesignScope,
    rightPointerScope,
  } = useHeroAnimation();
  return (
    <Section
      style={{ cursor: `url(${cursor.src}), auto` }}
      className="py-24 overflow-x-clip scroll-mt-96"
      id="home"
    >
      <div className="container relative">
        <HeroImage
          scope={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          src={design_1}
          alt="design_1"
          className=" absolute -left-32 top-16"
        />
        <PointerCursor
          initial={{ opacity: 0, y: 100, x: -200 }}
          scope={leftPointerScope}
          className="left-56 top-96"
          color="blue"
          name="belal"
        />
        <HeroImage
          scope={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          src={design_2}
          alt="design_2"
          className="absolute -right-64 -top-16"
        />
        <PointerCursor
          scope={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className=" right-80 -top-4"
          color="red"
          name="rezk"
        />
        <div className="flex justify-center">
          <span className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5 seed round raised
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl xl:text-8xl font-medium text-center mt-6">
          Impactful design, <br />
          created effortlessly
        </h1>
        <p className="text-center text-xl max-w-2xl mx-auto text-white/50 mt-8">
          Design tools shouldn&apos; slow you down.Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex items-center max-w-lg justify-center md:mx-auto mx-2.5 border border-white/15 rounded-full p-2 mt-8">
          <input
            className="bg-transparent px-4 md:flex-1 w-full"
            type="email"
            placeholder="Enter your email "
          />
          <Button
            size="sm"
            className="whitespace-nowrap"
            variant="primary"
            type="submit"
          >
            sign up
          </Button>
        </form>
      </div>
    </Section>
  );
}
