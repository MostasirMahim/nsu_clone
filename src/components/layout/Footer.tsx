"use client"
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail, ArrowUp, Printer } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-[#000d26] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-0">
          
          {/* Left Column: Info */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-wide">North South University</h2>
              <p className="text-xl italic font-serif opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                Center of Excellence in Higher Education
              </p>
            </div>

            <div className="space-y-3 text-sm md:text-base opacity-90">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Bashundhara, Dhaka-1229, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+880-2-55668200</span>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="h-5 w-5" />
                <span>+880-2-55668202</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:registrar@northsouth.edu" className="hover:underline transition-all">
                  registrar@northsouth.edu
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Social & Copyright */}
          <div className="flex flex-col items-start lg:items-end space-y-8">
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="p-2 border border-white/40 rounded-md hover:bg-white/10 transition-all"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright Info */}
            <div className="text-left lg:text-right space-y-1 text-sm opacity-90 font-medium">
              <p>Developed & Maintained By IT Office, NSU</p>
              <p>© 1993-2026 NSU, All Right Reserved.</p>
            </div>

            {/* Scroll to Top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="lg:self-end mt-4 p-2 transition-transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
