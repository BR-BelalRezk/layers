"use client";

import { navbarItems } from "@/constants";
import { MenuListItem } from "./Menu";
import Link from "next/link";
import Active from "./Active";
import { useActiveSection } from "@/context/ActiveSection";
import AccountButtons from "./AccountButtons";

export default function NavbarItems({
  layoutId,
}: {
  layoutId: "mobile" | "desktop";
}) {
  const { activeSection, setActiveSection } = useActiveSection();
  return (
    <>
      {navbarItems.map((item) => (
        <MenuListItem
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 250, damping: 25 },
            },
            close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
          }}
          onClick={() => setActiveSection(item)}
          key={item}
          className="text-neutral-950 px-3 lg:py-1 relative w-full lg:w-auto lg:font-medium lg:text-neutral-50 flex items-center justify-between"
        >
          <Link href={`#${item}`} className=" relative z-40">
            {item === "faqs" ? "FAQs" : item}
          </Link>
          {activeSection === item && (
            <Active
              layoutId={layoutId}
              className="rounded-full size-3 bg-lime-500 lg:absolute lg:inset-0 lg:size-full z-10"
            />
          )}
        </MenuListItem>
      ))}
      <MenuListItem
        variants={{
          open: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 250,
              damping: 25,
            },
          },
          close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
        }}
        className="flex items-center justify-center gap-2 self-center lg:hidden"
      >
        <AccountButtons />
      </MenuListItem>
    </>
  );
}
