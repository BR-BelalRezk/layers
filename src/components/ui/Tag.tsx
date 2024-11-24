import { twMerge } from "tailwind-merge";

export default function Tag(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex border border-lime-400 gap-2 items-center text-lime-400 px-3 py-1 rounded-full uppercase",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
