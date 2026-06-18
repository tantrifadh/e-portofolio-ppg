"use client";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, MessageSquare, Quote, Star, GraduationCap } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { EPORTFOLIO_2_DATA } from "@/data/content";

export default function EPortfolio2Page() {
  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-background text-slate-900">
      <Breadcrumbs />

      {/* Header Halaman */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">E-Portfolio 2</h1>
        <div className="h-1.5 w-24 bg-p-indigo-text mx-auto rounded-full mb-6"></div>
        <p className="text-slate-500 text-lg">
          Sintesis pengalaman praktis, refleksi mendalam, dan ideologi pengajaran sebagai calon guru profesional.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* KOLOM KIRI: REFLEKSI AKHIR PPL */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-p-indigo rounded-2xl text-p-indigo-text shadow-sm">
              <Lightbulb size={28} />
            </div>
            <h2 className="text-3xl font-extrabold">Refleksi Akhir</h2>
          </div>

          <div className="space-y-6">
            {/* Pembelajaran */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <h4 className="flex items-center gap-2 font-bold text-p-indigo-text mb-4 uppercase tracking-widest text-xs">
                <BookOpen size={16} /> Apa yang dipelajari?
              </h4>
              <p className="text-slate-700 leading-relaxed text-sm">
                {EPORTFOLIO_2_DATA.refleksi.pembelajaran}
              </p>
            </motion.div>

            {/* Tantangan */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <h4 className="flex items-center gap-2 font-bold text-p-rose-text mb-4 uppercase tracking-widest text-xs">
                <Star size={16} /> Tantangan & Solusi
              </h4>
              <p className="text-slate-700 leading-relaxed text-sm">
                {EPORTFOLIO_2_DATA.refleksi.tantangan}
              </p>
            </motion.div>

            {/* Umpan Balik */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl"
            >
              <h4 className="flex items-center gap-2 font-bold text-p-indigo mb-4 uppercase tracking-widest text-xs">
                <MessageSquare size={16} /> Umpan Balik Akhir
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm italic">
                "{EPORTFOLIO_2_DATA.refleksi.umpanBalik}"
              </p>
            </motion.div>
          </div>
        </section>

        {/* KOLOM KANAN: FILOSOFI MENGAJAR (PREMIUM VERSION) */}
        <section className="space-y-10 lg:sticky lg:top-24">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-p-rose rounded-2xl text-p-rose-text shadow-sm ring-4 ring-p-rose/20">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">Ideologi Pengajaran</h2>
            </div>
            <p className="text-p-rose-text font-bold text-xs uppercase tracking-[0.3em] ml-16">
              Filosofi & Keyakinan Pendidik
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            {/* Ornamen Latar Belakang Melayang */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-p-indigo/10 rounded-full blur-2xl group-hover:bg-p-indigo/20 transition-all"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-p-rose/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-indigo-100/50 overflow-hidden">
              
              {/* Dekorasi Tanda Kutip Besar */}
              <Quote size={160} className="absolute -top-10 -right-10 text-slate-50 z-0" strokeWidth={1} />

              <div className="relative z-10 space-y-8 text-justify">
                {/* Paragraf 1 dengan Drop Cap (Huruf Besar di Awal) */}
                <p className="text-slate-700 leading-[2] text-lg first-letter:text-7xl first-letter:font-black first-letter:text-p-indigo-text first-letter:mr-3 first-letter:float-left first-letter:mt-3">
                  {EPORTFOLIO_2_DATA.filosofi[0]}
                </p>

                {/* Paragraf 2 - Highlight Tengah */}
                <div className="relative py-4">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-p-indigo via-p-rose to-p-indigo rounded-full"></div>
                  <p className="pl-8 text-slate-700 leading-[1.8] text-base italic font-medium">
                    {EPORTFOLIO_2_DATA.filosofi[1]}
                  </p>
                </div>

                {/* Paragraf 3 - Penutup Profesional */}
                <p className="text-slate-700 leading-[1.8] text-base">
                  {EPORTFOLIO_2_DATA.filosofi[2]}
                </p>
              </div>

              {/* Nilai Inti (Core Values) - Badge Horizontal */}
              <div className="mt-12 flex flex-wrap gap-3 relative z-10">
                {[
                  { label: "Menuntun", color: "bg-p-indigo text-p-indigo-text" },
                  { label: "Kodrat Zaman", color: "bg-p-emerald text-p-emerald-text" },
                  { label: "Berdiferensiasi", color: "bg-p-amber text-p-amber-text" },
                  { label: "Reflektif", color: "bg-p-rose text-p-rose-text" }
                ].map((tag, idx) => (
                  <span key={idx} className={`px-5 py-2 ${tag.color} rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:scale-105 transition-transform cursor-default`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Call-out Quote Ki Hajar Dewantara di Bawah Card */}
            <div className="mt-8 flex items-center gap-6 px-8 py-6 bg-slate-900 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-p-indigo opacity-10 rounded-full blur-2xl -mr-12 -mt-12"></div>
                <div className="text-p-indigo shrink-0">
                    <Star size={32} fill="currentColor" />
                </div>
                <div className="flex-1">
                    <p className="text-sm italic font-medium text-slate-300 leading-relaxed">
                        "Apapun yang diperbuat oleh seseorang itu, hendaknya dapat bermanfaat bagi dirinya sendiri, bermanfaat bagi bangsanya, dan bermanfaat bagi manusia di dunia pada umumnya."
                    </p>
                    <p className="text-[10px] font-bold text-p-indigo uppercase tracking-[0.2em] mt-3">
                        — Ki Hajar Dewantara
                    </p>
                </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}