"use client";
// compound components

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

type ChildrenAndClassName = {
  children: React.ReactNode;
  className: string;
};

interface MotionElements extends ChildrenAndClassName {
  variants: Variants;
}
interface ListItem extends MotionElements {
  onClick?: () => void;
}

type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("use the useMenu hook inside the Menu context component");
  }
  return context;
};

const Menu = ({ children, className }: ChildrenAndClassName) => {
  const [toggle, setToggle] = useState(false);
  const value = { toggle, setToggle };
  useEffect(() => {
    if (window.screen.width >= 1024) {
      setToggle(true);
    }
  }, []);
  return (
    <MenuContext.Provider value={value}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuToggleButton = ({
  children,
  className,
  variants,
}: {
  children: React.ReactElement;
  className: string;
  variants: Variants;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <motion.button
      initial={"close"}
      animate={toggle ? "open" : "close"}
      variants={variants}
      className={className}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

const MenuList = ({ children, className, variants }: MotionElements) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          variants={variants}
          initial={"close"}
          animate={"open"}
          exit={"close"}
          className={className}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({ children, className, variants, onClick }: ListItem) => {
  return (
    <motion.li onClick={onClick} className={className} variants={variants}>
      {children}
    </motion.li>
  );
};

export { Menu, MenuToggleButton, MenuList, MenuListItem };
