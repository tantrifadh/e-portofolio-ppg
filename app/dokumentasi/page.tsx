"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import DocCard from "@/components/DocCard"; // Import komponen baru
import { DOKUMENTASI_LIST } from "@/data/content";

export default function DokumentasiPage() {
  const [filter, setFilter] = useState("Semua");
  const [lightbox, setLightbox] = useState<any>(null); // State untuk gambar yang diperbesar

  const filteredData = filter === "Semua" 
    ? DOKUMENTASI_LIST 
    : DOKUMENTASI_LIST.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <Breadcrumbs />
      
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-6">Dokumentasi Kegiatan</h1>
        {/* ... (Gunakan filter chips yang sama seperti sebelumnya) ... */}
      </div>

      {/* Grid menggunakan komponen DocCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData?.map((item) => (
          <DocCard 
            key={item.id} 
            item={item} 
            onExpand={(imgUrl: string, data: any) => setLightbox({ url: imgUrl, title: data.title })} 
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
            >
              <img src={lightbox.url} className="max-h-[80vh] rounded-3xl shadow-2xl border-4 border-white/10" />
              <h2 className="text-white mt-6 text-xl font-bold">{lightbox.title}</h2>
              <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-white"><X size={32} /></button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}