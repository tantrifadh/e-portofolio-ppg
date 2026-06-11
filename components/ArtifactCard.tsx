import { ExternalLink, FileText } from "lucide-react";

export default function ArtifactCard({ item }: any) {
  return (
    <div className="group bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-xs font-bold text-blue-700">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-700 transition">{item.title}</h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">#{tag}</span>
          ))}
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          <FileText size={18} /> Detail Analisis
        </button>
      </div>
    </div>
  );
}