import { featureCards, features } from "@/constants";
import Section from "../ui/Section";
import Tag from "../ui/Tag";
import FeatureCard from "../ui/FeatureCard";

export default function Features() {
  return (
    <Section id="features" className="py-24">
      <div className="container px-2.5">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <ul className="mt-12  grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-5">
          {featureCards.map((item, index) => (
            <FeatureCard
              index={index}
              key={index}
              title={item.title}
              description={item.description}
              className={
                index !== 2
                  ? "md:col-span-2 xl:col-span-1"
                  : "xl:col-span-1 xl:col-start-auto md:col-span-2 md:col-start-2"
              }
            />
          ))}
        </ul>
        <ul className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((item) => (
            <li
              className="bg-neutral-900 border hover:scale-105 transition duration-500 group gap-3 items-center border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl"
              key={item}
            >
              <span className="bg-lime-400 group-hover:rotate-45 transition duration-500 text-xl text-neutral-950 size-5 rounded-full inline-flex items-center justify-center">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
