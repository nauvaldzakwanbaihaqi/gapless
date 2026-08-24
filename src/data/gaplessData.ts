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
    question: "Saat harus memulai tugas baru yang arahnya masih samar, apa yang biasanya kamu lakukan?",
    dimension: 'Pemecahan Masalah',
    options: [
      {
        label: 'A',
        text: "Saya akan mengumpulkan semua info yang ada lalu mempelajarinya pelan-pelan.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya akan mencoba mencari cara baru yang belum pernah terpikirkan sebelumnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya akan mengajak rekan lain berdiskusi agar kita punya tujuan yang sama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya akan langsung mencoba mengerjakan sesuatu agar bisa segera melihat hasilnya.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 2,
    question: "Saat harus memulai tugas baru yang belum ada aturan mainnya, apa yang biasanya kamu lakukan?",
    dimension: 'Dinamika Tim',
    options: [
      {
        label: 'A',
        text: "Mempelajari situasi secara mendalam agar tahu persis apa yang harus dilakukan.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba cara-cara baru yang berbeda dari kebiasaan orang lain selama ini.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengajak rekan kerja berdiskusi agar semua orang merasa nyaman dan sepakat.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Langsung menentukan langkah kerja agar hasil nyata bisa segera terlihat.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 3,
    question: "Saat ada tugas baru yang instruksinya masih samar, apa yang biasanya kamu lakukan pertama kali?",
    dimension: 'Gaya Belajar',
    options: [
      {
        label: 'A',
        text: "Mencari informasi sebanyak mungkin dan mempelajarinya pelan-pelan sampai paham.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Langsung mencoba berbagai cara berbeda untuk melihat mana yang paling menarik.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengobrol dengan orang lain untuk menyamakan pendapat sebelum mulai bergerak.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menentukan hasil akhir yang diinginkan agar bisa langsung bekerja dengan cepat.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 4,
    question: "Ada tugas baru yang tujuannya masih samar, apa yang biasanya kamu lakukan pertama kali?",
    dimension: 'Motivasi',
    options: [
      {
        label: 'A',
        text: "Saya pelajari dulu detailnya sampai paham betul sebelum mulai melangkah.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya coba bayangkan berbagai ide seru yang bisa dicoba untuk tugas ini.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya ajak teman-teman ngobrol supaya kita bisa saling bantu dan kompak.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya langsung tentukan target dan langkah kerja agar tugas cepat selesai.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 5,
    question: "Saat diminta mengerjakan tugas baru yang instruksinya masih sangat samar, apa hal pertama yang biasanya kamu lakukan?",
    dimension: 'Penyelesaian Konflik',
    options: [
      {
        label: 'A',
        text: "Saya akan duduk diam sejenak untuk membedah masalahnya agar langkah kerja saya nantinya lebih terarah.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya akan mencoba membayangkan berbagai cara unik untuk menyelesaikan tugas tersebut dengan hasil yang berbeda.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya akan mengajak rekan kerja mengobrol agar kita punya pandangan yang sama sebelum mulai bergerak.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya akan langsung menentukan target hasil akhir dan mulai mengerjakan bagian yang paling bisa segera diselesaikan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 6,
    question: "Saat diberikan tugas baru yang instruksinya masih sangat samar, apa hal pertama yang biasanya kamu lakukan?",
    dimension: 'Lingkungan Kerja',
    options: [
      {
        label: 'A',
        text: "Duduk tenang untuk menyusun langkah demi langkah agar semuanya terencana dengan matang.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai cara berbeda untuk melihat mana yang paling menarik untuk dikembangkan.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengobrol dengan rekan sekitar untuk menyamakan pandangan sebelum mulai melangkah.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Langsung terjun mencoba mengerjakan sesuatu agar bisa segera melihat hasilnya.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 7,
    question: "Saat harus mengerjakan tugas yang instruksinya masih samar, apa yang biasanya kamu lakukan?",
    dimension: 'Pengambilan Keputusan',
    options: [
      {
        label: 'A',
        text: "Mencari tahu detailnya terlebih dahulu agar bisa menyusun rencana langkah demi langkah.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai cara yang belum pernah dicoba orang lain agar hasilnya terasa beda.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengobrol dengan orang lain untuk menyamakan pandangan sebelum mulai melangkah.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Langsung mengerjakan bagian yang paling jelas agar bisa segera melihat hasilnya.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 8,
    question: "Saat harus menjelaskan rencana kerja yang cukup rumit kepada tim, apa yang biasanya kamu lakukan?",
    dimension: 'Komunikasi',
    options: [
      {
        label: 'A',
        text: "Menyiapkan catatan lengkap berisi semua detail agar mereka bisa membacanya kapan saja.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Membuat gambar atau perumpamaan menarik supaya mereka lebih mudah membayangkan idenya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengajak mereka mengobrol santai agar semua orang merasa dilibatkan dalam rencana tersebut.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menjelaskan poin-poin pentingnya saja supaya tim tahu apa yang harus segera dikerjakan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 9,
    question: "Saat harus memulai tugas baru yang instruksinya masih samar, apa yang biasanya kamu lakukan?",
    dimension: 'Toleransi Risiko',
    options: [
      {
        label: 'A',
        text: "Saya duduk diam untuk memikirkan urutan langkah paling efektif agar tidak ada yang terlewat.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya mencoba cara-cara unik yang belum pernah terpikirkan orang lain untuk melihat hasilnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya mengajak rekan kerja mengobrol supaya kita punya pemahaman yang sama sebelum mulai.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya langsung terjun mengerjakan bagian yang bisa segera diselesaikan agar ada hasilnya.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 10,
    question: "Saat diminta mengerjakan tugas baru yang arahnya masih samar, apa yang biasanya kamu lakukan?",
    dimension: 'Resiliensi',
    options: [
      {
        label: 'A',
        text: "Saya akan mencatat semua detail yang ada dan membuat rencana langkah demi langkah agar semuanya teratur.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya lebih suka mencoba berbagai cara baru yang belum terpikirkan orang lain untuk melihat hasilnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya akan mengajak rekan kerja mengobrol supaya kita punya tujuan yang sama dan saling mendukung.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya langsung terjun mengerjakan bagian yang bisa diselesaikan sekarang agar pekerjaan segera berjalan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 11,
    question: "Saat diminta mengerjakan tugas baru yang instruksinya masih sangat samar, apa yang biasanya kamu lakukan pertama kali?",
    dimension: 'Nilai',
    options: [
      {
        label: 'A',
        text: "Saya akan mencari tahu akar masalahnya dan mempelajari semua detailnya sampai benar-benar paham.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya akan mencoba cara-cara baru yang belum pernah terpikirkan sebelumnya agar hasilnya berbeda.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya akan mengajak rekan kerja berdiskusi supaya kita punya pandangan yang sama dan saling mendukung.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya akan langsung membuat daftar langkah kerja yang praktis agar tugas bisa segera diselesaikan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 12,
    question: "Saat diminta mengerjakan tugas yang instruksinya masih sangat membingungkan, apa yang biasanya kamu lakukan pertama kali?",
    dimension: 'Gaya Kerja',
    options: [
      {
        label: 'A',
        text: "Mencari tahu akar masalahnya dengan meneliti semua informasi yang ada sampai benar-benar paham.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Membayangkan berbagai ide seru yang bisa dicoba dan langsung membuat coretan kasar untuk dicoba.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengobrol dengan orang-orang di sekitar untuk memastikan semua orang punya pemahaman yang sama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menentukan target yang ingin dicapai dan langsung mulai mengerjakan langkah pertama agar cepat selesai.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 13,
    question: "Saat harus memulai tugas baru yang belum ada aturan mainnya, apa yang biasanya kamu lakukan?",
    dimension: 'Kepemimpinan',
    options: [
      {
        label: 'A',
        text: "Saya memetakan setiap langkah dan risiko secara detail agar hasilnya nanti minim kesalahan.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya membayangkan bentuk akhir dari tugas tersebut lalu mengajak semua orang mengejarnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya mengumpulkan semua orang untuk berbagi ide agar kita bisa bekerja sama dengan nyaman.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya langsung mulai mengerjakan bagian pertama sebagai contoh nyata untuk diikuti yang lain.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 14,
    question: "Saat harus mengerjakan tugas yang arahnya masih belum jelas, apa yang biasanya kamu lakukan pertama kali?",
    dimension: 'Dampak',
    options: [
      {
        label: 'A',
        text: "Saya akan mencari tahu akar masalahnya dan merapikan informasinya agar semua langkah ke depan lebih terarah.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya akan mencoba mencari cara baru yang berbeda dari biasanya supaya hasilnya lebih menarik dan segar.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya akan mengajak rekan kerja mengobrol untuk menyamakan pendapat agar semua orang merasa nyaman dengan rencana kita.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya akan langsung membuat jadwal kerja yang praktis supaya hasilnya bisa segera terlihat dalam waktu dekat.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 15,
    question: "Saat ada tugas baru yang arahnya masih samar, apa hal pertama yang biasanya kamu lakukan?",
    dimension: 'Aspirasi',
    options: [
      {
        label: 'A',
        text: "Mencari tahu akar masalahnya supaya semua bagian bisa tersusun dengan rapi.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Mencoba berbagai ide liar di kepala lalu langsung membuat contoh kasarnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengajak rekan kerja mengobrol agar kita semua punya tujuan yang sama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Melihat situasi yang ada untuk menentukan cara paling efektif mencapai target.",
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
