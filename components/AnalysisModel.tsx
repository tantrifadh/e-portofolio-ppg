"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Book, Target, Lightbulb, RefreshCcw, FileText } from "lucide-react";

export default function AnalysisModal({ isOpen, onClose, data }: any) {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center z-10">
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">{data.category}</span>
              <h2 className="text-2xl font-bold text-slate-800">{data.title}</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition">
              <X size={24} />
            </button>
          </div>

          <div className="p-8 grid md:grid-cols-3 gap-8">
            {/* Kiri: Preview Artefak */}
            <div className="md:col-span-1 space-y-6">
              <div className="rounded-xl overflow-hidden border shadow-sm">
                <img src={data.image} alt="Preview" className="w-full h-48 object-cover" />
              </div>
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Book size={18} /> Kajian Teori
                </h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  {data.theories?.map((t: string, i: number) => (
                    <li key={i} className="flex gap-2"><span>•</span> {t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kanan: Analisis Mendalam (Rubrik Penilaian) */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
                  <Target className="text-blue-600" size={20} /> Konteks & Tujuan
                </h3>
                <p className="text-slate-600 leading-relaxed">{data.analysis.context}</p>
              </section>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">Kelebihan</h4>
                  <p className="text-sm text-green-700">{data.analysis.strengths}</p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-2">Kendala</h4>
                  <p className="text-sm text-red-700">{data.analysis.weaknesses}</p>
                </div>
              </div>

              <section>
                <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
                  <Lightbulb className="text-amber-500" size={20} /> Refleksi Pribadi
                </h3>
                <p className="text-slate-600 italic bg-slate-50 p-4 rounded-xl border-l-4 border-blue-600">
                  "{data.analysis.reflection}"
                </p>
              </section>

              <section>
                <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-3">
                  <RefreshCcw className="text-blue-600" size={20} /> Rencana Tindak Lanjut
                </h3>
                <p className="text-slate-600">{data.analysis.improvement}</p>
              </section>

              {/* Tombol Unduh/Link */}
              <div className="pt-6 border-t flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                  <FileText size={20} /> Lihat Dokumen Full (PDF)
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}