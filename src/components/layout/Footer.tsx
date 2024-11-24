import logo from "@/assets/images/logo.svg";
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <figure>
            <Image src={logo} alt="logo" />
          </figure>
          <ul className="flex gap-6 items-center">
            {footerLinks.map((item) => (
              <li key={item.label} className="text-sm text-white/50">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
