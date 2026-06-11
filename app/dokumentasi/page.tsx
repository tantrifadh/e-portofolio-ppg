import Breadcrumbs from "@/components/Breadcrumbs";

export default function DokumentasiPage() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600", title: "Observasi Kelas" },
    { src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=600", title: "Praktik Terbimbing" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb280714553?q=80&w=600", title: "Diskusi Guru Pamong" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600", title: "Kegiatan Ekstrakurikuler" },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold mb-10">Dokumentasi Kegiatan</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200">
            <img 
              src={photo.src} 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
              alt={photo.title}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white font-medium text-sm">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}