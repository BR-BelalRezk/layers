"use client";

import { navbarItems } from "@/constants";
import { createContext, useContext, useState } from "react";

type ActiveSection = (typeof navbarItems)[number];
type ActiveSectionContextType = {
  activeSection: ActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
};
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "use the useActiveSection hook inside the ActiveSection context component"
    );
  }
  return context;
};

export default function ActiveSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<ActiveSection>("home");
  const value = { activeSection, setActiveSection };
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
