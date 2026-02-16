"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Notices2 Component
 * 
 * Features:
 * 1. 3x2 Grid layout for notice cards
 * 2. Custom calendar SVG icon as provided
 * 3. Header with decorative side bars
 * 4. "View All" button at the bottom
 */

const noticesData = [
  { id: 1, title: "Ramadan Class Schedule - 2026", date: "16/02/2026" },
  { id: 2, title: "Board Scholarship Notice", date: "09/02/2026" },
  { id: 3, title: "Notice regarding class and bus service", date: "03/02/2026" },
  { id: 4, title: "Student Bus Service for Spring 2026", date: "22/01/2026" },
  { id: 5, title: "UG Fresher of Spring 2026: Please Collect the RFID Card", date: "15/01/2026" },
  { id: 6, title: "Online Course Registration - Spring 2026", date: "07/01/2026" },
];

const CalendarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className="w-10 h-10 text-[#0c2b4b]"
    fill="currentColor"
  >
    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/>
  </svg>
);

export function Notices() {
  return (
    <section 
    style={{ backgroundImage: "url('/assets/bg-notice.png')" }}
      className="relative py-20 bg-cover bg-center"
      
    >
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0c2b4b] text-center whitespace-nowrap">
            Notices
          </h2>
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {noticesData.map((notice) => (
            <div 
              key={notice.id} 
              className="bg-white p-8 shadow-sm flex items-start gap-6 group border-b-4 border-transparent"
            >
              <div className="shrink-0 mt-1">
                <CalendarIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[#0c2b4b] font-bold text-xl leading-snug transition-colors line-clamp-2">
                  {notice.title}
                </h4>
                <div className="text-[#a17a2e] font-bold text-base">
                  {notice.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer: View All Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/notices"
            className="flex items-center gap-3 bg-[#0c2b4b] text-white px-10 py-4 hover:bg-[#0a1f36] transition-all duration-300 group"
          >
            <span className="font-bold uppercase tracking-wider text-sm">View All</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
