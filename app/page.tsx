"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, Users, FileCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 pt-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <span className="px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-semibold">
            Mahasiswa PPG Calon Guru 2026
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            E-Portfolio <br /> 
            <span className="text-violet-600">PPL Terbimbing</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-lg">
            Tantri Fadhillah Asri S.Kom<br />
            Bidang Studi: Informatika <br />
            Sekolah PPL: SMK Negeri 2 Salatiga
          </p>
          <div className="flex gap-4">
            <button className="bg-violet-400 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Lihat Artefak
            </button>
            <button className="border border-slate-300 px-8 py-3 rounded-lg hover:bg-slate-100 transition">
              Profil Saya
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 relative"
        >
          <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-violet-600 rounded-2xl rotate-3 absolute -z-10 shadow-xl"></div>
          <img 
            src="/images/profile.jpg" 
            alt="Foto Profil" 
            className="w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* STATS SUMMARY */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Modul Ajar", count: "12", icon: BookOpen },
            { label: "Praktik Mengajar", count: "3 Siklus", icon: Users },
            { label: "Media Interaktif", count: "8", icon: Award },
            { label: "Refleksi", count: "15", icon: FileCheck },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <stat.icon className="mx-auto text-blue-600 w-8 h-8" />
              <h3 className="text-3xl font-bold">{stat.count}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MOTIVATION QUOTE */}
      <section className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Filosofi Singkat</h2>
        <p className="text-2xl italic text-slate-600 leading-relaxed">
          "Menjadi pendidik bukan sekadar mentransfer ilmu, tetapi menuntun kodrat anak agar mencapai keselamatan dan kebahagiaan setinggi-tingginya."
        </p>
      </section>
    </div>
  );
}