import Breadcrumbs from "@/components/Breadcrumbs";
import { User, MapPin, GraduationCap, Target } from "lucide-react";

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <Breadcrumbs />
      <div className="grid md:grid-cols-3 gap-12">
        {/* Foto & Identitas Dasar */}
        <div className="space-y-6">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/profile.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white p-6 rounded-2xl border space-y-4">
            <h2 className="text-xl font-bold border-b pb-2">Identitas Diri</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600">
                <User size={18} className="text-blue-600" />
                <span>Nama Anda, S.Pd</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin size={18} className="text-blue-600" />
                <span>Jakarta, 12 Mei 1998</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <GraduationCap size={18} className="text-blue-600" />
                <span>PPG Calon Guru Gel. 1 - 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narasi Profil */}
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-2xl border shadow-sm">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Profil Mahasiswa</h1>
            <div className="prose prose-slate max-w-none">
              <h3 className="flex items-center gap-2"><Target className="text-blue-600" /> Inspirasi Menjadi Guru</h3>
              <p>Tuliskan di sini motivasi Anda menjadi guru. Misalnya: Berawal dari kecintaan saya terhadap dunia pendidikan dan keinginan untuk memberikan kontribusi nyata bagi masa depan generasi muda di daerah asal saya...</p>
              
              <h3 className="mt-6">Tujuan Menjadi Guru Profesional</h3>
              <p>Saya berkomitmen untuk menjadi pendidik yang tidak hanya mengajar materi, tetapi mampu melakukan inovasi pembelajaran yang relevan dengan perkembangan zaman (TPACK) serta berpihak pada peserta didik.</p>
            </div>
          </section>

          {/* Timeline Pendidikan */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Riwayat Pendidikan</h2>
            <div className="border-l-2 border-blue-200 ml-4 space-y-8">
              {[
                { year: "2024", title: "PPG Calon Guru", school: "Universitas Negeri XYZ" },
                { year: "2016 - 2020", title: "S1 Pendidikan Matematika", school: "Universitas ABC" },
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