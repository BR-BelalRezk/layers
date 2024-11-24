import { transition } from "@/constants";
import { Menu, MenuList } from "./Menu";
import NavbarItems from "./NavbarItems";

export default function DesktopNavbar() {
  return (
    <Menu className=" hidden lg:block">
      <MenuList
        variants={{
          open: {
            transition: {
              ...transition,
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: { transition: transition },
        }}
        className="flex items-center justify-center gap-5 capitalize"
      >
        <NavbarItems layoutId="desktop" />
      </MenuList>
    </Menu>
  );
}
