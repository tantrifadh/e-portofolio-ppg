"use client";

import Link from "next/link";
import { 
  GraduationCap, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ChevronRight,
  School
} from "lucide-react";

export default function Footer() {
  // Fungsi untuk scroll ke atas secara halus
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Identitas & Deskripsi */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap size={32} className="text-blue-500" />
              <span className="font-bold text-xl tracking-tight">E-Portfolio PPL</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Dokumentasi digital perjalanan praktik pengalaman lapangan (PPL) Terbimbing PPG Calon Guru. Wadah refleksi dan pengembangan kompetensi guru profesional.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat (Penting untuk Penilai) */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Navigasi Utama
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Profil Mahasiswa", href: "/profil" },
                { name: "Artefak Pembelajaran", href: "/artefak" },
                { name: "Instrumen Penilaian", href: "/penilaian" },
                { name: "Filosofi Mengajar", href: "/filosofi" },
                { name: "Refleksi Akhir", href: "/refleksi" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak & Lokasi PPL */}
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Kontak & Lokasi PPL
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <School size={20} className="text-blue-500 shrink-0" />
                <p>
                  <span className="text-white block font-medium">Sekolah PPL:</span>
                  SMK Negeri 2 Salatiga <br />
                  Jl. Parikesit, Dukuh, Kec. Sidomukti, Kota Salatiga, Jawa Tengah
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <p>
                  <span className="text-white block font-medium">LPTK:</span>
                  Universitas Kristen Satya Wacana
                </p>
              </div>
            </div>
          </div>

          {/* Kolom 4: Sertifikasi & Akreditasi */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <div className="space-y-4">
              <p className="text-xs leading-relaxed text-slate-500 italic">
                "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan Anda bisa mengubah dunia."
              </p>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            <p>© {new Date().getFullYear()} <span className="text-slate-300 font-medium">Tantri Fadhillah Asri S.Kom</span>. Seluruh Hak Cipta Dilindungi.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4 text-xs font-medium uppercase tracking-widest text-slate-600">
              <span className="hover:text-blue-500 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-blue-500 cursor-pointer">Academic Terms</span>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95"
            >
              Ke Atas <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}