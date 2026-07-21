export interface SeedOption {
  text: string;
  mappedArchetype: "The Creator" | "The Builder" | "The Thinker" | "The Connector";
}

export interface SeedQuestion {
  text: string;
  dimension: "Curiosity" | "Interests" | "Work Style" | "Life Values";
  options: [SeedOption, SeedOption, SeedOption, SeedOption];
}

export const SEED_QUESTIONS: SeedQuestion[] = [
  // ─── Curiosity (13) ────────────────────────────────────────────────────────
  {
    text: "Kamu menemukan artikel tentang teknologi yang belum pernah kamu dengar sebelumnya. Apa yang paling mungkin kamu lakukan?",
    dimension: "Curiosity",
    options: [
      { text: "Langsung coba install dan bereksperimen dengannya", mappedArchetype: "The Builder" },
      { text: "Baca artikelnya sampai habis lalu cari paper ilmiah tentangnya", mappedArchetype: "The Thinker" },
      { text: "Bayangkan bagaimana teknologi ini bisa dipakai untuk proyek seni digital", mappedArchetype: "The Creator" },
      { text: "Share ke teman-teman dan diskusikan potensinya bersama", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Jika kamu diberi waktu luang seminggu penuh tanpa tanggung jawab, topik apa yang ingin kamu dalami?",
    dimension: "Curiosity",
    options: [
      { text: "Psikologi perilaku manusia dan cara kerja otak", mappedArchetype: "The Thinker" },
      { text: "Membuat furniture custom dari kayu", mappedArchetype: "The Builder" },
      { text: "Belajar membuat film pendek atau musik elektronik", mappedArchetype: "The Creator" },
      { text: "Mengunjungi komunitas berbeda dan mendengarkan cerita hidup mereka", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Temanmu bercerita tentang masalah di tempat kerjanya. Reaksi pertamamu?",
    dimension: "Curiosity",
    options: [
      { text: "Ajukan pertanyaan mendalam untuk memahami akar masalahnya", mappedArchetype: "The Thinker" },
      { text: "Tawarkan solusi konkret langkah demi langkah", mappedArchetype: "The Builder" },
      { text: "Suggest ide kreatif yang mungkin belum terpikirkan olehnya", mappedArchetype: "The Creator" },
      { text: "Dengarkan dengan empati dan bantu dia merasa lebih baik", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu melihat pohon tumbuh miring di pinggir jalan. Pikiran pertamamu?",
    dimension: "Curiosity",
    options: [
      { text: "Kenapa bisa miring? Mungkin ada faktor tanah atau angin yang menarik", mappedArchetype: "The Thinker" },
      { text: "Seharusnya bisa diluruskan pakai tali dan patok", mappedArchetype: "The Builder" },
      { text: "Bentuknya unik, bisa jadi inspirasi instalasi seni", mappedArchetype: "The Creator" },
      { text: "Pernahkah ada orang yang merawat pohon ini?", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu mengunjungi museum sains. Bagian mana yang paling menarik perhatianmu?",
    dimension: "Curiosity",
    options: [
      { text: "Pameran interaktif yang bisa dicoba langsung", mappedArchetype: "The Builder" },
      { text: "Galeri tentang sejarah penemuan-penemuan besar", mappedArchetype: "The Thinker" },
      { text: "Karya seni yang menggabungkan sains dan estetika", mappedArchetype: "The Creator" },
      { text: "Cerita para ilmuwan di balik penemuan tersebut", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Podcast baru yang menarik, kamu lebih suka topik tentang?",
    dimension: "Curiosity",
    options: [
      { text: "Bagaimana otak manusia memproses emosi dan keputusan", mappedArchetype: "The Thinker" },
      { text: "Wirausahawan yang membangun produk dari nol", mappedArchetype: "The Builder" },
      { text: "Proses kreatif di balik film, musik, atau sastra terkenal", mappedArchetype: "The Creator" },
      { text: "Perjalanan hidup orang biasa yang menginspirasi perubahan", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu ditawari belajar keterampilan baru gratis selama sebulan. Pilihanmu?",
    dimension: "Curiosity",
    options: [
      { text: "Bermain instrumen musik yang belum pernah disentuh", mappedArchetype: "The Creator" },
      { text: "Coding atau membangun robot sederhana", mappedArchetype: "The Builder" },
      { text: "Logika dan filosofi kritis", mappedArchetype: "The Thinker" },
      { text: "Bahasa asing agar bisa berkomunikasi dengan lebih banyak orang", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Ketika menghadapi misteri atau teka-teki, pendekatanmu biasanya?",
    dimension: "Curiosity",
    options: [
      { text: "Mencoba berbagai kombinasi sampai menemukan yang cocok", mappedArchetype: "The Builder" },
      { text: "Menganalisis pola dan logika sebelum mencoba apapun", mappedArchetype: "The Thinker" },
      { text: "Menggunakan intuisi dan pemikiran di luar kebiasaan", mappedArchetype: "The Creator" },
      { text: "Minta bantuan orang lain dan selesaikan bersama", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu penasaran dengan sebuah tempat terpencil di Indonesia. Mengapa kamu ingin ke sana?",
    dimension: "Curiosity",
    options: [
      { text: "Mau memahami ekosistem alam dan budaya lokal secara mendalam", mappedArchetype: "The Thinker" },
      { text: "Ingin mendokumentasikannya dalam bentuk video atau tulisan kreatif", mappedArchetype: "The Creator" },
      { text: "Tertarik membangun fasilitas atau membantu infrastruktur di sana", mappedArchetype: "The Builder" },
      { text: "Ingin bertemu penduduk lokal dan membangun relasi", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Saat membaca buku non-fiksi, bagian mana yang paling kamu nikmati?",
    dimension: "Curiosity",
    options: [
      { text: "Data, grafik, dan bukti empiris yang mendukung argumen", mappedArchetype: "The Thinker" },
      { text: "Strategi dan langkah praktis yang bisa langsung diterapkan", mappedArchetype: "The Builder" },
      { text: "Kutipan dan cerita metaforis yang menggugah imajinasi", mappedArchetype: "The Creator" },
      { text: "Anecdote tentang hubungan antarmanusia di balik riset", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Jika kamu bisa makan malam dengan siapa saja dari sejarah, siapa yang kamu pilih dan kenapa?",
    dimension: "Curiosity",
    options: [
      { text: "Tesla atau Da Vinci, untuk membahas ide-ide visioner mereka", mappedArchetype: "The Creator" },
      { text: "Einstein atau Newton, untuk memahami caranya berpikir", mappedArchetype: "The Thinker" },
      { text: "Pendiri kerajaan besar, untuk belajar tentang membangun sesuatu", mappedArchetype: "The Builder" },
      { text: "Raja atau ratu yang dikenal adil, untuk belajar tentang kepemimpinan", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu melihat tutorial YouTube tentang sesuatu yang kompleks. Apa yang kamu lakukan?",
    dimension: "Curiosity",
    options: [
      { text: "Tonton sampai habis lalu langsung praktik", mappedArchetype: "The Builder" },
      { text: "Pause di setiap langkah untuk memahami mengapa itu dilakukan", mappedArchetype: "The Thinker" },
      { text: "Lihat videonya sekilas lalu improvisasi dengan caraku sendiri", mappedArchetype: "The Creator" },
      { text: "Kirim link ke teman dan ajak belajar bareng", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Jika dunia ini adalah buku, bab apa yang paling ingin kamu baca lebih lanjut?",
    dimension: "Curiosity",
    options: [
      { text: "Bab tentang bagaimana manusia menyelesaikan konflik global", mappedArchetype: "The Connector" },
      { text: "Bab tentang penemuan teknologi yang mengubah peradaban", mappedArchetype: "The Builder" },
      { text: "Bab tentang misteri alam semesta yang belum terjawab", mappedArchetype: "The Thinker" },
      { text: "Bab tentang lahirnya gerakan seni dan budaya dunia", mappedArchetype: "The Creator" },
    ],
  },

  // ─── Interests (13) ────────────────────────────────────────────────────────
  {
    text: "Kamu sedang scroll media sosial. Konten seperti apa yang paling sering bikin kamu berhenti scroll?",
    dimension: "Interests",
    options: [
      { text: "Video time-lapse seseorang membuat karya seni atau kerajinan", mappedArchetype: "The Creator" },
      { text: "Infografis atau penjelasan ilmiah tentang fenomena alam", mappedArchetype: "The Thinker" },
      { text: "Video orang membangun rumah, mengedit mesin, atau DIY", mappedArchetype: "The Builder" },
      { text: "Cerita inspiratif tentang komunitas atau perubahan sosial", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Genre film favoritmu? Atau lebih tepatnya, film seperti apa yang paling bikin kamu terkesan?",
    dimension: "Interests",
    options: [
      { text: "Film dokumenter tentang isu sosial atau alam", mappedArchetype: "The Thinker" },
      { text: "Film dengan visual artistik dan narasi non-linier", mappedArchetype: "The Creator" },
      { text: "Film aksi atau thriller dengan plot ketat dan teknis detail", mappedArchetype: "The Builder" },
      { text: "Film drama yang mengangkat hubungan antarmanusia", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kalau kamu harus memilih hobi baru minggu ini, mana yang paling menarik?",
    dimension: "Interests",
    options: [
      { text: "Membuat podcast atau channel YouTube tentang topik favorit", mappedArchetype: "The Creator" },
      { text: "Merakit perangkat IoT atau elektronik rumahan", mappedArchetype: "The Builder" },
      { text: "Belajar statistik atau data science untuk analisis tren", mappedArchetype: "The Thinker" },
      { text: "Menjadi volunteer di organisasi nirlaba lokal", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu punya uang ekstra untuk beli sesuatu. Prioritas belanjamu?",
    dimension: "Interests",
    options: [
      { text: "Alat musik, kamera, atau peralatan seni", mappedArchetype: "The Creator" },
      { text: "Tool set, 3D printer, atau komponen elektronik", mappedArchetype: "The Builder" },
      { text: "Buku-buku atau kursus online tentang sains dan filosofi", mappedArchetype: "The Thinker" },
      { text: "Tiket event, workshop, atau traveling bersama teman", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kalau kamu diminta mempresentasikan sesuatu di depan kelas, topik apa yang paling seru menurutmu?",
    dimension: "Interests",
    options: [
      { text: "Bagaimana seni dapat mengubah persepsi manusia terhadap masalah sosial", mappedArchetype: "The Creator" },
      { text: "Cara kerja mesin roket atau teknologi masa depan", mappedArchetype: "The Builder" },
      { text: "Paradoks logika dan bagaimana otak manusia membuat kesalahan", mappedArchetype: "The Thinker" },
      { text: "Kisah komunitas kecil yang berhasil mengubah kebijakan nasional", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Di sebuah kafe, kamu paling suka duduk di mana?",
    dimension: "Interests",
    options: [
      { text: "Di pojokan yang tenang, bisa baca atau menulis", mappedArchetype: "The Thinker" },
      { text: "Dekat jendela, mengamati orang dan sketsa suasana", mappedArchetype: "The Creator" },
      { text: "Di bar dekat mesin kopi, bisa ngobrol sama barista", mappedArchetype: "The Connector" },
      { text: "Di meja besar yang bisa laptop dan kerja produktif", mappedArchetype: "The Builder" },
    ],
  },
  {
    text: "Kamu mendengar kata 'inovasi'. Hal pertama yang terlintas di pikiranmu?",
    dimension: "Interests",
    options: [
      { text: "Desain produk baru yang belum pernah ada sebelumnya", mappedArchetype: "The Creator" },
      { text: "Riset fundamental yang menghasilkan terobosan baru", mappedArchetype: "The Thinker" },
      { text: "Membangun startup atau bisnis yang menyelesaikan masalah nyata", mappedArchetype: "The Builder" },
      { text: "Gerakan sosial yang mengubah cara orang hidup dan berinteraksi", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu diminta membuat playlist untuk road trip. Suasana musik seperti apa yang dominan?",
    dimension: "Interests",
    options: [
      { text: "Indie atau alternatif dengan lirik puitis dan emosional", mappedArchetype: "The Creator" },
      { text: "Elektronik atau lo-fi yang fokus dan produktif", mappedArchetype: "The Builder" },
      { text: "Jazz atau klasik yang kompleks dan menantang pendengar", mappedArchetype: "The Thinker" },
      { text: "Pop atau reggae yang ceria dan bikin semua orang ikut joget", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kalau kamu harus memilih satu bidang untuk menulis buku, apa yang kamu pilih?",
    dimension: "Interests",
    options: [
      { text: "Panduan praktis membangun bisnis atau produk dari nol", mappedArchetype: "The Builder" },
      { text: "Eksplorasi psikologi dan perilaku manusia", mappedArchetype: "The Thinker" },
      { text: "Fiksi spekulatif atau antologi cerpen bergaya unik", mappedArchetype: "The Creator" },
      { text: "Biografi inspiratif orang-orang yang menggerakkan komunitas", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Acara gathering seperti apa yang paling kamu nikmati?",
    dimension: "Interests",
    options: [
      { text: "Workshop seni atau craft di mana semua orang bisa berkreasi", mappedArchetype: "The Creator" },
      { text: "Hackathon atau kompetisi membangun solusi dalam waktu terbatas", mappedArchetype: "The Builder" },
      { text: "Forum diskusi panel dengan expert yang membahas topik kompleks", mappedArchetype: "The Thinker" },
      { text: "Pesta BBQ atau gathering santai di mana semua orang bisa ngobrol", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu melihat pemandangan gunung saat sunset. Apa yang pertama kali kamu rasakan?",
    dimension: "Interests",
    options: [
      { text: "Ingin ambil foto atau gambar pemandangan ini", mappedArchetype: "The Creator" },
      { text: "Merenungkan kebesaran alam dan tempat manusia di semesta", mappedArchetype: "The Thinker" },
      { text: "Membayangkan bisa mendirikan tenda dan hiking ke puncaknya", mappedArchetype: "The Builder" },
      { text: "Berharap ada orang tersayang di sini untuk menikmati bersama", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Channel YouTube atau blog apa yang paling sering kamu kunjungi?",
    dimension: "Interests",
    options: [
      { text: "Kanal tentang desain, animasi, atau visual storytelling", mappedArchetype: "The Creator" },
      { text: "Kanal edukasi sains atau filsafat seperti Veritasium atau Vsauce", mappedArchetype: "The Thinker" },
      { text: "Kanal DIY, maker, atau engineering seperti Mark Rober", mappedArchetype: "The Builder" },
      { text: "Kanal tentang kehidupan, relasi, atau komunitas", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kalau dunia ini punya 'mata uang' berupa skill, skill apa yang paling berharga menurutmu?",
    dimension: "Interests",
    options: [
      { text: "Kemampuan berpikir kritis dan memecahkan masalah abstrak", mappedArchetype: "The Thinker" },
      { text: "Kemampuan membuat atau membangun apa pun dari ide", mappedArchetype: "The Creator" },
      { text: "Kemampuan teknis dan membangun infrastruktur yang nyata", mappedArchetype: "The Builder" },
      { text: "Kemampuan berkomunikasi dan mempengaruhi banyak orang", mappedArchetype: "The Connector" },
    ],
  },

  // ─── Work Style (13) ───────────────────────────────────────────────────────
  {
    text: "Kamu mendapat proyek baru dari atasan. Apa langkah pertamamu?",
    dimension: "Work Style",
    options: [
      { text: "Buat mind map dan analisis setiap komponen proyek", mappedArchetype: "The Thinker" },
      { text: "Mulai buat prototype kasar untuk melihat seperti apa hasilnya", mappedArchetype: "The Builder" },
      { text: "Bayangkan visi akhirnya dan sketsa konsep kreatifnya", mappedArchetype: "The Creator" },
      { text: "Kumpulkan tim dan brainstorming bersama", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Ketika bekerja dalam tim, peran seperti apa yang paling natural bagimu?",
    dimension: "Work Style",
    options: [
      { text: "Analyst yang memastikan setiap keputusan berdasarkan data", mappedArchetype: "The Thinker" },
      { text: "Implementer yang langsung eksekusi ide menjadi nyata", mappedArchetype: "The Builder" },
      { text: "Visioner yang mengusulkan ide-ide baru dan out-of-the-box", mappedArchetype: "The Creator" },
      { text: "Koordinator yang menjaga komunikasi dan keharmonisan tim", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Deadline sudah dekat tapi ada bug atau masalah di proyek. Reaksimu?",
    dimension: "Work Style",
    options: [
      { text: "Tetap tenang, analisis masalah secara sistematis", mappedArchetype: "The Thinker" },
      { text: "Coba berbagai solusi langsung sampai ada yang works", mappedArchetype: "The Builder" },
      { text: "Cari solusi alternatif yang mungkin belum pernah dicoba siapapun", mappedArchetype: "The Creator" },
      { text: "Hubungi rekan kerja untuk minta bantuan atau pendapat", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Ruang kerja impianmu seperti apa?",
    dimension: "Work Style",
    options: [
      { text: "Studio atau workshop dengan peralatan lengkap", mappedArchetype: "The Builder" },
      { text: "Ruang minimalis dengan pencahayaan natural dan buku-buku", mappedArchetype: "The Thinker" },
      { text: "Ruang yang penuh warna, tanaman, dan karya seni", mappedArchetype: "The Creator" },
      { text: "Co-working space yang ramai dan penuh interaksi", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu punya dua tawaran kerja: satu gaji tinggi tapi membosankan, satu gaji rendah tapi seru. Pilihanmu?",
    dimension: "Work Style",
    options: [
      { text: "Yang seru — passion lebih penting dari gaji", mappedArchetype: "The Creator" },
      { text: "Yang membosankan tapi stabil — keamanan finansial dulu", mappedArchetype: "The Builder" },
      { text: "Tidak dua-duanya, cari opsi ketiga yang lebih masuk akal", mappedArchetype: "The Thinker" },
      { text: "Tanya pendapat orang-orang terdekat sebelum memutuskan", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Ketika menghadapi konflik dengan rekan kerja, pendekatanmu?",
    dimension: "Work Style",
    options: [
      { text: "Duduk bareng, dengarkan mereka, dan cari common ground", mappedArchetype: "The Connector" },
      { text: "Tulis fakta dan data secara objektif untuk klarifikasi", mappedArchetype: "The Thinker" },
      { text: "Fokus pada solusi praktis, bukan siapa yang salah", mappedArchetype: "The Builder" },
      { text: "Coba lihat dari sudut pandang berbeda yang mungkin terlewat", mappedArchetype: "The Creator" },
    ],
  },
  {
    text: "Bagaimana cara belajarmu yang paling efektif?",
    dimension: "Work Style",
    options: [
      { text: "Belajar mandiri dengan membaca dan riset mendalam", mappedArchetype: "The Thinker" },
      { text: "Langsung praktik sambil belajar dari kesalahan", mappedArchetype: "The Builder" },
      { text: "Eksperimen sendiri dan menemukan cara unik belajar", mappedArchetype: "The Creator" },
      { text: "Belajar bersama kelompok atau mentoring dengan senior", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu mendapat feedback negatif dari klien. Apa reaksimu?",
    dimension: "Work Style",
    options: [
      { text: "Analisis feedback-nya untuk cari pola dan perbaikan sistemik", mappedArchetype: "The Thinker" },
      { text: "Langsung perbaiki dan serahkan hasil barunya secepat mungkin", mappedArchetype: "The Builder" },
      { text: "Diskusikan ulang visi dan ide yang mungkin belum tersampaikan", mappedArchetype: "The Creator" },
      { text: "Bangun ulang hubungan dengan klien dan pahami kebutuhannya", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Cara kerjamu paling produktif di waktu kapan?",
    dimension: "Work Style",
    options: [
      { text: "Pagi hari, saat pikiran masih segar dan dunia masih sepi", mappedArchetype: "The Thinker" },
      { text: "Siang hari, saat bisa berkolaborasi dan berinteraksi dengan orang", mappedArchetype: "The Connector" },
      { text: "Malam hari, saat suasana tenang dan bisa fokus total", mappedArchetype: "The Builder" },
      { text: "Tidak terikat waktu, produktif saat inspirasi datang", mappedArchetype: "The Creator" },
    ],
  },
  {
    text: "Kamu harus mempresentasikan hasil kerja ke board of director. Persiapanmu?",
    dimension: "Work Style",
    options: [
      { text: "Siapkan data dan grafik detail untuk setiap klaim", mappedArchetype: "The Thinker" },
      { text: "Buat prototype atau demo produk yang bisa dilihat langsung", mappedArchetype: "The Builder" },
      { text: "Desain slide yang visual dan storytelling yang kuat", mappedArchetype: "The Creator" },
      { text: "Latihan presentasi dengan teman untuk dapat feedback", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Ketika proyek yang kamu kerjakan tiba-tiba berubah arah, perasaanmu?",
    dimension: "Work Style",
    options: [
      { text: "Frustrasi, tapi coba pahami logika di balik perubahan itu", mappedArchetype: "The Thinker" },
      { text: "Adaptasi cepat dan mulai rencanakan eksekusi baru", mappedArchetype: "The Builder" },
      { text: "Justru tertarik — perubahan bisa membuka peluang baru", mappedArchetype: "The Creator" },
      { text: "Khawatir timku bisa cope atau tidak dengan perubahan ini", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu sedang mengajar atau menjelaskan sesuatu ke orang baru. Gaya mengajarmu?",
    dimension: "Work Style",
    options: [
      { text: "Beri contoh nyata dan suruh mereka praktik langsung", mappedArchetype: "The Builder" },
      { text: "Jelaskan dari konsep dasar sampai ke yang kompleks secara sistematis", mappedArchetype: "The Thinker" },
      { text: "Gunakan analogi kreatif dan cerita untuk membuatnya hidup", mappedArchetype: "The Creator" },
      { text: "Tanya mereka apa yang sudah tahu dan bangun dari sana", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu harus mengelola tiga proyek sekaligus. Strategimu?",
    dimension: "Work Style",
    options: [
      { text: "Buat prioritas berdasarkan urgensi dan dampak menggunakan spreadsheet", mappedArchetype: "The Thinker" },
      { text: "Fokus selesaikan satu per satu dari yang paling mendesak", mappedArchetype: "The Builder" },
      { text: "Delegasikan bagian yang bisa di-outsource agar bisa fokus di ide besar", mappedArchetype: "The Creator" },
      { text: "Komunikasikan secara transparan dengan semua stakeholder tentang progress", mappedArchetype: "The Connector" },
    ],
  },

  // ─── Life Values (11) ──────────────────────────────────────────────────────
  {
    text: "Kamu berada di titik akhir hidupmu. Pencapaian apa yang paling ingin kamu lihat?",
    dimension: "Life Values",
    options: [
      { text: "Karya atau penemuan yang masih berguna setelah aku pergi", mappedArchetype: "The Creator" },
      { text: "Bisnis atau infrastruktur yang memberi lapangan kerja", mappedArchetype: "The Builder" },
      { text: "Pengetahuan atau teori yang mengubah cara orang berpikir", mappedArchetype: "The Thinker" },
      { text: "Hubungan dan komunitas yang terus tumbuh karena sentuhanmu", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Nilai hidup apa yang paling tidak bisa kamu kompromikan?",
    dimension: "Life Values",
    options: [
      { text: "Kebebasan untuk mengekspresikan diri tanpa batas", mappedArchetype: "The Creator" },
      { text: "Kestabilan dan keamanan untuk keluarga", mappedArchetype: "The Builder" },
      { text: "Kejujuran intelektual dan integritas dalam berpikir", mappedArchetype: "The Thinker" },
      { text: "Rasa hormat dan kepedulian terhadap sesama manusia", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu punya pilihan: menyumbang ke lembaga riset atau ke komunitas lokal. Mana yang lebih bermakna?",
    dimension: "Life Values",
    options: [
      { text: "Lembaga riset — penemuan hari ini bisa selamatkan banyak orang", mappedArchetype: "The Thinker" },
      { text: "Komunitas lokal — perubahan nyata dimulai dari lingkungan terdekat", mappedArchetype: "The Connector" },
      { text: "Lembaga riset yang fokus pada teknologi ramah lingkungan", mappedArchetype: "The Builder" },
      { text: "Komunitas seni lokal yang mengangkat cerita orang terpinggirkan", mappedArchetype: "The Creator" },
    ],
  },
  {
    text: "Ketika memilih pekerjaan, faktor apa yang paling menentukan keputusanmu?",
    dimension: "Life Values",
    options: [
      { text: "Pekerjaan itu harus memberi dampak positif bagi masyarakat", mappedArchetype: "The Connector" },
      { text: "Harus bisa mengeksplorasi ide dan bereksperimen tanpa batas", mappedArchetype: "The Creator" },
      { text: "Harus menantang secara intelektual dan terus belajar", mappedArchetype: "The Thinker" },
      { text: "Harus menghasilkan sesuatu yang nyata dan bisa diukur", mappedArchetype: "The Builder" },
    ],
  },
  {
    text: "Kamu melihat kemiskinan di sekitarmu. Pendekatanmu untuk membantu?",
    dimension: "Life Values",
    options: [
      { text: "Bangun sistem atau organisasi yang bisa menyelesaikan masalah secara struktural", mappedArchetype: "The Builder" },
      { text: "Riset dulu penyebabnya, baru tentukan intervensi paling efektif", mappedArchetype: "The Thinker" },
      { text: "Gunakan seni atau media untuk meningkatkan kesadaran publik", mappedArchetype: "The Creator" },
      { text: "Turun langsung, kenali mereka, dan bantu secara personal", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu ditawari posisi di perusahaan besar tapi harus pindah ke kota lain. Pertimbangan utamamu?",
    dimension: "Life Values",
    options: [
      { text: "Apakah di sana ada komunitas atau lingkungan yang mendukung pertumbuhan?", mappedArchetype: "The Connector" },
      { text: "Apakah pekerjaannya memungkinkanku untuk berinovasi dan berkreasi?", mappedArchetype: "The Creator" },
      { text: "Apakah perusahaan ini punya budaya belajar dan riset yang kuat?", mappedArchetype: "The Thinker" },
      { text: "Apakah ada peluang untuk membangun karier jangka panjang yang solid?", mappedArchetype: "The Builder" },
    ],
  },
  {
    text: "Kamu ingin mendidik anak-anakmu dengan nilai utama apa?",
    dimension: "Life Values",
    options: [
      { text: "Percaya diri untuk menjadi diri sendiri dan mengejar passion", mappedArchetype: "The Creator" },
      { text: "Bekerja keras dan membangun sesuatu yang bermanfaat", mappedArchetype: "The Builder" },
      { text: "Berpikir kritis dan tidak takut mempertanyakan segalanya", mappedArchetype: "The Thinker" },
      { text: "Empati dan kemampuan menjalin hubungan dengan siapa saja", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Jika kamu harus mengorbankan satu hal untuk karier impianmu, apa yang paling mungkin kamu korbankan?",
    dimension: "Life Values",
    options: [
      { text: "Waktu luang untuk mengejar passion", mappedArchetype: "The Creator" },
      { text: "Comfort zone demi stabilitas jangka panjang", mappedArchetype: "The Builder" },
      { text: "Kemudahan demi pemahaman yang lebih dalam", mappedArchetype: "The Thinker" },
      { text: "Waktu sendiri demi karier yang bisa membantu lebih banyak orang", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu melihat berita tentang perubahan iklim. Apa yang paling ingin kamu lakukan?",
    dimension: "Life Values",
    options: [
      { text: "Buat kampanye kreatif yang menggerakkan emosi orang untuk bertindak", mappedArchetype: "The Creator" },
      { text: "Bangun teknologi atau solusi energi terbarukan", mappedArchetype: "The Builder" },
      { text: "Pelajari datanya secara mendalam untuk temukan solusi paling efektif", mappedArchetype: "The Thinker" },
      { text: "Galang komunitas dan ajak orang-orang di sekitarku untuk mulai beraksi", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kamu pensiun nanti. Kehidupan seperti apa yang paling memuaskan menurutmu?",
    dimension: "Life Values",
    options: [
      { text: "Menulis, melukis, atau membuat sesuatu yang sepenuhnya milikku", mappedArchetype: "The Creator" },
      { text: "Mengelola kebun atau workshop kecil yang produktif", mappedArchetype: "The Builder" },
      { text: "Terus belajar, mengajar, dan menulis tentang apa yang kupelajari", mappedArchetype: "The Thinker" },
      { text: "Menghabiskan waktu dengan cucu-cucu dan komunitas", mappedArchetype: "The Connector" },
    ],
  },
  {
    text: "Kalau kamu bisa meninggalkan satu warisan untuk dunia, apa yang paling berarti?",
    dimension: "Life Values",
    options: [
      { text: "Sebuah karya — buku, film, atau karya seni yang menginspirasi", mappedArchetype: "The Creator" },
      { text: "Sebuah bisnis atau organisasi yang terus berjalan setelahku pergi", mappedArchetype: "The Builder" },
      { text: "Sebuah teori atau penemuan yang membuka jalan bagi generasi depan", mappedArchetype: "The Thinker" },
      { text: "Jaringan hubungan yang menghubungkan orang-orang hebat", mappedArchetype: "The Connector" },
    ],
  },
];
