"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, CheckCircle2, Download, ExternalLink, Award } from "lucide-react";

export default function AssessmentModal({ isOpen, onClose, data }: any) {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b p-6 flex justify-between items-center z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-p-indigo rounded-lg text-p-indigo-text">
                <FileText size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-800">{data.title}</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition"><X size={24} /></button>
          </div>

          <div className="p-8 grid lg:grid-cols-2 gap-12">
            {/* KIRI: PDF PREVIEW */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border-4 border-slate-50 shadow-xl bg-slate-100 aspect-[3/4]">
                <iframe src={`${data.pdfUrl}#toolbar=0`} className="w-full h-full" title="PDF Preview" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a href={data.pdfUrl} target="_blank" className="flex items-center justify-center gap-2 py-4 bg-p-indigo text-p-indigo-text rounded-2xl font-bold hover:bg-indigo-200 transition-all text-sm">
                  <ExternalLink size={18} /> Buka Full
                </a>
                <a href={data.pdfUrl} download className="flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all text-sm">
                  <Download size={18} /> Unduh PDF
                </a>
              </div>
            </div>

            {/* KANAN: GARIS BESAR PENILAIAN */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-p-indigo to-indigo-50 p-8 rounded-[2rem] border border-p-indigo">
                <p className="text-p-indigo-text font-bold uppercase tracking-widest text-xs mb-2">Akumulasi Nilai</p>
                <h3 className="text-6xl font-black text-p-indigo-text">{data.score}</h3>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <Award className="text-p-indigo-text" /> Garis Besar Penilaian
                </h4>
                
                <div className="space-y-4">
                  {data.outline?.map((point: string, index: number) => (
                    <div key={index} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-p-indigo transition-colors">
                      <div className="mt-1">
                        <CheckCircle2 size={20} className="text-p-emerald-text" />
                      </div>
                      <p className="text-slate-700 leading-relaxed font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-p-rose/20 rounded-2xl border border-p-rose/30">
                <p className="text-sm text-p-rose-text italic font-medium">
                  * Penilaian dilakukan secara bertahap untuk melihat progres linier mahasiswa selama PPL Terbimbing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}