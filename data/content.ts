// 1. Data Navigasi
export const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Profil", href: "/profil" },
  { name: "Artefak", href: "/artefak" },
  { name: "Penilaian", href: "/penilaian" },
  { name: "Filosofi", href: "/filosofi" },
  { name: "Dokumentasi", href: "/dokumentasi" },
];

// 2. Data Artefak & Analisis Lengkap
export const ARTEFAK_LIST = [
  {
    id: 1,
    title: "Modul Ajar Matematika - SPLDV",
    category: "Perangkat",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500",
    theories: ["TPACK", "Problem Based Learning", "Diferensiasi Proses"],
    analysis: {
      context: "Disusun untuk kelas VIII SMP dengan mempertimbangkan gaya belajar visual dan auditori.",
      strengths: "Penggunaan LKPD berbasis teknologi sangat efektif memicu diskusi aktif siswa.",
      weaknesses: "Manajemen waktu pada fase sintaks keempat PBL perlu diperketat.",
      reflection: "Saya menyadari bahwa peran fasilitator lebih krusial daripada sekadar pemberi materi.",
      improvement: "Akan menggunakan timer visual di proyektor untuk mengontrol durasi diskusi kelompok."
    },
    tags: ["PBL", "TPACK", "SMP"]
  },
  {
    id: 2,
    title: "Media Interaktif Wordwall",
    category: "Media",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=500",
    theories: ["Game-based Learning", "Konstruktivisme"],
    analysis: {
      context: "Media evaluasi formatif yang dirancang untuk mengurangi kecemasan siswa saat ujian.",
      strengths: "Meningkatkan partisipasi siswa hingga 90% di dalam kelas.",
      weaknesses: "Ketergantungan pada koneksi internet sekolah yang terkadang tidak stabil.",
      reflection: "Siswa lebih cepat memahami konsep melalui trial and error dalam game.",
      improvement: "Menyediakan versi offline (cetak) sebagai backup jika internet bermasalah."
    },
    tags: ["Wordwall", "Evaluasi"]
  },
  {
    id: 3,
    title: "Hasil LKPD Siswa Berdiferensiasi",
    category: "Hasil Siswa",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500",
    theories: ["Culturally Responsive Teaching", "Scaffolding"],
    analysis: {
      context: "Hasil kerja siswa yang menunjukkan perbedaan tingkat pemahaman (Tinggi, Sedang, Rendah).",
      strengths: "Siswa kelompok rendah merasa terbantu dengan scaffolding yang diberikan.",
      weaknesses: "Kelompok tinggi butuh tantangan lebih agar tidak cepat bosan.",
      reflection: "Keadilan dalam mengajar bukan berarti memberi hal yang sama, tapi memberi apa yang dibutuhkan.",
      improvement: "Menyiapkan 'Extension Task' bagi siswa yang selesai lebih cepat."
    },
    tags: ["LKPD", "Diferensiasi"]
  }
];

// 3. Data Penilaian
export const DATA_NILAI = [
  { siklus: "Siklus 1", nilai: 82, catatan: "Perlu penguatan pada manajemen kelas dan instruksi." },
  { siklus: "Siklus 2", nilai: 88, catatan: "Penggunaan media sudah sangat interaktif dan membantu siswa." },
  { siklus: "Siklus 3", nilai: 95, catatan: "Sangat baik dalam menerapkan pembelajaran berdiferensiasi." },
];