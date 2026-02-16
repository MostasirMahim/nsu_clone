"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { megaMenuData } from "@/data/mega-menu-data";
import { cn } from "@/lib/utils";

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

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openMenus, setOpenMenus] = React.useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  // Close menu on escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden ml-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[70px] z-50 bg-[#061742] overflow-y-auto">
          <nav className="px-4 py-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.label)}
                      className="flex items-center justify-between w-full py-3.5 px-3 text-left text-white/90 hover:bg-white/5 border-b border-white/10 transition-colors"
                    >
                      <span className="font-medium text-[15px]">{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-white/60 transition-transform duration-300",
                          openMenus.includes(item.label) && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Submenu */}
                    {openMenus.includes(item.label) && megaMenuData[item.label] && (
                      <div className="bg-[#0a1f4a] px-3 py-3">
                        {megaMenuData[item.label].map((col, colIdx) => (
                          <div key={colIdx} className="mb-4 last:mb-0">
                            <h4 className="text-white/70 text-xs font-semibold tracking-wider uppercase pb-2 mb-2 border-b border-white/15">
                              {col.title}
                            </h4>
                            <ul className="space-y-1">
                              {col.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 px-3 text-sm text-gray-300/90 hover:bg-white/5 hover:text-white rounded transition-colors"
                                  >
                                    – {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center py-3.5 px-3 text-white/90 hover:bg-white/5 border-b border-white/10 transition-colors font-medium text-[15px]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
