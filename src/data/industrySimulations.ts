export interface SimulationTask {
  id: number;
  title: string;
  duration: string;
  scenario: string;
  instructions: string[];
  deliverableType: 'text' | 'choice' | 'analysis';
  sampleQuestion?: string;
  options?: { label: string; text: string; isBest: boolean; feedback: string }[];
  placeholderAnswer?: string;
  hint?: string;
}

export interface IndustrySimulation {
  careerTitle: string;
  careerSlug: string;
  companyName: string;
  companyLogoText: string;
  companyColor: string;
  companyTagline: string;
  badgeLabel: string;
  simulationTitle: string;
  estimatedHours: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  backgroundStory: string;
  skillsValidated: string[];
  tasks: SimulationTask[];
}

export const INDUSTRY_SIMULATIONS: Record<string, IndustrySimulation> = {
  'content-creator-social-media-specialist': {
    careerTitle: 'Content Creator / Social Media Specialist',
    careerSlug: 'content-creator-social-media-specialist',
    companyName: 'Tokopedia',
    companyLogoText: '🟢 Tokopedia',
    companyColor: '#03AC0E',
    companyTagline: 'Pusat Ekosistem Belanja & Kreator Digital Indonesia',
    badgeLabel: 'Tokopedia Creator Partner',
    simulationTitle: 'Simulasi Hari Pertama: Menyusun Strategi Konten Viral Kampanye Mega Sale',
    estimatedHours: '1.5 - 2 Jam',
    difficulty: 'Intermediate',
    summary: 'Sebagai Social Media Strategist baru di tim Marketing Tokopedia, tugas pertamamu adalah merancang konten kampanye interaktif untuk menaikkan engagement dan conversion rate gen-Z.',
    backgroundStory: 'Selamat datang di tim Social Media Marketing Tokopedia! Bulan depan Tokopedia akan meluncurkan kampanye diskon besar-besaran untuk audiens Gen-Z. Tim kamu ditugaskan menyusun rencana konten Reels/TikTok, hook video, serta strategi storytelling yang mampu menghasilkan engagement tinggi dan konversi transaksi.',
    skillsValidated: ['Content Strategy', 'Social Media Analytics', 'Copywriting & Scripting', 'Trend Research'],
    tasks: [
      {
        id: 1,
        title: 'Task 1: Analisis Target Audiens & Riset Tren TikTok',
        duration: '25 Menit',
        scenario: 'Data engagement bulan lalu menunjukkan audiens usia 18-24 tahun paling menyukai format konten "POV belanja hemat" dan "Review jujur humoris" dengan durasi 30-45 detik.',
        instructions: [
          'Tentukan 1 pilar konten utama yang paling efektif untuk menggaet audiens 18-24 tahun.',
          'Pilih sound/nada penyampaian (Tone of Voice) yang relevan dengan Gen-Z.',
          'Jelaskan alasan pemilihannya dalam 2-3 kalimat.'
        ],
        deliverableType: 'choice',
        sampleQuestion: 'Format hook visual dan narasi mana yang paling potensial menaikkan retensi 3 detik pertama?',
        options: [
          {
            label: 'A',
            text: 'Visual cepat "Jangan tonton kalau gak mau checkout!" dengan musik up-beat kekinian & teks tebal di tengah layar.',
            isBest: true,
            feedback: 'Sangat tepat! Hook paradoks/larangan dengan kontras teks terbukti meningkatkan retensi 3 detik pertama hingga 40% di TikTok/Reels.'
          },
          {
            label: 'B',
            text: 'Pengenalan profil Tokopedia secara formal dan membacakan syarat & ketentuan promo selama 10 detik.',
            isBest: false,
            feedback: 'Kurang efektif untuk Gen-Z. Penonton kemungkinan besar akan langsung skip di detik ke-2 karena terlalu formal.'
          },
          {
            label: 'C',
            text: 'Video monolog panjang tanpa teks subtitle menjelaskan detail katalog produk.',
            isBest: false,
            feedback: 'Mayoritas audiens menonton video tanpa suara aktif, subtitle tebal sangat krusial.'
          }
        ]
      },
      {
        id: 2,
        title: 'Task 2: Penulisan Script Video Pendek (Short-Form Video Script)',
        duration: '35 Menit',
        scenario: 'Tuliskan draft script video berdurasi 30 detik untuk mempromosikan fitur Flash Sale Tokopedia dengan gaya santai dan relate dengan mahasiswa.',
        instructions: [
          'Sertakan [Hook 0-3 detik], [Problem/Pain Point 4-15 detik], [Solusi & Demo 16-25 detik], dan [Call-to-Action 26-30 detik].',
          'Pastikan ada ajakan spesifik untuk membuka aplikasi.'
        ],
        deliverableType: 'text',
        placeholderAnswer: '[Hook 0-3 detik]: "Trik rahasia anak kos tetap bisa makan enak tanggal tua..."\n\n[Pain Point 4-15 detik]: ...\n\n[Solusi 16-25 detik]: ...\n\n[CTA 26-30 detik]: "Klik link di bio buat klaim voucher gratis ongkir sekarang!"',
        hint: 'Fokuskan pada masalah konkret audiens (misal: dompet menipis di akhir bulan) sebelum menawarkan solusi voucher diskon.'
      },
      {
        id: 3,
        title: 'Task 3: Metrik Evaluasi & Rencana Optimasi',
        duration: '20 Menit',
        scenario: 'Setelah konten di-publish selama 24 jam, video tersebut mendapatkan 50.000 views, 4.500 likes, 320 shares, dan 150 klik link aplikasi.',
        instructions: [
          'Hitung Engagement Rate (ER) konten tersebut.',
          'Berikan 1 rekomendasi konkret untuk eksperimen konten berikutnya.'
        ],
        deliverableType: 'text',
        placeholderAnswer: 'Analisis Metrik:\n- Engagement Total = (Likes + Shares + Comments) = ...\n- Evaluasi CTR link aplikasi: ...\n- Rekomendasi konten lanjutan: ...',
        hint: 'Tingginya share menunjukkan konten relate, namun perhatikan rasio klik link ke aplikasi.'
      }
    ]
  },

  'ui-ux-designer': {
    careerTitle: 'UI/UX Designer',
    careerSlug: 'ui-ux-designer',
    companyName: 'Grab',
    companyLogoText: '🟢 Grab',
    companyColor: '#00B14F',
    companyTagline: 'Everyday Everything App di Asia Tenggara',
    badgeLabel: 'Grab Design Studio Partner',
    simulationTitle: 'Simulasi Hari Pertama: Redesign Alur Pembatalan Pesanan & Retensi Pengemudi',
    estimatedHours: '2 Jam',
    difficulty: 'Intermediate',
    summary: 'Sebagai Product Designer baru di Grab, kamu akan menyelesaikan tantangan UX riil: mengurangi frustrasi pengguna saat pengemudi terlambat tanpa mengorbankan kepuasan mitra pengemudi.',
    backgroundStory: 'Tim Product Operations Grab menemukan bahwa 18% pembatalan pesanan GrabFood terjadi karena estimasi waktu pengantaran yang tidak jelas saat cuaca hujan. Kamu ditugaskan merancang solusi UI/UX yang memberikan transparansi status pesanan dan opsi solusi alternatif yang ramah bagi pengguna dan mitra pengemudi.',
    skillsValidated: ['User Research', 'Wireframing & Prototyping', 'Usability Principles', 'Design System Compliance'],
    tasks: [
      {
        id: 1,
        title: 'Task 1: Analisis User Journey & Friction Point',
        duration: '30 Menit',
        scenario: 'User mengeluhkan status pesanan yang hanya bertuliskan "Restoran sedang menyiapkan makanan" selama 20 menit tanpa update visual progres.',
        instructions: [
          'Identifikasi 2 titik friksi utama pada alur status pesanan saat ini.',
          'Pilih strategi informasi arsitektur (Information Architecture) terbaik untuk meredakan kecemasan pengguna.'
        ],
        deliverableType: 'choice',
        sampleQuestion: 'Komponen visual apa yang paling efektif mengkomunikasikan alasan keterlambatan secara empatik?',
        options: [
          {
            label: 'A',
            text: 'Live-timeline dengan indikator real-time cuaca, estimasi waktu dinamis, dan banner mini ramah "Driver berhati-hati karena hujan deras di area restoran".',
            isBest: true,
            feedback: 'Tepat sekali! Transparansi kontekstual (konteks cuaca + keselamatan driver) terbukti menurunkan angka komplain hingga 35%.'
          },
          {
            label: 'B',
            text: 'Menyembunyikan estimasi waktu dan hanya menampilkan tombol batal pesanan berukuran besar.',
            isBest: false,
            feedback: 'Ini justru memicu lonjakan pembatalan yang merugikan restoran dan driver.'
          },
          {
            label: 'C',
            text: 'Pop-up error merah bertuliskan "Pesanan Anda tertunda" tanpa penjelasan penyebab.',
            isBest: false,
            feedback: 'Warna error merah memicu alarm kepanikan pengguna.'
          }
        ]
      },
      {
        id: 2,
        title: 'Task 2: Rancang Wireframe & Copywriting Solusi UX',
        duration: '40 Menit',
        scenario: 'Deskripsikan rancangan layout baru pada halaman status pesanan saat terjadi keterlambatan.',
        instructions: [
          'Jelaskan susunan hierarchy layout (Header, Map Card, Status Widget, Action Button).',
          'Tuliskan microcopy UX yang ramah dan menenangkan bagi pengguna.'
        ],
        deliverableType: 'text',
        placeholderAnswer: 'Hierarchy Layout Baru:\n1. Top Header: Status Ringkas\n2. Live Status Card: Visual Progress Bar Dinamis\n3. Microcopy UX: "Pesananmu sedang dalam perjalanan aman bersama Pak Budi..."\n4. Secondary Action: Tombol Hubungi Driver / Bantuan GrabSupport',
        hint: 'Gunakan prinsip visual hierarchy dan tone of voice yang empatis.'
      },
      {
        id: 3,
        title: 'Task 3: Metrik Keberhasilan UX (Success Metrics)',
        duration: '20 Menit',
        scenario: 'Tentukan indikator kuantitatif dan kualitatif untuk mengukur keberhasilan desain baru yang kamu rancang.',
        instructions: [
          'Sebutkan minimal 2 metrik kuantitatif (misal: Cancellation Rate, CSAT, Support Tickets).',
          'Sebutkan 1 metode pengujian kualitatif (misal: Usability Testing / Heatmap Analysis).'
        ],
        deliverableType: 'text',
        placeholderAnswer: 'Metrik Kuantitatif:\n- Penurunan Cancellation Rate sebesar ...%\n- Peningkatan skor CSAT pemesanan dari ... ke ...\n\nMetode Kualitatif: Usability Testing dengan 5 responden pengguna aktif.',
        hint: 'Hubungkan metrik langsung dengan masalah bisnis awal.'
      }
    ]
  },

  'software-engineer-front-back-full-stack': {
    careerTitle: 'Software Engineer (Front / Back / Full Stack)',
    careerSlug: 'software-engineer-front-back-full-stack',
    companyName: 'GoTo Tech',
    companyLogoText: '🟢 GoTo Engineering',
    companyColor: '#002E6E',
    companyTagline: 'Ekosistem Digital Terbesar di Indonesia',
    badgeLabel: 'GoTo Engineering Fellow',
    simulationTitle: 'Simulasi Hari Pertama: Refactoring API Gateway & Arsitektur Transaksi Resilient',
    estimatedHours: '2 Jam',
    difficulty: 'Advanced',
    summary: 'Sebagai Software Engineer di tim Backend Platform GoTo, kamu ditugaskan mengatasi bottleneck performa database transaksi saat momen flash sale gajian.',
    backgroundStory: 'Saat momen flash sale, sistem pembayaran GoTo mengalami lonjakan traffic 10x lipat. Query transaksi ke database mengalami dead-lock dan latency meningkat hingga 4.5 detik. Kamu bertugas mengimplementasikan strategi caching, idempotency key, dan circuit breaker.',
    skillsValidated: ['Backend Architecture', 'Database Optimization', 'System Design', 'API Security & Reliability'],
    tasks: [
      {
        id: 1,
        title: 'Task 1: Penanganan Concurrency & Idempotency',
        duration: '30 Menit',
        scenario: 'Pengguna menekan tombol "Bayar Sekarang" berkali-kali karena internet lambat, menyebabkan request POST /pay terkirim 3 kali dalam 1 detik.',
        instructions: [
          'Pilih arsitektur teknis yang paling tepat untuk mencegah pemotongan saldo ganda (double-spending).'
        ],
        deliverableType: 'choice',
        sampleQuestion: 'Mekanisme apa yang wajib diterapkan pada API transaksi finansial ini?',
        options: [
          {
            label: 'A',
            text: 'Menggunakan Idempotency Key (UUID) yang disimpan di Redis dengan TTL 60 detik + Database Transaction Isolation Level READ COMMITTED / SERIALIZABLE.',
            isBest: true,
            feedback: 'Sempurna! Idempotency key memastikan request berulang dengan payload yang sama hanya dieksekusi 1 kali, sisanya mengembalikan respon cached.'
          },
          {
            label: 'B',
            text: 'Hanya mendisabled tombol submit di frontend JavaScript tanpa validasi sisi server.',
            isBest: false,
            feedback: 'Sangat berbahaya. User bisa bypass frontend via network inspector atau curl script.'
          },
          {
            label: 'C',
            text: 'Menghapus validasi saldo dan membiarkan database menampung semua saldo negatif.',
            isBest: false,
            feedback: 'Ini adalah bug fatal finansial.'
          }
        ]
      },
      {
        id: 2,
        title: 'Task 2: Perancangan Skema Database & Strategi Caching',
        duration: '40 Menit',
        scenario: 'Rancang arsitektur caching Redis di depan database PostgreSQL untuk query data katalog produk yang sering dibaca (High Read).',
        instructions: [
          'Jelaskan pola caching (misal: Cache-Aside / Write-Through).',
          'Bagaimana strategi Cache Invalidation saat harga produk berubah?'
        ],
        deliverableType: 'text',
        placeholderAnswer: 'Arsitektur Caching:\n1. Pola: Cache-Aside Pattern\n- Backend cek Redis terlebih dahulu...\n2. Invalidation Strategy:\n- Saat admin update harga -> Publish event ke Redis PUB/SUB untuk DEL cache key `product:{id}`...',
        hint: 'Pertimbangkan masalah Cache Stampede dan Time-To-Live (TTL).'
      },
      {
        id: 3,
        title: 'Task 3: Error Handling & Observability',
        duration: '20 Menit',
        scenario: 'Layanan payment gateway pihak ketiga tiba-tiba timeout (504 Gateway Timeout). Bagaimana fallback sistem agar pengguna tidak stuck di loading screen?',
        instructions: [
          'Tuliskan langkah circuit breaker dan pesan error graceful untuk client.'
        ],
        deliverableType: 'text',
        placeholderAnswer: 'Strategi Circuit Breaker:\n- Jika error rate > 50% dalam 10 detik, buka sirkuit (State: OPEN)...\n- Respon HTTP 503 dengan payload JSON terstruktur:\n  { "status": "retry_later", "message": "Sistem perbankan sedang sibuk..." }',
        hint: 'Pastikan status transaksi ditandai PENDING_VERIFICATION, bukan langsung gagal.'
      }
    ]
  },

  'data-analyst-business-intelligence': {
    careerTitle: 'Data Analyst / Business Intelligence',
    careerSlug: 'data-analyst-business-intelligence',
    companyName: 'Shopee Indonesia',
    companyLogoText: '🟠 Shopee Analytics',
    companyColor: '#EE4D2D',
    companyTagline: 'Leading E-commerce Platform in Southeast Asia',
    badgeLabel: 'Shopee Data Insight Partner',
    simulationTitle: 'Simulasi Hari Pertama: Analisis Retensi Pengguna & Optimasi Voucher Toko',
    estimatedHours: '2 Jam',
    difficulty: 'Intermediate',
    summary: 'Sebagai Junior Data Analyst di Shopee, kamu akan menganalisis data churn pengguna dan menyajikan visualisasi data untuk tim manajemen.',
    backgroundStory: 'Tim Growth Shopee menemukan terjadi penurunan retensi bulan ke-2 (Month-2 Retention) sebesar 12% pada kategori fashion. Kamu diminta menganalisis dataset transaksi, merumuskan query SQL, dan memberikan rekomendasi strategis.',
    skillsValidated: ['SQL Data Wrangling', 'Cohort Analysis', 'Business Intelligence Dashboard', 'Data Storytelling'],
    tasks: [
      {
        id: 1,
        title: 'Task 1: Query SQL Segmentasi Cohort Pengguna',
        duration: '35 Menit',
        scenario: 'Tuliskan logika SQL untuk mengelompokkan pengguna berdasarkan bulan transaksi pertama mereka dan menghitung jumlah repeat order di bulan berikutnya.',
        instructions: [
          'Gunakan fungsi DATE_TRUNC atau FORMAT_DATE untuk membuat cohort bulan.',
          'Hitung persentase user yang kembali belanja di bulan ke-2.'
        ],
        deliverableType: 'text',
        placeholderAnswer: 'SELECT \n  first_month,\n  COUNT(DISTINCT user_id) AS total_users,\n  COUNT(DISTINCT CASE WHEN order_month = first_month + 1 THEN user_id END) AS retained_users\nFROM user_orders\nGROUP BY 1;',
        hint: 'Gunakan CTE (WITH clause) untuk mencari tanggal transaksi pertama per user.'
      },
      {
        id: 2,
        title: 'Task 2: Identifikasi Anomali & Temuan Utama (Insight)',
        duration: '30 Menit',
        scenario: 'Hasil data menunjukkan user yang memakai voucher gratis ongkir tanpa minimum belanja memiliki retensi 65%, sedangkan user dengan voucher diskon 50% hanya memiliki retensi 22%.',
        instructions: [
          'Berikan interpretasi bisnis mengapa voucher gratis ongkir menghasilkan retensi jangka panjang yang lebih tinggi.'
        ],
        deliverableType: 'choice',
        sampleQuestion: 'Hipotesis bisnis apa yang paling tepat menjelaskan fenomena data tersebut?',
        options: [
          {
            label: 'A',
            text: 'Voucher diskon 50% menarik "bargain hunters" yang hanya belanja sekali saat ada promo ekstrem, sedangkan gratis ongkir menciptakan kebiasaan belanja harian berulang (habitual buying).',
            isBest: true,
            feedback: 'Analisis yang tajam! Gratis ongkir menurunkan batas psikologis belanja berulang sehingga membangun Customer Lifetime Value (CLV) lebih sehat.'
          },
          {
            label: 'B',
            text: 'Data tersebut pasti salah karena diskon persentase besar selalu lebih disukai semua orang.',
            isBest: false,
            feedback: 'Data analitik mencerminkan perilaku riil, bukan sekadar intuisi.'
          },
          {
            label: 'C',
            text: 'Pengguna fashion tidak peduli dengan ongkos kirim.',
            isBest: false,
            feedback: 'Biaya ongkir adalah faktor nomor satu pemicu abandoned cart di e-commerce Indonesia.'
          }
        ]
      },
      {
        id: 3,
        title: 'Task 3: Rekomendasi Eksekutif untuk Manajemen',
        duration: '25 Menit',
        scenario: 'Susun 3 rekomendasi actionable dalam bentuk bullet points untuk diajukan ke Head of Marketing.',
        instructions: [
          'Sertakan alokasi budget, target audience, dan proyeksi dampak.'
        ],
        deliverableType: 'text',
        placeholderAnswer: 'Rekomendasi Strategis:\n1. Realokasi 40% budget voucher diskon besar ke subsidi Gratis Ongkir Bertingkat.\n2. Otomasi push notification di hari ke-14 setelah pembelian pertama.\n3. Proyeksi peningkatan MoM retention sebesar 5-8% dalam kuartal depan.',
        hint: 'Gunakan prinsip MECE (Mutually Exclusive, Collectively Exhaustive) dalam penyusunan poin.'
      }
    ]
  }
};

// Helper to get or fallback simulation for any career profile
export function getSimulationForCareer(careerTitle: string, careerSlug?: string): IndustrySimulation {
  const slug = careerSlug || careerTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  if (INDUSTRY_SIMULATIONS[slug]) {
    return INDUSTRY_SIMULATIONS[slug];
  }

  // Fallback template simulation
  return {
    careerTitle: careerTitle,
    careerSlug: slug,
    companyName: 'Telkom Digital Ecosystem',
    companyLogoText: '🔴 Telkom Indonesia',
    companyColor: '#E60012',
    companyTagline: 'Membangun Kedaulatan Digital Indonesia',
    badgeLabel: 'Telkom Innovation Partner',
    simulationTitle: `Simulasi Hari Pertama: Studi Kasus Praktik Nyata Industri (${careerTitle})`,
    estimatedHours: '1.5 - 2 Jam',
    difficulty: 'Intermediate',
    summary: `Sebagai talenta profesional baru di divisi transformasi digital Telkom, kamu akan menyelesaikan studi kasus implementasi proyek ${careerTitle} secara terstruktur.`,
    backgroundStory: `Divisi Digital Platform Telkom sedang mempercepat digitalisasi layanan publik. Kamu bergabung sebagai tenaga ahli ${careerTitle} untuk menganalisis kebutuhan operasional, merancang solusi yang scalable, dan menyusun laporan pertanggungjawaban proyek.`,
    skillsValidated: ['Industry Problem Solving', 'Strategic Execution', 'Domain Competency', 'Professional Reporting'],
    tasks: [
      {
        id: 1,
        title: 'Task 1: Memahami Problem Statement & Batasan Proyek',
        duration: '25 Menit',
        scenario: `Klien memerlukan percepatan transformasi proses kerja untuk peran ${careerTitle} dengan target penyelesaian dalam 3 bulan dan kepatuhan standar industri yang ketat.`,
        instructions: [
          'Tentukan prioritas utama dari 3 opsi pendekatan yang tersedia.',
          'Pastikan solusi efisien dan minim risiko.'
        ],
        deliverableType: 'choice',
        sampleQuestion: 'Langkah awal apa yang paling krusial diambil pada minggu pertama proyek?',
        options: [
          {
            label: 'A',
            text: 'Melakukan stakeholder mapping, audit proses kerja saat ini, dan menyusun roadmap implementasi modular berbasis prioritas tinggi.',
            isBest: true,
            feedback: 'Sangat tepat! Audit dan pemetaan menyeluruh di awal mencegah pembengkakan biaya (scope creep) di kemudian hari.'
          },
          {
            label: 'B',
            text: 'Langsung membuat implementasi tanpa berdiskusi dengan pengguna akhir.',
            isBest: false,
            feedback: 'Kurang tepat karena berisiko menghasilkan produk yang tidak sesuai kebutuhan lapangan.'
          },
          {
            label: 'C',
            text: 'Menunggu arahan pasif tanpa inisiatif audit data.',
            isBest: false,
            feedback: 'Industri membutuhkan talenta yang proaktif dan memiliki ownership.'
          }
        ]
      },
      {
        id: 2,
        title: `Task 2: Eksekusi Solusi Praktis ${careerTitle}`,
        duration: '35 Menit',
        scenario: `Tuliskan rancangan solusi konkret untuk mengatasi kendala operasional terbesar yang dihadapi dalam peran ${careerTitle}.`,
        instructions: [
          'Jelaskan tools atau metodologi yang kamu gunakan.',
          'Tuliskan langkah-langkah implementasinya secara terstruktur.'
        ],
        deliverableType: 'text',
        placeholderAnswer: `Rancangan Solusi Praktis:\n1. Metodologi: Agile Framework\n2. Tools yang Digunakan: ...\n3. Langkah Implementasi:\n   - Tahap 1: ...\n   - Tahap 2: ...`,
        hint: 'Jelaskan dengan bahasa teknis yang jelas dan mudah dipahami.'
      },
      {
        id: 3,
        title: 'Task 3: Presentasi Hasil & Rekomendasi Lanjutan',
        duration: '20 Menit',
        scenario: 'Susun ringkasan eksekutif 1 paragraf untuk mempresentasikan hasil kerja kamu kepada Business Director.',
        instructions: [
          'Sertakan ringkasan hasil, manfaat bisnis nyata, dan langkah berikutnya.'
        ],
        deliverableType: 'text',
        placeholderAnswer: 'Ringkasan Eksekutif:\n"Proyek ini berhasil memetakan dan mengoptimalkan proses kerja dengan efisiensi waktu sebesar 30%. Langkah selanjutnya adalah mengintegrasikan sistem ke seluruh divisi..."',
        hint: 'Fokuskan pada dampak bisnis (business value) yang dihasilkan.'
      }
    ]
  };
}
