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
    title: "Modul Ajar Project IoT kelas X",
    pdfUrl: "/docs/modul_ajar.pdf",
    tags: ["IoT", "Informatika"],   // Tambahkan ini agar .map tidak error
    analysis: {
      context: "Modul ajar ini disusun untuk mendukung pembelajaran Dasar Program Keahlian (DPK) kelas X TKJ pada materi Internet of Things (IoT). Pembelajaran dirancang menggunakan model Project Based Learning (PjBL) agar peserta didik tidak hanya memahami konsep IoT, tetapi juga mampu merancang, membuat, dan mempresentasikan proyek IoT secara berkelompok.",
      strengths: "Modul ajar ini memberikan pengalaman belajar yang berpusat pada peserta didik melalui kegiatan proyek nyata. Selain mengembangkan keterampilan teknis, pembelajaran juga melatih kemampuan kolaborasi, komunikasi, berpikir kritis, dan kreativitas peserta didik.",
      weaknesses: "Kendala yang dihadapi dalam penyusunan modul adalah menyesuaikan alokasi waktu dengan kompleksitas proyek serta memastikan ketersediaan alat dan bahan yang dibutuhkan oleh setiap kelompok.",
      reflection: "Melalui penyusunan modul ini, saya belajar bahwa perencanaan pembelajaran harus mempertimbangkan karakteristik peserta didik, kesiapan sarana, dan tujuan pembelajaran agar kegiatan belajar dapat berjalan secara efektif.",
      improvement: "Ke depannya, modul ini akan disempurnakan dengan menambahkan alternatif proyek yang lebih beragam, penguatan diferensiasi pembelajaran, serta penggunaan media interaktif untuk meningkatkan keterlibatan peserta didik dalam pembelajaran."
    }
  },
  {
    id: 2,
    title: "Media PPT IoT",
    pdfUrl: "/docs/media_ajar.pdf",
    tags: ["Wordwall", "Evaluasi"],
    analysis: {
      context: "Media evaluasi formatif yang dirancang untuk mengurangi kecemasan siswa saat ujian.",
      strengths: "Meningkatkan partisipasi siswa hingga 90% di dalam kelas.",
      weaknesses: "Ketergantungan pada koneksi internet sekolah yang terkadang tidak stabil.",
      reflection: "Siswa lebih cepat memahami konsep melalui trial and error dalam game.",
      improvement: "Menyediakan versi offline (cetak) sebagai backup jika internet bermasalah."
    }
  },
  {
    id: 3,
    title: "LKPD Siswa Minggu 1-4",
    pdfUrl: "/docs/lkpd_iot.pdf",
    tags: ["LKPD"],
    analysis: {
      context: "Hasil kerja siswa yang menunjukkan perbedaan tingkat pemahaman (Tinggi, Sedang, Rendah).",
      strengths: "Siswa kelompok rendah merasa terbantu dengan scaffolding yang diberikan.",
      weaknesses: "Kelompok tinggi butuh tantangan lebih agar tidak cepat bosan.",
      reflection: "Keadilan dalam mengajar bukan berarti memberi hal yang sama, tapi memberi apa yang dibutuhkan.",
      improvement: "Menyiapkan 'Extension Task' bagi siswa yang selesai lebih cepat."
    }
  }
];

// 3. Data Penilaian
export const DATA_NILAI = [
  { siklus: "Siklus 1", nilai: 82, catatan: "Perlu penguatan pada manajemen kelas dan instruksi." },
  { siklus: "Siklus 2", nilai: 88, catatan: "Penggunaan media sudah sangat interaktif dan membantu siswa." },
  { siklus: "Siklus 3", nilai: 95, catatan: "Sangat baik dalam menerapkan pembelajaran berdiferensiasi." },
];