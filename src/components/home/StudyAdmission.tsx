"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface StudyCardProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const studyData = [
  {
    title: "Undergraduate Study",
    links: [
      { label: "Undergraduate Programs", href: "#" },
      { label: "Admission Requirement", href: "#" },
      { label: "Apply Online", href: "#" },
    ],
  },
  {
    title: "Graduate Study",
    links: [
      { label: "Graduate Study", href: "#" },
      { label: "Admission Requirement", href: "#" },
      { label: "Apply Online", href: "#" },
    ],
  },
  {
    title: "International Students",
    links: [
      { label: "Explore Programs", href: "#" },
      { label: "Scholarships", href: "#" },
      { label: "Apply Now", href: "#" },
    ],
  },
];

function StudyCard({ title, links }: StudyCardProps) {
  return (
    <div className="bg-white p-4 lg:p-6 shadow-sm flex flex-col items-center">
      <div className="text-[#0c2b4b]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 640 512"
          className="w-16 h-16 fill-current"
        >
          <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"/>
        </svg>
      </div>
      <h3 className="text-[#0c2b4b] text-2xl font-bold mb-8 text-center">{title}</h3>
      <div className="w-full space-y-2 mb-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex items-center justify-between w-full py-2 px-6 bg-[#f1f5f9] group hover:bg-[#0f1d40] transition-colors duration-300"
          >
            <span className="text-[#0f1d40] font-semibold group-hover:text-white transition-colors duration-300">
              {link.label}
            </span>
            <ChevronRight className="w-5 h-5 text-[#0c2b4b] group-hover:text-white transition-colors duration-300" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function StudyAdmission() {
  return (
    <section className="relative py-10 bg-white/70 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f1d40] text-center whitespace-nowrap">
            Study & Admission
          </h2>
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyData.map((item, index) => (
            <StudyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
