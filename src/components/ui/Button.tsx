import { cva } from "class-variance-authority";

const classes = cva("rounded-full h-12 px-6 font-medium border", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secondary:
        "lg:border-white/15 border-neutral-950 text-neutral-950 lg:text-neutral-50 bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, children } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
    >
      {children}
    </button>
  );
}
