import { avatars, keys } from "@/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import avatar_4 from "@/assets/images/avatar-owen-garcia.jpg";
type Props = {
  title: string;
  description: string;
  index: number;
  className: string;
};
export default function FeatureCard({
  title,
  description,
  index,
  className,
}: Props) {
  const children =
    index === 0 ? (
      <FeatureCardOne />
    ) : index === 1 ? (
      <FeatureCardTwo />
    ) : (
      <FeatureCardThree />
    );

  return (
    <li
      className={twMerge(
        "bg-neutral-900 border group border-white/10 p-6 rounded-3xl",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <article>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white-50 mt-2">{description}</p>
      </article>
    </li>
  );
}

const FeatureCardOne = () => (
  <div className=" aspect-video flex items-center justify-center">
    {avatars.map((item, index) => (
      <figure
        key={index}
        className={twMerge(
          "size-20 rounded-full overflow-hidden border-4 p-1 bg-neutral-900",
          index === 0 && "border-blue-500 z-40",
          index === 1 && "border-indigo-500 -ml-6 z-30",
          index === 2 && "border-amber-500 -ml-6 z-20"
        )}
      >
        <Image className="rounded-full" src={item} alt="avatar" />
      </figure>
    ))}
    <div className="-ml-6 rounded-full size-20 overflow-hidden p-1 group-hover:border-green-500 border-4 border-transparent transition duration-500">
      <div className="size-full relative bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
        <Image
          src={avatar_4}
          alt="avatar"
          className=" absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition duration-500"
        />
        {Array.from({ length: 3 }, (_, index) => index).map((index) => (
          <span
            key={index}
            className="size-1.5 rounded-full bg-white inline-flex"
          />
        ))}
      </div>
    </div>
  </div>
);

const FeatureCardTwo = () => (
  <div className=" aspect-video flex items-center justify-center ">
    <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/75 transition duration-500 text-center">
      We&apos;ve achieved{" "}
      <span className="realtive group-hover:opacity-50 transition  bg-gradient-to-r duration-500 from-purple-400 to-pink-400 bg-clip-text text-transparent">
        incredible
      </span>{" "}
      growth this year
    </p>
  </div>
);
const FeatureCardThree = () => (
  <div className="aspect-video flex items-center justify-center gap-5">
    {keys.map((item, index) => (
      <Key
        key={item}
        text={item}
        className={twMerge(
          "group-hover:outline-lime-400 outline-transparent outline-2 outline transition-all duration-500 outline-offset-4 group-hover:translate-y-1",
          index === 0 ? "w-28" : index === 1 ? "delay-150" : "delay-300"
        )}
      />
    ))}
  </div>
);

const Key = ({ text, className }: { text: string; className?: string }) => (
  <div
    className={twMerge(
      "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium",
      className
    )}
  >
    {text}
  </div>
);
