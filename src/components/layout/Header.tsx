import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import AccountButtons from "./AccountButtons";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
export default function Header() {
  return (
    <header className="py-4 px-2.5 lg:py-8 sticky top-0 z-50">
      <nav className="container max-w-5xl">
        <div className="flex items-center overflow-x-clip backdrop-blur justify-between w-full border border-white/15 rounded-full py-2 px-4">
          <figure className="h-9 w-auto md:h-auto">
            <Image className="size-full ml-2" src={logo} alt="logo-layers" />
          </figure>
          <MobileNavbar />
          <DesktopNavbar />
          <div className="lg:flex items-center justify-center gap-4 hidden">
            <AccountButtons />
          </div>
        </div>
      </nav>
    </header>
  );
}
