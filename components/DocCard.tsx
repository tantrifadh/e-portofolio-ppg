"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function DocCard({ item, onExpand }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: any) => {
    e.stopPropagation(); // Agar tidak memicu modal Lightbox
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: any) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all">
      {/* CAROUSEL SECTION */}
      <div className="relative h-72 overflow-hidden bg-slate-200">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={item.images[currentIndex]}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => onExpand(item.images[currentIndex], item)}
          />
        </AnimatePresence>

        {/* Tombol Navigasi Carousel */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prevSlide}
            className="p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-800 hover:bg-white shadow-lg transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-800 hover:bg-white shadow-lg transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indikator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {item.images.map((_: any, idx: number) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Badge Kategori */}
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${
            item.category === "Mengajar" ? "bg-p-indigo/90 text-p-indigo-text" : "bg-p-emerald/90 text-p-emerald-text"
          }`}>
            {item.category}
          </span>
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="p-8">
        <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.description}</p>
        <button 
          onClick={() => onExpand(item.images[currentIndex], item)}
          className="flex items-center gap-2 text-xs font-bold text-p-indigo-text hover:gap-3 transition-all"
        >
          PERBESAR GAMBAR <Search size={14} />
        </button>
      </div>
    </div>
  );
}