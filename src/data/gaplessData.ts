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
    question: "Saat diberikan tugas yang instruksinya masih membingungkan, apa langkah pertama yang kamu ambil?",
    dimension: 'Pemecahan Masalah',
    options: [
      {
        label: 'A',
        text: "Membedah setiap detail informasi yang ada sampai benar-benar paham.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai pendekatan unik yang belum pernah dicoba orang lain.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengajak rekan kerja mengobrol supaya kita bisa saling menyamakan langkah.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Langsung terjun mengerjakan bagian awal agar bisa segera melihat hasilnya.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 2,
    question: "Ada tugas baru yang belum ada panduannya, apa langkah pertama yang kamu ambil?",
    dimension: 'Dinamika Tim',
    options: [
      {
        label: 'A',
        text: "Mencari informasi sebanyak mungkin supaya paham detailnya sebelum bergerak.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencari cara yang belum pernah dicoba orang lain agar hasilnya unik.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengobrol dengan rekan tim untuk menyamakan visi agar semua merasa tenang.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menentukan target dan langsung mulai bekerja agar cepat selesai hasilnya.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 3,
    question: "Saat kamu diminta mengerjakan tugas yang instruksinya belum jelas, apa langkah pertama yang kamu ambil?",
    dimension: 'Gaya Belajar',
    options: [
      {
        label: 'A',
        text: "Membaca semua bahan yang ada sampai benar-benar paham alurnya.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai cara unik untuk melihat hasil yang muncul.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Bertanya ke rekan sekitar untuk menyamakan pandangan bersama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menetapkan target hasil akhir agar bisa segera mulai bekerja.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 4,
    question: "Saat diminta mengerjakan tugas yang instruksinya masih serba membingungkan, apa langkah awal yang paling pas buat kamu?",
    dimension: 'Motivasi',
    options: [
      {
        label: 'A',
        text: "Mencari informasi sebanyak mungkin agar gambaran tugasnya jadi sangat jelas.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencari cara-cara unik yang belum pernah terpikirkan sebelumnya untuk mencobanya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengajak rekan kerja berdiskusi supaya kita bisa mengerjakan tugas ini bersama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menyusun urutan pengerjaan agar tugas bisa segera diselesaikan dengan rapi.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 5,
    question: "Ada tugas baru yang instruksinya masih membingungkan, apa yang biasanya kamu lakukan pertama kali?",
    dimension: 'Penyelesaian Konflik',
    options: [
      {
        label: 'A',
        text: "Saya pelajari dulu detailnya supaya paham alur kerjanya sebelum mulai.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya coba cari cara lain yang belum pernah dicoba agar hasilnya lebih menarik.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya tanya pendapat orang sekitar supaya kita bisa kerja bareng dengan kompak.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya tentukan targetnya dan langsung kerjakan bagian yang paling mudah dulu.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 6,
    question: "Saat kamu diminta mengerjakan tugas yang instruksinya masih membingungkan, apa yang biasanya kamu lakukan pertama kali?",
    dimension: 'Lingkungan Kerja',
    options: [
      {
        label: 'A',
        text: "Duduk diam sebentar untuk memetakan alur kerja agar semuanya teratur.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba beberapa cara berbeda untuk melihat hasil mana yang paling oke.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Bertanya ke teman sekitar supaya kita punya pemahaman yang sama dulu.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Langsung mulai mengerjakan bagian yang bisa dikerjakan agar cepat jadi.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 7,
    question: "Saat kamu diminta mengerjakan tugas yang instruksinya masih membingungkan, apa langkah pertama yang kamu ambil?",
    dimension: 'Pengambilan Keputusan',
    options: [
      {
        label: 'A',
        text: "Membedah setiap poin instruksi sampai semuanya terasa cukup jelas dan terarah.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba pendekatan baru yang belum pernah terpikirkan oleh orang lain sebelumnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Berdiskusi dengan rekan kerja untuk memastikan kita semua punya pemahaman yang sama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Segera mulai mengerjakan bagian yang paling nyata hasilnya agar pekerjaan cepat jalan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 8,
    question: "Saat kamu perlu menyampaikan langkah kerja yang cukup rumit kepada rekan setim, bagaimana caramu melakukannya?",
    dimension: 'Komunikasi',
    options: [
      {
        label: 'A',
        text: "Menyusun panduan tertulis yang sangat mendetail agar tidak ada informasi yang terlewat.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Menggunakan ilustrasi atau analogi supaya gambaran besarnya lebih mudah dipahami.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mendiskusikannya secara personal agar semua orang merasa nyaman dan sepaham.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menyampaikan instruksi inti yang perlu segera dilakukan agar eksekusi langsung berjalan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 9,
    question: "Saat kamu diminta mengerjakan tugas yang instruksinya masih belum jelas, apa langkah pertama yang kamu ambil?",
    dimension: 'Toleransi Risiko',
    options: [
      {
        label: 'A',
        text: "Menyusun rencana detail di kepala agar setiap langkah nantinya berjalan dengan benar.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai cara baru yang belum pernah dicoba orang lain untuk melihat hasilnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Berdiskusi dengan orang sekitar untuk menyamakan persepsi sebelum mulai melangkah.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Langsung mengerjakan bagian yang bisa diselesaikan saat itu juga agar segera ada progres.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 10,
    question: "Saat kamu diberi tugas yang instruksinya masih membingungkan, apa langkah pertama yang kamu ambil?",
    dimension: 'Resiliensi',
    options: [
      {
        label: 'A',
        text: "Menyusun urutan kerja yang rapi agar setiap detail bisa diselesaikan dengan benar.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai cara unik yang berbeda dari kebiasaan orang lain untuk melihat hasilnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mendiskusikannya dengan orang lain agar kita bisa saling membantu dan sepakat soal arahnya.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Langsung mulai mengerjakan bagian yang paling jelas supaya pekerjaan segera ada hasilnya.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 11,
    question: "Saat diberikan tugas yang petunjuknya masih membingungkan, apa langkah pertama yang kamu ambil?",
    dimension: 'Nilai',
    options: [
      {
        label: 'A',
        text: "Mempelajari latar belakang dan detail informasi agar tidak ada yang terlewat.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai pendekatan unik untuk melihat hasil yang berbeda dari biasanya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengajak rekan kerja mengobrol agar kita bisa saling membantu dan sepaham.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menyusun daftar urutan kerja yang praktis supaya tugas cepat selesai.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 12,
    question: "Saat kamu dikasih tugas yang instruksinya masih samar banget, apa langkah pertama yang kamu ambil?",
    dimension: 'Gaya Kerja',
    options: [
      {
        label: 'A',
        text: "Membaca ulang semua dokumen sampai paham betul detailnya.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai cara baru yang muncul di kepala saat itu.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Bertanya ke rekan lain supaya kita bisa jalan bareng-bareng.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Membuat rencana aksi sederhana agar bisa langsung mulai kerja.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 13,
    question: "Saat diminta mengerjakan tugas yang belum ada panduannya sama sekali, apa yang biasanya kamu lakukan?",
    dimension: 'Kepemimpinan',
    options: [
      {
        label: 'A',
        text: "Menyusun daftar urutan kerja dan mengecek setiap kemungkinan masalah agar hasilnya rapi.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Membayangkan hasil akhirnya terlebih dahulu lalu mengajak rekan lain untuk mewujudkannya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengajak rekan kerja berdiskusi agar kita bisa menentukan cara terbaik bersama-sama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Langsung mencoba mengerjakan bagian awal sebagai contoh nyata agar yang lain bisa mengikuti.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 14,
    question: "Saat kamu diberi tugas yang instruksinya masih samar, apa hal pertama yang kamu lakukan?",
    dimension: 'Dampak',
    options: [
      {
        label: 'A',
        text: "Membedah setiap detail informasi agar alur kerjanya menjadi lebih masuk akal.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai pendekatan unik supaya hasil akhirnya terasa lebih berbeda.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Berdiskusi dengan orang sekitar agar semua orang merasa tenang dan sepakat.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menyusun langkah kerja yang nyata agar tugas bisa segera diselesaikan cepat.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 15,
    question: "Ada tugas baru yang instruksinya masih membingungkan, apa langkah pertama yang kamu ambil?",
    dimension: 'Aspirasi',
    options: [
      {
        label: 'A',
        text: "Membedah setiap detail informasi agar semuanya masuk akal sebelum mulai.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Langsung mencoba berbagai cara yang terlintas di pikiran untuk melihat hasilnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Bertanya kepada orang sekitar supaya kita bisa mengerjakannya dengan kompak.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Memastikan langkah yang diambil paling praktis agar target cepat tercapai.",
        trait: 'The Builder'
      }
    ]
  }
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

export function getArchetypeReasoning(scores: Record<Trait, number>): string {
  const sortedTraits = Object.entries(scores).sort(([, a], [, b]) => b - a) as [Trait, number][];
  const [primaryTrait, primaryScore] = sortedTraits[0];
  const [secondaryTrait, secondaryScore] = sortedTraits[1];

  // Hybrid edge case: if the difference is very small (e.g. <= 1)
  if (primaryScore - secondaryScore <= 1 && secondaryScore > 0) {
    return `Skor kamu sangat seimbang antara ${TRAIT_META[primaryTrait].label} (${primaryScore}) dan ${TRAIT_META[secondaryTrait].label} (${secondaryScore}). Ini menunjukkan kamu adalah talenta "Hybrid" yang mampu memadukan pola pikir dominan dari keduanya secara fleksibel.`;
  }

  // Deterministic mapping for clear dominant traits
  const mapping: Record<Trait, string> = {
    'The Thinker': `Kamu paling dominan di The Thinker karena kecenderungan kamu menjawab dengan pendekatan analitis dan terstruktur. Kamu lebih suka mengurai masalah secara logis dan mengandalkan data dibanding asumsi. Skor kamu: Thinker (${scores['The Thinker']}), Creator (${scores['The Creator']}), Connector (${scores['The Connector']}), Builder (${scores['The Builder']}).`,
    'The Creator': `Kamu paling dominan di The Creator karena kecenderungan kamu menjawab dengan ide-ide orisinal dan inovatif. Kamu lebih suka bereksperimen dan menemukan cara-cara tidak konvensional. Skor kamu: Thinker (${scores['The Thinker']}), Creator (${scores['The Creator']}), Connector (${scores['The Connector']}), Builder (${scores['The Builder']}).`,
    'The Connector': `Kamu paling dominan di The Connector karena kecenderungan kamu menjawab dengan fokus pada empati dan komunikasi tim. Kamu unggul dalam menyatukan ide dan menjaga keselarasan visi bersama. Skor kamu: Thinker (${scores['The Thinker']}), Creator (${scores['The Creator']}), Connector (${scores['The Connector']}), Builder (${scores['The Builder']}).`,
    'The Builder': `Kamu paling dominan di The Builder karena kecenderungan kamu menjawab dengan pendekatan aksi nyata dan eksekusi cepat. Kamu berorientasi pada penciptaan produk akhir dan efisiensi sistem. Skor kamu: Thinker (${scores['The Thinker']}), Creator (${scores['The Creator']}), Connector (${scores['The Connector']}), Builder (${scores['The Builder']}).`
  };

  return mapping[primaryTrait];
}
