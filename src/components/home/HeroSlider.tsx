"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const bannerImages = [

  "/assets/banner_1.jpg",
  "/assets/banner_1.jpg",
  "/assets/banner_1.jpg",
  "/assets/banner_1.jpg",
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section 
      className="relative w-full py-8 md:py-12 lg:py-16 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-5xl mx-auto px-4 relative flex items-center justify-center">
        {/* Navigation Arrows - Absolute to container */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-4 z-20 p-2 md:p-3 bg-[#001838] hover:bg-[#002855] text-white transition-all duration-300 rounded-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        {/* Centered Image Container */}
        <div className="relative w-full max-w-3xl aspect-video md:aspect-2/1 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-sm border-[6px] border-white/20">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-4 z-20 p-2 md:p-3 bg-[#001838] hover:bg-[#002855] text-white transition-all duration-300 rounded-md"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      </div>
    </section>
  );
}
