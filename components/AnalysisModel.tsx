"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Lightbulb, RefreshCcw, FileText, Download, ExternalLink } from "lucide-react";

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
          className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl"
        >
          {/* Close Button - Floating */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-p-rose text-slate-500 hover:text-p-rose-text rounded-full transition-all z-50"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-12">
            {/* Judul Artefak */}
            <div className="mb-10 max-w-[90%]">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                {data.title}
              </h2>
              <div className="h-2 w-24 bg-p-indigo mt-4 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* KIRI: PDF PREVIEW (2 Kolom) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="group relative rounded-3xl overflow-hidden border-4 border-slate-50 shadow-xl bg-slate-100 aspect-[3/4]">
                  {data.pdfUrl ? (
                    <iframe
                      src={`${data.pdfUrl}#toolbar=1`}
                      className="w-full h-full"
                      title="PDF Preview"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400">
                      <FileText size={64} className="mb-4 opacity-20" />
                      <p>Dokumen PDF tidak ditemukan</p>
                    </div>
                  )}
                </div>

                {/* Tombol Download & View */}
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={data.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 bg-p-indigo text-p-indigo-text rounded-2xl font-bold hover:bg-indigo-200 transition-all text-sm"
                  >
                    <ExternalLink size={18} /> Buka Full
                  </a>
                  <a 
                    href={data.pdfUrl} 
                    download
                    className="flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all text-sm"
                  >
                    <Download size={18} /> Unduh PDF
                  </a>
                </div>
              </div>

              {/* KANAN: ANALISIS (3 Kolom) */}
              <div className="lg:col-span-3 space-y-10">
                <section>
                  <h3 className="flex items-center gap-3 font-bold text-slate-800 mb-4 text-xl">
                    <div className="p-2 bg-p-indigo rounded-lg text-p-indigo-text">
                        <Target size={22} />
                    </div>
                    Konteks & Tujuan
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    {data.analysis.context}
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-p-emerald/40 rounded-[2rem] border border-p-emerald">
                    <h4 className="font-bold text-p-emerald-text mb-2 flex items-center gap-2 text-black">
                        🌟 Kelebihan
                    </h4>
                    <p className="text-sm text-p-emerald-text leading-relaxed font-medium text-black">
                        {data.analysis.strengths}
                    </p>
                  </div>
                  <div className="p-6 bg-p-rose/40 rounded-[2rem] border border-p-rose">
                    <h4 className="font-bold text-p-rose-text mb-2 flex items-center gap-2 text-black">
                        ⚠️ Kendala
                    </h4>
                    <p className="text-sm text-p-rose-text leading-relaxed font-medium text-black">
                        {data.analysis.weaknesses}
                    </p>
                  </div>
                </div>

                <section>
                  <h3 className="flex items-center gap-3 font-bold text-slate-800 mb-4 text-xl">
                    <div className="p-2 bg-p-amber rounded-lg text-p-amber-text">
                        <Lightbulb size={22} />
                    </div>
                    Refleksi Pribadi
                  </h3>
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-p-indigo-text rounded-full"></div>
                    <p className="text-slate-700 italic pl-8 py-2 text-lg leading-relaxed">
                        "{data.analysis.reflection}"
                    </p>
                  </div>
                </section>

                <section className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-lg shadow-slate-200">
                  <h3 className="flex items-center gap-3 font-bold mb-4 text-xl text-p-indigo">
                    <RefreshCcw size={22} /> Rencana Perbaikan
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {data.analysis.improvement}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}