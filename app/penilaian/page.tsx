"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FileCheck, TrendingUp, AlertCircle } from "lucide-react";

export default function PenilaianPage() {
  const dataNilai = [
    { siklus: "Siklus 1", nilai: 82, catatan: "Perlu penguatan pada manajemen kelas." },
    { siklus: "Siklus 2", nilai: 88, catatan: "Penggunaan media sudah sangat interaktif." },
    { siklus: "Siklus 3", nilai: 95, catatan: "Sangat baik dalam diferensiasi proses." },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold mb-4 text-slate-800">Penilaian Guru Pamong & DPL</h1>
      <p className="text-slate-600 mb-10">Rekapitulasi nilai Lampiran 7 (Perangkat) dan Lampiran 8 (Praktik Mengajar).</p>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Kolom Grafik Perkembangan */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-blue-600" /> Grafik Perkembangan Siklus
            </h3>
            <div className="flex items-end justify-between h-64 gap-4 px-4">
              {dataNilai.map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                  <div className="relative w-full bg-slate-100 rounded-t-xl overflow-hidden h-full flex items-end">
                    <div 
                      className="w-full bg-blue-600 transition-all duration-1000 group-hover:bg-blue-500" 
                      style={{ height: `${item.nilai}%` }}
                    >
                      <span className="absolute top-[-30px] left-1/2 -translate-x-1/2 font-bold text-blue-700">
                        {item.nilai}
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-sm text-slate-500">{item.siklus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lampiran 7 & 8 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border flex items-center gap-4 hover:shadow-md transition">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-xl"><FileCheck /></div>
              <div>
                <h4 className="font-bold">Lampiran 7</h4>
                <p className="text-sm text-slate-500">Penilaian Perangkat</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border flex items-center gap-4 hover:shadow-md transition">
              <div className="p-4 bg-green-100 text-green-600 rounded-xl"><FileCheck /></div>
              <div>
                <h4 className="font-bold">Lampiran 8</h4>
                <p className="text-sm text-slate-500">Penilaian Praktik</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Catatan & Refleksi */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <AlertCircle size={20} className="text-blue-400" /> Ringkasan Umpan Balik
            </h3>
            <div className="space-y-6">
              {dataNilai.map((item, i) => (
                <div key={i} className="border-l-2 border-slate-700 pl-4 py-1">
                  <p className="text-xs font-bold text-blue-400 uppercase">{item.siklus}</p>
                  <p className="text-sm text-slate-300 italic">"{item.catatan}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}