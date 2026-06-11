// components/AnalysisSection.tsx
export const AnalysisSection = ({ data }: any) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
      <div className="p-6 bg-slate-50 border-b">
        <h3 className="text-xl font-bold">{data.title}</h3>
      </div>
      
      <div className="p-6 space-y-8">
        {/* Deskripsi */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4">
            <h4 className="font-bold text-blue-700 uppercase tracking-wider text-sm">Konteks & Tujuan</h4>
            <p className="text-slate-600">{data.context}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm mb-2 text-blue-800">Kajian Teori</h4>
            <ul className="text-xs space-y-2 text-blue-700">
              <li>• TPACK (Technological Pedagogical Content Knowledge)</li>
              <li>• Pembelajaran Berdiferensiasi</li>
              <li>• Teori Konstruktivisme Vygotsky</li>
            </ul>
          </div>
        </div>

        {/* Accordion untuk detail analisis */}
        <div className="space-y-4">
          <details className="group border rounded-lg">
            <summary className="p-4 cursor-pointer font-semibold list-none flex justify-between items-center group-open:bg-slate-50">
              Analisis Kelebihan & Kekurangan
              <span className="transition group-open:rotate-180">↓</span>
            </summary>
            <div className="p-4 border-t text-slate-600">
              <p><strong>Kelebihan:</strong> {data.strengths}</p>
              <p className="mt-2"><strong>Kekurangan:</strong> {data.weaknesses}</p>
            </div>
          </details>
          
          <details className="group border rounded-lg">
            <summary className="p-4 cursor-pointer font-semibold list-none flex justify-between items-center group-open:bg-slate-50">
              Rencana Tindak Lanjut (Modifikasi)
              <span className="transition group-open:rotate-180">↓</span>
            </summary>
            <div className="p-4 border-t text-slate-600">
              {data.modification}
            </div>
          </details>
        </div>

        {/* Embed Preview */}
        <div className="aspect-video w-full bg-slate-200 rounded-lg overflow-hidden">
           {/* Contoh Embed Canva/PDF/Drive */}
           <iframe src={data.embedUrl} className="w-full h-full" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};