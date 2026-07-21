
export type QuizOption = {
    label: string;
    text: string;
    score: number;
};

export type QuizQuestion = {
    id: string;
    question: string;
    options: QuizOption[];
};

// Pastikan key (seperti 'software-engineer') SAMA PERSIS dengan ID yang ada di CareerSelectionWrapper lu
export const quizBank: Record<string, QuizQuestion[]> = {

    "software-engineer": [
        {
            "id": "se-1",
            "question": "Aplikasi e-commerce yang kamu tangani mendadak lambat saat event flash sale. Dari monitoring, terlihat CPU database mencapai 100%. Langkah darurat paling efektif yang akan kamu lakukan adalah?",
            "options": [
                { "label": "A", "text": "Menambah instance server backend agar request lebih cepat diproses.", "score": 0 },
                { "label": "B", "text": "Menerapkan Redis untuk caching query yang sering diakses (seperti data produk).", "score": 10 },
                { "label": "C", "text": "Mereset ulang database untuk membersihkan koneksi yang menggantung.", "score": 0 }
            ]
        },
        {
            "id": "se-2",
            "question": "Kamu sedang mendevelop fitur shopping cart di frontend menggunakan React. Saat user menambah barang dengan cepat, jumlah item di keranjang terkadang tidak sinkron. Masalah ini kemungkinan besar disebabkan oleh?",
            "options": [
                { "label": "A", "text": "Stale state closure pada event handler yang mengakses nilai state lama.", "score": 10 },
                { "label": "B", "text": "Database backend terlalu lambat merespon request.", "score": 0 },
                { "label": "C", "text": "Kurangnya penggunaan useEffect untuk mere-render komponen.", "score": 0 }
            ]
        },
        {
            "id": "se-3",
            "question": "Dalam arsitektur microservices, service Payment gagal menghubungi service Inventory karena network timeout. Pola (pattern) apa yang paling tepat untuk mencegah kegagalan sistem secara keseluruhan?",
            "options": [
                { "label": "A", "text": "Menggunakan pola Circuit Breaker untuk menghentikan request sementara ke service yang mati.", "score": 10 },
                { "label": "B", "text": "Memperpanjang waktu timeout agar request pasti berhasil.", "score": 0 },
                { "label": "C", "text": "Melakukan retry terus-menerus (infinite loop) sampai service Inventory hidup kembali.", "score": 0 }
            ]
        },
        {
            "id": "se-4",
            "question": "Kamu menemukan celah keamanan di mana user bisa mengakses data user lain dengan mengganti ID di URL (misal: /api/users/123 menjadi /api/users/124). Tipe kerentanan ini disebut?",
            "options": [
                { "label": "A", "text": "Cross-Site Scripting (XSS).", "score": 0 },
                { "label": "B", "text": "SQL Injection.", "score": 0 },
                { "label": "C", "text": "Insecure Direct Object Reference (IDOR).", "score": 10 }
            ]
        },
        {
            "id": "se-5",
            "question": "Saat menggunakan ORM (seperti Prisma), kamu menyadari bahwa memuat daftar artikel beserta nama penulisnya menghasilkan ratusan query ke database (N+1 Problem). Cara memperbaikinya adalah?",
            "options": [
                { "label": "A", "text": "Membuat raw SQL query yang kompleks untuk setiap request.", "score": 0 },
                { "label": "B", "text": "Menggunakan fitur eager loading (misal: include di Prisma) untuk memuat relasi dalam satu query.", "score": 10 },
                { "label": "C", "text": "Menjalankan query di dalam loop (map) pada level backend.", "score": 0 }
            ]
        },
        {
            "id": "se-6",
            "question": "Kamu harus membuat endpoint API untuk fitur pencarian produk berdasarkan nama. Data produk berjumlah jutaan. Struktur database yang paling penting untuk ditambahkan agar pencarian cepat adalah?",
            "options": [
                { "label": "A", "text": "Menambahkan Indexing pada kolom nama produk.", "score": 10 },
                { "label": "B", "text": "Mengubah tipe data kolom nama produk menjadi VARCHAR(MAX).", "score": 0 },
                { "label": "C", "text": "Memisahkan tabel produk menjadi 10 tabel yang lebih kecil.", "score": 0 }
            ]
        },
        {
            "id": "se-7",
            "question": "Tim kamu sering mengalami konflik saat melakukan merge kode di Git karena dua developer mengedit fungsi yang sama di branch berbeda. Praktik terbaik untuk meminimalisir hal ini adalah?",
            "options": [
                { "label": "A", "text": "Hanya satu developer yang boleh melakukan commit dalam satu hari.", "score": 0 },
                { "label": "B", "text": "Menerapkan CI/CD dan sering melakukan pull dari branch utama serta membuat commit yang lebih kecil.", "score": 10 },
                { "label": "C", "text": "Menggunakan Git Force Push secara berkala untuk menimpa kode lama.", "score": 0 }
            ]
        },
        {
            "id": "se-8",
            "question": "Aplikasi Next.js kamu memiliki halaman artikel blog yang isinya jarang berubah. Untuk memaksimalkan kecepatan load time dan SEO, strategi rendering apa yang akan kamu pilih?",
            "options": [
                { "label": "A", "text": "Client-Side Rendering (CSR).", "score": 0 },
                { "label": "B", "text": "Server-Side Rendering (SSR) pada setiap request.", "score": 0 },
                { "label": "C", "text": "Static Site Generation (SSG) dengan Incremental Static Regeneration (ISR).", "score": 10 }
            ]
        },
        {
            "id": "se-9",
            "question": "User melaporkan bahwa memori browser mereka tersedot habis (memory leak) setelah membuka halaman dashboard yang memiliki chart real-time selama beberapa jam. Apa hal pertama yang akan kamu cek di kode Frontend?",
            "options": [
                { "label": "A", "text": "Mengecek apakah event listener (seperti websocket atau setInterval) sudah di-cleanup saat komponen unmount.", "score": 10 },
                { "label": "B", "text": "Menghapus semua file CSS karena membebani memori.", "score": 0 },
                { "label": "C", "text": "Mengecilkan ukuran gambar yang ada di halaman dashboard.", "score": 0 }
            ]
        },
        {
            "id": "se-10",
            "question": "Kamu membangun sistem antrean tiket konser. Sistem harus memproses jutaan request yang masuk bersamaan secara asinkron agar server tidak crash. Teknologi yang paling cocok digunakan di tengah arsitektur ini adalah?",
            "options": [
                { "label": "A", "text": "Menyimpan langsung semua request ke MySQL.", "score": 0 },
                { "label": "B", "text": "Menggunakan Message Broker / Queue seperti RabbitMQ atau Kafka.", "score": 10 },
                { "label": "C", "text": "Mengandalkan variabel array di dalam memory Node.js.", "score": 0 }
            ]
        },
        {
            "id": "se-11",
            "question": "Saat melakukan deployment aplikasi React ke production, kamu menyadari file bundle JavaScript berukuran lebih dari 3MB sehingga loading awal sangat lambat. Teknik apa yang harus digunakan?",
            "options": [
                { "label": "A", "text": "Code Splitting dan Lazy Loading untuk memecah bundle menjadi bagian yang lebih kecil.", "score": 10 },
                { "label": "B", "text": "Memindahkan semua kode ke file HTML statis.", "score": 0 },
                { "label": "C", "text": "Mengurangi jumlah komponen React dan menggunakan jQuery.", "score": 0 }
            ]
        },
        {
            "id": "se-12",
            "question": "Di dalam database relational, tabel Users (ID, Nama) dan tabel Roles (ID, Nama Role). Seorang user bisa memiliki banyak role, dan satu role bisa dimiliki banyak user. Relasi ini disebut?",
            "options": [
                { "label": "A", "text": "One-to-One.", "score": 0 },
                { "label": "B", "text": "One-to-Many.", "score": 0 },
                { "label": "C", "text": "Many-to-Many (membutuhkan tabel perantara/junction table).", "score": 10 }
            ]
        },
        {
            "id": "se-13",
            "question": "Aplikasi kamu sering down karena satu IP address yang terus-menerus melakukan spam request ke API login (brute force). Cara pencegahan di level server yang paling tepat adalah?",
            "options": [
                { "label": "A", "text": "Menerapkan Rate Limiting berdasarkan IP address user.", "score": 10 },
                { "label": "B", "text": "Memblokir semua akses login selama 24 jam.", "score": 0 },
                { "label": "C", "text": "Menghapus endpoint API login dari routing sementara waktu.", "score": 0 }
            ]
        },
        {
            "id": "se-14",
            "question": "Tim meminta kamu untuk menyimpan password user ke dalam database. Pendekatan kriptografi mana yang aman dan sesuai standar?",
            "options": [
                { "label": "A", "text": "Menyimpannya dalam plain text agar mudah direcovery saat user lupa password.", "score": 0 },
                { "label": "B", "text": "Melakukan enkripsi dua arah (seperti AES) sehingga bisa didekripsi jika dibutuhkan.", "score": 0 },
                { "label": "C", "text": "Menggunakan fungsi Hash satu arah ditambah Salt (contoh: bcrypt).", "score": 10 }
            ]
        },
        {
            "id": "se-15",
            "question": "Sebuah pipeline CI/CD gagal pada tahap 'Test' setelah kamu mem-push kode. Namun saat kamu tes secara lokal (di laptopmu), aplikasinya berjalan normal. Istilah fenomena ini dan alasannya adalah?",
            "options": [
                { "label": "A", "text": "Server CI/CD terlalu lambat dalam memproses kode.", "score": 0 },
                { "label": "B", "text": "'It works on my machine' - kemungkinan ada perbedaan environment variables, versi dependensi, atau OS antara lokal dan CI/CD.", "score": 10 },
                { "label": "C", "text": "Kode Git yang di-push mengalami kerusakan saat ditransfer ke repository remote.", "score": 0 }
            ]
        }
    ],

    "ui-ux-designer": [
        {
            "id": "uiux-1",
            "question": "Data analitik (CRO) menunjukkan banyak user yang meninggalkan aplikasi (drop-off) tepat di halaman pembayaran e-commerce. Langkah pertama yang paling tepat untuk mendiagnosis masalah ini adalah?",
            "options": [
                { "label": "A", "text": "Langsung mengganti warna tombol 'Bayar' menjadi lebih mencolok agar user langsung klik.", "score": 0 },
                { "label": "B", "text": "Melakukan Usability Testing dengan merekam sesi user untuk melihat di mana persisnya mereka kebingungan.", "score": 10 },
                { "label": "C", "text": "Menghapus beberapa kolom input tanpa mengecek data, agar formulir terlihat lebih pendek.", "score": 5 }
            ]
        },
        {
            "id": "uiux-2",
            "question": "Saat melakukan 'handoff' desain ke tim Software Developer, mereka protes karena layout yang kamu buat sangat sulit diimplementasikan menggunakan HTML/CSS standar. Apa yang sebaiknya kamu lakukan?",
            "options": [
                { "label": "A", "text": "Berkomunikasi lintas fungsi dengan developer untuk memahami batasan teknis dan menyesuaikan desain bersama.", "score": 10 },
                { "label": "B", "text": "Memaksa developer untuk tetap mengikuti desain di Figma karena estetika adalah yang utama.", "score": 0 },
                { "label": "C", "text": "Mengurangi seluruh elemen visual menjadi teks biasa agar cepat selesai.", "score": 0 }
            ]
        },
        {
            "id": "uiux-3",
            "question": "Tim bisnis meminta kamu meniru persis fitur dari aplikasi kompetitor karena sedang tren. Namun, berdasarkan riset dan empati pengguna yang kamu lakukan, fitur tersebut justru membingungkan target user aplikasimu. Tindakanmu?",
            "options": [
                { "label": "A", "text": "Menuruti permintaan tim bisnis tanpa bertanya untuk menghindari konflik.", "score": 0 },
                { "label": "B", "text": "Menyajikan data riset pengguna kepada tim bisnis dan mempresentasikan alternatif ide yang lebih sesuai untuk target user.", "score": 10 },
                { "label": "C", "text": "Membuat fitur tersebut tetapi menyembunyikannya di menu yang sulit dicari.", "score": 0 }
            ]
        },
        {
            "id": "uiux-4",
            "question": "Kamu sedang membangun Design System di Figma. Saat kamu memperbarui komponen 'Master Button', desain di ratusan layar tim lain menjadi berantakan (overrides hilang). Cara terbaik mencegah ini di masa depan adalah?",
            "options": [
                { "label": "A", "text": "Tidak usah menggunakan fitur Component, cukup copy-paste elemen secara manual.", "score": 0 },
                { "label": "B", "text": "Membuat struktur penamaan (naming convention) yang rapi, varian komponen (Variants), dan mengomunikasikan update ke tim sebelum publish.", "score": 10 },
                { "label": "C", "text": "Menyuruh semua desainer memperbaiki file mereka masing-masing secara manual.", "score": 5 }
            ]
        },
        {
            "id": "uiux-5",
            "question": "Kamu merancang aplikasi untuk lansia. Saat prototyping, kamu menyadari banyak elemen yang terlihat rapi namun mungkin tidak inklusif. Prinsip apa yang paling penting diterapkan di sini?",
            "options": [
                { "label": "A", "text": "Menggunakan font ukuran besar dengan kontras tinggi serta target tap/klik yang lebih luas.", "score": 10 },
                { "label": "B", "text": "Menggunakan banyak animasi kompleks dan teks tipis agar terlihat sangat modern.", "score": 0 },
                { "label": "C", "text": "Menggunakan warna-warna pastel (low contrast) yang sedang tren di kalangan desainer.", "score": 0 }
            ]
        },
        {
            "id": "uiux-6",
            "question": "Dalam tahap awal perancangan fitur baru (ideation), stakeholder ingin segera melihat desain visualnya. Sebagai desainer yang fokus pada struktur (wireframing), apa pendekatan terbaikmu?",
            "options": [
                { "label": "A", "text": "Langsung membuat desain High-Fidelity dengan gambar dan warna lengkap.", "score": 0 },
                { "label": "B", "text": "Membuat Low-Fidelity wireframe (sketsa abu-abu) terlebih dahulu untuk memvalidasi alur navigasi dan informasi sebelum memikirkan visual.", "score": 10 },
                { "label": "C", "text": "Mengunduh template desain jadi dari internet dan memodifikasinya sedikit.", "score": 0 }
            ]
        },
        {
            "id": "uiux-7",
            "question": "Hasil A/B Testing pada Conversion Rate Optimization (CRO) menunjukkan bahwa tombol berwarna merah menghasilkan klik lebih banyak daripada warna biru yang sesuai brand guidelines. Apa yang sebaiknya dilakukan?",
            "options": [
                { "label": "A", "text": "Mengabaikan hasil riset dan tetap memakai warna biru karena brand guidelines tidak boleh dilanggar sama sekali.", "score": 0 },
                { "label": "B", "text": "Menganalisis mengapa merah lebih berhasil (misal: masalah kontras) dan mendiskusikan penyesuaian aksen warna dengan tim Brand.", "score": 10 },
                { "label": "C", "text": "Mengubah semua elemen di aplikasi menjadi merah agar konversi naik drastis.", "score": 0 }
            ]
        },
        {
            "id": "uiux-8",
            "question": "Dalam merancang versi mobile vs desktop, kamu harus mengimplementasikan pendekatan desain responsif. Kesalahan fundamental apa yang paling sering terjadi dan harus dihindari?",
            "options": [
                { "label": "A", "text": "Hanya memperkecil ukuran desain desktop ke layar mobile tanpa menyesuaikan layout (struktur kolom/grid).", "score": 10 },
                { "label": "B", "text": "Mengubah navigasi horizontal di desktop menjadi hamburger menu di mobile.", "score": 5 },
                { "label": "C", "text": "Membuat ukuran tap target (tombol) minimal 44x44 pixel di perangkat sentuh.", "score": 0 }
            ]
        },
        {
            "id": "uiux-9",
            "question": "Kamu harus melakukan Usability Testing, namun budget dan waktu proyek sangat mepet (tinggal 3 hari). Metodologi testing apa yang paling efektif dan efisien dipilih?",
            "options": [
                { "label": "A", "text": "Unmoderated remote testing (tes tanpa moderator online) atau Guerrilla testing kepada 5 orang target user.", "score": 10 },
                { "label": "B", "text": "Moderated in-person testing dengan menyewa laboratorium observasi selama sebulan.", "score": 0 },
                { "label": "C", "text": "Tidak usah melakukan testing sama sekali karena waktunya kurang.", "score": 0 }
            ]
        },
        {
            "id": "uiux-10",
            "question": "Aplikasi memiliki fitur form pendaftaran panjang yang membuat user frustrasi. Solusi desain antarmuka (UI) dengan empati pengguna terbaik adalah?",
            "options": [
                { "label": "A", "text": "Mengecilkan ukuran font agar semua pertanyaan muat dalam satu halaman layar.", "score": 0 },
                { "label": "B", "text": "Membagi form menjadi beberapa tahapan logis (Progressive Disclosure) dan menambahkan indikator progres (progress bar).", "score": 10 },
                { "label": "C", "text": "Menambahkan tulisan peringatan berwarna merah berukuran besar agar user bersabar.", "score": 0 }
            ]
        },
        {
            "id": "uiux-11",
            "question": "Saat memeriksa file desain untuk Handoff, kamu melihat inkonsistensi spacing (margin/padding ada yang 12px, 15px, 17px). Mengapa hal detail ini sangat krusial bagi Developer?",
            "options": [
                { "label": "A", "text": "Karena HTML/CSS modern menggunakan sistem Grid/Spacing (misalnya kelipatan 4 atau 8) agar layout rapi dan kode bisa di-reuse.", "score": 10 },
                { "label": "B", "text": "Karena file Figma akan menjadi terlalu berat untuk dirender oleh browser.", "score": 0 },
                { "label": "C", "text": "Sebenarnya tidak masalah, developer bisa menebak sendiri ukurannya.", "score": 0 }
            ]
        },
        {
            "id": "uiux-12",
            "question": "Sebuah aplikasi pengiriman barang mendapat komplain bahwa user sering salah memilih alamat pengiriman. Bagaimana cara UX writer/designer memecahkan masalah ini?",
            "options": [
                { "label": "A", "text": "Memberikan penalti biaya bagi user yang salah alamat.", "score": 0 },
                { "label": "B", "text": "Menambahkan layar konfirmasi eksplisit dengan menampilkan ulang alamat di atas tombol proses pembayaran.", "score": 10 },
                { "label": "C", "text": "Mengganti ikon rumah menjadi ikon gedung kantor.", "score": 5 }
            ]
        },
        {
            "id": "uiux-13",
            "question": "Saat membuat interaksi (Prototyping) di Figma, transisi antar layar terasa sangat lambat dan membingungkan pengguna saat tes. Kesalahan utamanya biasanya adalah?",
            "options": [
                { "label": "A", "text": "Menggunakan 'Smart Animate' pada seluruh elemen tanpa struktur layer yang sama atau durasi transisi yang terlalu lama.", "score": 10 },
                { "label": "B", "text": "Warna layar terlalu redup sehingga animasi tidak terlihat.", "score": 0 },
                { "label": "C", "text": "Layar prototipe belum di-export ke format JPG resolusi tinggi.", "score": 0 }
            ]
        },
        {
            "id": "uiux-14",
            "question": "Sebagai desainer, kamu melihat ruang kosong (White Space) yang besar di aplikasimu, namun stakeholder menganggap itu 'membuang layar' dan ingin mengisinya dengan iklan. Respon yang paling tepat secara UI/UX adalah?",
            "options": [
                { "label": "A", "text": "Mengisi semuanya dengan teks agar stakeholder senang.", "score": 0 },
                { "label": "B", "text": "Mengedukasi stakeholder bahwa White Space berfungsi untuk mengurangi beban kognitif user dan mengarahkan fokus ke Call to Action utama.", "score": 10 },
                { "label": "C", "text": "Membiarkan saja desainnya dan mengabaikan masukan stakeholder tanpa memberi alasan.", "score": 0 }
            ]
        },
        {
            "id": "uiux-15",
            "question": "Aplikasi finansialmu baru saja menambahkan fitur keamanan 'Biometric Login'. Di fase user journey manakah fitur ini paling tepat ditawarkan untuk diaktifkan oleh pengguna?",
            "options": [
                { "label": "A", "text": "Seketika saat user pertama kali mengunduh dan membuka aplikasi sebelum tahu fungsi aplikasi tersebut.", "score": 0 },
                { "label": "B", "text": "Setelah pengguna berhasil melakukan login pertama mereka dengan password dan email secara sukses (Onboarding/Post-login).", "score": 10 },
                { "label": "C", "text": "Saat pengguna sedang di tengah-tengah proses transfer uang darurat.", "score": 0 }
            ]
        }
    ],

    "graphic-designer": [
        {
            "id": "gd-1",
            "question": "Klien meminta logo dikirim agar bisa dicetak di billboard raksasa tanpa pecah. Format file apa yang wajib kamu berikan?",
            "options": [
                { "label": "A", "text": "PNG resolusi 300dpi.", "score": 0 },
                { "label": "B", "text": "Vector (SVG/EPS/AI).", "score": 10 },
                { "label": "C", "text": "JPEG ukuran 50MB.", "score": 0 }
            ]
        },
        {
            "id": "gd-2",
            "question": "Warna desain flyer saat dicetak di mesin offset terlihat sangat kusam dibandingkan saat kamu desain di monitor. Kesalahan utamanya adalah?",
            "options": [
                { "label": "A", "text": "Bekerja di mode warna RGB, bukan CMYK.", "score": 10 },
                { "label": "B", "text": "Resolusi gambar terlalu rendah.", "score": 0 },
                { "label": "C", "text": "Kurang menaikkan brightness di Photoshop.", "score": 0 }
            ]
        },
        {
            "id": "gd-3",
            "question": "Sebuah poster memiliki banyak teks panjang namun terlihat membosankan dan susah dibaca. Prinsip desain apa yang harus diterapkan?",
            "options": [
                { "label": "A", "text": "Menggunakan 5 jenis font berbeda agar meriah.", "score": 0 },
                { "label": "B", "text": "Menerapkan Typographic Hierarchy (Heading, Subheading, Body) dan white space.", "score": 10 },
                { "label": "C", "text": "Membuat semua teks menjadi huruf kapital (ALL CAPS).", "score": 0 }
            ]
        },
        {
            "id": "gd-4",
            "question": "Klien komplain 'Logo saya kurang kelihatan pop-out!'. Secara tata letak visual, cara profesional untuk mengatasi ini tanpa merusak komposisi adalah?",
            "options": [
                { "label": "A", "text": "Menambah negative space (ruang kosong) di sekitar logo agar mata fokus ke sana.", "score": 10 },
                { "label": "B", "text": "Membesarkan ukuran logo sampai memenuhi setengah layout.", "score": 0 },
                { "label": "C", "text": "Memberi warna neon terang pada background logo.", "score": 0 }
            ]
        },
        {
            "id": "gd-5",
            "question": "Kamu merancang feed Instagram bersambung (puzzle feed). Risiko terbesar yang sering dilupakan desainer pemula saat menggunakan teknik ini adalah?",
            "options": [
                { "label": "A", "text": "Warna tidak konsisten di setiap kotak.", "score": 0 },
                { "label": "B", "text": "Setiap gambar satuan terlihat aneh/terpotong jika user melihatnya dari timeline biasa.", "score": 10 },
                { "label": "C", "text": "Ukuran file terlalu besar untuk di-upload.", "score": 0 }
            ]
        },
        {
            "id": "gd-6",
            "question": "Dalam teori warna, kamu ditugaskan membuat desain kemasan untuk produk makanan organik yang terkesan 'sehat dan premium'. Kombinasi yang cocok?",
            "options": [
                { "label": "A", "text": "Merah cerah dan kuning neon.", "score": 0 },
                { "label": "B", "text": "Hijau earth-tone (muted) dipadukan dengan aksen emas atau krem.", "score": 10 },
                { "label": "C", "text": "Hitam pekat dan ungu tua.", "score": 0 }
            ]
        },
        {
            "id": "gd-7",
            "question": "Foto produk yang klien berikan memiliki background ramai sehingga teks penawaran tidak terbaca. Teknik editing cepat yang estetis?",
            "options": [
                { "label": "A", "text": "Mengaplikasikan efek blur (Depth of Field) di background atau menambahkan shape overlay transparan di bawah teks.", "score": 10 },
                { "label": "B", "text": "Menambahkan stroke tebal berwarna merah menyala pada teks.", "score": 0 },
                { "label": "C", "text": "Menghapus foto produk dan hanya memakai teks.", "score": 0 }
            ]
        },
        {
            "id": "gd-8",
            "question": "Klien memberi revisi: 'Desainnya kurang modern, terasa jadul.' Elemen apa yang paling cepat diubah untuk memberikan kesan modern minimalis?",
            "options": [
                { "label": "A", "text": "Mengganti font serif klasik menjadi sans-serif bersih dan menghilangkan efek drop shadow berlebihan.", "score": 10 },
                { "label": "B", "text": "Menambahkan lebih banyak ornamen bunga dan pita.", "score": 0 },
                { "label": "C", "text": "Mewarnai ulang seluruh desain dengan gradasi pelangi.", "score": 0 }
            ]
        },
        {
            "id": "gd-9",
            "question": "Kamu menggunakan Illustrator untuk maskot, Photoshop untuk edit foto, dan InDesign untuk? ",
            "options": [
                { "label": "A", "text": "Membuat animasi GIF logo.", "score": 0 },
                { "label": "B", "text": "Layouting dokumen multi-halaman (majalah/company profile) karena text formattingnya lebih kuat.", "score": 10 },
                { "label": "C", "text": "Mewarnai vektor.", "score": 0 }
            ]
        },
        {
            "id": "gd-10",
            "question": "Brand guidelines klien menetapkan penggunaan spesifik untuk 'Margin of Safety'. Apa maksudnya?",
            "options": [
                { "label": "A", "text": "Batas area aman di desain agar teks/logo penting tidak terpotong saat proses cetak (trim) atau tampil di layar.", "score": 10 },
                { "label": "B", "text": "Area untuk menaruh watermark desainernya.", "score": 0 },
                { "label": "C", "text": "Warna background yang aman untuk mata.", "score": 0 }
            ]
        }
    ],

    "content-creator": [
        {
            "id": "cc-1",
            "question": "Video TikTok-mu punya retention rate tinggi di akhir, tapi views-nya sangat rendah (tidak masuk FYP). Masalah utama biasanya ada di?",
            "options": [
                { "label": "A", "text": "Kualitas kamera kurang tajam.", "score": 0 },
                { "label": "B", "text": "Hook (3 detik pertama) kurang kuat sehingga user langsung scroll.", "score": 10 },
                { "label": "C", "text": "Kurang panjang durasinya.", "score": 0 }
            ]
        },
        {
            "id": "cc-2",
            "question": "Algoritma Instagram mulai memprioritaskan 'Saves' (Simpan) dan 'Shares' (Bagikan) dibanding 'Likes'. Jenis konten apa yang harus kamu perbanyak?",
            "options": [
                { "label": "A", "text": "Selfie estetik dengan caption singkat.", "score": 0 },
                { "label": "B", "text": "Konten edukasi, tips, template, atau relatable memes.", "score": 10 },
                { "label": "C", "text": "Video dance challenge.", "score": 0 }
            ]
        },
        {
            "id": "cc-3",
            "question": "Kamu membuat konten YouTube panjang, lalu ingin mendaur ulangnya (repurpose) ke TikTok/Shorts. Kesalahan editing terburuk adalah?",
            "options": [
                { "label": "A", "text": "Mengunggah video berformat landscape langsung ke platform vertikal tanpa menyesuaikan rasio dan caption dinamis.", "score": 10 },
                { "label": "B", "text": "Memotong video jadi di bawah 60 detik.", "score": 0 },
                { "label": "C", "text": "Menambahkan backsound lagu viral.", "score": 0 }
            ]
        },
        {
            "id": "cc-4",
            "question": "Brand klien ingin konten yang memicu audiens berkomentar (engagement rate tinggi). Strategi copywriting apa yang paling efektif?",
            "options": [
                { "label": "A", "text": "Menulis deskripsi produk yang sangat teknis dan panjang.", "score": 0 },
                { "label": "B", "text": "Memberikan opini polarisasi atau CTA (Call to Action) berupa pertanyaan terbuka di akhir video/caption.", "score": 10 },
                { "label": "C", "text": "Hanya menggunakan hashtag saja tanpa caption.", "score": 0 }
            ]
        },
        {
            "id": "cc-5",
            "question": "Video edukasimu sangat informatif tapi membosankan. Teknik 'Pattern Interrupt' apa yang bisa digunakan saat editing di CapCut?",
            "options": [
                { "label": "A", "text": "Membuat transisi perlahan yang sangat mulus.", "score": 0 },
                { "label": "B", "text": "Mengganti angle kamera/zoom, menambahkan sound effect, atau memunculkan pop-up teks setiap 3-5 detik.", "score": 10 },
                { "label": "C", "text": "Mengecilkan volume musik latar.", "score": 0 }
            ]
        },
        {
            "id": "cc-6",
            "question": "Saat melakukan riset tren, kamu menemukan sound sedang viral. Bagaimana cara brand-mu ikut tren tanpa terlihat 'cringe' (memalukan)?",
            "options": [
                { "label": "A", "text": "Melakukan dance persis sama meskipun brand-mu menjual asuransi B2B.", "score": 0 },
                { "label": "B", "text": "Mengadaptasi konteks suara viral tersebut dengan masalah sehari-hari (pain points) yang dialami target audiens brand-mu.", "score": 10 },
                { "label": "C", "text": "Tidak usah ikut tren sama sekali.", "score": 0 }
            ]
        },
        {
            "id": "cc-7",
            "question": "Klien menuduh akunnya kena 'Shadowban' karena views tiba-tiba anjlok 80%. Analisis data pertama yang harus kamu lakukan?",
            "options": [
                { "label": "A", "text": "Menghapus semua video lama.", "score": 0 },
                { "label": "B", "text": "Mengecek analitik apakah views dari 'Non-Followers' (For You/Explore) masih masuk atau nol persen.", "score": 10 },
                { "label": "C", "text": "Membuat akun baru seketika.", "score": 0 }
            ]
        },
        {
            "id": "cc-8",
            "question": "Copywriting untuk caption harus menerapkan prinsip AIDA. 'Desain casing hp ini anti banting dari lantai 3' termasuk dalam fase?",
            "options": [
                { "label": "A", "text": "Action.", "score": 0 },
                { "label": "B", "text": "Interest / Desire.", "score": 10 },
                { "label": "C", "text": "Awareness.", "score": 0 }
            ]
        },
        {
            "id": "cc-9",
            "question": "Dalam merekam video UGC (User Generated Content) untuk review produk, elemen apa yang paling membangun kepercayaan penonton?",
            "options": [
                { "label": "A", "text": "Kamera mahal RED 8K.", "score": 0 },
                { "label": "B", "text": "Skrip yang dihafal seperti robot dan memuji tanpa henti.", "score": 0 },
                { "label": "C", "text": "Testimoni otentik (menunjukkan sebelum-sesudah) dan pencahayaan natural.", "score": 10 }
            ]
        },
        {
            "id": "cc-10",
            "question": "Apa fungsi utama dari menganalisis metrik 'Watch Time / Average View Duration' pada Social Media Analytics?",
            "options": [
                { "label": "A", "text": "Untuk mengetahui di detik ke berapa penonton bosan, sehingga pacing editing bisa diperbaiki ke depannya.", "score": 10 },
                { "label": "B", "text": "Hanya sekadar angka untuk dipamerkan ke klien.", "score": 0 },
                { "label": "C", "text": "Menentukan apakah algoritma sedang rusak.", "score": 0 }
            ]
        }
    ],

    "ai-ml-engineer": [
        {
            "id": "ai-1",
            "question": "Model Machine Learning yang kamu buat (misal prediksi harga rumah) bekerja 99% akurat di data training, tapi sangat buruk saat di-test dengan data baru. Modelmu mengalami?",
            "options": [
                { "label": "A", "text": "Underfitting.", "score": 0 },
                { "label": "B", "text": "Overfitting.", "score": 10 },
                { "label": "C", "text": "Data Normalization.", "score": 0 }
            ]
        },
        {
            "id": "ai-2",
            "question": "Kamu membangun sistem RAG (Retrieval-Augmented Generation) menggunakan LLM, tapi sistem sering berhalusinasi mengarang jawaban di luar dokumen. Solusi arsitekturnya?",
            "options": [
                { "label": "A", "text": "Melatih (fine-tune) model LLM dari nol.", "score": 0 },
                { "label": "B", "text": "Memperbaiki prompt dengan instruksi ketat 'Jawab HANYA berdasarkan konteks' dan mengevaluasi teknik chunking + vector search di Vector DB.", "score": 10 },
                { "label": "C", "text": "Meningkatkan parameter temperature model menjadi 1.0.", "score": 0 }
            ]
        },
        {
            "id": "ai-3",
            "question": "Proses pencarian dokumen terdekat (semantic search) dari jutaan teks berjalan sangat lambat. Library apa yang sebaiknya diimplementasikan untuk indexing vektor?",
            "options": [
                { "label": "A", "text": "Pandas DataFrame.", "score": 0 },
                { "label": "B", "text": "FAISS (Facebook AI Similarity Search) atau Vector Database khusus.", "score": 10 },
                { "label": "C", "text": "Regex match.", "score": 0 }
            ]
        },
        {
            "id": "ai-4",
            "question": "Saat melakukan pembersihan data untuk NLP (Natural Language Processing), teks mengandung banyak stop words dan imbuhan. Tahap preprocessing yang diperlukan?",
            "options": [
                { "label": "A", "text": "Tokenization, Stopword Removal, dan Stemming/Lemmatization.", "score": 10 },
                { "label": "B", "text": "Mengubah semuanya menjadi huruf kapital.", "score": 0 },
                { "label": "C", "text": "Menghapus semua vokal.", "score": 0 }
            ]
        },
        {
            "id": "ai-5",
            "question": "Dalam membangun sistem klasifikasi gambar (CNN), jumlah datamu (dataset) untuk kelas tertentu sangat sedikit. Teknik apa yang bisa dipakai agar model tetap bagus?",
            "options": [
                { "label": "A", "text": "Menghapus kelas tersebut dari prediksi.", "score": 0 },
                { "label": "B", "text": "Data Augmentation (memutar, memotong gambar) atau Transfer Learning dari model pre-trained (seperti ResNet/YOLO).", "score": 10 },
                { "label": "C", "text": "Melakukan copy-paste gambar yang sama berulang kali.", "score": 0 }
            ]
        },
        {
            "id": "ai-6",
            "question": "User mencoba melakukan 'Prompt Injection' pada Chatbot AI milik perusahaanmu agar bot tersebut membocorkan prompt sistem utama. Cara penanganannya?",
            "options": [
                { "label": "A", "text": "Membiarkan saja karena AI memang bisa diajak mengobrol.", "score": 0 },
                { "label": "B", "text": "Menerapkan filter moderasi di layer terpisah dan memasang delimiter ketat untuk membedakan sistem prompt dengan user input.", "score": 10 },
                { "label": "C", "text": "Mengurangi batasan token (max_tokens).", "score": 0 }
            ]
        },
        {
            "id": "ai-7",
            "question": "Model Python-mu (TensorFlow/PyTorch) butuh waktu 3 hari untuk training menggunakan CPU. Komponen hardware apa yang paling esensial ditambah untuk AI Training?",
            "options": [
                { "label": "A", "text": "SSD kapasitas besar.", "score": 0 },
                { "label": "B", "text": "GPU (Graphical Processing Unit) seperti NVIDIA dengan CUDA support.", "score": 10 },
                { "label": "C", "text": "RAM 128GB.", "score": 0 }
            ]
        },
        {
            "id": "ai-8",
            "question": "Kamu ditugaskan memilih metrik evaluasi model untuk mendeteksi penipuan kartu kredit (imbalanced data). Akurasi (Accuracy) mencapai 99% tapi model gagal. Metrik apa yang benar?",
            "options": [
                { "label": "A", "text": "Recall, Precision, dan F1-Score untuk kelas penipuan.", "score": 10 },
                { "label": "B", "text": "Mean Squared Error (MSE).", "score": 0 },
                { "label": "C", "text": "Accuracy saja sudah cukup.", "score": 0 }
            ]
        },
        {
            "id": "ai-9",
            "question": "Untuk mengurangi biaya API LLM komersial (seperti OpenAI) di task summarization internal, kamu berniat menggunakan model Open Source. Langkah yang tepat?",
            "options": [
                { "label": "A", "text": "Men-deploy model seperti LLaMA/Mistral secara lokal atau di cloud GPU sendiri.", "score": 10 },
                { "label": "B", "text": "Tetap pakai OpenAI tanpa peduli biaya.", "score": 0 },
                { "label": "C", "text": "Menggunakan metode regex tradisional alih-alih AI.", "score": 0 }
            ]
        },
        {
            "id": "ai-10",
            "question": "Salah satu kelemahan model LLM saat ini adalah 'Knowledge Cutoff' (tidak tahu informasi terbaru). Fitur sistem apa yang dibangun engineer untuk mengatasi ini?",
            "options": [
                { "label": "A", "text": "Memaksa model menghafal data.", "score": 0 },
                { "label": "B", "text": "Membangun sistem Tool Calling / Function Calling agar LLM bisa memanggil API Google Search atau query database saat itu juga.", "score": 10 },
                { "label": "C", "text": "Menurunkan temperature.", "score": 0 }
            ]
        }
    ],

    "devops-qa-engineer": [
        {
            "id": "dev-1",
            "question": "Setiap kali developer merilis kode, aplikasi production sering mati sesaat. Solusi Deployment yang harus diimplementasikan DevOps adalah?",
            "options": [
                { "label": "A", "text": "Melakukan deploy manual jam 3 pagi.", "score": 0 },
                { "label": "B", "text": "Menerapkan CI/CD pipeline dengan strategi Blue-Green Deployment atau Zero Downtime Deployment.", "score": 10 },
                { "label": "C", "text": "Meminta developer tidak sering update aplikasi.", "score": 0 }
            ]
        },
        {
            "id": "dev-2",
            "question": "Tim QA mendapati skrip Automation Test (Selenium/Cypress) mereka sering gagal (flaky) karena elemen halaman kadang belum termuat penuh. Cara memperbaikinya?",
            "options": [
                { "label": "A", "text": "Menambahkan `sleep(10)` (hard wait) di setiap baris.", "score": 0 },
                { "label": "B", "text": "Menggunakan Explicit Wait (menunggu elemen tertentu visible/clickable secara dinamis).", "score": 10 },
                { "label": "C", "text": "Mengabaikan error tersebut.", "score": 0 }
            ]
        },
        {
            "id": "dev-3",
            "question": "Aplikasi berjalan lancar di laptop developer tapi error karena masalah versi OS/dependensi saat dijalankan di server staging. Teknologi untuk memecahkan 'It works on my machine'?",
            "options": [
                { "label": "A", "text": "Containerization menggunakan Docker.", "score": 10 },
                { "label": "B", "text": "Mengganti laptop developer dengan laptop server.", "score": 0 },
                { "label": "C", "text": "Zip dan FTP manual.", "score": 0 }
            ]
        },
        {
            "id": "dev-4",
            "question": "Server cloud (AWS) sering mengalami lonjakan traffic tinggi tak terduga yang membuat RAM penuh, lalu kembali sepi. Fitur apa yang harus di-setup?",
            "options": [
                { "label": "A", "text": "Membeli server terbesar secara permanen (Overprovisioning).", "score": 0 },
                { "label": "B", "text": "Auto Scaling Group dikombinasikan dengan Load Balancer.", "score": 10 },
                { "label": "C", "text": "Menghapus fitur berat di aplikasi.", "score": 0 }
            ]
        },
        {
            "id": "dev-5",
            "question": "Terjadi celah keamanan data karena developer memasukkan password database (credentials) langsung ke dalam source code di GitHub (Hardcoded). Praktik CI/CD yang benar?",
            "options": [
                { "label": "A", "text": "Menyimpan credentials di Environment Variables (Secrets Management) dan injeksi saat pipeline berjalan.", "score": 10 },
                { "label": "B", "text": "Membuat repo GitHub menjadi private.", "score": 0 },
                { "label": "C", "text": "Mengenkripsi password secara manual.", "score": 0 }
            ]
        },
        {
            "id": "dev-6",
            "question": "Saat melakukan Load Testing (misal menggunakan JMeter/K6), metrik utama apa yang paling diperhatikan untuk mengukur keandalan (reliability) server?",
            "options": [
                { "label": "A", "text": "Warna antarmuka server.", "score": 0 },
                { "label": "B", "text": "Response Time, Throughput (RPS), dan Error Rate saat concurrent user tinggi.", "score": 10 },
                { "label": "C", "text": "Kecepatan internet laptop tester.", "score": 0 }
            ]
        },
        {
            "id": "dev-7",
            "question": "Dalam ekosistem Kubernetes, satu Pod utama tiba-tiba crash. Apa yang secara otomatis dilakukan sistem Orchestration ini?",
            "options": [
                { "label": "A", "text": "Restart otomatis pod tersebut atau menjadwalkan ulang di node lain yang sehat untuk menjaga 'desired state'.", "score": 10 },
                { "label": "B", "text": "Mematikan seluruh server.", "score": 0 },
                { "label": "C", "text": "Mengirim email agar DevOps datang menyalakan ulang manual.", "score": 0 }
            ]
        },
        {
            "id": "dev-8",
            "question": "QA Engineer menemukan Defect (Bug) kritis pada fitur pembayaran. Selain melaporkan bug, informasi esensial apa yang wajib ada di tiket Jira agar developer paham?",
            "options": [
                { "label": "A", "text": "Hanya screenshot dan kata 'Error'.", "score": 0 },
                { "label": "B", "text": "Steps to reproduce (Langkah mengulangi bug), Expected Result (Hasil yang diharapkan), dan Actual Result (Hasil asli).", "score": 10 },
                { "label": "C", "text": "Menyalahkan developer di kolom komentar.", "score": 0 }
            ]
        },
        {
            "id": "dev-9",
            "question": "Infrastruktur cloud perusahaan saat ini dikonfigurasi secara manual lewat klik di Dashboard UI (AWS Console). Pendekatan ini rentan error dan sulit diduplikasi. Solusinya?",
            "options": [
                { "label": "A", "text": "Membuat dokumentasi Word panjang.", "score": 0 },
                { "label": "B", "text": "Infrastructure as Code (IaC) menggunakan alat seperti Terraform atau Ansible.", "score": 10 },
                { "label": "C", "text": "Merekam layar saat konfigurasi.", "score": 0 }
            ]
        },
        {
            "id": "dev-10",
            "question": "Untuk memastikan fitur lama tidak rusak akibat rilis kode baru, jenis testing (pengujian) apa yang dijalankan oleh QA Automation di dalam pipeline?",
            "options": [
                { "label": "A", "text": "Regression Testing.", "score": 10 },
                { "label": "B", "text": "Exploratory Testing.", "score": 0 },
                { "label": "C", "text": "Usability Testing.", "score": 0 }
            ]
        }
    ],

    "data-analyst": [
        {
            "id": "da-1",
            "question": "Terdapat dua tabel: 'Users' dan 'Orders'. Kamu ingin menampilkan semua user, bahkan yang belum pernah order sekalipun. Jenis SQL Join apa yang dipakai?",
            "options": [
                { "label": "A", "text": "INNER JOIN.", "score": 0 },
                { "label": "B", "text": "LEFT JOIN (dari tabel Users).", "score": 10 },
                { "label": "C", "text": "CROSS JOIN.", "score": 0 }
            ]
        },
        {
            "id": "da-2",
            "question": "Saat membersihkan data (Data Cleansing) di Python/Pandas, kamu menemukan kolom 'Pendapatan' memiliki banyak nilai kosong (NaN/Null). Cara statistika terbaik menanganinya?",
            "options": [
                { "label": "A", "text": "Menghapus semua baris data agar bersih.", "score": 0 },
                { "label": "B", "text": "Melakukan Imputasi (mengisi dengan Median atau Mean) tergantung distribusi kemiringan (skewness) datanya.", "score": 10 },
                { "label": "C", "text": "Mengisi dengan angka 0.", "score": 0 }
            ]
        },
        {
            "id": "da-3",
            "question": "Dashboard Tableau yang kamu buat loadingnya sangat lama saat dibuka oleh direktur (menghabiskan 30 detik). Kesalahan desain arsitektur yang sering terjadi?",
            "options": [
                { "label": "A", "text": "Tabel di-query langsung ke database produksi jutaan baris (Live Connection) tanpa Extract/Agregasi sebelumnya.", "score": 10 },
                { "label": "B", "text": "Warna dashboard terlalu cerah.", "score": 0 },
                { "label": "C", "text": "Menggunakan grafik Bar Chart.", "score": 0 }
            ]
        },
        {
            "id": "da-4",
            "question": "Tim sales ingin visualisasi yang menunjukkan perbandingan porsi penjualan tiap regional terhadap total penjualan keseluruhan (100%). Chart yang kurang disarankan secara UX data adalah?",
            "options": [
                { "label": "A", "text": "Bar Chart bertingkat (Stacked Bar).", "score": 0 },
                { "label": "B", "text": "Pie Chart 3D dengan belasan kategori (sulit membandingkan volume mata secara presisi).", "score": 10 },
                { "label": "C", "text": "Tree Map.", "score": 0 }
            ]
        },
        {
            "id": "da-5",
            "question": "Di Power BI, untuk menghitung 'Total Penjualan Tahun Berjalan' yang bisa update dinamis, bahasa ekspresi (formula) apa yang digunakan?",
            "options": [
                { "label": "A", "text": "HTML.", "score": 0 },
                { "label": "B", "text": "DAX (Data Analysis Expressions) seperti TOTALYTD.", "score": 10 },
                { "label": "C", "text": "VLOOKUP.", "score": 0 }
            ]
        },
        {
            "id": "da-6",
            "question": "Data menunjukkan angka rata-rata (Mean) penjualan bulan ini naik tajam, tapi median (nilai tengah) tetap. Apa indikasi terkuat dari fenomena ini?",
            "options": [
                { "label": "A", "text": "Semua sales mengalami peningkatan.", "score": 0 },
                { "label": "B", "text": "Terdapat Outlier ekstrim (misal 1 transaksi bernilai raksasa) yang mengerek angka rata-rata.", "score": 10 },
                { "label": "C", "text": "Data tersebut invalid.", "score": 0 }
            ]
        },
        {
            "id": "da-7",
            "question": "Stakeholder bertanya: 'Mengapa user churn rate kita naik bulan ini?'. Analisis ini masuk ke dalam kategori analitik tahap apa?",
            "options": [
                { "label": "A", "text": "Descriptive Analytics (Apa yang terjadi).", "score": 0 },
                { "label": "B", "text": "Diagnostic Analytics (Mengapa itu terjadi).", "score": 10 },
                { "label": "C", "text": "Predictive Analytics (Apa yang akan terjadi besok).", "score": 0 }
            ]
        },
        {
            "id": "da-8",
            "question": "Dalam SQL, klausa apa yang digunakan untuk memfilter hasil *setelah* dilakukan pengelompokan agregasi (GROUP BY)?",
            "options": [
                { "label": "A", "text": "WHERE.", "score": 0 },
                { "label": "B", "text": "HAVING.", "score": 10 },
                { "label": "C", "text": "ORDER BY.", "score": 0 }
            ]
        },
        {
            "id": "da-9",
            "question": "Kamu akan melakukan presentasi ('Data Storytelling') kepada tim eksekutif non-teknis. Aturan emas yang harus dipegang?",
            "options": [
                { "label": "A", "text": "Menampilkan seluruh kode Python dan formula query di layar.", "score": 0 },
                { "label": "B", "text": "Menyorot Insight utama/Kesimpulan Bisnis terlebih dahulu, visual yang sederhana, dan rekomendasi aksi yang jelas (Actionable Insight).", "score": 10 },
                { "label": "C", "text": "Membaca angka di tabel satu persatu.", "score": 0 }
            ]
        },
        {
            "id": "da-10",
            "question": "Kolom tanggal formatnya berupa string berantakan (contoh: 'Jan 12 2024', '2024-01-12'). Untuk dianalisa, data ini harus diparsing menjadi format standar. Teknik ini disebut?",
            "options": [
                { "label": "A", "text": "Data Encryption.", "score": 0 },
                { "label": "B", "text": "Data Transformation / Casting ke tipe data Date/Datetime.", "score": 10 },
                { "label": "C", "text": "Data Dropping.", "score": 0 }
            ]
        }
    ],

    "data-researcher": [
        {
            "id": "dres-1",
            "question": "Survei riset pasarmu menjangkau 1000 orang, tapi 90% responden adalah mahasiswa pria di bawah 25 tahun, padahal produkmu untuk umum. Masalah utama riset ini?",
            "options": [
                { "label": "A", "text": "Budget survei terlalu kecil.", "score": 0 },
                { "label": "B", "text": "Sampling Bias (Sampel tidak merepresentasikan populasi target).", "score": 10 },
                { "label": "C", "text": "Kuesionernya terlalu pendek.", "score": 0 }
            ]
        },
        {
            "id": "dres-2",
            "question": "Dalam riset kualitatif (In-depth Interview), user ditanya: 'Apakah aplikasi ini sudah bagus dan mudah digunakan?'. Kesalahan apa pada perumusan pertanyaan ini?",
            "options": [
                { "label": "A", "text": "Pertanyaan tersebut adalah Leading Question (menggiring jawaban) dan tertutup (Yes/No answer).", "score": 10 },
                { "label": "B", "text": "Kata-katanya kurang sopan.", "score": 0 },
                { "label": "C", "text": "Seharusnya ditanyakan lewat email.", "score": 0 }
            ]
        },
        {
            "id": "dres-3",
            "question": "Perusahaan ingin masuk ke pasar baru. Kamu ditugaskan menghitung TAM (Total Addressable Market). Pendekatan yang benar?",
            "options": [
                { "label": "A", "text": "Menghitung hanya orang yang sudah pasti beli bulan depan.", "score": 0 },
                { "label": "B", "text": "Menghitung total keseluruhan estimasi pendapatan yang tersedia dari seluruh permintaan pasar untuk produk tersebut.", "score": 10 },
                { "label": "C", "text": "Melihat pendapatan kompetitor terendah.", "score": 0 }
            ]
        },
        {
            "id": "dres-4",
            "question": "Saat melakukan Competitor Analysis, selain fitur produk kompetitor, kerangka kerja (framework) strategis apa yang paling sering digunakan untuk memetakan kekuatan & kelemahan?",
            "options": [
                { "label": "A", "text": "SWOT Analysis.", "score": 10 },
                { "label": "B", "text": "A/B Testing.", "score": 0 },
                { "label": "C", "text": "Agile Scrum.", "score": 0 }
            ]
        },
        {
            "id": "dres-5",
            "question": "Stakeholder menuntut hasil riset kualitatif dalam 2 hari, padahal butuh waktu untuk FGD. Strategi riset sekunder tercepat?",
            "options": [
                { "label": "A", "text": "Melakukan survei door-to-door.", "score": 0 },
                { "label": "B", "text": "Melakukan Social Listening / Desk Research dari review kompetitor di internet, forum, dan laporan industri yang sudah ada.", "score": 10 },
                { "label": "C", "text": "Menolak tugas tersebut mentah-mentah.", "score": 0 }
            ]
        },
        {
            "id": "dres-6",
            "question": "Hasil riset kuantitatif menunjukkan Korelasi positif tinggi antara penjualan es krim dan kematian akibat tenggelam. Kesimpulan kausal (sebab-akibat) yang benar?",
            "options": [
                { "label": "A", "text": "Makan es krim menyebabkan tenggelam.", "score": 0 },
                { "label": "B", "text": "Korelasi tidak berarti Kausalitas (bisa jadi ada variabel ke-3, misal: musim panas).", "score": 10 },
                { "label": "C", "text": "Data riset tersebut pasti dimanipulasi.", "score": 0 }
            ]
        },
        {
            "id": "dres-7",
            "question": "Alat ukur survei yang kamu buat konsisten menghasilkan nilai yang sama bila dites berulang-ulang, namun ternyata meleset dari tujuan pengukuran awal. Artinya survei ini?",
            "options": [
                { "label": "A", "text": "Reliable (Konsisten) tapi tidak Valid.", "score": 10 },
                { "label": "B", "text": "Valid tapi tidak Reliable.", "score": 0 },
                { "label": "C", "text": "Sempurna.", "score": 0 }
            ]
        },
        {
            "id": "dres-8",
            "question": "Banyak responden meninggalkan kuesioner online di tengah jalan (Drop-off rate tinggi). Penyebab terbesarnya biasanya?",
            "options": [
                { "label": "A", "text": "Kuesioner terlalu panjang, pertanyaan repetitif, atau skala likert membingungkan (Survey Fatigue).", "score": 10 },
                { "label": "B", "text": "Warna kuesioner kurang menarik.", "score": 0 },
                { "label": "C", "text": "Karena kuesioner tersebut anonim.", "score": 0 }
            ]
        },
        {
            "id": "dres-9",
            "question": "Dalam riset pricing (harga), untuk mengetahui kesediaan membayar user secara tidak langsung, metode yang sering digunakan adalah?",
            "options": [
                { "label": "A", "text": "Bertanya langsung 'Berapa harga yang Anda inginkan?'.", "score": 0 },
                { "label": "B", "text": "Van Westendorp Price Sensitivity Meter atau Conjoint Analysis.", "score": 10 },
                { "label": "C", "text": "Memberikan harga acak secara gratis.", "score": 0 }
            ]
        },
        {
            "id": "dres-10",
            "question": "Sebagai Strategy Analyst, kamu menemukan bahwa CAC (Customer Acquisition Cost) perusahaan melebihi LTV (Lifetime Value). Apa rekomendasi bisnismu?",
            "options": [
                { "label": "A", "text": "Meningkatkan budget iklan (bakar uang) agar menang volume.", "score": 0 },
                { "label": "B", "text": "Bisnis ini tidak berkelanjutan; sarankan untuk efisiensi marketing, naikkan retention, atau inovasi pricing/upselling.", "score": 10 },
                { "label": "C", "text": "Pecat seluruh tim sales.", "score": 0 }
            ]
        }
    ],

    "digital-marketing": [
        {
            "id": "dm-1",
            "question": "Kampanye Meta Ads kamu menghasilkan banyak klik (CTR tinggi), tetapi nyaris nol pembelian di website. Dimana letak kebocoran funnel terbesar?",
            "options": [
                { "label": "A", "text": "Masalah pada materi iklan (Creative/Copy).", "score": 0 },
                { "label": "B", "text": "Landing page experience (Website lemot, UI buruk, atau ketidaksesuaian janji iklan dengan isi website).", "score": 10 },
                { "label": "C", "text": "Budget iklan terlalu kecil.", "score": 0 }
            ]
        },
        {
            "id": "dm-2",
            "question": "Kamu mengoptimasi SEO website tapi mendapati dua artikel berfokus pada keyword yang sama persis dan saling menjatuhkan peringkat di Google. Fenomena ini disebut?",
            "options": [
                { "label": "A", "text": "Keyword Stuffing.", "score": 0 },
                { "label": "B", "text": "Keyword Cannibalization.", "score": 10 },
                { "label": "C", "text": "Backlink Spam.", "score": 0 }
            ]
        },
        {
            "id": "dm-3",
            "question": "ROAS (Return on Ad Spend) kampanye Google Ads turun dari 4.0 menjadi 1.2 bulan ini. Tindakan audit pertama yang kamu lakukan?",
            "options": [
                { "label": "A", "text": "Mengecek laporan 'Search Terms' untuk melihat apakah anggaran terbuang ke Negative Keywords (kata kunci tidak relevan).", "score": 10 },
                { "label": "B", "text": "Menambah budget dua kali lipat.", "score": 0 },
                { "label": "C", "text": "Langsung mengganti seluruh gambar produk.", "score": 0 }
            ]
        },
        {
            "id": "dm-4",
            "question": "User mengunjungi e-commerce, memasukkan barang ke keranjang, tapi tidak bayar. Strategi iklan yang paling murah dan efektif untuk menarik mereka kembali?",
            "options": [
                { "label": "A", "text": "Brand Awareness Campaign secara nasional.", "score": 0 },
                { "label": "B", "text": "Retargeting/Remarketing Ads khusus audience 'Add to Cart' dipadukan dengan promo diskon limit waktu.", "score": 10 },
                { "label": "C", "text": "Membeli followers Instagram.", "score": 0 }
            ]
        },
        {
            "id": "dm-5",
            "question": "Kamu akan melakukan A/B Testing pada Email Marketing. Aturan paling krusial agar hasilnya valid (Signifikansi Statis)?",
            "options": [
                { "label": "A", "text": "Mengubah Subjek, Isi Email, dan Gambar sekaligus dalam satu waktu.", "score": 0 },
                { "label": "B", "text": "Hanya mengubah SATU variabel saja (misal: Subjeknya saja) untuk audiens acak yang sama besarnya.", "score": 10 },
                { "label": "C", "text": "Mengirim email jam 9 pagi ke grup A, dan jam 9 malam ke grup B.", "score": 0 }
            ]
        },
        {
            "id": "dm-6",
            "question": "Pada Google Analytics 4, 'Attribution Model' secara default berubah dari Last-Click menjadi Data-Driven. Apa dampaknya pada analisis laporan konversi?",
            "options": [
                { "label": "A", "text": "Semua kredit konversi diberikan ke iklan terakhir yang diklik.", "score": 0 },
                { "label": "B", "text": "Kredit konversi didistribusikan secara adil ke seluruh channel (Ads, SEO, Social) yang berperan di customer journey.", "score": 10 },
                { "label": "C", "text": "Tidak bisa lagi melacak konversi.", "score": 0 }
            ]
        },
        {
            "id": "dm-7",
            "question": "Untuk membangun otoritas SEO domain (Domain Authority), strategi Off-Page SEO yang aman (White-hat) dan berdampak panjang adalah?",
            "options": [
                { "label": "A", "text": "Membeli 10.000 link bot di Fiverr.", "score": 0 },
                { "label": "B", "text": "Digital PR, Guest Posting berkualitas, dan membuat konten yang secara natural layak di-link (Link-bait).", "score": 10 },
                { "label": "C", "text": "Menyembunyikan keyword pakai teks warna putih.", "score": 0 }
            ]
        },
        {
            "id": "dm-8",
            "question": "Tujuan dari metrik CAC (Customer Acquisition Cost) adalah untuk mengetahui?",
            "options": [
                { "label": "A", "text": "Berapa banyak uang yang dihabiskan untuk mendatangkan 1 konsumen (user/pembeli) baru.", "score": 10 },
                { "label": "B", "text": "Harga jual produk.", "score": 0 },
                { "label": "C", "text": "Gaji tim marketing.", "score": 0 }
            ]
        },
        {
            "id": "dm-9",
            "question": "Penerapan Meta Pixel (Custom Conversion) di website sering terblokir oleh update iOS (Apple Privacy). Solusi tracking tingkat lanjutnya?",
            "options": [
                { "label": "A", "text": "Tidak menargetkan user iPhone.", "score": 0 },
                { "label": "B", "text": "Menerapkan Conversion API (CAPI) pelacakan berbasis server (Server-Side Tracking).", "score": 10 },
                { "label": "C", "text": "Mengandalkan feeling/insting kampanye.", "score": 0 }
            ]
        },
        {
            "id": "dm-10",
            "question": "KPI utama dari kampanye tahap Top of Funnel (TOFU) bukanlah penjualan langsung, melainkan?",
            "options": [
                { "label": "A", "text": "Reach (Jangkauan), Impressions, dan Click-Through Rate (CTR) untuk Brand Awareness.", "score": 10 },
                { "label": "B", "text": "Return on Investment (ROI).", "score": 0 },
                { "label": "C", "text": "Jumlah repeat order.", "score": 0 }
            ]
        }
    ],

    "business-development": [
        {
            "id": "bd-1",
            "question": "Kamu mengirim ratusan email Cold Outreach ke B2B Client, tetapi open rate (rasio buka email) di bawah 5%. Kesalahan utamanya biasanya pada?",
            "options": [
                { "label": "A", "text": "Isi email kurang panjang.", "score": 0 },
                { "label": "B", "text": "Subjek email (Subject Line) terlihat seperti spam, terlalu salesy, atau database tidak disaring.", "score": 10 },
                { "label": "C", "text": "Kurangnya lampiran PDF.", "score": 0 }
            ]
        },
        {
            "id": "bd-2",
            "question": "Dalam Enterprise Sales Cycle, calon klien setuju menggunakan softwaremu, namun mentok di departemen Legal dan IT Security. Apa langkah mitigasinya?",
            "options": [
                { "label": "A", "text": "Memaksa klien menandatangani secara sepihak.", "score": 0 },
                { "label": "B", "text": "Melibatkan tim Legal & IT internalmu sejak awal untuk menyiapkan SLA dan jaminan keamanan (ISO/Compliance) secara proaktif.", "score": 10 },
                { "label": "C", "text": "Membatalkan kesepakatan.", "score": 0 }
            ]
        },
        {
            "id": "bd-3",
            "question": "Saat melakukan kualifikasi prospek (Leads), framework 'BANT' sangat populer. Kepanjangannya adalah?",
            "options": [
                { "label": "A", "text": "Budget, Authority, Need, Timeline.", "score": 10 },
                { "label": "B", "text": "Brand, Acquisition, Nurture, Target.", "score": 0 },
                { "label": "C", "text": "Base, Amount, Negotation, Trust.", "score": 0 }
            ]
        },
        {
            "id": "bd-4",
            "question": "Klien membandingkan harga jasamu dengan kompetitor yang jauh lebih murah dan meminta diskon 50%. Sikap negosiasi Business Development yang kuat?",
            "options": [
                { "label": "A", "text": "Langsung setuju demi closing target bulanan.", "score": 0 },
                { "label": "B", "text": "Mengalihkan percakapan dari 'Harga' ke 'Value/ROI', menjelaskan mengapa produkmu lebih premium (tidak perang harga).", "score": 10 },
                { "label": "C", "text": "Marah kepada klien.", "score": 0 }
            ]
        },
        {
            "id": "bd-5",
            "question": "Manajemen Data di CRM (Customer Relationship Management) seperti HubSpot/Salesforce berantakan karena tim sales malas input data log telepon. Dampak terburuknya?",
            "options": [
                { "label": "A", "text": "Kehilangan visibilitas Pipeline, forecast penjualan menjadi buta, dan follow-up sering tumpang tindih.", "score": 10 },
                { "label": "B", "text": "UI CRM menjadi lambat.", "score": 0 },
                { "label": "C", "text": "Tidak ada dampak yang berarti.", "score": 0 }
            ]
        },
        {
            "id": "bd-6",
            "question": "Untuk ekspansi pasar baru, perusahaanmu butuh strategi B2B Partnership (Channel Partner). Apa kriteria partner yang ideal?",
            "options": [
                { "label": "A", "text": "Perusahaan kompetitor langsung.", "score": 0 },
                { "label": "B", "text": "Perusahaan yang memiliki target audiens sama namun menjual produk komplementer (saling melengkapi).", "score": 10 },
                { "label": "C", "text": "Perusahaan yang sedang bangkrut agar mudah diakuisisi.", "score": 0 }
            ]
        },
        {
            "id": "bd-7",
            "question": "Calon klien menolak (Objection) dengan alasan: 'Kami sudah memakai vendor lama bertahun-tahun'. Teknik handling objection yang tepat?",
            "options": [
                { "label": "A", "text": "Menjelek-jelekkan vendor lama tersebut.", "score": 0 },
                { "label": "B", "text": "Menggali kepuasan mereka (Empathize & Explore) tanpa memaksa pindah, lalu menawarkan audit gratis untuk celah yang mungkin ada.", "score": 10 },
                { "label": "C", "text": "Menutup telepon segera.", "score": 0 }
            ]
        },
        {
            "id": "bd-8",
            "question": "Perbedaan utama Sales Executive dan Business Development (BD) di perusahaan startup teknologi?",
            "options": [
                { "label": "A", "text": "BD membagikan brosur di jalan.", "score": 0 },
                { "label": "B", "text": "Sales fokus transaksi/closing harian; BD fokus mencari peluang/saluran baru, kemitraan strategis, dan strategi pasar jangka panjang.", "score": 10 },
                { "label": "C", "text": "Sales gajinya lebih besar.", "score": 0 }
            ]
        },
        {
            "id": "bd-9",
            "question": "Kamu menghubungi calon klien via LinkedIn (Social Selling). Kesalahan fatal di pesan pertama (InMail)?",
            "options": [
                { "label": "A", "text": "Langsung jualan keras (Hard-selling pitch) dan melampirkan proposal panjang di pesan pembuka.", "score": 10 },
                { "label": "B", "text": "Menghubungkan konteks dengan postingan terakhir klien.", "score": 0 },
                { "label": "C", "text": "Bertanya tentang tantangan industri saat ini.", "score": 0 }
            ]
        },
        {
            "id": "bd-10",
            "question": "Seorang prospek berada di stage 'Nurturing' di dalam pipeline selama 6 bulan tanpa keputusan. Apa yang biasanya BD lakukan?",
            "options": [
                { "label": "A", "text": "Menelepon setiap hari untuk memaksa closing.", "score": 0 },
                { "label": "B", "text": "Memberikan konten edukasi (Case Study/Webinar) secara berkala (Drip Campaign) sampai trigger pembelian muncul.", "score": 10 },
                { "label": "C", "text": "Menghapus nomornya dari kontak.", "score": 0 }
            ]
        }
    ],

    "ecommerce-specialist": [
        {
            "id": "ecom-1",
            "question": "Toko onlinemu di Marketplace (Shopee/Tokopedia) traffic-nya tinggi tapi konversi (penjualan) sangat rendah (High Bounce Rate). Hal pertama yang dioptimasi?",
            "options": [
                { "label": "A", "text": "Menambah budget iklan internal.", "score": 0 },
                { "label": "B", "text": "Audit gambar produk (apakah jelas), kejelasan deskripsi, rating/review, dan harga yang kompetitif.", "score": 10 },
                { "label": "C", "text": "Mengganti nama toko.", "score": 0 }
            ]
        },
        {
            "id": "ecom-2",
            "question": "Sebagai Dropshipper, masalah paling sering terjadi adalah 'Barang Habis' di supplier saat konsumen sudah terlanjur bayar. Manajemen operasional terbaik?",
            "options": [
                { "label": "A", "text": "Mengabaikan komplain pembeli.", "score": 0 },
                { "label": "B", "text": "Membangun relasi erat dengan multi-supplier, sinkronisasi stok rutin, atau menggunakan tool manajemen API order otomatis.", "score": 10 },
                { "label": "C", "text": "Mengirim barang lain secara acak.", "score": 0 }
            ]
        },
        {
            "id": "ecom-3",
            "question": "Tingkat 'Cart Abandonment' (keranjang ditinggalkan) toko mencapai 75%. Fitur promo apa yang paling ampuh mengurangi ini?",
            "options": [
                { "label": "A", "text": "Harga produk dinaikkan.", "score": 0 },
                { "label": "B", "text": "Pesan otomatis pengingat keranjang + Gratis Ongkir atau Voucher Diskon batas waktu (Urgency/Scarcity).", "score": 10 },
                { "label": "C", "text": "Menyembunyikan keranjang.", "score": 0 }
            ]
        },
        {
            "id": "ecom-4",
            "question": "Livestream Commerce (misal TikTok Live) membutuhkan strategi agar penonton bertahan (retention). Apa komponen pentingnya selain harga murah?",
            "options": [
                { "label": "A", "text": "Host yang diam saja.", "score": 0 },
                { "label": "B", "text": "Interaksi real-time (tanya jawab), flash sale 'hanya di live ini', dan peragaan produk fisik secara jelas.", "score": 10 },
                { "label": "C", "text": "Musik berisik.", "score": 0 }
            ]
        },
        {
            "id": "ecom-5",
            "question": "Agar produk Dropshipmu muncul di pencarian organik Marketplace (Marketplace SEO), strategi penulisan judul yang benar adalah?",
            "options": [
                { "label": "A", "text": "Judul pendek: 'Baju Murah'.", "score": 0 },
                { "label": "B", "text": "Format lengkap: Merek + Kata Kunci Utama + Spesifikasi/Warna + Kata Kunci Tambahan.", "score": 10 },
                { "label": "C", "text": "Menggunakan banyak emoji di judul.", "score": 0 }
            ]
        },
        {
            "id": "ecom-6",
            "question": "Perhitungan profitabilitas E-commerce bukan cuma soal margin kotor, tapi harus menghitung Net Margin. Komponen biaya tersembunyi apa yang sering lupa dihitung Dropshipper?",
            "options": [
                { "label": "A", "text": "Biaya kuota internet rumahan.", "score": 0 },
                { "label": "B", "text": "Biaya Admin/Layanan platform marketplace (bisa 2-8%), retur/refund barang rusak, dan biaya packaging/iklan.", "score": 10 },
                { "label": "C", "text": "Biaya cicilan mobil pribadi.", "score": 0 }
            ]
        },
        {
            "id": "ecom-7",
            "question": "Strategi 'Cross-Selling' di platform e-commerce (Shopify) bertujuan untuk meningkatkan AOV (Average Order Value). Contoh fiturnya?",
            "options": [
                { "label": "A", "text": "Menampilkan rekomendasi 'Sering dibeli bersamaan' (Bundle case hp + antigores) saat user checkout hp.", "score": 10 },
                { "label": "B", "text": "Membatasi pembelian maksimal 1 barang.", "score": 0 },
                { "label": "C", "text": "Menghapus menu navigasi website.", "score": 0 }
            ]
        },
        {
            "id": "ecom-8",
            "question": "Kompetitor menjual barang dari supplier yang sama persis dengan hargamu, namun tokonya lebih laris. Strategi diferensiasi (pembeda) yang bisa kamu buat?",
            "options": [
                { "label": "A", "text": "Menurunkan harga hingga rugi (Bakar uang tiada akhir).", "score": 0 },
                { "label": "B", "text": "Memperbaiki Branding, membuat foto/video produk sendiri (UGC), dan menawarkan layanan Garansi/Customer Service superior.", "score": 10 },
                { "label": "C", "text": "Melakukan spam chat ke kompetitor.", "score": 0 }
            ]
        },
        {
            "id": "ecom-9",
            "question": "Kamu mengandalkan fitur Affiliate Marketing di e-commerce untuk mendorong kreator mempromosikan produkmu. Faktor utama agar kreator tertarik berafiliasi?",
            "options": [
                { "label": "A", "text": "Persentase komisi yang menarik, sampel produk gratis, dan aset foto yang siap pakai.", "score": 10 },
                { "label": "B", "text": "Persyaratan KYC yang sangat rumit.", "score": 0 },
                { "label": "C", "text": "Memaksa kreator wajib beli barangmu dulu harga normal.", "score": 0 }
            ]
        },
        {
            "id": "ecom-10",
            "question": "Saat menjalankan kampanye Pay-Per-Click (CPAS/Facebook Ads to Marketplace), tantangan analisis data utamanya adalah?",
            "options": [
                { "label": "A", "text": "Piksel tracking sulit dipasang secara penuh di dalam aplikasi marketplace pihak ketiga dibanding web sendiri.", "score": 10 },
                { "label": "B", "text": "Facebook melarang e-commerce.", "score": 0 },
                { "label": "C", "text": "Budget selalu ditolak sistem.", "score": 0 }
            ]
        }
    ]
};