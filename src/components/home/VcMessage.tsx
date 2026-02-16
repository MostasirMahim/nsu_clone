"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * VcMessage2 Component (Compact & Infinite)
 * 
 * Features:
 * 1. Dark blue gradient background
 * 2. Infinite horizontal sliding transition
 * 3. Compact design with reduced padding
 * 4. Navigation arrows INSIDE the white box
 */

const vcMessages = [
  {
    id: 1,
    name: "Professor Dr. Abdul Hannan Chowdhury",
    title: "Vice-Chancellor",
    image: "/assets/vc.png",
    message: "Welcome to North South University (NSU), and it is indeed a great pleasure for me to address you here. Established in 1992 as the first private university in Bangladesh, NSU has grown into a leading center of excellence in higher education, known for its academic programs and contributions to research and community development. Today, this center, our university, has earned the trust of people, both nationally and internationally.",
  },
  {
    id: 2,
    name: "Professor Dr. Abdul Hannan Chowdhury", 
    title: "Vice-Chancellor",
    image: "/assets/vc.png",
    message: "Our commitment to academic excellence and research innovation remains our top priority. We strive to provide a world-class education that prepares our students for the challenges of a globalized world. NSU continues to foster a vibrant learning community where creativity and critical thinking flourish.",
  },
];

export function VcMessage() {
  // For infinite loop, we clone the slides
  const extendedMessages = [vcMessages[vcMessages.length - 1], ...vcMessages, vcMessages[0]];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle seamless loop jump
  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        setCurrentIndex(vcMessages.length);
      } else if (currentIndex === extendedMessages.length - 1) {
        setCurrentIndex(1);
      }
    }, 700);

    return () => clearTimeout(timeout);
  }, [currentIndex, isTransitioning, extendedMessages.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const onManualNav = (dir: "next" | "prev") => {
    if (dir === "next") handleNext();
    else handlePrev();
    startTimer(); // Reset timer on manual interaction
  };

  return (
    <section className="relative py-12 bg-linear-to-r from-[#0c2b4b] to-[#041221] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="relative max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden rounded-sm">
          {/* Navigation Buttons - Now inside the white box */}
          <button 
            onClick={() => onManualNav("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-[#0c2b4b] text-white p-2.5 shadow-md hover:bg-[#a37d32] transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => onManualNav("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-[#0c2b4b] text-white p-2.5 shadow-md hover:bg-[#a37d32] transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Sliding Content Container */}
          <div 
            className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {extendedMessages.map((msg, idx) => (
              <div key={`${msg.id}-${idx}`} className="min-w-full p-6 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left side: Image and Name */}
                <div className="w-56 flex flex-col items-center shrink-0">
                  <div className="relative w-48 h-56 mb-4">
                    <div className="absolute inset-0 bg-gray-200 rounded-[40px] overflow-hidden">
                      <img 
                        src={msg.image} 
                        alt={msg.name}
                        className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                  <h3 className="text-[#0c2b4b] text-xl font-bold text-center leading-tight">
                    {msg.name}
                  </h3>
                </div>

                {/* Right side: Message and Info */}
                <div className="flex-1">
                  <h2 className="text-[#0c2b4b] text-2xl lg:text-3xl font-bold mb-4">
                    Message from Vice-Chancellor
                  </h2>
                  <p className="text-[#64748b] text-base leading-relaxed mb-6 line-clamp-5">
                    {msg.message}
                  </p>

                  <div className="flex">
                    <button className="relative group px-8 py-3 bg-white border border-[#0c2b4b] overflow-hidden transition-all duration-300">
                      <span className="relative z-10 text-[#0c2b4b] group-hover:text-white font-bold uppercase tracking-wider text-[10px]">
                        Learn more
                      </span>
                      <div className="absolute inset-0 bg-[#0c2b4b] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <div className="absolute inset-[2px] border border-transparent group-hover:border-white/30 z-20 pointer-events-none" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
