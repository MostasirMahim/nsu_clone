"use client";

import * as React from "react";
import Image from "next/image";
import { TopBar } from "./TopBar";
import { MobileNav } from "./MobileNav";
import { MegaMenu } from "./MegaMenu";
import { megaMenuData } from "@/data/mega-menu-data";
import { Work_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const navItems = [
  { label: "About", hasDropdown: true },
  { label: "Academic", hasDropdown: true },
  { label: "Faculty", hasDropdown: true },
  { label: "Offices", hasDropdown: true },
  { label: "Admission", hasDropdown: true },
  { label: "NSU Online", hasDropdown: true },
  { label: "Alumni", hasDropdown: false, href: "/alumni" },
  { label: "Research", hasDropdown: false, href: "/research" },
  { label: "Useful Links", hasDropdown: true },
];

function DropdownChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "ml-1 opacity-80 transition-transform duration-300",
        isOpen && "rotate-180"
      )}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "w-full z-50 transition-all duration-300",
        isScrolled ? "fixed top-0 left-0 shadow-lg animate-slideDown" : "relative"
      )}
    >
      {!isScrolled && <TopBar />}
      <div className={`${workSans.className} bg-[#061742] relative`}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px] lg:h-[100px]">
            {/* Logo */}
            <div className="relative z-10 shrink-0">
              <Image
                src="/assets/logo.png"
                alt="North South University"
                width={100}
                height={100}
                className="object-contain w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 text-white text-[15px] font-[500] tracking-wide">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center cursor-pointer px-3 py-2 transition-colors duration-200 select-none",
                    activeMenu === item.label && "bg-white/10"
                  )}
                  onClick={() => {
                    if (item.hasDropdown) {
                      toggleMenu(item.label);
                    }
                  }}
                >
                  {item.hasDropdown ? (
                    <>
                      <span>{item.label}</span>
                      <DropdownChevron isOpen={activeMenu === item.label} />
                    </>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>

        {/* Mega Menu Dropdown - rendered inside the bg container for seamless connection */}
        {activeMenu && megaMenuData[activeMenu] && (
          <MegaMenu columns={megaMenuData[activeMenu]} />
        )}
      </div>
    </header>
  );
}
