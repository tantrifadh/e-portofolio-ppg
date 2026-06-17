"use client";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArtifactCard from "@/components/ArtifactCard";
import AnalysisModal from "@/components/AnalysisModel"; // Pastikan nama file adalah AnalysisModal.tsx
import { ARTEFAK_LIST } from "@/data/content";

export default function ArtefakPage() {
  const [selectedArtifact, setSelectedArtifact] = useState<any>(null);

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen bg-background">
      <Breadcrumbs />
      
      {/* Header Halaman */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Artefak Pembelajaran
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
          Daftar dokumen perangkat pembelajaran, media interaktif, dan hasil karya siswa yang telah disusun selama masa PPL Terbimbing.
        </p>
        <div className="h-1.5 w-20 bg-p-indigo-text rounded-full mt-6"></div>
      </div>

      {/* Grid Artefak - Langsung mengambil dari ARTEFAK_LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTEFAK_LIST?.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedArtifact(item)}
            className="cursor-pointer group"
          >
            <ArtifactCard item={item} />
          </div>
        ))}
      </div>

      {/* Modal Detail Analisis */}
      <AnalysisModal 
        isOpen={!!selectedArtifact} 
        onClose={() => setSelectedArtifact(null)} 
        data={selectedArtifact} 
      />
      
    </div>
  );
}