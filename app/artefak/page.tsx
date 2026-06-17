"use client";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArtifactCard from "@/components/ArtifactCard";
import AnalysisModal from "@/components/AnalysisModel";
import { ARTEFAK_LIST } from "@/data/content";

export default function ArtefakPage() {
  const [filter, setFilter] = useState("Semua");
  const [selectedArtifact, setSelectedArtifact] = useState<any>(null);

  const categories = ["Semua", "Perangkat", "Media", "Hasil Siswa"];
  const filteredData = filter === "Semua" 
    ? ARTEFAK_LIST 
    : ARTEFAK_LIST.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-6 py-10">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold mb-8">Artefak Pembelajaran</h1>

      {/* Filter Chips */}
      {/* <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              filter === cat ? "bg-blue-600 text-white" : "bg-white border text-slate-600 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div> */}

      {/* Grid Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((item) => (
          <div key={item.id} onClick={() => setSelectedArtifact(item)}>
            <ArtifactCard item={item} />
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      <AnalysisModal 
        isOpen={!!selectedArtifact} 
        onClose={() => setSelectedArtifact(null)} 
        data={selectedArtifact} 
      />
    </div>
  );
}