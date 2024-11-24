import { motion } from "framer-motion";
type Props = {
  layoutId: string;
  className: string;
};
export default function Active({ layoutId, className }: Props) {
  return (
    <motion.span
      className={className}
      layoutId={layoutId}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
    />
  );
}
