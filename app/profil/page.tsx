import Breadcrumbs from "@/components/Breadcrumbs";
import { User, MapPin, GraduationCap, Target } from "lucide-react";

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <Breadcrumbs />
      <div className="grid md:grid-cols-3 gap-12">
        {/* Foto & Identitas Dasar */}
        <div className="space-y-6">
          <div className="aspect-square rounded-3xl bg-p-indigo flex items-center justify-center shadow-xl border-4 border-white">
            <User size={120} className="text-p-indigo-text opacity-40" />
          </div>
          <div className="bg-white p-6 rounded-2xl border space-y-4">
            <h2 className="text-xl font-bold border-b pb-2">Identitas Diri</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600">
                <User size={18} className="text-blue-600" />
                <span>Tantri Fadhillah Asri S.Kom</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <GraduationCap size={18} className="text-blue-600" />
                <span>PPG Calon Guru Gel. 1 - 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narasi Profil */}
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-2xl border shadow-sm">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Profil Mahasiswa</h1>
            <div className="prose prose-slate max-w-none text-slate-900">
              <h3 className="flex items-center gap-2"><Target className="text-black-900" /> Inspirasi Menjadi Guru</h3>
              <p>Ketertarikan saya menjadi guru berawal saat menjadi asisten laboratorium komputer di kampus. Saat itu, saya sering membantu mahasiswa yang masih kesulitan menggunakan komputer dan memahami materi praktikum. 
                Dari pengalaman tersebut, saya merasa senang ketika bisa membantu orang lain belajar dan memahami sesuatu yang sebelumnya dianggap sulit.</p>
              
              <h3 className="flex items-center gap-2 mt-6"><Target className="text-black-900" />Tujuan Menjadi Guru Profesional</h3>
              <p>Saya ingin menjadi guru yang dapat membimbing peserta didik dengan sabar dan membantu mereka mengembangkan kemampuan, khususnya di bidang teknologi dan informatika. 
                Selain menyampaikan materi, saya juga ingin menjadi pendidik yang mampu memotivasi peserta didik agar lebih percaya diri dalam belajar dan meraih cita-citanya.</p>
            </div>
          </section>

          {/* Timeline Pendidikan */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Riwayat Pendidikan</h2>
            <div className="border-l-2 border-blue-200 ml-4 space-y-8">
              {[
                { year: "2026", title: "PPG Informatika", school: "Universitas Kristen Satya Wacana" },
                { year: "2020 - 2024", title: "S1 Teknik Informatika", school: "Universitas Dian Nuswantoro" },
              ].map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <span className="text-sm font-bold text-blue-600">{item.year}</span>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-600">{item.school}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}