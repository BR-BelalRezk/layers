import { faqs } from "@/constants";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";
type Props = {
  item: (typeof faqs)[number];
  onClick: () => void;
  selectedIndex: number;
  index: number;
};

const variants: Variants = {
  open: { height: "auto", marginTop: 24 },
  close: { height: 0, marginTop: 0 },
};
export default function FAQ({ item, onClick, selectedIndex, index }: Props) {
  return (
    <li
      onClick={onClick}
      className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{item.question}</h3>
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
          className={twMerge(
            "feather feather-plus text-lime-400 flex-shrink-0 transition duration-500",
            index === selectedIndex && "rotate-45"
          )}
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>

      <AnimatePresence mode="wait">
        {index === selectedIndex && (
          <motion.div
            className="overflow-hidden"
            variants={variants}
            initial={"close"}
            animate={"open"}
            exit={"close"}
          >
            <p className="text-white/50">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
