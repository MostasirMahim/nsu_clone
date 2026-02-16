"use client";

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

export function TopBar() {
  return (
    <div className={`${workSans.className} bg-[#183f78] text-white py-3 hidden lg:block border-b border-white/5`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-0 text-[14px] leading-[22px] font-[400] tracking-wide">
            <div className="cursor-pointer px-3">Publications</div>
            <div className="w-[1px] h-5.5 bg-white/50"></div>
            <div className="cursor-pointer px-3">International Students</div>
            <div className="w-[1px] h-5.5 bg-white/50"></div>
            <div className="cursor-pointer px-3">Academic Calendar</div>
            <div className="w-[1px] h-5.5 bg-white/50"></div>
            <div className="cursor-pointer px-3">Library</div>
            <div className="w-[1px] h-5.5 bg-white/50"></div>
            <div className="cursor-pointer px-3">Newsletters</div>
            <div className="w-[1px] h-5.5 bg-white/50"></div>
            <div className="cursor-pointer px-3">Journals</div>
            <div className="w-[1px] h-5.5 bg-white/50"></div>
            <div className="cursor-pointer px-3">Catalog</div>
            <div className="w-[1px] h-5.5 bg-white/50"></div>
            <div className="cursor-pointer px-3">Archive</div>
            <div className="w-[1px] h-5.5 bg-white/50"></div>
            <div className="cursor-pointer px-3">Contact Us</div>
            <div className="w-[1px] h-5.5 bg-white/50 mr-3"></div>
            
            <div className="relative flex items-center bg-white/20 rounded-full w-[100px] focus-within:w-[180px] transition-all duration-300 ease-in-out ml-1 overflow-hidden ">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent text-[12px] text-white placeholder-white/70 outline-none w-full px-3 py-[6px]"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white absolute right-2.5 shrink-0"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
