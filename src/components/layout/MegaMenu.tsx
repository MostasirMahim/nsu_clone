"use client";

import Link from "next/link";
import type { MegaMenuColumn } from "@/data/mega-menu-data";

interface MegaMenuProps {
  columns: MegaMenuColumn[];
}

export function MegaMenu({ columns }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 right-0 max-w-[1200px] mx-auto bg-[#061742] z-40 border-t border-white/10">
      <div className="px-6 lg:px-8 py-8">
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: `repeat(${Math.min(columns.length, 4)}, 1fr)`,
          }}
        >
          {columns.map((col, idx) => (
            <div key={idx}>
              {/* Column Title with white bottom border */}
              <h3 className="text-white text-sm font-semibold tracking-wide pb-3 mb-4 border-b border-white/50">
                {col.title}
              </h3>

              {/* Menu Items */}
              <ul className="space-y-2.5">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-gray-300/90 text-sm hover:bg-[#1a6b8a]/50 hover:text-white px-2 py-2 -mx-2 rounded-sm transition-all duration-200"
                    >
                      <span className="mr-2 text-gray-400 group-hover:text-white">
                        –
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
