"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const researchLinks = [
  { label: "Office of Research", href: "#" },
  { label: "All Published Journals", href: "#" },
  { label: "Publications Repository", href: "#" },
];

const cyclingData = [
  {
    id: 1,
    image: "/assets/slide-1.png",
    title: "Bangladesh to the World: NGRI's Role in Landmark Genomic Discoveries...",
  },
  {
    id: 2,
    image: "/assets/slide-2.png",
    title: "NSU Professor Co-Authors Nature Communications Study on Cholera Antimicrobial...",
  },
  {
    id: 3,
    image: "/assets/slide-1.png",
    title: "Future of Biotechnology: Advancements in CRISPR Technology...",
  },
  {
    id: 4,
    image: "/assets/slide-2.png",
    title: "Global Health Perspectives: Addressing the Next Pandemic...",
  },
];

function CyclingCard({ items, offset = 0 }: { items: typeof cyclingData; offset?: number }) {
  const [currentIndex, setCurrentIndex] = useState(offset % items.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [items.length]);

  const item = items[currentIndex];

  return (
    <div className="bg-white p-4 lg:p-6 shadow-sm flex flex-col items-center h-full group transition-all duration-500">
      <div className="w-full relative aspect-[16/10] overflow-hidden mb-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Progress indicator or simple fade effect can be added here */}
      </div>
      <h3 className="text-[#0c2b4b] text-lg font-bold text-center leading-tight line-clamp-3">
        {item.title}
      </h3>
    </div>
  );
}

export function ResearchSection() {
  return (
    <section className="relative py-10 bg-white/70 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0c2b4b] text-center whitespace-nowrap">
            Research & Journals
          </h2>
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Static Left Card */}
          <div className="bg-white p-4 lg:p-6 shadow-sm flex flex-col items-center">
            <div className="mb-4 text-[#0c2b4b]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512"
                className="w-16 h-16 fill-current"
              >
                <path d="M552 64H112c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h440c13.25 0 24-10.75 24-24V88c0-13.25-10.75-24-24-24zM128 120h48v48h-48v-48zm0 88h48v48h-48v-48zm400 152H128v-40h400v40zm0-80H208v-48h320v48zm0-88H208v-48h320v48zM40 448h440c13.25 0 24 10.75 24 24s-10.75 24-24 24H40c-22.09 0-40-17.91-40-40V120c0-13.25 10.75-24 24-24s24 10.75 24 24v328z"/>
              </svg>
            </div>
            <h3 className="text-[#0c2b4b] text-2xl font-bold mb-8 text-center uppercase tracking-tight">Research & Journals</h3>
            <div className="w-full space-y-2 mb-2">
              {researchLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between w-full py-3 px-6 bg-[#f1f5f9] group hover:bg-[#0c2b4b] transition-colors duration-300"
                >
                  <span className="text-[#0c2b4b] font-bold text-sm group-hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#0c2b4b] group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Cycling Right Cards */}
          <CyclingCard items={cyclingData} offset={0} />
          <CyclingCard items={cyclingData} offset={1} />
        </div>
      </div>
    </section>
  );
}
