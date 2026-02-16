"use client";

import Link from "next/link";
import {
  CalendarDays,
  BadgeCheck,
  Monitor,
  Briefcase,
  BookUser,
  FileText,
} from "lucide-react";

const quickLinksData = [
  {
    id: 1,
    title: "Scheduled Events",
    icon: <CalendarDays className="h-6 w-6" />,
    href: "#",
  },
  {
    id: 2,
    title: "Degree Verification",
    icon: <BadgeCheck className="h-6 w-6" />,
    href: "#",
  },
  {
    id: 3,
    title: "Admissions Online",
    icon: <Monitor className="h-6 w-6" />,
    href: "#",
  },
  {
    id: 4,
    title: "Career Opportunity",
    icon: <Briefcase className="h-6 w-6" />,
    href: "#",
  },
  {
    id: 5,
    title: "Administrative Directory",
    icon: <BookUser className="h-6 w-6" />,
    href: "#",
  },
  {
    id: 6,
    title: "Tender Notice",
    icon: <FileText className="h-6 w-6" />,
    href: "#",
  },
];

export function QuickLinks() {
  return (
    <section className="pt-16 bg-white/70  flex items-center">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 lg:gap-0 shadow-lg lg:shadow-xl">
          {quickLinksData.map((link, index) => (
            <Link
              key={link.id}
              href={link.href}
              className={`group flex items-center p-10 bg-white hover:bg-gray-50 transition-all duration-300
                ${
                  index !== quickLinksData.length - 1
                    ? "lg:border-r lg:border-gray-200"
                    : ""
                }
              `}
            >
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-[#0f1d40] text-white rounded-md mr-4 group-hover:bg-[#1a2d5c] transition-colors">
                {link.icon}
              </div>
              <span className="text-[#0f1d40] font-bold text-sm lg:text-xs xl:text-sm leading-tight group-hover:text-[#1a2d5c] transition-colors">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
