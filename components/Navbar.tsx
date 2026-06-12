"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { NAV_LINKS } from "@/data/content"; // <-- Pastikan baris ini ada

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-violet-700">
          <GraduationCap size={32} />
          <span>E-Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => ( // <-- Map dari NAV_LINKS
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-slate-600 hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute w-full left-0 p-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium py-2 border-b border-slate-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}