"use client";
import { faqs } from "@/constants";
import Section from "../ui/Section";
import Tag from "../ui/Tag";
import FAQ from "../ui/FAQ";
import { useState } from "react";

export default function FAQs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Section id="faqs" className="py-24">
      <div className="container px-2.5">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We've got <span className="text-lime-400">answers</span>
        </h2>
        <ul className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((item, index) => (
            <FAQ
              selectedIndex={selectedIndex}
              index={index}
              onClick={() => setSelectedIndex(index)}
              key={item.question}
              item={item}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}
