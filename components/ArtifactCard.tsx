"use client";
import { FileText, ArrowRight } from "lucide-react";

export default function ArtifactCard({ item }: any) {
  // Logic warna background berdasarkan kategori agar bervariasi
  const getBgColor = (cat: string) => {
    switch (cat) {
      case "Perangkat": return "bg-p-indigo";
      case "Media": return "bg-p-emerald";
      default: return "bg-p-rose";
    }
  };

  return (
    <div className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 flex flex-col h-full">
      
      {/* BAGIAN ATAS: Deskripsi Singkat (Ganti Gambar) */}
      <div className={`relative h-48 p-8 ${getBgColor(item.category)} transition-colors duration-500`}>
        {/* Badge Kategori */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-widest">
            {item.category}
          </span>
        </div>

        {/* Konten Deskripsi Singkat sebagai Pengganti Gambar */}
        <div className="flex items-center justify-center h-full text-center">
           <p className="text-slate-700 italic text-sm line-clamp-4 leading-relaxed font-medium">
             "{item.description || item.analysis?.context?.substring(0, 120) + "..."}"
           </p>
        </div>
        
        {/* Dekorasi Ornamen Halus */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
      </div>

      {/* BAGIAN BAWAH: Judul & Tombol */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div className="mb-6">
          <h3 className="font-bold text-xl mb-3 text-slate-800 group-hover:text-p-indigo-text transition-colors">
            {item.title}
          </h3>
          <div className="h-1 w-12 bg-p-indigo-text/20 rounded-full group-hover:w-20 transition-all duration-500"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-p-indigo-text hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95">
          <FileText size={18} /> 
          <span>Detail Analisis</span>
          <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
}