"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

/**
 * AchievementsNew Component
 * 
 * Features:
 * 1. 3:1 Split layout on desktop
 * 2. Left side: Smooth auto-scrolling rankings/notices
 * 3. Right side: Jump-sliding accreditations
 */

const rankingData = [
  {
    id: 1,
    platform: "QS World",
    detail: "University Rankings: 2025, 2024 (#1 Private University) 2023, 2022 (Jointly #1 Private University)",
  },
  {
    id: 2,
    platform: "QS Asia",
    detail: "University Rankings: 2025, 2024, 2023, 2022, 2021, 2020 (#1 Private University)",
  },
  {
    id: 3,
    platform: "Times Higher Education",
    detail: "World University Rankings: 2024, 2023 Top Ranked Private University in Bangladesh",
  },
  {
    id: 4,
    platform: "Webometrics",
    detail: "Ranking Web of Universities: Top Ranked Private Institution in Bangladesh 2024",
  },
];

const accreditationImages = [
  "/assets/accor.png",
  "/assets/accor.png",
  "/assets/accor.png",
];

export function Achievements() {
  const [accreditationIndex, setAccreditationIndex] = useState(0);
  const scrollingRef = useRef<HTMLDivElement>(null);

  // Auto-slide for Accreditations (Right side)
  useEffect(() => {
    const timer = setInterval(() => {
      setAccreditationIndex((prev) => (prev + 1) % accreditationImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-10 bg-white/70 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0c2b4b] text-center whitespace-nowrap">
            Achievements
          </h2>
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side: Rankings (3x width) */}
          <div className="lg:col-span-3 bg-white shadow-lg overflow-hidden flex flex-col items-center p-4 lg:p-4 relative h-[250px]">
            <h3 className="text-[#a37d32] text-lg lg:text-xl font-bold text-center mb-6 max-w-4xl leading-relaxed px-4">
              NSU&apos;s position in Bangladesh according to the following international ranking platforms
            </h3>

            <div className="w-full relative h-[100px] overflow-hidden px-6">
              <div 
                className="absolute w-full space-y-8 animate-scroll-up"
                style={{ animation: 'scroll-up 20s linear infinite' }}
              >
                {/* Double the data for seamless loop */}
                {[...rankingData, ...rankingData].map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex items-start gap-2 group">
                    <ChevronRight className="w-6 h-6 text-[#a37d32] mt-1 shrink-0" />
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <span className="font-extrabold text-[#0c2b4b]">{item.platform}</span>{" "}
                      <span className="text-[#64748b]">{item.detail}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <style jsx>{`
              @keyframes scroll-up {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
              .animate-scroll-up {
                animation: scroll-up 20s linear infinite;
              }
            `}</style>
          </div>

          {/* Right Side: Accreditations (1x width) */}
          <div className="lg:col-span-1 flex flex-col ">
            <div className="bg-white shadow-lg h-[205px] ">
              <div className="p-2 border-b border-gray-100">
                <h3 className="text-[#0c2b4b] text-xl font-bold text-center uppercase tracking-wider">
                  Accreditations
                </h3>
              </div>
              <div className="bg-slate-50 p-8 flex items-center justify-center relative overflow-hidden h-full min-h-[200px]">
                <div className="relative w-full h-[200px]">
                  {accreditationImages.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center
                        ${index === accreditationIndex 
                          ? "translate-y-0 opacity-100" 
                          : index < accreditationIndex 
                            ? "-translate-y-full opacity-0" 
                            : "translate-y-full opacity-0"}
                      `}
                    >
                      <div className="bg-white p-4 shadow-xl border border-gray-100">
                        <img 
                          src={src} 
                          alt="Accreditation Logo" 
                          className="max-w-[180px] h-auto grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
