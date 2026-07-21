export type Trait = 'The Thinker' | 'The Creator' | 'The Connector' | 'The Builder';

export const TRAITS: Trait[] = [
  'The Thinker',
  'The Creator',
  'The Connector',
  'The Builder',
];

export const TRAIT_META: Record<
  Trait,
  { emoji: string; color: string; label: string; description: string }
> = {
  'The Thinker': {
    emoji: '🧠',
    color: '#10b981',
    label: 'The Thinker',
    description:
      'Kamu tumbuh dari data, logika, dan pemecahan masalah secara sistematis. Kamu ingin memahami cara kerja sesuatu sampai ke akar-akarnya.',
  },
  'The Creator': {
    emoji: '🎨',
    color: '#a855f7',
    label: 'The Creator',
    description:
      'Kamu digerakkan oleh imajinasi, orisinalitas, dan ekspresi diri. Kamu melihat peluang di mana orang lain melihat keterbatasan.',
  },
  'The Connector': {
    emoji: '🤝',
    color: '#3b82f6',
    label: 'The Connector',
    description:
      'Kamu didorong oleh koneksi, strategi digital, empati, dan pemasaran digital. Kamu membangun koneksi antara produk dan audiens melalui strategi yang efektif.',
  },
  'The Builder': {
    emoji: '🚀',
    color: '#f59e0b',
    label: 'The Builder',
    description:
      'Kamu didorong oleh teknologi, rekayasa perangkat lunak, dan membangun sistem. Kamu membangun tulang punggung teknologi yang mengubah permainan.',
  },
};

// ──────────────────────────────────────────────
// 15 Soal Asesmen MCQ
// Opsi: A = Analytical, B = Creative, C = Social, D = Entrepreneurial
// ──────────────────────────────────────────────

export interface AssessmentOption {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
  trait: Trait;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  dimension: string;
  options: [AssessmentOption, AssessmentOption, AssessmentOption, AssessmentOption];
}

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: 'Ketika kamu menghadapi masalah yang rumit, apa insting pertamamu?',
    dimension: 'Pemecahan Masalah',
    options: [
      { label: 'A', text: 'Mengurai masalah secara sistematis dan meneliti setiap sudut pandang', trait: 'The Thinker' },
      { label: 'B', text: 'Mencari solusi kreatif yang belum pernah dicoba siapa pun', trait: 'The Creator' },
      { label: 'C', text: 'Meminta pendapat tim sebelum mengambil tindakan', trait: 'The Connector' },
      { label: 'D', text: 'Mengambil keputusan cepat dan menyesuaikan di perjalanan', trait: 'The Builder' },
    ],
  },
  {
    id: 2,
    question: 'Dalam proyek kelompok, peran apa yang paling kamu nikmati?',
    dimension: 'Dinamika Tim',
    options: [
      { label: 'A', text: 'Analitis yang menggali data dan fakta', trait: 'The Thinker' },
      { label: 'B', text: 'Ideator yang menghasilkan konsep kreatif', trait: 'The Creator' },
      { label: 'C', text: 'Mediator yang menjaga semua orang selaras dan didengar', trait: 'The Connector' },
      { label: 'D', text: 'Pemimpin yang menentukan arah dan mendorong eksekusi', trait: 'The Builder' },
    ],
  },
  {
    id: 3,
    question: 'Bagaimana cara belajar yang paling kamu sukai untuk hal baru?',
    dimension: 'Gaya Belajar',
    options: [
      { label: 'A', text: 'Membaca dokumentasi, mempelajari teori, dan memahami dasar-dasarnya', trait: 'The Thinker' },
      { label: 'B', text: 'Langsung praktik, bereksperimen, dan belajar dari kegagalan', trait: 'The Creator' },
      { label: 'C', text: 'Berdiskusi dengan teman dan belajar melalui eksplorasi bersama', trait: 'The Connector' },
      { label: 'D', text: 'Menemukan jalan tercepat ke hasil yang bisa digunakan, lalu optimasi', trait: 'The Builder' },
    ],
  },
  {
    id: 4,
    question: 'Jenis proyek apa yang paling membuatmu bersemangat?',
    dimension: 'Motivasi',
    options: [
      { label: 'A', text: 'Inisiatif riset yang mengungkap pola tersembunyi dalam data', trait: 'The Thinker' },
      { label: 'B', text: 'Mendesain produk inovatif dari kanvas kosong', trait: 'The Creator' },
      { label: 'C', text: 'Membangun program komunitas yang mengubah kehidupan orang', trait: 'The Connector' },
      { label: 'D', text: 'Meluncurkan startup yang mengguncang seluruh industri', trait: 'The Builder' },
    ],
  },
  {
    id: 5,
    question: 'Rekan kerja tidak setuju dengan pendekatanmu. Bagaimana reaksimu?',
    dimension: 'Penyelesaian Konflik',
    options: [
      { label: 'A', text: 'Menyajikan bukti dan data untuk mendukung posisimu', trait: 'The Thinker' },
      { label: 'B', text: 'Menawarkan pendekatan gabungan yang menggabungkan kedua ide', trait: 'The Creator' },
      { label: 'C', text: 'Mendengarkan dengan mendalam untuk memahami perspektifnya dulu', trait: 'The Connector' },
      { label: 'D', text: 'Tetap pada pendirian dan memperjuangkan rencanamu dengan tegas', trait: 'The Builder' },
    ],
  },
  {
    id: 6,
    question: 'Lingkungan kerja seperti apa yang membantumu bekerja secara optimal?',
    dimension: 'Lingkungan Kerja',
    options: [
      { label: 'A', text: 'Ruang yang tenang di mana kamu bisa fokus tanpa gangguan', trait: 'The Thinker' },
      { label: 'B', text: 'Studio yang dinamis dengan papan tulis, catatan tempel, dan musik', trait: 'The Creator' },
      { label: 'C', text: 'Ruang kolaborasi terbuka dengan akses mudah ke rekan tim', trait: 'The Connector' },
      { label: 'D', text: 'Lingkungan yang serba cepat di mana setiap hari membawa tantangan baru', trait: 'The Builder' },
    ],
  },
  {
    id: 7,
    question: 'Ketika membuat keputusan karier penting, apa yang paling kamu andalkan?',
    dimension: 'Pengambilan Keputusan',
    options: [
      { label: 'A', text: 'Analisis kelebihan dan kekurangan dengan riset yang mendalam', trait: 'The Thinker' },
      { label: 'B', text: 'Intuisi dan apakah ini terasa memuaskan secara kreatif', trait: 'The Creator' },
      { label: 'C', text: 'Saran dari mentor dan orang-orang yang kamu percaya', trait: 'The Connector' },
      { label: 'D', text: 'Firasat dan seberapa besar peluang yang ada', trait: 'The Builder' },
    ],
  },
  {
    id: 8,
    question: 'Bagaimana cara kamu menyampaikan ide yang rumit?',
    dimension: 'Komunikasi',
    options: [
      { label: 'A', text: 'Melalui laporan detail dengan grafik, data, dan referensi', trait: 'The Thinker' },
      { label: 'B', text: 'Melalui visual, prototipe, dan cerita yang menarik', trait: 'The Creator' },
      { label: 'C', text: 'Melalui percakapan tatap muka dan workshop', trait: 'The Connector' },
      { label: 'D', text: 'Melalui presentasi singkat yang langsung ke intinya', trait: 'The Builder' },
    ],
  },
  {
    id: 9,
    question: 'Bagaimana pendekatanmu terhadap risiko?',
    dimension: 'Toleransi Risiko',
    options: [
      { label: 'A', text: 'Menghitung probabilitas dan hanya melanjutkan jika hitungannya benar', trait: 'The Thinker' },
      { label: 'B', text: 'Mengambil risiko kreatif jika potensi orisinalitasnya tinggi', trait: 'The Creator' },
      { label: 'C', text: 'Hanya mengambil risiko setelah berkonsultasi dengan orang yang terdampak', trait: 'The Connector' },
      { label: 'D', text: 'Menerima taruhan berani — risiko besar adalah harga dari hadiah besar', trait: 'The Builder' },
    ],
  },
  {
    id: 10,
    question: 'Ketika sebuah proyek gagal, apa reaksi pertamamu?',
    dimension: 'Resiliensi',
    options: [
      { label: 'A', text: 'Melakukan analisis akar masalah untuk memahami apa yang salah', trait: 'The Thinker' },
      { label: 'B', text: 'Merefokus kegagalan sebagai peluang belajar dan iterasi', trait: 'The Creator' },
      { label: 'C', text: 'Menyemangati tim, meningkatkan moral, dan menentukan langkah bersama', trait: 'The Connector' },
      { label: 'D', text: 'Langsung pivot dan menggandakan upaya pada apa yang mungkin berhasil', trait: 'The Builder' },
    ],
  },
  {
    id: 11,
    question: 'Bagaimana kamu mengukur kesuksesan profesional?',
    dimension: 'Nilai',
    options: [
      { label: 'A', text: 'Kedalaman insight dan akurasi dari hasil kerjamu', trait: 'The Thinker' },
      { label: 'B', text: 'Orisinalitas dan dampak budaya dari apa yang kamu ciptakan', trait: 'The Creator' },
      { label: 'C', text: 'Kekuatan hubungan dan kepercayaan yang telah kamu bangun', trait: 'The Connector' },
      { label: 'D', text: 'Pendapatan, pertumbuhan, dan skala dari usahamu', trait: 'The Builder' },
    ],
  },
  {
    id: 12,
    question: 'Hari kerja idealmu terlihat seperti...',
    dimension: 'Gaya Kerja',
    options: [
      { label: 'A', text: 'Kerja fokus mendalam — meneliti, menganalisis, dan memecahkan teka-teki', trait: 'The Thinker' },
      { label: 'B', text: 'Berkarya — mendesain, menulis, memprototipe, dan menyempurnakan', trait: 'The Creator' },
      { label: 'C', text: 'Berkoneksi — membimbing, bertemu, dan berkolaborasi dengan orang', trait: 'The Connector' },
      { label: 'D', text: 'Membangun — mempresentasikan, bernegosiasi, dan menutup peluang baru', trait: 'The Builder' },
    ],
  },
  {
    id: 13,
    question: 'Gaya kepemimpinan seperti apa yang paling cocok denganmu?',
    dimension: 'Kepemimpinan',
    options: [
      { label: 'A', text: 'Memimpin berdasarkan keahlian — orang mengikutimu karena kamu paling tahu', trait: 'The Thinker' },
      { label: 'B', text: 'Memimpin berdasarkan visi — menginspirasi orang dengan masa depan yang menarik', trait: 'The Creator' },
      { label: 'C', text: 'Memimpin berdasarkan pemberdayaan — membantu orang lain membuka potensi mereka', trait: 'The Connector' },
      { label: 'D', text: 'Memimpin dengan contoh — menetapkan kecepatan dan bekerja lebih keras dari semua orang', trait: 'The Builder' },
    ],
  },
  {
    id: 14,
    question: 'Jika kamu bisa mengubah satu hal tentang dunia melalui pekerjaanmu, apa itu?',
    dimension: 'Dampak',
    options: [
      { label: 'A', text: 'Mempertahankan pengetahuan manusia melalui riset dan penemuan yang ketat', trait: 'The Thinker' },
      { label: 'B', text: 'Menginspirasi orang melalui seni, desain, dan narasi yang kuat', trait: 'The Creator' },
      { label: 'C', text: 'Membangun komunitas yang lebih kuat di mana semua orang merasa memiliki tempat', trait: 'The Connector' },
      { label: 'D', text: 'Menciptakan peluang ekonomi dan lapangan kerja yang mengangkat orang', trait: 'The Builder' },
    ],
  },
  {
    id: 15,
    question: 'Kekuatan super apa yang akan kamu pilih untuk kariermu?',
    dimension: 'Aspirasi',
    options: [
      { label: 'A', text: 'Melihat langsung ke akar masalah dari setiap permasalahan', trait: 'The Thinker' },
      { label: 'B', text: 'Mengubah ide apa pun menjadi kenyataan yang sempurna dalam hitungan menit', trait: 'The Creator' },
      { label: 'C', text: 'Membangun kepercayaan dan kedekatan dengan siapa pun yang kamu temui', trait: 'The Connector' },
      { label: 'D', text: 'Memprediksi tren pasar sebelum hal itu terjadi', trait: 'The Builder' },
    ],
  },
];

// ──────────────────────────────────────────────
// Profil Karier — 6 skill masing-masing, rating 0-3
// ──────────────────────────────────────────────

export interface SkillRequirement {
  name: string;
  required: number; // 0 = Tidak Ada Pengalaman, 1 = Dasar, 2 = Menengah, 3 = Lanjutan
}

export interface CareerProfile {
  id: string;
  title: string;
  trait: Trait;
  icon: string;
  description: string;
  salaryRange: string;
  growthOutlook: string;
  skills: SkillRequirement[];
  roadmap: CurriculumPhase[];
}

export interface CurriculumPhase {
  phase: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  description: string;
  modules: string[];
  duration: string;
}

export const CAREER_PROFILES: CareerProfile[] = [
  // ── Karier Analitis ──
  {
    id: 'data-scientist',
    title: 'Data Analyst / Business Intelligence',
    trait: 'The Thinker',
    icon: '📊',
    description: 'Mengungkap pola tersembunyi dalam data untuk mendorong keputusan strategis lintas industri.',
    salaryRange: 'Rp 6.000.000 - Rp 15.000.000/bulan',
    growthOutlook: '36%',
    skills: [
      { name: 'Pengolahan Basis Data (SQL)', required: 3 },
      { name: 'Pemrograman Python', required: 2 },
      { name: 'Data Cleansing', required: 3 },
      { name: 'Alat Visualisasi Data', required: 3 },
      { name: 'Keterampilan Bercerita dengan Data', required: 2 },
      { name: 'Business Acumen', required: 2 },
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Dasar',
        subtitle: 'Bangun fondasi analitismu',
        description: 'Kuasai dasar pengolahan data dan query database.',
        modules: ['Fundamental SQL', 'Pemrograman Python Dasar', 'Data Cleansing 101', 'Logika Bisnis Dasar', 'Etika Data'],
        duration: '6–8 minggu',
      },
      {
        phase: 2,
        title: 'Menengah',
        subtitle: 'Visualisasi dan Pelaporan',
        description: 'Pelajari cara menyajikan data menjadi informasi yang mudah dipahami.',
        modules: ['Tableau / Power BI Dasar', 'Desain Dashboard Lanjut', 'Data Storytelling', 'Otomatisasi Laporan (Cron/Scripts)', 'Analisis Trend'],
        duration: '8–10 minggu',
      },
      {
        phase: 3,
        title: 'Lanjutan',
        subtitle: 'Analisis Statistik Mendalam',
        description: 'Beralih dari analisis deskriptif ke diagnostik dan prediktif.',
        modules: ['Statistik Inferensial', 'A/B Testing & Eksperimentasi', 'Analisis Kohort', 'Python Pandas Lanjut', 'Pemodelan Metrik Bisnis'],
        duration: '10–12 minggu',
      },
      {
        phase: 4,
        title: 'Mahir',
        subtitle: 'Pimpin Kecerdasan Bisnis',
        description: 'Dorong inisiatif intelijen bisnis berskala perusahaan.',
        modules: ['Arsitektur Data Warehouse', 'Strategi Business Intelligence', 'Komunikasi Stakeholder C-Level', 'Pengelolaan Tim Analis', 'Translasi Strategi Bisnis'],
        duration: '12–16 minggu',
      },
    ],
  },
  {
    id: 'research-scientist',
    title: 'Data Researcher / Strategy Analyst',
    trait: 'The Thinker',
    icon: '🔬',
    description: 'Mendorong batas pengetahuan melalui eksplorasi data mendalam dan strategi pasar.',
    salaryRange: 'Negotiable / Kompensasi Magang',
    growthOutlook: '8%',
    skills: [
      { name: 'Riset Kualitatif/Kuantitatif', required: 3 },
      { name: 'Data Mining', required: 3 },
      { name: 'Pemodelan Prediktif', required: 2 },
      { name: 'Penyusunan Laporan Manajerial', required: 3 },
      { name: 'Sintesis Informasi', required: 3 },
      { name: 'Eksplorasi Data Lanjut', required: 2 },
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Dasar',
        subtitle: 'Kuasai Metodologi Riset',
        description: 'Pahami cara mendesain riset dan mengumpulkan data yang valid.',
        modules: ['Metodologi Riset Kuantitatif', 'Teknik Survei & Kuesioner', 'Penelusuran Platform Digital', 'Statistika Dasar', 'Pengantar Strategi Bisnis'],
        duration: '6–8 minggu',
      },
      {
        phase: 2,
        title: 'Menengah',
        subtitle: 'Ekstraksi dan Eksplorasi',
        description: 'Mulai melakukan data mining dan eksplorasi data tingkat lanjut.',
        modules: ['Teknik Data Mining', 'Web Scraping Dasar', 'Sintesis Informasi Kompleks', 'Penyusunan Laporan Riset', 'Analisis Lanskap Kompetitif'],
        duration: '8–10 minggu',
      },
      {
        phase: 3,
        title: 'Lanjutan',
        subtitle: 'Analisis Strategis',
        description: 'Terapkan model prediktif untuk memetakan peluang strategi bisnis.',
        modules: ['Pemodelan Prediktif Dasar', 'Analisis Pasar Mendalam', 'Framework Strategi Lanjut', 'Validasi Hipotesis Bisnis', 'Ketelitian Akademis Terapan'],
        duration: '10–12 minggu',
      },
      {
        phase: 4,
        title: 'Mahir',
        subtitle: 'Arahkan Strategi Perusahaan',
        description: 'Gunakan hasil riset untuk membentuk arah bisnis perusahaan.',
        modules: ['Presentasi Wawasan Manajerial', 'Advisi Strategi C-Level', 'Manajemen Riset Skala Besar', 'Intelijen Pasar (Market Intelligence)', 'Inovasi Berbasis Riset'],
        duration: '12–16 minggu',
      },
    ],
  },

  // ── Karier Kreatif ──
  {
    id: 'ux-designer',
    title: 'UI/UX Designer',
    trait: 'The Creator',
    icon: '🎨',
    description: 'Merancang pengalaman digital yang intuitif dan memecahkan masalah nyata pengguna.',
    salaryRange: 'Rp 5.000.000 - Rp 9.000.000/bulan',
    growthOutlook: '13%',
    skills: [
      { name: 'Wireframing & Prototyping', required: 3 },
      { name: 'Penguasaan Figma / Adobe XD', required: 3 },
      { name: 'Empati Pengguna (User-Centered)', required: 3 },
      { name: 'Usability Testing & CRO', required: 2 },
      { name: 'HTML/CSS Dasar', required: 1 },
      { name: 'Kemampuan Presentasi Ide', required: 2 },
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Dasar',
        subtitle: 'Pahami pengguna-mu',
        description: 'Pelajari prinsip design thinking dan dasar-dasar desain berpusat pengguna.',
        modules: ['Proses Design Thinking', 'Pengembangan User Persona', 'Wireframing Dasar', 'Teori Warna & Tipografi', 'Fundamental Figma'],
        duration: '6–8 minggu',
      },
      {
        phase: 2,
        title: 'Menengah',
        subtitle: 'Bangun prototipe interaktif',
        description: 'Buat desain fidelitas lebih tinggi dan pelajari pola interaksi.',
        modules: ['Mockup High-Fidelity', 'Prototipe Interaktif', 'Pustaka Pola UI', 'Prinsip Desain Responsive', 'HTML/CSS Dasar untuk Desainer'],
        duration: '8–10 minggu',
      },
      {
        phase: 3,
        title: 'Lanjutan',
        subtitle: 'Validasi dan sempurnakan',
        description: 'Kuasai uji usabilitas dan bangun sistem desain yang scalable.',
        modules: ['Metode Uji Usabilitas', 'Conversion Rate Optimization (CRO)', 'Arsitektur Sistem Desain', 'Standar Aksesibilitas (WCAG)', 'Motion Design Dasar'],
        duration: '10–12 minggu',
      },
      {
        phase: 4,
        title: 'Mahir',
        subtitle: 'Pimpin strategi desain',
        description: 'Dorong visi produk melalui desain dan presentasikan ide dengan kuat.',
        modules: ['Kepemimpinan Desain', 'Kolaborasi Lintas Fungsi (Eng/PM)', 'Metrik & KPI Desain', 'Portofolio & Studi Kasus', 'Komunikasi & Presentasi Eksekutif'],
        duration: '12–16 minggu',
      },
    ],
  },
  {
    id: 'content-strategist',
    title: 'Content Creator / Social Media Specialist',
    trait: 'The Creator',
    icon: '✍️',
    description: 'Membentuk narasi brand dan mengelola kehadiran di media sosial.',
    salaryRange: 'Negotiable / Uang Saku Magang',
    growthOutlook: '12%',
    skills: [
      { name: 'Copywriting & Persuasi Teks', required: 3 },
      { name: 'Video Editing Seluler', required: 2 },
      { name: 'Social Media Analytics', required: 2 },
      { name: 'SEO Content Writing', required: 2 },
      { name: 'Kelincahan Adaptasi Tren', required: 3 },
      { name: 'Pemahaman Narasi', required: 2 },
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Dasar',
        subtitle: 'Kuasai pembuatan konten',
        description: 'Bangun fondasi menulis dan pembuatan konten visual.',
        modules: ['Fundamental Copywriting', 'Teknik Pemahaman Narasi', 'Dasar SEO Content Writing', 'Riset Audiens', 'Pembuatan Style Guide Brand'],
        duration: '6–8 minggu',
      },
      {
        phase: 2,
        title: 'Menengah',
        subtitle: 'Produksi Media & Tren',
        description: 'Pelajari video editing dan cara mengikuti tren media sosial.',
        modules: ['Video Editing (CapCut/Premiere)', 'Manajemen Kalender Konten', 'Agility Terhadap Tren', 'Strategi Media Sosial (TikTok/IG)', 'Visual Copywriting'],
        duration: '8–10 minggu',
      },
      {
        phase: 3,
        title: 'Lanjutan',
        subtitle: 'Analisis dan Optimasi',
        description: 'Ukur dampak konten dan optimalkan performanya.',
        modules: ['Social Media Analytics Dasar', 'A/B Testing Konten', 'Strategi Interaksi Massa', 'Persuasi Visual', 'Optimasi Hashtag & Algoritma'],
        duration: '10–12 minggu',
      },
      {
        phase: 4,
        title: 'Mahir',
        subtitle: 'Pimpin Visi Sosial',
        description: 'Arahkan narasi brand dan pimpin inisiatif kampanye digital.',
        modules: ['Manajemen Kampanye Viral', 'Strategi Lintas Kanal', 'Pengukuran ROI Konten', 'Manajemen Krisis (Public Relations)', 'Kepemimpinan Tim Kreatif'],
        duration: '12–16 minggu',
      },
    ],
  },

  // ── Karier Sosial ──
  {
    id: 'community-manager',
    title: 'Digital Marketing Specialist',
    trait: 'The Connector',
    icon: '🌐',
    description: 'Mengelola kampanye pemasaran digital dan memaksimalkan konversi pelanggan secara daring.',
    salaryRange: 'Rp 5.000.000 - Rp 15.000.000/bulan',
    growthOutlook: '10%',
    skills: [
      { name: 'SEO & SEM', required: 3 },
      { name: 'Manajemen Iklan Berbayar', required: 3 },
      { name: 'Pelacakan Konversi & Analitik', required: 3 },
      { name: 'Pemikiran Berorientasi Pertumbuhan', required: 2 },
      { name: 'Kemampuan Adaptasi Kampanye Cepat', required: 2 },
      { name: 'Keterampilan Persuasi', required: 2 },
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Dasar',
        subtitle: 'Pahami Ekosistem Digital',
        description: 'Pelajari dasar-dasar digital marketing dan bagaimana audiens berinteraksi secara online.',
        modules: ['Fundamental Digital Marketing', 'SEO Dasar (On-page & Off-page)', 'Dasar Copywriting Iklan', 'Pengenalan Google Analytics', 'Riset Keyword Terapan'],
        duration: '6–8 minggu',
      },
      {
        phase: 2,
        title: 'Menengah',
        subtitle: 'Eksekusi Kampanye Berbayar',
        description: 'Mulai jalankan dan optimasi iklan di berbagai platform.',
        modules: ['Google Ads & SEM', 'Meta Ads (Facebook/IG)', 'TikTok Ads & Tren Video', 'A/B Testing Kampanye', 'Pembuatan Landing Page'],
        duration: '8–10 minggu',
      },
      {
        phase: 3,
        title: 'Lanjutan',
        subtitle: 'Optimalisasi Funneling',
        description: 'Kuasai teknik konversi dan pelacakan metrik secara end-to-end.',
        modules: ['Funneling Strategy & Retargeting', 'Google Tag Manager Lanjut', 'CRM & Email Marketing Dasar', 'Analisis Cohort & LTV', 'Optimasi Conversion Rate (CRO)'],
        duration: '10–12 minggu',
      },
      {
        phase: 4,
        title: 'Mahir',
        subtitle: 'Pimpin Pertumbuhan Digital',
        description: 'Rancang strategi holistik dan pimpin inisiatif pertumbuhan pendapatan.',
        modules: ['Strategi Omnichannel Marketing', 'Marketing Automation', 'Alokasi Budget Eksekutif', 'Negosiasi Kemitraan Digital', 'Kepemimpinan Proyek Growth'],
        duration: '12–16 minggu',
      },
    ],
  },
  {
    id: 'hr-business-partner',
    title: 'Business Development / Account Executive',
    trait: 'The Connector',
    icon: '🤝',
    description: 'Membangun relasi strategis, memperluas pasar, dan mendorong pertumbuhan penjualan B2B.',
    salaryRange: 'Rp 6.000.000 - Rp 14.000.000/bulan',
    growthOutlook: '9%',
    skills: [
      { name: 'Cold Calling & Prospecting', required: 3 },
      { name: 'Manajemen CRM', required: 2 },
      { name: 'Analisis Metrik ROI', required: 2 },
      { name: 'Keterampilan Membangun Relasi', required: 3 },
      { name: 'Komunikasi Bisnis Persuasif', required: 3 },
      { name: 'Negosiasi', required: 3 },
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Dasar',
        subtitle: 'Kuasai Fundamental Sales',
        description: 'Pelajari dasar-dasar penjualan dan cara melakukan prospek.',
        modules: ['Teknik Cold Calling', 'Email Outreach yang Efektif', 'Fundamental B2B Sales', 'Penggunaan LinkedIn Dasar', 'Dasar Komunikasi Bisnis'],
        duration: '6–8 minggu',
      },
      {
        phase: 2,
        title: 'Menengah',
        subtitle: 'Kelola Relasi dan Pipeline',
        description: 'Mulai menggunakan CRM untuk melacak prospek dan peluang.',
        modules: ['Manajemen CRM (HubSpot/Salesforce)', 'Teknik Discovery Call', 'Presentasi Sales (Pitching)', 'Social Selling (LinkedIn Lanjut)', 'Proyeksi Penjualan (Forecasting)'],
        duration: '8–10 minggu',
      },
      {
        phase: 3,
        title: 'Lanjutan',
        subtitle: 'Penutupan dan Negosiasi',
        description: 'Kembangkan strategi negosiasi dan analisis metrik keuntungan.',
        modules: ['Strategi Negosiasi Lanjut', 'Analisis Market & ROI', 'Penanganan Keberatan (Objection Handling)', 'Key Account Management', 'Penyusunan Kontrak Bisnis'],
        duration: '10–12 minggu',
      },
      {
        phase: 4,
        title: 'Mahir',
        subtitle: 'Pimpin Ekspansi Pasar',
        description: 'Bangun kemitraan strategis bernilai tinggi dan arahkan strategi bisnis.',
        modules: ['Strategi Ekspansi Teritorial', 'Kemitraan Strategis B2B (Partnerships)', 'Account Planning Tingkat Eksekutif', 'Mentoring Tim Sales', 'Manajemen Portofolio Klien Enterprise'],
        duration: '12–16 minggu',
      },
    ],
  },

  // ── Karier Entrepreneurial ──
  {
    id: 'startup-founder',
    title: 'Software Engineer (Front/Back/Full-Stack)',
    trait: 'The Builder',
    icon: '💻',
    description: 'Membangun aplikasi perangkat lunak dari nol, merancang arsitektur sistem yang scalable.',
    salaryRange: 'Rp 8.000.000 - Rp 15.000.000/bulan',
    growthOutlook: '22%',
    skills: [
      { name: 'Pemrograman Web (JS/Python)', required: 3 },
      { name: 'Desain Database (SQL/NoSQL)', required: 2 },
      { name: 'Kerja Sama Tim (Agile/Scrum)', required: 2 },
      { name: 'Pengujian Unit', required: 1 },
      { name: 'Integrasi API', required: 3 },
      { name: 'Pemecahan Masalah Kritis', required: 3 },
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Dasar',
        subtitle: 'Validasi kemampuan koding',
        description: 'Pelajari dasar pemrograman web dan algoritma penyelesaian masalah.',
        modules: ['HTML, CSS, dan JS Dasar', 'Struktur Data Dasar', 'Dasar Version Control (Git)', 'Membuat Halaman Statis', 'Logika Pemrograman Dasar'],
        duration: '6–8 minggu',
      },
      {
        phase: 2,
        title: 'Menengah',
        subtitle: 'Bangun fitur dinamis',
        description: 'Buat aplikasi web dinamis dan pahami integrasi API.',
        modules: ['Framework Frontend (React/Vue)', 'Pengenalan Backend (Node/Python)', 'Integrasi REST API', 'Pemodelan Database Relasional', 'Pemahaman Asynchronous Programming'],
        duration: '8–10 minggu',
      },
      {
        phase: 3,
        title: 'Lanjutan',
        subtitle: 'Arsitektur skala menengah',
        description: 'Tumbuhkan kemampuan membangun sistem end-to-end yang tangguh dan teruji.',
        modules: ['Desain Arsitektur Microservices', 'Pengujian Unit (TDD/BDD)', 'Manajemen State Global', 'Optimasi Query Database', 'Keamanan Aplikasi Web'],
        duration: '10–12 minggu',
      },
      {
        phase: 4,
        title: 'Mahir',
        subtitle: 'Pimpin rekayasa perangkat lunak',
        description: 'Pimpin inisiatif arsitektur berskala besar dan bangun infrastruktur handal.',
        modules: ['Desain Sistem Skala Besar (System Design)', 'Kinerja dan Skalabilitas Ekstrem', 'Cloud Native Development', 'Mentoring Insinyur Muda', 'Strategi Infrastruktur Global'],
        duration: '12–16 minggu',
      },
    ],
  },
  {
    id: 'product-manager',
    title: 'DevOps Engineer / QA Automation Engineer',
    trait: 'The Builder',
    icon: '⚙️',
    description: 'Membangun pipeline otomatisasi pengujian dan penyebaran untuk siklus rilis yang cepat dan stabil.',
    salaryRange: 'Rp 7.500.000 - Rp 14.000.000/bulan',
    growthOutlook: '21%',
    skills: [
      { name: 'Otomatisasi CI/CD', required: 3 },
      { name: 'Infrastruktur Cloud (AWS)', required: 3 },
      { name: 'Docker / Kubernetes', required: 3 },
      { name: 'Skrip Otomatisasi (Selenium/Appium)', required: 2 },
      { name: 'Ketelitian dan Analisis Defect', required: 3 },
      { name: 'Validasi Data SQL', required: 2 },
    ],
    roadmap: [
      {
        phase: 1,
        title: 'Dasar',
        subtitle: 'Berpikir seperti insinyur sistem',
        description: 'Pahami prinsip otomatisasi infrastruktur dan pengujian.',
        modules: ['Pengenalan Linux & Command Line', 'Dasar Shell Scripting', 'Konsep Dasar QA (Manual vs Auto)', 'Git Workflow Lanjutan', 'Fundamental Jaringan Komputer'],
        duration: '6–8 minggu',
      },
      {
        phase: 2,
        title: 'Menengah',
        subtitle: 'Otomatisasi pengujian dan container',
        description: 'Pelajari cara membuat container aplikasi dan menjalankan tes otomatis.',
        modules: ['Membuat Dockerfile', 'Pengujian E2E (Cypress/Selenium)', 'Setup CI Dasar (GitHub Actions)', 'Analisis dan Pelaporan Defect', 'Validasi Database'],
        duration: '8–10 minggu',
      },
      {
        phase: 3,
        title: 'Lanjutan',
        subtitle: 'Orkestrasi dan deployment awan',
        description: 'Kuasai platform orkestrasi, provisioning cloud, dan pemantauan sistem.',
        modules: ['Dasar Kubernetes (Pods & Services)', 'Infrastructure as Code (Terraform)', 'Pipeline CI/CD Lengkap', 'Monitoring & Logging (Prometheus/Grafana)', 'Uji Beban & Performa'],
        duration: '10–12 minggu',
      },
      {
        phase: 4,
        title: 'Mahir',
        subtitle: 'Bentuk keandalan sistem',
        description: 'Pimpin rekayasa keandalan situs (SRE) dan arsitektur awan enterprise.',
        modules: ['Arsitektur Cloud Enterprise Tingkat Lanjut', 'Chaos Engineering', 'Otomatisasi Keamanan (DevSecOps)', 'Strategi Rilis Lanjutan (Canary/Blue-Green)', 'Kultur Keandalan & Mentoring'],
        duration: '12–16 minggu',
      },
    ],
  },
];

// ──────────────────────────────────────────────
// Helper utilities
// ──────────────────────────────────────────────

export const SKILL_LABELS: Record<number, string> = {
  0: 'Tidak Ada Pengalaman',
  1: 'Dasar',
  2: 'Menengah',
  3: 'Lanjutan',
};

export function computeTraitScores(
  answers: Record<number, number>
): Record<Trait, number> {
  const scores: Record<Trait, number> = {
    'The Thinker': 0,
    'The Creator': 0,
    'The Connector': 0,
    'The Builder': 0,
  };

  for (const question of ASSESSMENT_QUESTIONS) {
    const optionIndex = answers[question.id];
    if (optionIndex !== undefined) {
      const trait = question.options[optionIndex].trait;
      scores[trait] += 1;
    }
  }

  return scores;
}

export function getDominantTrait(
  scores: Record<Trait, number>
): Trait | null {
  let maxTrait: Trait | null = null;
  let maxScore = 0;

  for (const trait of TRAITS) {
    if (scores[trait] > maxScore) {
      maxScore = scores[trait];
      maxTrait = trait;
    }
  }

  return maxTrait;
}

export function getTraitRadarData(scores: Record<Trait, number>) {
  return TRAITS.map((trait) => ({
    trait,
    value: scores[trait],
    fullMark: ASSESSMENT_QUESTIONS.length,
  }));
}

export function getSkillGapData(
  career: CareerProfile,
  userRatings: Record<string, number>
) {
  return career.skills.map((skill) => ({
    name: skill.name,
    required: skill.required,
    current: userRatings[skill.name] ?? 0,
    delta: skill.required - (userRatings[skill.name] ?? 0),
  }));
}

export function getRecommendedCareers(dominantTrait: Trait | null): CareerProfile[] {
  if (!dominantTrait) return [];
  return CAREER_PROFILES.filter((c) => c.trait === dominantTrait);
}
