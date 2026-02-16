"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * LatestNews2 Component
 * 
 * Features:
 * 1. Stepped auto-sliding carousel (One by one)
 * 2. 4 columns visible on desktop
 * 3. Decreased spacing between image and title
 * 4. Premium "View All" button
 */

const newsData = [
  {
    id: 1,
    title: "United Nations Day: Critical Review and Evaluation of UN Reform",
    date: "29/10/2025",
    image: "/assets/slide-1.png",
  },
  {
    id: 2,
    title: "Dhaka-China Day 2025: Celebrating Friendship, Culture, and Growth",
    date: "05/10/2025",
    image: "/assets/slide-2.png",
  },
  {
    id: 3,
    title: "CPS Organized a Seminar on \"Global Peace and Harmony: The Way Forward\"",
    date: "25/09/2025",
    image: "/assets/slide-1.png",
  },
  {
    id: 4,
    title: "SIPG of NSU Convenes High-Level Policy Dialogue on Sustainable Future",
    date: "23/09/2025",
    image: "/assets/slide-2.png",
  },
  {
    id: 5,
    title: "NSU Research Excellence: Breaking Barriers in International Journals",
    date: "15/09/2025",
    image: "/assets/slide-1.png",
  },
];

function NewsCard({ title, date, image }: { title: string; date: string; image: string }) {
  return (
    <div className="flex-none w-full md:w-1/2 lg:w-1/4 px-2">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full group cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h4 className="text-[#0c2b4b] text-sm md:text-base font-bold mb-2 line-clamp-2 leading-tight group-hover:text-[#a37d32] transition-colors">
            {title}
          </h4>
          <div className="mt-auto pt-2 flex justify-between items-center border-t border-gray-100">
            <span className="text-[#a37d32] font-semibold text-xs">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LatestNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsData.length);
    }, 4000); // 4 seconds for readability, shifting one by one
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-10 bg-white/70 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0c2b4b] text-center whitespace-nowrap">
            Latest News
          </h2>
          <div className="hidden lg:block h-px bg-[#0f1d40]/40 flex-1 max-w-[50px]" />
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="carousel-container flex">
            {/* Double the data for smooth loop feel */}
            {[...newsData, ...newsData].map((news, idx) => (
              <NewsCard 
                key={`${news.id}-${idx}`} 
                title={news.title} 
                date={news.date} 
                image={news.image} 
              />
            ))}
          </div>
        </div>

        {/* Footer: View All Button */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/news"
            className="flex items-center gap-3 bg-[#0c2b4b] text-white px-10 py-4 hover:bg-[#0a1f36] transition-all duration-300 group"
          >
            <span className="font-bold uppercase tracking-wider text-sm">View All</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-${currentIndex * (100 / 4)}%);
        }
        @media (max-width: 1024px) {
          .carousel-container {
            transform: translateX(-${currentIndex * (100 / 2)}%);
          }
        }
        @media (max-width: 768px) {
          .carousel-container {
            transform: translateX(-${currentIndex * 100}%);
          }
        }
      `}</style>
    </section>
  );
}
