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
    question: "Saat dihadapkan pada sebuah proyek baru yang lingkupnya belum terpetakan dengan jelas, langkah awal apa yang paling sering Anda ambil?",
    dimension: 'Pemecahan Masalah',
    options: [
      {
        label: 'A',
        text: "Saya membedah setiap komponen informasi yang tersedia untuk memahami pola dasar sebelum melangkah lebih jauh.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya membayangkan kemungkinan bentuk akhir yang berbeda dari standar yang biasanya diterapkan selama ini.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya menyelaraskan pemahaman dengan pihak lain agar seluruh elemen yang terlibat memiliki visi yang seragam.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya segera memulai eksekusi langkah pertama untuk melihat bagaimana situasi berkembang secara nyata di lapangan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 2,
    question: "Ketika dihadapkan pada sebuah inisiatif baru yang belum memiliki panduan atau struktur yang pasti, langkah apa yang paling cenderung Anda ambil?",
    dimension: 'Dinamika Tim',
    options: [
      {
        label: 'A',
        text: "Saya membedah setiap elemen yang ada untuk memahami keterkaitan antar variabel sebelum menentukan langkah selanjutnya.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya merumuskan berbagai kemungkinan pendekatan yang belum pernah dicoba sebelumnya untuk melihat potensi hasil yang unik.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya memastikan setiap anggota tim merasa dilibatkan dan memiliki pemahaman yang sama agar kolaborasi berjalan dengan harmonis.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya menetapkan target capaian yang jelas dan mengarahkan sumber daya yang tersedia untuk segera mewujudkan hasil nyata.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 3,
    question: "Ketika Anda dihadapkan pada sebuah proyek baru yang lingkupnya belum terdefinisi dengan jelas, langkah pertama apa yang paling cenderung Anda ambil?",
    dimension: 'Gaya Belajar',
    options: [
      {
        label: 'A',
        text: "Saya mengumpulkan berbagai referensi serta menelaah prinsip dasar yang relevan untuk menyusun kerangka pemahaman yang komprehensif.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya segera mencoba berbagai pendekatan secara langsung untuk melihat kemungkinan hasil yang muncul dari setiap tindakan tersebut.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya menginisiasi percakapan dengan pihak lain untuk menyelaraskan perspektif dan mengumpulkan masukan sebelum menentukan arah langkah.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya memetakan target utama yang ingin dicapai agar dapat segera menyusun alur kerja yang paling efisien dan memberikan dampak nyata.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 4,
    question: "Saat dihadapkan pada sebuah inisiatif baru yang tujuan akhirnya belum terdefinisi dengan jelas, langkah apa yang paling mencerminkan pendekatan Anda?",
    dimension: 'Motivasi',
    options: [
      {
        label: 'A',
        text: "Saya memetakan seluruh variabel yang terlibat untuk memahami mekanisme mendasar sebelum menentukan arah tindakan.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya mengeksplorasi berbagai kemungkinan bentuk yang bisa dihasilkan untuk menemukan pendekatan yang paling unik.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya mengumpulkan pihak-pihak terkait untuk menyelaraskan visi agar inisiatif ini memberikan dampak positif bagi banyak orang.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya segera menetapkan target capaian yang ambisius dan menyusun strategi eksekusi agar inisiatif ini segera membuahkan hasil nyata.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 5,
    question: "Saat dihadapkan pada sebuah proyek baru yang instruksinya masih sangat minim dan belum terarah, tindakan apa yang paling menggambarkan caramu memulai?",
    dimension: 'Penyelesaian Konflik',
    options: [
      {
        label: 'A',
        text: "Saya memetakan variabel yang ada dan menyusun kerangka kerja sistematis sebelum melangkah lebih jauh.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya mengeksplorasi berbagai kemungkinan arah yang belum terpikirkan untuk menemukan potensi hasil yang unik.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya menjalin komunikasi dengan pihak terkait untuk menyelaraskan ekspektasi dan membangun pemahaman bersama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya segera menetapkan target capaian yang konkret dan mengambil langkah eksekusi untuk memastikan progres berjalan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 6,
    question: "Saat dihadapkan pada sebuah proyek baru yang instruksinya masih sangat minim, tindakan apa yang paling cenderung Anda lakukan?",
    dimension: 'Lingkungan Kerja',
    options: [
      {
        label: 'A',
        text: "Saya menyendiri untuk memetakan alur kerja secara mendalam sebelum memulai langkah pertama.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya mencoba berbagai pendekatan eksperimental untuk melihat kemungkinan hasil yang muncul.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya mendiskusikan berbagai perspektif dengan orang lain untuk menyamakan pemahaman bersama.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya segera mengambil tindakan praktis untuk menguji efektivitas solusi di lapangan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 7,
    question: "Saat dihadapkan pada sebuah proyek baru yang lingkup pekerjaannya belum terdefinisi dengan jelas, langkah apa yang paling sering kamu ambil?",
    dimension: 'Pengambilan Keputusan',
    options: [
      {
        label: 'A',
        text: "Mengumpulkan berbagai referensi dan memetakan pola informasi untuk menyusun kerangka kerja yang sistematis.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Membayangkan berbagai kemungkinan hasil akhir dan mengeksplorasi cara-cara baru untuk memberikan sentuhan unik pada prosesnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mendiskusikan tantangan tersebut dengan rekan kerja atau pihak terkait untuk menyelaraskan ekspektasi dan mendapatkan perspektif tambahan.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Mengambil inisiatif untuk segera memulai tindakan nyata agar dapat melihat hasil langsung dan menyesuaikan strategi di tengah jalan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 8,
    question: "Saat kamu diminta untuk memaparkan sebuah konsep yang memiliki banyak lapisan kepada rekan kerja, langkah apa yang paling sering kamu ambil?",
    dimension: 'Komunikasi',
    options: [
      {
        label: 'A',
        text: "Menyusun dokumen komprehensif yang memuat seluruh latar belakang serta bukti pendukung agar setiap detail dapat dipelajari secara mandiri.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Menggambarkan alur konsep tersebut melalui ilustrasi atau analogi agar audiens dapat menangkap esensi pesan dengan lebih berkesan.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengajak pihak terkait untuk berdiskusi langsung agar setiap poin dapat diselaraskan melalui pertukaran gagasan yang interaktif.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menyampaikan poin-poin utama secara lugas dan terstruktur agar audiens dapat segera memahami langkah konkret yang perlu dilakukan.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 9,
    question: "Saat dihadapkan pada sebuah inisiatif baru yang arahnya belum terpetakan dengan jelas, langkah apa yang paling menggambarkan tindakan Anda?",
    dimension: 'Toleransi Risiko',
    options: [
      {
        label: 'A',
        text: "Saya memetakan variabel yang ada dan menyusun skenario hasil akhir sebelum melangkah lebih jauh.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya mencoba berbagai pendekatan yang tidak lazim untuk melihat kemungkinan hasil yang belum pernah dicoba sebelumnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya mendiskusikan rencana tersebut dengan pihak-pihak terkait untuk memastikan keselarasan dan dukungan sebelum memulai.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya segera mengambil inisiatif untuk mengeksekusi langkah awal agar progres dapat langsung terlihat dan terasa dampaknya.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 10,
    question: "Saat dihadapkan pada sebuah inisiatif baru yang tujuan akhirnya masih belum terdefinisi dengan jelas, tindakan apa yang akan Anda ambil?",
    dimension: 'Resiliensi',
    options: [
      {
        label: 'A',
        text: "Saya memetakan variabel yang ada dan menyusun kerangka kerja sistematis untuk meminimalisir ketidakpastian.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya mengeksplorasi berbagai kemungkinan pendekatan yang belum pernah dicoba untuk menemukan perspektif yang unik.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya mengumpulkan semua pihak terkait untuk menyelaraskan ekspektasi dan membangun komitmen bersama sejak awal.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya segera memulai eksekusi pada bagian yang paling konkret agar progres nyata dapat segera terlihat.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 11,
    question: "Saat dihadapkan pada sebuah proyek dengan instruksi yang sangat minim dan ambiguitas tinggi, langkah apa yang paling utama Anda lakukan?",
    dimension: 'Nilai',
    options: [
      {
        label: 'A',
        text: "Saya memetakan seluruh variabel yang terlibat untuk memastikan setiap langkah didasarkan pada pemahaman yang paling mendalam.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya mengeksplorasi berbagai kemungkinan pendekatan yang belum pernah dicoba sebelumnya untuk menghasilkan sesuatu yang unik.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya mengumpulkan masukan dari berbagai pihak terkait guna menyelaraskan ekspektasi dan memperkuat kolaborasi tim.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya segera menetapkan target capaian yang terukur dan menyusun rencana eksekusi agar proyek dapat berjalan dengan efisien.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 12,
    question: "Saat dihadapkan pada sebuah proyek baru yang lingkupnya masih sangat samar, langkah pertama yang paling alami bagi Anda adalah:",
    dimension: 'Gaya Kerja',
    options: [
      {
        label: 'A',
        text: "Membedah setiap detail informasi yang tersedia untuk memahami pola dasar dan struktur masalahnya.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Membayangkan berbagai kemungkinan bentuk hasil akhir dan mulai menyusun kerangka kasar untuk diuji.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengumpulkan masukan dari berbagai pihak terkait untuk menyelaraskan perspektif dan kebutuhan semua orang.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menentukan target capaian yang ingin diraih serta menyusun langkah praktis untuk segera mengeksekusi rencana.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 13,
    question: "Ketika Anda diberi tanggung jawab untuk memimpin sebuah inisiatif baru yang belum memiliki panduan operasional, tindakan apa yang paling sering Anda ambil?",
    dimension: 'Kepemimpinan',
    options: [
      {
        label: 'A',
        text: "Saya menyusun kerangka kerja yang sistematis berdasarkan analisis mendalam agar setiap langkah memiliki landasan yang teruji.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya merumuskan gambaran besar tentang hasil akhir yang ingin dicapai untuk memberikan arah yang menggugah semangat tim.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya memfasilitasi diskusi terbuka untuk menyelaraskan kekuatan setiap anggota tim agar mereka dapat berkontribusi secara optimal.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya langsung terjun ke lapangan untuk melakukan eksekusi awal sebagai standar acuan bagi seluruh anggota tim dalam bekerja.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 14,
    question: "Ketika dihadapkan pada sebuah proyek baru yang tujuannya belum terdefinisi dengan jelas, langkah apa yang paling mencerminkan cara Anda bekerja?",
    dimension: 'Dampak',
    options: [
      {
        label: 'A',
        text: "Saya menyusun kerangka prinsip dasar dan memetakan variabel yang ada agar setiap langkah memiliki landasan yang dapat dipertanggungjawabkan.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Saya mengeksplorasi berbagai kemungkinan perspektif untuk menemukan pendekatan unik yang belum pernah terpikirkan oleh orang lain sebelumnya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Saya mengumpulkan masukan dari berbagai pihak yang terlibat untuk memastikan setiap orang merasa dilibatkan dalam proses pengambilan keputusan.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Saya segera menetapkan target capaian yang konkret dan menyusun alur kerja yang efisien untuk memastikan hasil akhir segera terwujud.",
        trait: 'The Builder'
      }
    ]
  },
  {
    id: 15,
    question: "Saat dihadapkan pada sebuah inisiatif baru yang tujuan akhirnya masih belum terdefinisi dengan jelas, langkah apa yang paling alami Anda ambil?",
    dimension: 'Aspirasi',
    options: [
      {
        label: 'A',
        text: "Membedah struktur dasar dan mencari pola mendasar agar seluruh kerangka kerja menjadi masuk akal.",
        trait: 'The Thinker'
      },
      {
        label: 'B',
        text: "Membayangkan berbagai kemungkinan bentuk hasil akhir lalu segera menyusun prototipe untuk melihat potensinya.",
        trait: 'The Creator'
      },
      {
        label: 'C',
        text: "Mengumpulkan orang-orang yang terlibat untuk menyamakan persepsi dan membangun komitmen bersama sejak awal.",
        trait: 'The Connector'
      },
      {
        label: 'D',
        text: "Menilai kondisi lingkungan sekitar untuk menentukan langkah strategis yang paling tepat dalam meraih hasil maksimal.",
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
