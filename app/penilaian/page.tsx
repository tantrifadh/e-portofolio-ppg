"use client";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AssessmentModal from "@/components/AssessmentModal";
import { DATA_PENILAIAN } from "@/data/content";
import { FileCheck, ChevronRight, Star } from "lucide-react";

export default function PenilaianPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <Breadcrumbs />
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Penilaian PPL</h1>
        <p className="text-slate-500 text-lg">Hasil evaluasi perangkat dan praktik mengajar oleh Guru Pamong serta DPL.</p>
      </div>

      <div className="grid gap-6">
        {DATA_PENILAIAN?.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelected(item)}
            className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100 transition-all cursor-pointer flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-p-indigo rounded-2xl flex items-center justify-center text-p-indigo-text group-hover:scale-110 transition">
                <FileCheck size={32} />
              </div>
              <div>
                {/* <span className="text-[10px] font-bold text-p-indigo-text uppercase tracking-[0.2em]">{item.category}</span> */}
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Skor Akhir</p>
                <div className="flex items-center gap-2">
                  <Star size={16} fill="#15803D" className="text-p-emerald-text" />
                  <span className="text-2xl font-black text-p-emerald-text text-slate-800">{item.score}</span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-full text-slate-300 group-hover:text-p-indigo-text group-hover:bg-p-indigo transition">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <AssessmentModal 
        isOpen={!!selected} 
        onClose={() => setSelected(null)} 
        data={selected} 
      />
    </div>
  );
}