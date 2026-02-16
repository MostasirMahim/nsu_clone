"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MainHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center md:items-start px-4 md:px-16 lg:px-24 text-center md:text-left">
        <div className="max-w-4xl space-y-8 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Step Up With <br /> Admission
          </h1>

          <div className="flex flex-col gap-4 items-center md:items-start w-full max-w-md">
            <Button
              asChild
              className="bg-[#0f1d40] hover:bg-[#0f1d40]/90 text-white text-base md:text-lg h-14 w-auto min-w-[200px] px-8 rounded-none font-medium transition-all duration-300"
            >
              <Link href="#">Apply for Admission</Link>
            </Button>

            <Button
              asChild
              className="bg-white hover:bg-white/90 text-black text-base md:text-lg h-14 w-auto min-w-[280px] px-8 rounded-none font-medium transition-all duration-300"
            >
              <Link href="#">International Applicants (Grad)</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
