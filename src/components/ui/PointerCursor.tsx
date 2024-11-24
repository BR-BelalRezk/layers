import { AnimationScope, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
type Props = {
  name: string;
  color: "red" | "blue";
  className: string;
  scope: AnimationScope<HTMLElement>;
  initial: { opacity?: number; y?: number; x?: number };
};

export default function PointerCursor({
  name,
  color,
  className,
  scope,
  initial,
}: Props) {
  return (
    <motion.figure
      initial={initial}
      ref={scope}
      className={twMerge("absolute hidden lg:block", className)}
    >
      <div className=" relative">
        <MouseSVG />
        <figcaption className=" absolute top-full left-full">
          <p
            className={twMerge(
              "inline-flex rounded-full rounded-tl-none font-bold text-sm px-2 capitalize",
              color === "red" ? "bg-red-500" : "bg-blue-500"
            )}
          >
            {name}
          </p>
        </figcaption>
      </div>
    </motion.figure>
  );
}

const MouseSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-mouse-pointer text-white size-5"
  >
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
    <path d="M13 13l6 6" />
  </svg>
);
