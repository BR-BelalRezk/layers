import { transition } from "@/constants";
import { Menu, MenuList, MenuToggleButton } from "./Menu";
import Hamburger from "./Hamburger";
import NavbarItems from "./NavbarItems";

export default function MobileNavbar() {
  return (
    <Menu className="relative lg:hidden">
      <MenuToggleButton
        variants={{
          open: { translateX: -15, translateY: 10, transition: transition },
          close: { translateX: 0, translateY: 0, transition: transition },
        }}
        className="flex lg:hidden flex-col items-center justify-center gap-1 size-9 bg-lime-100 rounded-full relative z-50"
      >
        <Hamburger />
      </MenuToggleButton>
      <MenuList
        variants={{
          open: {
            width: 225,
            height: 275,
            transition: {
              ...transition,
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: { width: 36, height: 36, transition: transition },
        }}
        className="rounded-3xl  absolute top-0 right-0 capitalize bg-lime-100 flex items-start justify-center gap-3 flex-col"
      >
        <NavbarItems layoutId="mobile" />
      </MenuList>
    </Menu>
  );
}
