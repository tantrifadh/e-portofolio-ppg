"use client";
import { motion } from "framer-motion";
import { Target, Rocket, Shield, Users, BookOpen, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MISI_DATA } from "@/data/content";

// Map icons manually to Lucide components
const IconMap: any = { BookOpen, Cpu, Users, Shield };

export default function MisiPage() {
  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-background text-slate-900">
      <Breadcrumbs />

      {/* HERO SECTION: VISI */}
      <section className="mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-p-indigo to-indigo-50 p-12 md:p-20 rounded-[3rem] border border-p-indigo overflow-hidden"
        >
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <Target size={48} className="mx-auto text-p-indigo-text mb-6" />
            <h1 className="text-sm font-bold text-p-indigo-text uppercase tracking-[0.4em] mb-6">Model Guru Yang Dituju</h1>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              "{MISI_DATA.visi}"
            </h2>
          </div>
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-p-rose/20 rounded-full blur-3xl"></div>
        </motion.div>
      </section>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* MISI SECTION */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-p-emerald rounded-2xl text-p-emerald-text">
                <Rocket size={28} />
            </div>
            <h3 className="text-3xl font-extrabold">Misi Profesional</h3>
          </div>
          <div className="space-y-6">
            {MISI_DATA.misi.map((misi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="mt-1"><CheckCircle2 size={20} className="text-p-emerald-text" /></div>
                <p className="font-medium text-slate-700 leading-relaxed">{misi}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* KOMPETENSI ROADMAP */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-p-amber rounded-2xl text-p-amber-text">
                <Sparkles size={28} />
            </div>
            <h3 className="text-3xl font-extrabold">Kompetensi Strategis</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MISI_DATA.kompetensi.map((komp, i) => {
              const Icon = IconMap[komp.icon];
              return (
                <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:bg-slate-50 transition-colors">
                  <div className={`w-14 h-14 ${komp.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition`}>
                    <Icon size={28} />
                  </div>
                  <h4 className="font-bold text-lg mb-3">{komp.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{komp.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* KARAKTER GURU PROFESIONAL */}
      <section className="mt-24">
        <div className="bg-slate-900 text-white p-12 md:p-16 rounded-[4rem] relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:max-w-md">
              <h3 className="text-3xl font-bold mb-4">Karakter Utama</h3>
              <p className="text-slate-400">Nilai-nilai dasar yang menjadi pondasi dalam setiap tindakan sebagai seorang pendidik profesional.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {MISI_DATA.karakter.map((char, i) => (
                <span 
                  key={i} 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-lg font-bold text-p-indigo"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-p-indigo opacity-20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}