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

export const quizBank: Record<string, QuizQuestion[]> = {
    "software-engineer": [
        {
            "id": "se-1",
            "question": "Sistem payment gateway Anda mengalami lonjakan trafik 50x lipat yang menyebabkan database utama mengalami deadlock dan antrean message broker menumpuk. Anda dihadapkan pada pilihan sulit: memulihkan layanan dengan risiko integritas data, melakukan perbaikan arsitektur yang memakan waktu namun permanen, atau mengutamakan komunikasi transparan dengan stakeholder untuk mengelola ekspektasi publik. Sebagai Lead Engineer, strategi manakah yang Anda prioritaskan untuk menangani krisis ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi komunikasi krisis secara real-time kepada seluruh stakeholder dan tim internal untuk menyelaraskan ekspektasi, sambil menunda tindakan teknis drastis guna memastikan setiap keputusan diambil melalui konsensus tim agar tidak terjadi kesalahan fatal akibat tekanan yang tinggi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan tindakan mitigasi darurat berupa pemutusan koneksi idle, pengalihan trafik ke read-replica, dan pembersihan antrean message broker untuk memulihkan ketersediaan layanan secara instan demi menyelamatkan target transaksi bisnis saat ini.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menghentikan sementara layanan untuk melakukan isolasi pada root cause deadlock, menerapkan optimasi query secara permanen, dan melakukan refactoring pada mekanisme antrean untuk memastikan stabilitas sistem jangka panjang serta integritas data yang absolut, meskipun harus menghadapi downtime yang lebih lama.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-2",
            "question": "Platform e-commerce Anda akan meluncurkan fitur dompet digital dalam 3 jam. QA menemukan race condition yang berisiko menyebabkan inkonsistensi saldo pada transaksi simultan. Di satu sisi, menunda rilis akan merusak kepercayaan investor dan membatalkan kampanye pemasaran besar-besaran yang sudah berjalan. Di sisi lain, membiarkan bug ini berpotensi menyebabkan kerugian finansial perusahaan dan hilangnya kepercayaan pengguna. Sebagai Lead Engineer, bagaimana Anda menyikapi tekanan ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan penundaan rilis untuk melakukan refactoring mendalam guna mengimplementasikan mekanisme locking atau atomic operations yang solid, karena integritas data adalah fondasi utama kepercayaan pengguna yang tidak boleh dikompromikan demi target jangka pendek.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Mengadakan diskusi terbuka dengan seluruh pemangku kepentingan untuk menyelaraskan ekspektasi, mendengarkan kekhawatiran tim teknis maupun bisnis, serta membangun konsensus bersama mengenai langkah mitigasi yang paling dapat diterima oleh semua pihak.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menerapkan hotfix sementara dengan membatasi jumlah transaksi per detik (rate limiting) dan menambahkan antrean (queueing) untuk menstabilkan sistem, sehingga rilis tetap berjalan sesuai jadwal sambil terus memantau data secara ketat di lingkungan produksi.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-3",
            "question": "Anda memimpin tim engineering di sebuah startup yang sedang melakukan ekspansi agresif. Produk utama Anda saat ini mengalami degradasi performa akibat akumulasi utang teknis (technical debt) yang signifikan. Di sisi lain, tim produk baru saja mendapatkan komitmen investasi besar dengan syarat peluncuran fitur unggulan dalam dua minggu ke depan. Jika Anda memaksakan perbaikan arsitektur, fitur akan tertunda dan pendanaan terancam batal. Jika Anda memaksakan peluncuran fitur, sistem berisiko mengalami downtime permanen yang akan merusak reputasi jangka panjang perusahaan. Bagaimana Anda mengambil keputusan strategis ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi sesi kolaborasi lintas departemen yang intensif untuk memetakan ekspektasi pemangku kepentingan, memastikan setiap anggota tim merasa memiliki andil dalam keputusan, serta membangun konsensus kolektif mengenai kompromi yang akan diambil agar seluruh organisasi tetap selaras dan termotivasi meski dalam tekanan tinggi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengadopsi pendekatan pragmatis dengan melakukan refactoring minimalis pada modul kritis saja dan menerapkan strategi 'feature flagging' yang ketat, sehingga fitur tetap dapat dirilis tepat waktu untuk mengamankan pendanaan sambil tetap menjaga stabilitas sistem melalui mitigasi risiko yang terukur.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mengambil keputusan untuk menunda peluncuran fitur guna melakukan restrukturisasi arsitektur secara fundamental, dengan menyusun argumen berbasis data mengenai risiko kegagalan sistem kepada manajemen, demi memastikan skalabilitas jangka panjang dan kesehatan teknis produk yang lebih berkelanjutan.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-4",
            "question": "Dua jam sebelum peluncuran fitur utama yang telah tertunda berkali-kali, kamu menemukan celah Broken Object Level Authorization (BOLA) pada API. Manajer proyek menekan agar rilis tetap berjalan demi memenuhi ekspektasi investor, sementara tim keamanan menuntut penundaan total untuk perbaikan menyeluruh. Sebagai pemimpin teknis, kamu harus memutuskan langkah strategis yang menyeimbangkan integritas sistem dengan kelangsungan bisnis.",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan pertemuan darurat dengan seluruh pemangku kepentingan untuk memetakan dampak risiko terhadap kepercayaan pengguna dan reputasi perusahaan, guna mencapai konsensus kolektif mengenai langkah mitigasi yang paling dapat diterima oleh semua pihak.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan hotfix segera berupa validasi kepemilikan objek pada layer controller untuk memitigasi celah tersebut tanpa mengubah arsitektur, sehingga rilis tetap berjalan sesuai jadwal dan komitmen bisnis tetap terjaga.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menunda rilis secara resmi untuk melakukan refactoring pada layer otorisasi API guna memastikan implementasi kebijakan akses yang terpusat dan teruji, sebagai investasi jangka panjang demi stabilitas sistem dan keamanan data yang berkelanjutan.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-5",
            "question": "Dua jam sebelum peluncuran fitur utama, pengujian beban menunjukkan latensi kritis pada dashboard admin akibat masalah N+1 query pada modul artikel. Sebagai Lead Developer, Anda dihadapkan pada pilihan sulit: menunda peluncuran yang telah dijanjikan kepada stakeholder untuk melakukan perbaikan teknis yang mendalam, atau mengambil tindakan mitigasi cepat yang berisiko menyisakan utang teknis (technical debt) di masa depan. Bagaimana Anda menyikapi situasi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi komunikasi transparan dengan stakeholder mengenai risiko teknis yang ditemukan, lalu memfasilitasi diskusi kolaboratif untuk menyelaraskan ekspektasi antara kebutuhan bisnis dan kapasitas tim, agar keputusan peluncuran diambil berdasarkan konsensus bersama yang menjaga moral serta kepercayaan antar departemen.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan refactoring sistematis pada modul artikel dengan mengimplementasikan pola repository dan optimasi query secara menyeluruh, meskipun hal ini mengharuskan penundaan peluncuran demi memastikan integritas arsitektur, skalabilitas jangka panjang, dan stabilitas sistem yang berkelanjutan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menerapkan hotfix berupa caching pada level aplikasi dan eager loading terbatas untuk menekan latensi secara instan, sehingga target peluncuran tetap tercapai sesuai jadwal, dengan komitmen untuk melakukan pembersihan utang teknis tersebut pada sprint berikutnya.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-6",
            "question": "Platform e-commerce Anda mengalami lonjakan trafik ekstrem tepat dua jam sebelum kampanye besar, menyebabkan latensi pencarian melonjak hingga 10 detik dengan CPU mencapai 99%. Anda dihadapkan pada pilihan sulit: melakukan optimasi teknis mendalam yang berisiko tinggi terhadap stabilitas sistem jika terjadi kesalahan konfigurasi, melakukan scale-up infrastruktur secara agresif yang menelan biaya operasional sangat besar, atau menghentikan sementara fitur pencarian untuk menjaga stabilitas layanan inti (checkout) demi menjaga kepercayaan pelanggan.",
            "options": [
                {
                    "label": "A",
                    "text": "Melakukan load shedding pada fitur pencarian dan mengalihkan trafik ke halaman statis, serta segera mengumpulkan seluruh stakeholder untuk menyelaraskan ekspektasi mengenai penurunan performa fitur tertentu demi memastikan alur checkout tetap berjalan lancar dan menjaga harmoni antar departemen.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan scaling infrastruktur secara vertikal dengan menambah kapasitas server secara instan untuk menampung lonjakan beban, meskipun hal ini akan menyebabkan pembengkakan biaya operasional yang signifikan di luar anggaran bulanan.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menerapkan covering index pada kolom pencarian untuk eliminasi lookup data dan mengaktifkan query caching pada layer aplikasi untuk memangkas eksekusi, guna menyelesaikan akar masalah performa secara struktural tanpa harus menambah biaya infrastruktur atau mengorbankan fitur.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-7",
            "question": "Sistem payment gateway Anda mengalami deadlock saat peak traffic akibat konflik refactoring pada shared service. Anda memiliki waktu 4 jam sebelum sistem crash total. Di sisi lain, tim sedang mengalami kelelahan (burnout) tinggi dan dua pengembang kunci yang bertanggung jawab atas kode tersebut memiliki ego profesional yang kuat. Sebagai Lead, manakah pendekatan yang Anda ambil untuk menangani krisis ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi sesi kolaborasi terbuka untuk memfasilitasi dialog antara kedua pengembang agar mereka dapat menyelaraskan pemahaman teknis mereka. Fokus utama adalah memastikan setiap anggota tim merasa didengar dan memiliki rasa kepemilikan (ownership) terhadap solusi yang dihasilkan, sehingga harmoni tim tetap terjaga pasca-krisis.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Segera melakukan hard-revert ke versi stabil terakhir untuk memulihkan layanan, kemudian menerapkan arsitektur database-level pessimistic locking dan memisahkan logika ke dalam isolated service worker. Strategi ini memprioritaskan stabilitas sistem jangka panjang dan penghapusan akar masalah teknis secara struktural, meskipun memerlukan usaha rekayasa yang intensif.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengarahkan kedua pengembang untuk melakukan pair programming intensif guna menggabungkan logika kedua fitur tersebut ke dalam satu fungsi tunggal yang dapat segera dideploy. Pendekatan ini memprioritaskan pemenuhan target bisnis dan ketersediaan fitur bagi pengguna dalam waktu sesingkat mungkin, dengan mengesampingkan optimasi arsitektur untuk sementara waktu.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-8",
            "question": "Website portal berita klien mengalami lonjakan trafik 500% yang tidak terprediksi tepat 24 jam sebelum peluncuran besar. Sebagai Lead Developer, Anda dihadapkan pada dilema antara menjaga stabilitas sistem, memenuhi ekspektasi klien yang sangat ketat, atau menjaga integritas tim yang sudah kelelahan. Langkah strategis apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi diskusi terbuka dengan klien dan tim untuk mengevaluasi ulang ruang lingkup peluncuran, dengan mengusulkan peluncuran bertahap guna menjaga kesejahteraan tim dan memastikan keselarasan ekspektasi semua pihak agar kolaborasi jangka panjang tetap terjaga.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan arsitektur Static Site Generation (SSG) dengan konfigurasi CDN edge caching yang agresif untuk memindahkan beban komputasi dari server origin, guna memastikan skalabilitas sistem yang tangguh dan performa Core Web Vitals yang optimal dalam jangka panjang.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan optimasi cepat pada query database dan mengaktifkan load balancer tambahan untuk menangani lonjakan trafik secara instan, demi memastikan target peluncuran tetap tercapai sesuai jadwal tanpa harus melakukan perombakan arsitektur yang berisiko di menit terakhir.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-9",
            "question": "Anda memimpin tim engineering dalam peluncuran dashboard real-time yang krusial. Empat jam sebelum deadline, ditemukan memory leak yang menyebabkan crash saat beban tinggi. Anda dihadapkan pada dilema: melakukan perbaikan teknis mendalam yang berisiko melampaui tenggat waktu, menerapkan solusi sementara (workaround) yang menjamin peluncuran tepat waktu namun meninggalkan utang teknis, atau mengomunikasikan risiko ini kepada klien untuk menegosiasikan ulang ekspektasi demi menjaga kesehatan tim dan kualitas jangka panjang. Apa langkah strategis Anda?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi sesi diskusi terbuka dengan klien dan tim untuk memaparkan realitas teknis yang ada, guna menyelaraskan ekspektasi ulang dan membangun konsensus kolektif mengenai prioritas fitur yang dapat diluncurkan hari ini tanpa mengorbankan kesejahteraan tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan mekanisme restart otomatis (auto-scaling/reboot) pada service yang terdampak sebagai solusi pragmatis untuk menjaga stabilitas dashboard agar tetap dapat diakses klien tepat waktu, sembari menjadwalkan perbaikan akar masalah secara menyeluruh setelah peluncuran.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mengalokasikan seluruh sumber daya untuk mengisolasi heap dump dan melakukan refactoring pada lifecycle hook yang bermasalah guna memastikan stabilitas sistem yang permanen, meskipun harus mengambil risiko keterlambatan peluncuran demi menjaga integritas arsitektur produk.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-10",
            "question": "Sistem pemesanan tiket konser Anda akan dibuka dalam 60 menit, namun simulasi beban terakhir menunjukkan database utama mengalami deadlock kronis akibat lonjakan transaksi konkuren yang masif. Anda dihadapkan pada pilihan sulit: memaksakan sistem berjalan dengan risiko gangguan teknis, melakukan perubahan arsitektur yang berisiko tinggi namun solutif, atau menunda peluncuran yang akan berdampak pada reputasi bisnis dan ekspektasi pemangku kepentingan.",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh anggota tim untuk melakukan sesi sinkronisasi cepat guna menyepakati strategi mitigasi risiko bersama, memastikan transparansi komunikasi kepada manajemen mengenai potensi kendala, serta membangun konsensus agar seluruh tim memiliki rasa kepemilikan dan tanggung jawab kolektif dalam menghadapi lonjakan trafik yang akan datang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan database sharding berbasis user-id untuk memecah lock contention, mengaktifkan read-replica untuk offloading query, serta mengimplementasikan optimistic locking pada level aplikasi sebagai solusi struktural yang fundamental untuk menjamin integritas data dan skalabilitas sistem dalam jangka panjang, meskipun membutuhkan ketelitian tinggi dalam waktu singkat.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan bypass sementara pada validasi database yang tidak krusial dan menerapkan antrean (queueing) berbasis message broker untuk menahan laju transaksi masuk, demi memastikan sistem tetap dapat melayani pemesanan tepat waktu sesuai target bisnis, sembari menunda perbaikan arsitektur mendalam setelah periode puncak penjualan berakhir.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-11",
            "question": "Aplikasi e-commerce Anda dijadwalkan rilis dalam dua jam. Audit performa mendadak menunjukkan ukuran bundle JavaScript mencapai 3MB dengan TTI di atas 10 detik. Investor menuntut rilis tepat waktu untuk mengejar momentum kampanye marketing, namun performa saat ini berisiko tinggi menyebabkan bounce rate yang masif. Sebagai lead developer, tindakan apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh pemangku kepentingan untuk memaparkan data performa secara transparan, menegosiasikan penundaan rilis selama 24 jam guna memastikan stabilitas sistem, serta membangun kesepakatan kolektif agar tim tidak mengalami kelelahan akibat tekanan rilis yang dipaksakan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan strategi code-splitting berbasis rute secara agresif dan menerapkan dynamic imports pada komponen non-kritis untuk memangkas initial payload, sekaligus mengonfigurasi ulang tree-shaking pada bundler guna memastikan arsitektur aplikasi tetap optimal dan scalable untuk jangka panjang.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan kompresi aset gambar secara masif ke format WebP, menghapus library pihak ketiga yang tidak esensial, dan menerapkan caching strategy pada level CDN untuk menekan TTI secara instan tanpa mengubah struktur logika aplikasi yang sudah stabil demi memenuhi tenggat waktu rilis.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-12",
            "question": "Sistem inti perusahaan mengalami degradasi performa kritis akibat bottleneck pada modul otorisasi. Anda memiliki waktu 24 jam untuk memulihkan layanan sebelum terjadi kerugian finansial masif. Struktur data 'Many-to-Many' yang ada sangat rapuh dan berisiko tinggi terhadap anomali data jika dilakukan migrasi skema secara penuh. Sebagai pemimpin teknis, Anda dihadapkan pada pilihan strategi pemulihan yang memiliki konsekuensi jangka panjang yang berbeda bagi stabilitas sistem dan operasional perusahaan.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi pertemuan lintas departemen untuk memetakan dampak operasional dari setiap opsi teknis, memastikan seluruh pemangku kepentingan memahami risiko dan memberikan persetujuan kolektif, sehingga keputusan akhir memiliki legitimasi kuat serta menjaga harmoni kerja tim di tengah tekanan krisis.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan caching layer pada level aplikasi menggunakan Redis untuk menyimpan mapping User-Role sebagai key-value pair, guna memotong latensi query database secara instan tanpa menyentuh skema relasional yang rapuh, sehingga stabilitas sistem pulih dengan cepat tanpa risiko migrasi data.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Melakukan normalisasi database secara menyeluruh dengan menerapkan tabel junction dan constraint foreign key yang ketat, meskipun proses ini berisiko tinggi melebihi batas waktu 24 jam, demi memastikan integritas referensial dan menghilangkan akar masalah bottleneck secara permanen.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-13",
            "question": "Sistem e-commerce utama Anda mengalami serangan distributed brute force yang sangat canggih tepat di puncak kampanye promosi tahunan. Database berada di ambang kegagalan total, sementara manajemen menuntut akses VIP tetap berjalan untuk menjaga loyalitas klien besar, dan tim operasional mendesak adanya komunikasi publik segera untuk menjaga kepercayaan pelanggan. Anda harus memilih strategi respons di tengah tekanan waktu yang sangat ketat.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi rapat koordinasi lintas divisi untuk menyelaraskan narasi komunikasi krisis dan memastikan setiap pemangku kepentingan memiliki pemahaman yang sama mengenai dampak teknis, sehingga keputusan yang diambil mencerminkan konsensus kolektif dan menjaga harmoni hubungan internal maupun eksternal perusahaan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan arsitektur pertahanan berlapis dengan mengaktifkan circuit breaker pada API gateway, menerapkan rate limiting berbasis prioritas pada sesi terautentikasi, serta melakukan drop pada trafik mencurigakan untuk menstabilkan database secara sistematis guna memastikan integritas jangka panjang sistem.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menghentikan sementara seluruh akses masuk ke sistem dan mengalihkannya ke halaman maintenance statis yang informatif, guna memitigasi risiko kerusakan data secara instan dan memberikan ruang bagi tim untuk memulihkan layanan secara bertahap demi memenuhi target operasional jangka pendek.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-14",
            "question": "Aplikasi internal perusahaan akan diluncurkan dalam 24 jam. Manajer produk menuntut fitur 'One-Click Account Recovery' untuk menekan angka tiket dukungan, sementara tim keamanan menolak keras karena risiko eksfiltrasi data. Sebagai lead developer, Anda harus mengambil keputusan teknis yang krusial di tengah tekanan deadline ini.",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan penundaan peluncuran selama 48 jam untuk memfasilitasi sesi mitigasi risiko kolaboratif, memastikan seluruh pemangku kepentingan mencapai konsensus teknis yang disepakati bersama demi menjaga integritas budaya kerja dan keselarasan visi jangka panjang antar departemen.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan sistem pemulihan akun dengan mekanisme verifikasi berbasis konteks (seperti verifikasi perangkat terpercaya dan log aktivitas) yang memperkuat arsitektur keamanan secara fundamental, meskipun memerlukan refactoring sistem autentikasi yang cukup kompleks dalam waktu singkat.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengaktifkan fitur pemulihan instan dengan batasan ketat pada durasi token dan implementasi rate-limiting yang agresif, sebagai solusi pragmatis untuk memenuhi target peluncuran tepat waktu tanpa mengabaikan kebutuhan keamanan dasar bagi pengguna.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-15",
            "question": "Sebagai Lead Engineer, Anda mendapati kebocoran memori pada service mesh tepat 45 menit sebelum peluncuran fitur global yang sangat dinanti. CEO menuntut rilis tepat waktu karena ketergantungan pada kampanye pemasaran masif yang sudah berjalan, sementara tim SRE memperingatkan bahwa memaksakan rilis dengan kondisi saat ini berisiko menyebabkan kegagalan sistem total dalam hitungan jam setelah peluncuran. Sebagai pemimpin, bagaimana Anda menavigasi situasi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi komunikasi transparan dengan CEO dan pemangku kepentingan bisnis untuk memaparkan risiko teknis secara mendalam, sembari memfasilitasi ruang diskusi agar tim dapat mencapai konsensus kolektif mengenai strategi mitigasi yang paling dapat diterima oleh semua pihak demi menjaga kepercayaan dan harmoni organisasi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengambil keputusan taktis untuk melakukan bypass pada sidecar proxy yang bermasalah dan mengalihkan trafik ke load balancer cadangan dengan konfigurasi statis, guna memastikan fitur tetap meluncur tepat waktu sambil menerima konsekuensi peningkatan beban kerja manual tim untuk pemantauan pasca-rilis.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mengusulkan penundaan rilis secara terukur dengan memberikan argumen berbasis data mengenai potensi kerugian finansial akibat downtime, serta mengalihkan fokus tim untuk melakukan refactoring arsitektur komunikasi guna menyelesaikan akar masalah kebocoran memori secara permanen sebelum sistem diaktifkan kembali.",
                    "score": 10
                }
            ]
        }
    ],
    "ui-ux-designer": [
        {
            "id": "uiux-1",
            "question": "Anda adalah Lead Data Engineer di sebuah startup fintech yang sedang mengalami lonjakan latensi pada sistem batch processing saat periode pelaporan kuartalan investor. Infrastruktur cloud berada dalam batas normal, namun antrean message broker membengkak, menyebabkan sinkronisasi data ke database utama terhambat. Tim operasional menuntut laporan status segera karena investor menunggu data performa, sementara di sisi lain, tim engineering mencurigai adanya masalah pada arsitektur query yang tidak efisien yang jika dibiarkan akan mengakibatkan akumulasi hutang teknis (technical debt) yang lebih besar di masa depan. Sebagai pemimpin, langkah apa yang Anda ambil untuk menyeimbangkan kebutuhan mendesak dan integritas sistem?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi komunikasi transparan kepada seluruh pemangku kepentingan mengenai kendala teknis yang sedang dihadapi, sembari memfasilitasi diskusi lintas departemen untuk menyelaraskan ekspektasi pelaporan dan memastikan seluruh tim tetap memiliki pemahaman yang sama mengenai prioritas bisnis selama masa investigasi berlangsung.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan optimasi mendalam pada consumer group dan melakukan refactoring pada query yang menyebabkan contention, meskipun tindakan ini berisiko memperlambat penyelesaian laporan kuartalan dalam jangka pendek demi menjamin stabilitas arsitektur dan skalabilitas sistem di masa depan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menerapkan solusi sementara berupa peningkatan resource sementara (vertical scaling) dan melakukan bypass pada validasi data tertentu untuk mempercepat sinkronisasi, guna memastikan laporan investor dapat diselesaikan tepat waktu sesuai tenggat yang dijanjikan, sebelum melakukan perbaikan teknis permanen di sprint berikutnya.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-2",
            "question": "Produk aplikasi flagship kamu akan rilis dalam 48 jam. Tim frontend menemukan bahwa desain grid kustom yang menjadi daya tarik utama produk menyebabkan Cumulative Layout Shift (CLS) tinggi dan penurunan frame rate pada perangkat mobile entry-level. Sebagai Lead Engineer, kamu dihadapkan pada pilihan sulit antara mempertahankan integritas visual atau menjamin stabilitas performa teknis di bawah tekanan tenggat waktu yang sangat ketat.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi rapat koordinasi lintas departemen untuk mempresentasikan temuan teknis ini kepada product owner dan tim desain, guna mencapai konsensus kolektif mengenai kompromi visual yang dapat diterima oleh semua pihak sebelum rilis dilakukan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan refactoring arsitektur grid ke standar CSS native yang lebih performan dan menerapkan contain-intrinsic-size untuk mengunci dimensi layout, meskipun harus mengorbankan beberapa detail estetika yang sebelumnya menjadi nilai jual utama.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mempertahankan implementasi grid kustom saat ini untuk menjaga fidelitas visual, namun memprioritaskan optimasi agresif pada aset gambar dan caching layer untuk meminimalisir beban rendering, guna memastikan produk tetap rilis tepat waktu sesuai spesifikasi desain.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-3",
            "question": "Produk SaaS Anda mengalami penurunan retensi 15% MoM. Stakeholder mendesak peluncuran fitur 'Social Feed' dalam 14 hari untuk menahan churn, namun data teknis menunjukkan aplikasi sudah mencapai limit kognitif pengguna dan latensi tinggi. Menambahkan fitur ini akan meningkatkan payload sebesar 40%, yang berisiko memperburuk stabilitas sistem dan UX yang sudah rapuh, namun di sisi lain, penundaan fitur dapat menyebabkan hilangnya kepercayaan investor dan potensi kehilangan pangsa pasar yang signifikan.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi forum diskusi lintas fungsi untuk membedah urgensi bisnis dan batasan teknis secara transparan, guna mencapai konsensus kolektif mengenai peta jalan produk yang paling dapat diterima oleh seluruh pemangku kepentingan tanpa mengorbankan kohesi tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengakomodasi permintaan fitur dengan pendekatan MVP yang sangat minimalis, mengorbankan beberapa elemen visual non-esensial untuk menjaga payload tetap stabil, guna memenuhi tenggat waktu peluncuran demi menjaga momentum bisnis dan kepercayaan investor.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menunda peluncuran fitur dan mengalokasikan sumber daya untuk melakukan optimasi arsitektur serta refactoring sistem guna mengatasi masalah latensi, dengan argumen bahwa stabilitas fondasi adalah prasyarat mutlak untuk keberhasilan fitur baru di masa depan.",
                    "score": 10
                }
            ]
        },
        {
            "id": "uiux-4",
            "question": "Sebagai Lead Design System, kamu baru saja merilis pembaruan 'Master Button' yang secara tidak sengaja menyebabkan ratusan instance di file produk mengalami 'override reset', merusak layout tepat dua jam sebelum deadline rilis fitur krusial. Tim engineering telah menunggu aset final untuk implementasi. Kamu dihadapkan pada pilihan sulit antara integritas sistem, komitmen bisnis, atau stabilitas tim.",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh desainer untuk sesi evaluasi kolektif guna meredam kepanikan dan menyelaraskan pemahaman bersama, sembari memfasilitasi diskusi terbuka agar setiap anggota tim merasa didengar dan tetap termotivasi meski harus melakukan perbaikan manual secara gotong royong hingga deadline tercapai.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan rollback instan ke versi library sebelumnya untuk memulihkan stabilitas aset bagi tim engineering agar rilis fitur tetap tepat waktu, kemudian menjadwalkan sesi perbaikan teknis mendalam setelah rilis untuk memastikan arsitektur komponen lebih tangguh di masa depan.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Segera melakukan rollback untuk mengamankan operasional, lalu menghentikan sementara alur kerja rilis guna melakukan audit menyeluruh pada 'Component Properties' dan menerapkan protokol 'Publishing Branch' yang ketat untuk mencegah terulangnya kegagalan struktural serupa di masa mendatang.",
                    "score": 10
                }
            ]
        },
        {
            "id": "uiux-5",
            "question": "Anda adalah Lead Engineer untuk aplikasi perbankan mobile yang akan diluncurkan dalam 48 jam. Audit keamanan terakhir mengungkap celah enkripsi data lokal yang berisiko pada perangkat yang di-root. Manajemen bersikeras peluncuran tetap berjalan demi memenuhi komitmen investor, sementara memperbaiki arsitektur enkripsi secara total membutuhkan waktu satu minggu. Sebagai pemimpin teknis, Anda dihadapkan pada pilihan strategi untuk menyeimbangkan integritas sistem, target bisnis, dan ekspektasi pemangku kepentingan.",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan penundaan peluncuran kepada manajemen dengan menyajikan analisis risiko mendalam dan mengadakan sesi diskusi terbuka bersama pemangku kepentingan untuk menyelaraskan ekspektasi, guna memastikan integritas produk tetap menjadi prioritas utama demi menjaga kepercayaan jangka panjang pengguna.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan mekanisme 'root detection' pada runtime untuk memblokir eksekusi aplikasi pada perangkat yang tidak aman, serta menerapkan enkripsi berbasis hardware (Keystore/Keychain) secara terbatas pada data sensitif saja untuk meminimalisir surface area serangan tanpa mengubah arsitektur utama.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Meluncurkan aplikasi sesuai jadwal dengan menambahkan lapisan mitigasi berupa peringatan (disclaimer) pada syarat dan ketentuan mengenai penggunaan perangkat yang dimodifikasi, serta menyusun rencana perbaikan arsitektur enkripsi sebagai prioritas utama dalam pembaruan (patch) versi berikutnya.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-6",
            "question": "Anda memimpin pengembangan fitur krusial yang harus dipresentasikan kepada investor dalam 24 jam. Di satu sisi, tim teknis membutuhkan waktu untuk refactoring kode agar sistem stabil dan scalable di masa depan. Di sisi lain, manajemen menuntut mockup High-Fidelity yang memukau secara visual untuk mengamankan pendanaan. Sebagai lead, Anda harus memilih pendekatan untuk menghadapi tekanan ini tanpa mengorbankan integritas profesional.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi sesi kolaborasi intensif dengan seluruh stakeholder untuk menyelaraskan ekspektasi antara kebutuhan teknis dan visi bisnis, memastikan bahwa setiap pihak merasa didengar dan memahami risiko yang ada sebelum mengambil keputusan final demi menjaga harmoni tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Memprioritaskan arsitektur sistem yang modular dan pembersihan utang teknis (technical debt) sejak awal, dengan menyajikan mockup fungsional yang esensial namun stabil, guna memastikan fondasi produk kuat untuk pengembangan jangka panjang meskipun visual belum sepenuhnya dipoles.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Memanfaatkan library komponen yang sudah ada untuk mempercepat pembuatan mockup High-Fidelity yang impresif bagi investor, dengan melakukan kompromi pada optimasi backend sementara waktu agar target tenggat waktu tercapai dan pendanaan tetap aman.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-7",
            "question": "Anda memimpin tim produk di tengah sprint kritis, 24 jam sebelum peluncuran fitur utama. Data A/B testing menunjukkan tombol 'Beli' berwarna merah (di luar palet brand) meningkatkan CTR sebesar 15% dibandingkan warna biru brand. Tim Brand menolak keras perubahan tersebut karena dianggap merusak identitas visual perusahaan. Anda dihadapkan pada pilihan sulit: mengabaikan data performa demi menjaga konsistensi brand, atau memprioritaskan metrik konversi dengan risiko mengabaikan panduan visual yang telah ditetapkan. Bagaimana Anda mengambil keputusan di tengah tekanan tenggat waktu ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengadakan sesi diskusi cepat dengan perwakilan tim Brand dan tim Produk untuk menyelaraskan ekspektasi, lalu mengambil keputusan berbasis konsensus yang dapat diterima oleh kedua belah pihak guna menjaga keharmonisan budaya kerja dan komitmen kolaboratif jangka panjang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan deployment dengan warna merah sesuai data A/B testing untuk memastikan target kuartal tercapai, sembari menyusun laporan pasca-rilis yang mendokumentasikan dampak positif terhadap pendapatan sebagai dasar untuk negosiasi ulang pedoman brand di masa depan.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mengintegrasikan elemen desain yang mengoptimalkan kontras visual dan psikologi warna dalam batasan palet brand yang diizinkan melalui penyesuaian saturasi atau tata letak, guna menyelesaikan akar masalah konversi tanpa mengorbankan integritas identitas visual perusahaan.",
                    "score": 10
                }
            ]
        },
        {
            "id": "uiux-8",
            "question": "Sistem payment gateway pada aplikasi e-commerce Anda mengalami kegagalan transaksi sebesar 40% pasca-deployment fitur baru. Stakeholder menuntut pemulihan layanan dalam 12 jam. Tim desain bersikeras bahwa fitur UI baru adalah elemen krusial untuk kampanye branding yang sedang berjalan, sementara tim engineering menemukan bahwa kompleksitas integrasi UI baru membebani resource API yang sudah kritis. Sebagai lead engineer, bagaimana Anda menavigasi situasi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi forum diskusi lintas departemen untuk memetakan ekspektasi stakeholder dan kebutuhan teknis secara mendalam, guna menyepakati solusi kompromi yang menjaga harmoni tim serta memastikan setiap pihak merasa dilibatkan dalam pengambilan keputusan strategis demi keberlanjutan kolaborasi jangka panjang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan isolasi pada service payment melalui implementasi feature flag untuk menonaktifkan modul UI baru secara selektif, melakukan refactoring pada endpoint API yang terpengaruh untuk memisahkan beban proses, serta merancang ulang arsitektur komunikasi data agar sistem lebih resilient terhadap perubahan UI di masa depan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menerapkan hotfix pada sisi backend dengan mengoptimalkan query database dan melakukan caching pada layer API untuk menekan latensi, sehingga fitur UI baru tetap dapat dipertahankan sesuai permintaan tim desain tanpa harus mengorbankan target waktu pemulihan layanan yang diberikan stakeholder.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-9",
            "question": "Aplikasi e-commerce Anda akan meluncur dalam 72 jam. Tim teknis menemukan bottleneck pada API gateway saat beban puncak yang berisiko menyebabkan kegagalan transaksi, namun pihak ketiga penyedia layanan API menegaskan bahwa limitasi tersebut bersifat permanen. Anda dihadapkan pada pilihan sulit: menunda peluncuran yang akan merusak kepercayaan investor dan target pemasaran, atau meluncurkan dengan risiko stabilitas yang belum terukur. Bagaimana Anda mengambil keputusan strategis ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi forum diskusi terbuka dengan seluruh pemangku kepentingan untuk memetakan dampak risiko secara transparan, membangun konsensus kolektif mengenai ekspektasi performa, serta menyusun rencana komunikasi krisis yang inklusif untuk menjaga moral tim dan kepercayaan stakeholder dalam menghadapi ketidakpastian peluncuran.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan rekayasa ulang pada alur komunikasi API dengan menerapkan pola circuit breaker dan antrean asinkron untuk mengisolasi kegagalan, sehingga meskipun terdapat keterbatasan dari pihak ketiga, sistem tetap memiliki ketahanan struktural yang terukur dan tidak bergantung pada perbaikan dari pihak eksternal.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengimplementasikan mekanisme throttling pada fitur-fitur pendukung yang tidak krusial dan mengalokasikan seluruh kapasitas API gateway untuk proses checkout, guna memastikan core business tetap berjalan lancar sesuai tenggat waktu meskipun harus mengorbankan pengalaman pengguna pada fitur sekunder.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-10",
            "question": "Anda adalah Lead Product Designer di sebuah startup fintech yang sedang menghadapi penurunan konversi sebesar 40% pada funnel pendaftaran tepat 24 jam sebelum audit investor. Tim engineering menolak melakukan perubahan backend karena risiko stabilitas sistem, namun CEO menuntut perbaikan instan untuk menjaga valuasi. Anda harus memilih strategi untuk merespons tekanan ini dengan mempertimbangkan keberlangsungan produk dan hubungan stakeholder.",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan pertemuan sinkronisasi untuk memetakan ekspektasi CEO dengan batasan teknis tim engineering, guna menyusun narasi audit yang jujur mengenai tantangan teknis saat ini sekaligus menunjukkan peta jalan perbaikan yang terukur untuk meyakinkan investor akan integritas operasional perusahaan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan optimasi pada sisi client-side dengan menyederhanakan alur UI dan validasi input secara lokal tanpa menyentuh API backend, guna memberikan peningkatan konversi yang cepat sebagai bukti progres nyata kepada investor tanpa mengorbankan stabilitas sistem inti.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menolak melakukan perubahan kosmetik yang berisiko menciptakan hutang teknis baru, dan memilih untuk menyajikan analisis data komprehensif kepada CEO mengenai akar masalah sistemik, sembari mengusulkan strategi perbaikan arsitektur jangka panjang yang lebih berkelanjutan meski harus menghadapi risiko audit yang menantang.",
                    "score": 10
                }
            ]
        },
        {
            "id": "uiux-11",
            "question": "Aplikasi e-commerce Anda akan meluncur dalam 24 jam. Saat final review, Anda menemukan inkonsistensi spacing (12px, 15px, 17px) pada komponen utama. Mengingat waktu yang sangat ketat, Anda dihadapkan pada dilema antara mengejar kesempurnaan teknis, menjaga stabilitas jadwal rilis, atau memastikan keselarasan tim. Langkah apa yang Anda ambil sebagai Lead?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh tim untuk melakukan diskusi terbuka guna menyamakan persepsi mengenai standar kualitas visual, sehingga setiap anggota tim merasa dihargai kontribusinya dan memiliki pemahaman kolektif yang kuat untuk pengembangan fitur di masa depan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menginstruksikan engineering untuk melakukan hotfix pada CSS variable/token dengan memetakan ulang nilai tersebut ke sistem spacing berbasis kelipatan 4 atau 8, serta menjalankan unit test terbatas untuk memastikan integritas layout tanpa mengubah struktur DOM secara drastis.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Membiarkan inkonsistensi tersebut tetap ada untuk saat ini demi menjaga stabilitas build yang sudah lulus QA, lalu segera menjadwalkan sesi refactoring teknis pada sprint berikutnya agar target rilis tercapai tanpa risiko bug baru di menit terakhir.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-12",
            "question": "Sistem e-commerce Anda menghadapi lonjakan 15% kegagalan pengiriman akibat kesalahan input alamat pengguna tepat 48 jam sebelum peak season dimulai. Di saat yang sama, tim engineering sedang berada di tengah fase code-freeze untuk refactoring backend yang krusial demi stabilitas jangka panjang sistem. Sebagai lead, Anda harus memilih strategi mitigasi yang memiliki konsekuensi berbeda terhadap operasional, teknis, dan dinamika tim.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi forum diskusi lintas departemen untuk memetakan dampak risiko secara kolektif, memastikan seluruh stakeholder memahami trade-off yang diambil, serta membangun konsensus bersama agar setiap divisi merasa memiliki tanggung jawab moral atas keputusan yang disepakati untuk menjaga stabilitas internal perusahaan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan validasi regex sisi klien dan integrasi API pihak ketiga untuk verifikasi alamat secara real-time sebagai solusi taktis yang cepat, guna menekan angka kegagalan pengiriman secara instan tanpa mengganggu stabilitas codebase backend yang sedang dalam tahap refactoring.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Melakukan interupsi terukur pada sprint refactoring untuk mengintegrasikan modul validasi alamat berbasis microservice yang terstandarisasi, meskipun berisiko menunda jadwal rilis fitur backend, demi memastikan integritas data yang permanen dan skalabilitas arsitektur di masa depan.",
                    "score": 10
                }
            ]
        },
        {
            "id": "uiux-13",
            "question": "Dua jam sebelum peluncuran fitur krusial, stakeholder utama memberikan feedback mendadak bahwa transisi UI terasa berat dan kurang intuitif. Tim engineering sedang dalam proses deployment backend yang tidak bisa diinterupsi, sehingga Anda harus memutuskan strategi mitigasi mandiri. Anda dihadapkan pada pilihan antara mempertahankan integritas teknis, mengejar target rilis tepat waktu, atau mengakomodasi ekspektasi stakeholder demi menjaga keberlanjutan hubungan kerja.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi pertemuan singkat dengan stakeholder untuk mendemonstrasikan batasan teknis yang ada dan mencari titik temu desain yang dapat diterima kedua belah pihak, guna memastikan bahwa keputusan akhir diambil berdasarkan konsensus bersama dan menjaga kepercayaan stakeholder terhadap integritas tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan optimasi teknis mendalam dengan menyederhanakan struktur layer, menghapus elemen redundant, dan menyesuaikan kurva animasi ke standar performa yang lebih ringan, meskipun berisiko melakukan perubahan desain yang belum sempat divalidasi ulang oleh stakeholder.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengimplementasikan solusi 'quick-fix' dengan mengganti transisi kompleks menjadi transisi instan atau fade sederhana untuk memastikan fitur tetap rilis sesuai jadwal tanpa mengganggu alur backend, sembari menjadwalkan perbaikan desain yang lebih komprehensif pada iterasi berikutnya.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-14",
            "question": "Aplikasi e-commerce Anda mengalami penurunan konversi 15% pasca-update UI. Di tengah tekanan target kuartalan yang ketat, manajemen mendesak penempatan banner iklan pihak ketiga di area 'white space' halaman checkout untuk menutup gap revenue. Anda dihadapkan pada dilema antara menjaga integritas pengalaman pengguna (UX) yang krusial bagi retensi jangka panjang, atau memenuhi urgensi finansial perusahaan yang menuntut hasil instan. Bagaimana Anda menyikapi instruksi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan forum diskusi lintas departemen yang melibatkan tim produk, marketing, dan manajemen untuk memetakan dampak strategis secara kolektif, memastikan setiap pemangku kepentingan memahami risiko dan peluang, serta membangun konsensus bersama demi menjaga sinergi budaya kerja yang tetap kondusif.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menyetujui implementasi banner iklan tersebut sebagai langkah taktis untuk memenuhi target kuartalan, sembari melakukan optimasi teknis pada aset iklan agar tidak menambah latensi dan memastikan integrasi visual tetap bersih untuk meminimalisir gangguan pada alur pembayaran.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mengusulkan pendekatan berbasis data melalui A/B testing dengan segmentasi trafik untuk mengukur dampak nyata banner terhadap konversi dan AOV, serta memprioritaskan perbaikan akar masalah pada UI yang menyebabkan penurunan 15% sebelum menambah elemen baru yang berisiko meningkatkan cognitive load.",
                    "score": 10
                }
            ]
        },
        {
            "id": "uiux-15",
            "question": "Aplikasi finansial Anda mengalami churn rate 15% pada tahap onboarding akibat friction autentikasi. Manajemen menuntut implementasi 'Biometric Login' segera untuk menekan angka tersebut. Namun, tim backend sedang dalam fase migrasi database krusial yang sangat rentan terhadap latensi API. Menambahkan beban query baru saat ini berisiko menyebabkan downtime total, sementara menunda fitur akan mengabaikan urgensi bisnis yang mendesak. Sebagai lead engineer, bagaimana Anda mengambil keputusan strategis ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi serangkaian lokakarya lintas departemen untuk memetakan risiko secara komprehensif, memastikan seluruh stakeholder memahami keterbatasan teknis saat ini, serta menyepakati jadwal perilisan bertahap yang selaras dengan kapasitas tim dan ekspektasi bisnis demi menjaga stabilitas operasional dan harmoni organisasi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan mekanisme client-side caching untuk session token dan memicu biometrik melalui local authentication provider tanpa melakukan API call ke database utama, serta menerapkan pola circuit breaker pada endpoint autentikasi untuk memastikan sistem tetap resilien terhadap lonjakan latensi selama masa migrasi.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan integrasi fitur biometrik dengan strategi throttling pada endpoint API untuk membatasi jumlah request per detik, serta membagi beban query ke dalam batch kecil guna memastikan fitur tetap rilis tepat waktu sesuai target manajemen tanpa menghentikan proses migrasi database yang sedang berjalan.",
                    "score": 5
                }
            ]
        }
    ],
    "graphic-designer": [
        {
            "id": "gd-1",
            "question": "Klien meminta logo dikirim agar bisa dicetak di billboard raksasa tanpa pecah. Format file apa yang wajib kamu berikan?",
            "options": [
                {
                    "label": "A",
                    "text": "PNG resolusi 300dpi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Vector (SVG/EPS/AI).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "JPEG ukuran 50MB.",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-2",
            "question": "Warna desain flyer saat dicetak di mesin offset terlihat sangat kusam dibandingkan saat kamu desain di monitor. Kesalahan utamanya adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Bekerja di mode warna RGB, bukan CMYK.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Resolusi gambar terlalu rendah.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Kurang menaikkan brightness di Photoshop.",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-3",
            "question": "Sebuah poster memiliki banyak teks panjang namun terlihat membosankan dan susah dibaca. Prinsip desain apa yang harus diterapkan?",
            "options": [
                {
                    "label": "A",
                    "text": "Menggunakan 5 jenis font berbeda agar meriah.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan Typographic Hierarchy (Heading, Subheading, Body) dan white space.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Membuat semua teks menjadi huruf kapital (ALL CAPS).",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-4",
            "question": "Klien komplain 'Logo saya kurang kelihatan pop-out!'. Secara tata letak visual, cara profesional untuk mengatasi ini tanpa merusak komposisi adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Menambah negative space (ruang kosong) di sekitar logo agar mata fokus ke sana.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Membesarkan ukuran logo sampai memenuhi setengah layout.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Memberi warna neon terang pada background logo.",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-5",
            "question": "Kamu merancang feed Instagram bersambung (puzzle feed). Risiko terbesar yang sering dilupakan desainer pemula saat menggunakan teknik ini adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Warna tidak konsisten di setiap kotak.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Setiap gambar satuan terlihat aneh/terpotong jika user melihatnya dari timeline biasa.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Ukuran file terlalu besar untuk di-upload.",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-6",
            "question": "Dalam teori warna, kamu ditugaskan membuat desain kemasan untuk produk makanan organik yang terkesan 'sehat dan premium'. Kombinasi yang cocok?",
            "options": [
                {
                    "label": "A",
                    "text": "Merah cerah dan kuning neon.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Hijau earth-tone (muted) dipadukan dengan aksen emas atau krem.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Hitam pekat dan ungu tua.",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-7",
            "question": "Foto produk yang klien berikan memiliki background ramai sehingga teks penawaran tidak terbaca. Teknik editing cepat yang estetis?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengaplikasikan efek blur (Depth of Field) di background atau menambahkan shape overlay transparan di bawah teks.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Menambahkan stroke tebal berwarna merah menyala pada teks.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menghapus foto produk dan hanya memakai teks.",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-8",
            "question": "Klien memberi revisi: 'Desainnya kurang modern, terasa jadul.' Elemen apa yang paling cepat diubah untuk memberikan kesan modern minimalis?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengganti font serif klasik menjadi sans-serif bersih dan menghilangkan efek drop shadow berlebihan.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Menambahkan lebih banyak ornamen bunga dan pita.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Mewarnai ulang seluruh desain dengan gradasi pelangi.",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-9",
            "question": "Kamu menggunakan Illustrator untuk maskot, Photoshop untuk edit foto, dan InDesign untuk? ",
            "options": [
                {
                    "label": "A",
                    "text": "Membuat animasi GIF logo.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Layouting dokumen multi-halaman (majalah/company profile) karena text formattingnya lebih kuat.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mewarnai vektor.",
                    "score": 0
                }
            ]
        },
        {
            "id": "gd-10",
            "question": "Brand guidelines klien menetapkan penggunaan spesifik untuk 'Margin of Safety'. Apa maksudnya?",
            "options": [
                {
                    "label": "A",
                    "text": "Batas area aman di desain agar teks/logo penting tidak terpotong saat proses cetak (trim) atau tampil di layar.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Area untuk menaruh watermark desainernya.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Warna background yang aman untuk mata.",
                    "score": 0
                }
            ]
        }
    ],
    "content-creator": [
        {
            "id": "cc-1",
            "question": "Video TikTok-mu punya retention rate tinggi di akhir, tapi views-nya sangat rendah (tidak masuk FYP). Masalah utama biasanya ada di?",
            "options": [
                {
                    "label": "A",
                    "text": "Kualitas kamera kurang tajam.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Hook (3 detik pertama) kurang kuat sehingga user langsung scroll.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Kurang panjang durasinya.",
                    "score": 0
                }
            ]
        },
        {
            "id": "cc-2",
            "question": "Algoritma Instagram mulai memprioritaskan 'Saves' (Simpan) dan 'Shares' (Bagikan) dibanding 'Likes'. Jenis konten apa yang harus kamu perbanyak?",
            "options": [
                {
                    "label": "A",
                    "text": "Selfie estetik dengan caption singkat.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Konten edukasi, tips, template, atau relatable memes.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Video dance challenge.",
                    "score": 0
                }
            ]
        },
        {
            "id": "cc-3",
            "question": "Kamu membuat konten YouTube panjang, lalu ingin mendaur ulangnya (repurpose) ke TikTok/Shorts. Kesalahan editing terburuk adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengunggah video berformat landscape langsung ke platform vertikal tanpa menyesuaikan rasio dan caption dinamis.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Memotong video jadi di bawah 60 detik.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menambahkan backsound lagu viral.",
                    "score": 0
                }
            ]
        },
        {
            "id": "cc-4",
            "question": "Brand klien ingin konten yang memicu audiens berkomentar (engagement rate tinggi). Strategi copywriting apa yang paling efektif?",
            "options": [
                {
                    "label": "A",
                    "text": "Menulis deskripsi produk yang sangat teknis dan panjang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Memberikan opini polarisasi atau CTA (Call to Action) berupa pertanyaan terbuka di akhir video/caption.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Hanya menggunakan hashtag saja tanpa caption.",
                    "score": 0
                }
            ]
        },
        {
            "id": "cc-5",
            "question": "Video edukasimu sangat informatif tapi membosankan. Teknik 'Pattern Interrupt' apa yang bisa digunakan saat editing di CapCut?",
            "options": [
                {
                    "label": "A",
                    "text": "Membuat transisi perlahan yang sangat mulus.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengganti angle kamera/zoom, menambahkan sound effect, atau memunculkan pop-up teks setiap 3-5 detik.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengecilkan volume musik latar.",
                    "score": 0
                }
            ]
        },
        {
            "id": "cc-6",
            "question": "Saat melakukan riset tren, kamu menemukan sound sedang viral. Bagaimana cara brand-mu ikut tren tanpa terlihat 'cringe' (memalukan)?",
            "options": [
                {
                    "label": "A",
                    "text": "Melakukan dance persis sama meskipun brand-mu menjual asuransi B2B.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengadaptasi konteks suara viral tersebut dengan masalah sehari-hari (pain points) yang dialami target audiens brand-mu.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Tidak usah ikut tren sama sekali.",
                    "score": 0
                }
            ]
        },
        {
            "id": "cc-7",
            "question": "Klien menuduh akunnya kena 'Shadowban' karena views tiba-tiba anjlok 80%. Analisis data pertama yang harus kamu lakukan?",
            "options": [
                {
                    "label": "A",
                    "text": "Menghapus semua video lama.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengecek analitik apakah views dari 'Non-Followers' (For You/Explore) masih masuk atau nol persen.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Membuat akun baru seketika.",
                    "score": 0
                }
            ]
        },
        {
            "id": "cc-8",
            "question": "Copywriting untuk caption harus menerapkan prinsip AIDA. 'Desain casing hp ini anti banting dari lantai 3' termasuk dalam fase?",
            "options": [
                {
                    "label": "A",
                    "text": "Action.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Interest / Desire.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Awareness.",
                    "score": 0
                }
            ]
        },
        {
            "id": "cc-9",
            "question": "Dalam merekam video UGC (User Generated Content) untuk review produk, elemen apa yang paling membangun kepercayaan penonton?",
            "options": [
                {
                    "label": "A",
                    "text": "Kamera mahal RED 8K.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Skrip yang dihafal seperti robot dan memuji tanpa henti.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Testimoni otentik (menunjukkan sebelum-sesudah) dan pencahayaan natural.",
                    "score": 10
                }
            ]
        },
        {
            "id": "cc-10",
            "question": "Apa fungsi utama dari menganalisis metrik 'Watch Time / Average View Duration' pada Social Media Analytics?",
            "options": [
                {
                    "label": "A",
                    "text": "Untuk mengetahui di detik ke berapa penonton bosan, sehingga pacing editing bisa diperbaiki ke depannya.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Hanya sekadar angka untuk dipamerkan ke klien.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menentukan apakah algoritma sedang rusak.",
                    "score": 0
                }
            ]
        }
    ],
    "ai-ml-engineer": [
        {
            "id": "ai-1",
            "question": "Model Machine Learning yang kamu buat (misal prediksi harga rumah) bekerja 99% akurat di data training, tapi sangat buruk saat di-test dengan data baru. Modelmu mengalami?",
            "options": [
                {
                    "label": "A",
                    "text": "Underfitting.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Overfitting.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Data Normalization.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-2",
            "question": "Kamu membangun sistem RAG (Retrieval-Augmented Generation) menggunakan LLM, tapi sistem sering berhalusinasi mengarang jawaban di luar dokumen. Solusi arsitekturnya?",
            "options": [
                {
                    "label": "A",
                    "text": "Melatih (fine-tune) model LLM dari nol.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Memperbaiki prompt dengan instruksi ketat 'Jawab HANYA berdasarkan konteks' dan mengevaluasi teknik chunking + vector search di Vector DB.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Meningkatkan parameter temperature model menjadi 1.0.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-3",
            "question": "Proses pencarian dokumen terdekat (semantic search) dari jutaan teks berjalan sangat lambat. Library apa yang sebaiknya diimplementasikan untuk indexing vektor?",
            "options": [
                {
                    "label": "A",
                    "text": "Pandas DataFrame.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "FAISS (Facebook AI Similarity Search) atau Vector Database khusus.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Regex match.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-4",
            "question": "Saat melakukan pembersihan data untuk NLP (Natural Language Processing), teks mengandung banyak stop words dan imbuhan. Tahap preprocessing yang diperlukan?",
            "options": [
                {
                    "label": "A",
                    "text": "Tokenization, Stopword Removal, dan Stemming/Lemmatization.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Mengubah semuanya menjadi huruf kapital.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menghapus semua vokal.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-5",
            "question": "Dalam membangun sistem klasifikasi gambar (CNN), jumlah datamu (dataset) untuk kelas tertentu sangat sedikit. Teknik apa yang bisa dipakai agar model tetap bagus?",
            "options": [
                {
                    "label": "A",
                    "text": "Menghapus kelas tersebut dari prediksi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Data Augmentation (memutar, memotong gambar) atau Transfer Learning dari model pre-trained (seperti ResNet/YOLO).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan copy-paste gambar yang sama berulang kali.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-6",
            "question": "User mencoba melakukan 'Prompt Injection' pada Chatbot AI milik perusahaanmu agar bot tersebut membocorkan prompt sistem utama. Cara penanganannya?",
            "options": [
                {
                    "label": "A",
                    "text": "Membiarkan saja karena AI memang bisa diajak mengobrol.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan filter moderasi di layer terpisah dan memasang delimiter ketat untuk membedakan sistem prompt dengan user input.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengurangi batasan token (max_tokens).",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-7",
            "question": "Model Python-mu (TensorFlow/PyTorch) butuh waktu 3 hari untuk training menggunakan CPU. Komponen hardware apa yang paling esensial ditambah untuk AI Training?",
            "options": [
                {
                    "label": "A",
                    "text": "SSD kapasitas besar.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "GPU (Graphical Processing Unit) seperti NVIDIA dengan CUDA support.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "RAM 128GB.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-8",
            "question": "Kamu ditugaskan memilih metrik evaluasi model untuk mendeteksi penipuan kartu kredit (imbalanced data). Akurasi (Accuracy) mencapai 99% tapi model gagal. Metrik apa yang benar?",
            "options": [
                {
                    "label": "A",
                    "text": "Recall, Precision, dan F1-Score untuk kelas penipuan.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Mean Squared Error (MSE).",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Accuracy saja sudah cukup.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-9",
            "question": "Untuk mengurangi biaya API LLM komersial (seperti OpenAI) di task summarization internal, kamu berniat menggunakan model Open Source. Langkah yang tepat?",
            "options": [
                {
                    "label": "A",
                    "text": "Men-deploy model seperti LLaMA/Mistral secara lokal atau di cloud GPU sendiri.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Tetap pakai OpenAI tanpa peduli biaya.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menggunakan metode regex tradisional alih-alih AI.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ai-10",
            "question": "Salah satu kelemahan model LLM saat ini adalah 'Knowledge Cutoff' (tidak tahu informasi terbaru). Fitur sistem apa yang dibangun engineer untuk mengatasi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Memaksa model menghafal data.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Membangun sistem Tool Calling / Function Calling agar LLM bisa memanggil API Google Search atau query database saat itu juga.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menurunkan temperature.",
                    "score": 0
                }
            ]
        }
    ],
    "devops-qa-engineer": [
        {
            "id": "dev-1",
            "question": "Setiap kali developer merilis kode, aplikasi production sering mati sesaat. Solusi Deployment yang harus diimplementasikan DevOps adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Melakukan deploy manual jam 3 pagi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan CI/CD pipeline dengan strategi Blue-Green Deployment atau Zero Downtime Deployment.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Meminta developer tidak sering update aplikasi.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-2",
            "question": "Tim QA mendapati skrip Automation Test (Selenium/Cypress) mereka sering gagal (flaky) karena elemen halaman kadang belum termuat penuh. Cara memperbaikinya?",
            "options": [
                {
                    "label": "A",
                    "text": "Menambahkan `sleep(10)` (hard wait) di setiap baris.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menggunakan Explicit Wait (menunggu elemen tertentu visible/clickable secara dinamis).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengabaikan error tersebut.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-3",
            "question": "Aplikasi berjalan lancar di laptop developer tapi error karena masalah versi OS/dependensi saat dijalankan di server staging. Teknologi untuk memecahkan 'It works on my machine'?",
            "options": [
                {
                    "label": "A",
                    "text": "Containerization menggunakan Docker.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Mengganti laptop developer dengan laptop server.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Zip dan FTP manual.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-4",
            "question": "Server cloud (AWS) sering mengalami lonjakan traffic tinggi tak terduga yang membuat RAM penuh, lalu kembali sepi. Fitur apa yang harus di-setup?",
            "options": [
                {
                    "label": "A",
                    "text": "Membeli server terbesar secara permanen (Overprovisioning).",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Auto Scaling Group dikombinasikan dengan Load Balancer.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menghapus fitur berat di aplikasi.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-5",
            "question": "Terjadi celah keamanan data karena developer memasukkan password database (credentials) langsung ke dalam source code di GitHub (Hardcoded). Praktik CI/CD yang benar?",
            "options": [
                {
                    "label": "A",
                    "text": "Menyimpan credentials di Environment Variables (Secrets Management) dan injeksi saat pipeline berjalan.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Membuat repo GitHub menjadi private.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Mengenkripsi password secara manual.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-6",
            "question": "Saat melakukan Load Testing (misal menggunakan JMeter/K6), metrik utama apa yang paling diperhatikan untuk mengukur keandalan (reliability) server?",
            "options": [
                {
                    "label": "A",
                    "text": "Warna antarmuka server.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Response Time, Throughput (RPS), dan Error Rate saat concurrent user tinggi.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Kecepatan internet laptop tester.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-7",
            "question": "Dalam ekosistem Kubernetes, satu Pod utama tiba-tiba crash. Apa yang secara otomatis dilakukan sistem Orchestration ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Restart otomatis pod tersebut atau menjadwalkan ulang di node lain yang sehat untuk menjaga 'desired state'.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Mematikan seluruh server.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Mengirim email agar DevOps datang menyalakan ulang manual.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-8",
            "question": "QA Engineer menemukan Defect (Bug) kritis pada fitur pembayaran. Selain melaporkan bug, informasi esensial apa yang wajib ada di tiket Jira agar developer paham?",
            "options": [
                {
                    "label": "A",
                    "text": "Hanya screenshot dan kata 'Error'.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Steps to reproduce (Langkah mengulangi bug), Expected Result (Hasil yang diharapkan), dan Actual Result (Hasil asli).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menyalahkan developer di kolom komentar.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-9",
            "question": "Infrastruktur cloud perusahaan saat ini dikonfigurasi secara manual lewat klik di Dashboard UI (AWS Console). Pendekatan ini rentan error dan sulit diduplikasi. Solusinya?",
            "options": [
                {
                    "label": "A",
                    "text": "Membuat dokumentasi Word panjang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Infrastructure as Code (IaC) menggunakan alat seperti Terraform atau Ansible.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Merekam layar saat konfigurasi.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dev-10",
            "question": "Untuk memastikan fitur lama tidak rusak akibat rilis kode baru, jenis testing (pengujian) apa yang dijalankan oleh QA Automation di dalam pipeline?",
            "options": [
                {
                    "label": "A",
                    "text": "Regression Testing.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Exploratory Testing.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Usability Testing.",
                    "score": 0
                }
            ]
        }
    ],
    "data-analyst": [
        {
            "id": "da-1",
            "question": "Terdapat dua tabel: 'Users' dan 'Orders'. Kamu ingin menampilkan semua user, bahkan yang belum pernah order sekalipun. Jenis SQL Join apa yang dipakai?",
            "options": [
                {
                    "label": "A",
                    "text": "INNER JOIN.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "LEFT JOIN (dari tabel Users).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "CROSS JOIN.",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-2",
            "question": "Saat membersihkan data (Data Cleansing) di Python/Pandas, kamu menemukan kolom 'Pendapatan' memiliki banyak nilai kosong (NaN/Null). Cara statistika terbaik menanganinya?",
            "options": [
                {
                    "label": "A",
                    "text": "Menghapus semua baris data agar bersih.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan Imputasi (mengisi dengan Median atau Mean) tergantung distribusi kemiringan (skewness) datanya.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengisi dengan angka 0.",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-3",
            "question": "Dashboard Tableau yang kamu buat loadingnya sangat lama saat dibuka oleh direktur (menghabiskan 30 detik). Kesalahan desain arsitektur yang sering terjadi?",
            "options": [
                {
                    "label": "A",
                    "text": "Tabel di-query langsung ke database produksi jutaan baris (Live Connection) tanpa Extract/Agregasi sebelumnya.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Warna dashboard terlalu cerah.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menggunakan grafik Bar Chart.",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-4",
            "question": "Tim sales ingin visualisasi yang menunjukkan perbandingan porsi penjualan tiap regional terhadap total penjualan keseluruhan (100%). Chart yang kurang disarankan secara UX data adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Bar Chart bertingkat (Stacked Bar).",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Pie Chart 3D dengan belasan kategori (sulit membandingkan volume mata secara presisi).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Tree Map.",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-5",
            "question": "Di Power BI, untuk menghitung 'Total Penjualan Tahun Berjalan' yang bisa update dinamis, bahasa ekspresi (formula) apa yang digunakan?",
            "options": [
                {
                    "label": "A",
                    "text": "HTML.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "DAX (Data Analysis Expressions) seperti TOTALYTD.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "VLOOKUP.",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-6",
            "question": "Data menunjukkan angka rata-rata (Mean) penjualan bulan ini naik tajam, tapi median (nilai tengah) tetap. Apa indikasi terkuat dari fenomena ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Semua sales mengalami peningkatan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Terdapat Outlier ekstrim (misal 1 transaksi bernilai raksasa) yang mengerek angka rata-rata.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Data tersebut invalid.",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-7",
            "question": "Stakeholder bertanya: 'Mengapa user churn rate kita naik bulan ini?'. Analisis ini masuk ke dalam kategori analitik tahap apa?",
            "options": [
                {
                    "label": "A",
                    "text": "Descriptive Analytics (Apa yang terjadi).",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Diagnostic Analytics (Mengapa itu terjadi).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Predictive Analytics (Apa yang akan terjadi besok).",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-8",
            "question": "Dalam SQL, klausa apa yang digunakan untuk memfilter hasil *setelah* dilakukan pengelompokan agregasi (GROUP BY)?",
            "options": [
                {
                    "label": "A",
                    "text": "WHERE.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "HAVING.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "ORDER BY.",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-9",
            "question": "Kamu akan melakukan presentasi ('Data Storytelling') kepada tim eksekutif non-teknis. Aturan emas yang harus dipegang?",
            "options": [
                {
                    "label": "A",
                    "text": "Menampilkan seluruh kode Python dan formula query di layar.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menyorot Insight utama/Kesimpulan Bisnis terlebih dahulu, visual yang sederhana, dan rekomendasi aksi yang jelas (Actionable Insight).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Membaca angka di tabel satu persatu.",
                    "score": 0
                }
            ]
        },
        {
            "id": "da-10",
            "question": "Kolom tanggal formatnya berupa string berantakan (contoh: 'Jan 12 2024', '2024-01-12'). Untuk dianalisa, data ini harus diparsing menjadi format standar. Teknik ini disebut?",
            "options": [
                {
                    "label": "A",
                    "text": "Data Encryption.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Data Transformation / Casting ke tipe data Date/Datetime.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Data Dropping.",
                    "score": 0
                }
            ]
        }
    ],
    "data-researcher": [
        {
            "id": "dres-1",
            "question": "Survei riset pasarmu menjangkau 1000 orang, tapi 90% responden adalah mahasiswa pria di bawah 25 tahun, padahal produkmu untuk umum. Masalah utama riset ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Budget survei terlalu kecil.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Sampling Bias (Sampel tidak merepresentasikan populasi target).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Kuesionernya terlalu pendek.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-2",
            "question": "Dalam riset kualitatif (In-depth Interview), user ditanya: 'Apakah aplikasi ini sudah bagus dan mudah digunakan?'. Kesalahan apa pada perumusan pertanyaan ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Pertanyaan tersebut adalah Leading Question (menggiring jawaban) dan tertutup (Yes/No answer).",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Kata-katanya kurang sopan.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Seharusnya ditanyakan lewat email.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-3",
            "question": "Perusahaan ingin masuk ke pasar baru. Kamu ditugaskan menghitung TAM (Total Addressable Market). Pendekatan yang benar?",
            "options": [
                {
                    "label": "A",
                    "text": "Menghitung hanya orang yang sudah pasti beli bulan depan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menghitung total keseluruhan estimasi pendapatan yang tersedia dari seluruh permintaan pasar untuk produk tersebut.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melihat pendapatan kompetitor terendah.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-4",
            "question": "Saat melakukan Competitor Analysis, selain fitur produk kompetitor, kerangka kerja (framework) strategis apa yang paling sering digunakan untuk memetakan kekuatan & kelemahan?",
            "options": [
                {
                    "label": "A",
                    "text": "SWOT Analysis.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "A/B Testing.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Agile Scrum.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-5",
            "question": "Stakeholder menuntut hasil riset kualitatif dalam 2 hari, padahal butuh waktu untuk FGD. Strategi riset sekunder tercepat?",
            "options": [
                {
                    "label": "A",
                    "text": "Melakukan survei door-to-door.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan Social Listening / Desk Research dari review kompetitor di internet, forum, dan laporan industri yang sudah ada.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menolak tugas tersebut mentah-mentah.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-6",
            "question": "Hasil riset kuantitatif menunjukkan Korelasi positif tinggi antara penjualan es krim dan kematian akibat tenggelam. Kesimpulan kausal (sebab-akibat) yang benar?",
            "options": [
                {
                    "label": "A",
                    "text": "Makan es krim menyebabkan tenggelam.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Korelasi tidak berarti Kausalitas (bisa jadi ada variabel ke-3, misal: musim panas).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Data riset tersebut pasti dimanipulasi.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-7",
            "question": "Alat ukur survei yang kamu buat konsisten menghasilkan nilai yang sama bila dites berulang-ulang, namun ternyata meleset dari tujuan pengukuran awal. Artinya survei ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Reliable (Konsisten) tapi tidak Valid.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Valid tapi tidak Reliable.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Sempurna.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-8",
            "question": "Banyak responden meninggalkan kuesioner online di tengah jalan (Drop-off rate tinggi). Penyebab terbesarnya biasanya?",
            "options": [
                {
                    "label": "A",
                    "text": "Kuesioner terlalu panjang, pertanyaan repetitif, atau skala likert membingungkan (Survey Fatigue).",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Warna kuesioner kurang menarik.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Karena kuesioner tersebut anonim.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-9",
            "question": "Dalam riset pricing (harga), untuk mengetahui kesediaan membayar user secara tidak langsung, metode yang sering digunakan adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Bertanya langsung 'Berapa harga yang Anda inginkan?'.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Van Westendorp Price Sensitivity Meter atau Conjoint Analysis.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Memberikan harga acak secara gratis.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dres-10",
            "question": "Sebagai Strategy Analyst, kamu menemukan bahwa CAC (Customer Acquisition Cost) perusahaan melebihi LTV (Lifetime Value). Apa rekomendasi bisnismu?",
            "options": [
                {
                    "label": "A",
                    "text": "Meningkatkan budget iklan (bakar uang) agar menang volume.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Bisnis ini tidak berkelanjutan; sarankan untuk efisiensi marketing, naikkan retention, atau inovasi pricing/upselling.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Pecat seluruh tim sales.",
                    "score": 0
                }
            ]
        }
    ],
    "digital-marketing": [
        {
            "id": "dm-1",
            "question": "Anda adalah Performance Marketer yang menangani kampanye Meta Ads dengan CTR tinggi (4%) namun konversi penjualan di website tetap 0% menjelang akhir hari. Klien menuntut hasil instan sebelum anggaran habis. Anda dihadapkan pada dilema antara melakukan perbaikan teknis mendalam yang memakan waktu, melakukan optimasi cepat pada elemen visual untuk mendorong konversi segera, atau melakukan sinkronisasi ulang dengan tim terkait untuk memastikan ekspektasi klien selaras dengan realitas data. Langkah strategis apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menghentikan sementara iklan untuk melakukan sesi sinkronisasi intensif dengan tim kreatif dan IT guna memastikan seluruh pemangku kepentingan memiliki pemahaman yang sama mengenai hambatan konversi, sehingga keputusan berikutnya diambil berdasarkan konsensus kolektif dan visi yang selaras.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan audit teknis mendalam pada payload size landing page dan mengeliminasi script pihak ketiga yang menghambat rendering, serta memvalidasi ulang konsistensi intent antara headline iklan dengan value proposition untuk memastikan fondasi konversi yang solid dan berkelanjutan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan perubahan taktis instan pada elemen visual dan copy di landing page untuk menciptakan urgensi (scarcity) serta menyederhanakan alur checkout guna memaksimalkan peluang konversi dari traffic yang sudah ada sebelum anggaran hari ini habis.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-2",
            "question": "Anda adalah konsultan SEO untuk sebuah startup e-commerce yang sedang dalam fase krusial sebelum putaran pendanaan. Data menunjukkan adanya kanibalisasi keyword antara dua landing page utama yang menyebabkan penurunan peringkat drastis. Di satu sisi, CEO menuntut pemulihan trafik instan dalam 48 jam untuk menunjukkan traksi kepada investor. Di sisi lain, tim konten merasa salah satu halaman tersebut adalah aset branding yang sangat berharga bagi loyalitas pelanggan, sementara tim teknis memperingatkan bahwa perubahan drastis pada struktur URL akan berisiko menyebabkan ketidakstabilan indeksasi jangka panjang. Sebagai pemimpin proyek, pendekatan mana yang akan Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi sesi kolaborasi lintas departemen untuk menyelaraskan ekspektasi antara CEO, tim konten, dan tim teknis, guna memastikan bahwa keputusan yang diambil nantinya mendapatkan dukungan penuh dari seluruh pemangku kepentingan dan menjaga harmoni visi perusahaan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan 301 redirect dari halaman dengan performa lebih rendah ke halaman utama serta melakukan konsolidasi internal link secara menyeluruh untuk memperkuat otoritas domain, meskipun langkah ini memerlukan waktu untuk pemulihan indeksasi dan mengabaikan nilai branding dari halaman yang dihapus.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan optimasi cepat dengan memodifikasi meta-tag dan menambahkan variasi keyword long-tail pada kedua halaman agar Google dapat membedakan relevansi konten secara instan, demi memenuhi target trafik jangka pendek CEO tanpa harus menghapus aset konten yang ada.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-3",
            "question": "Klien utama Anda menuntut penjelasan mendesak karena ROAS kampanye Google Ads anjlok drastis dari 4.0 ke 1.2 dalam 48 jam terakhir, sementara CEO menuntut laporan performa lengkap dalam satu jam. Di satu sisi, Anda memiliki keterbatasan data yang belum terverifikasi sepenuhnya, namun di sisi lain, Anda harus memilih antara memberikan jawaban cepat untuk menenangkan pemangku kepentingan atau melakukan investigasi teknis mendalam yang mungkin memakan waktu namun memberikan solusi berbasis data yang akurat. Langkah strategis apa yang Anda ambil dalam situasi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi pertemuan sinkronisasi dengan tim internal untuk menyelaraskan narasi dan mengelola ekspektasi klien secara transparan, dengan fokus utama pada menjaga kepercayaan jangka panjang dan memastikan seluruh pihak memiliki pemahaman yang seragam mengenai situasi yang sedang dihadapi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan audit teknis mendalam pada struktur data, memvalidasi integritas tracking pixel, dan menganalisis anomali pada search terms secara komprehensif untuk memastikan bahwa solusi yang diberikan bersifat struktural dan mencegah terulangnya masalah serupa di masa depan, meskipun membutuhkan waktu lebih lama.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menyusun laporan ringkas berbasis data yang tersedia saat ini dengan mengidentifikasi tren utama dan memberikan rekomendasi taktis jangka pendek untuk memitigasi kerugian segera, guna memenuhi tenggat waktu CEO dan memberikan kepastian kepada klien bahwa situasi sedang dalam kendali.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-4",
            "question": "Anda adalah Product Lead di sebuah startup fintech yang sedang bersiap untuk peluncuran fitur investasi baru. Di saat yang sama, tim engineering menemukan celah keamanan minor yang berpotensi memengaruhi data pengguna, namun memperbaikinya akan menunda peluncuran selama dua minggu dan berisiko kehilangan momentum pemasaran yang sudah dianggarkan besar-besaran. Di sisi lain, tim marketing dan stakeholder mendesak agar peluncuran tetap sesuai jadwal dengan janji akan menambal celah tersebut melalui update patch di minggu berikutnya. Bagaimana Anda mengambil keputusan strategis ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengedepankan mitigasi risiko jangka panjang dengan menunda peluncuran untuk melakukan perbaikan arsitektur keamanan secara menyeluruh, guna memastikan integritas sistem dan kepercayaan pengguna tetap terjaga sebagai fondasi utama pertumbuhan bisnis yang berkelanjutan.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Menginisiasi diskusi mendalam dengan seluruh kepala divisi untuk menyelaraskan ekspektasi, menimbang dampak reputasi, dan mencapai konsensus bersama yang menghargai kebutuhan tim pemasaran sekaligus kekhawatiran tim teknis agar keputusan yang diambil mencerminkan nilai kolektif perusahaan.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Melanjutkan peluncuran sesuai jadwal dengan menerapkan protokol keamanan darurat sementara dan memprioritaskan rilis patch perbaikan segera setelah fitur meluncur, demi mengamankan momentum pasar dan memenuhi target akuisisi pengguna yang telah ditetapkan.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-5",
            "question": "Anda memimpin proyek optimasi konversi email marketing dengan deadline ketat 48 jam. Tim kreatif mengajukan perombakan visual total untuk meningkatkan engagement emosional, sementara tim data menuntut pengujian A/B yang ketat dengan variabel minimal untuk menjaga integritas statistik. Mengingat keterbatasan waktu dan audiens, Anda harus memilih strategi eksekusi yang paling tepat untuk menyeimbangkan kebutuhan akan inovasi visual, validitas data, dan urgensi target bisnis.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi sesi kolaborasi intensif untuk menyelaraskan ekspektasi kreatif dan standar data, memastikan bahwa keputusan akhir diambil berdasarkan konsensus tim guna menjaga moral serta kohesi visi perusahaan dalam jangka panjang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menerapkan pengujian multivariat yang mencakup perubahan visual dan elemen konten secara simultan untuk memaksimalkan potensi peningkatan konversi instan, dengan menerima risiko adanya noise data demi mencapai target jangka pendek.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mengisolasi satu variabel kunci dengan dampak CTR tertinggi untuk diuji melalui randomisasi audiens yang ketat, serta melakukan kalkulasi power analysis untuk memastikan hasil yang valid secara statistik sebagai dasar pengambilan keputusan strategis yang berkelanjutan.",
                    "score": 10
                }
            ]
        },
        {
            "id": "dm-6",
            "question": "Anda adalah Lead Data Analyst yang baru saja memigrasikan atribusi klien ke model Data-Driven di GA4. Klien melaporkan penurunan metrik konversi sebesar 40% di dashboard dan menuntut penjelasan instan dalam 10 menit. Anda dihadapkan pada dilema antara integritas data, urgensi bisnis, dan stabilitas hubungan klien. Langkah apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi pertemuan darurat dengan klien untuk memfasilitasi dialog terbuka, mendengarkan kekhawatiran mereka secara empatik, serta membangun kesepahaman bersama mengenai kompleksitas transisi sistem agar kepercayaan klien tetap terjaga di tengah ketidakpastian.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan komparasi mendalam menggunakan 'Model Comparison Tool' untuk memetakan pergeseran kredit atribusi pada channel top-funnel, lalu mempresentasikan analisis teknis mengenai validitas model baru untuk membuktikan akurasi jangka panjang di balik fluktuasi angka tersebut.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengembalikan konfigurasi ke model Last-Click secara sementara untuk memulihkan visibilitas angka konversi sesuai ekspektasi operasional klien, guna memberikan ruang napas bagi tim untuk melakukan audit teknis tanpa mengganggu alur kerja bisnis yang sedang berjalan.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-7",
            "question": "Anda memimpin proyek SEO untuk klien korporat besar yang sedang menghadapi krisis reputasi. Klien menuntut kenaikan drastis pada metrik Domain Authority (DA) dalam 28 hari agar memenuhi syarat administratif tender nasional yang krusial bagi keberlangsungan bisnis mereka. Tim internal Anda terbelah: sebagian menyarankan pendekatan agresif untuk mencapai target instan demi menyelamatkan kontrak, sementara sebagian lain memperingatkan risiko penalti jangka panjang dari algoritma Google yang dapat merusak aset digital klien secara permanen. Bagaimana Anda mengambil keputusan strategis ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi diskusi kolaboratif dengan pihak klien dan tim teknis untuk melakukan kalibrasi ulang ekspektasi, menyajikan data mengenai risiko teknis, serta menawarkan solusi alternatif berupa penguatan otoritas konten organik yang lebih aman meskipun tidak menjamin kenaikan metrik instan, demi menjaga kepercayaan dan integritas kemitraan jangka panjang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengambil langkah pragmatis dengan mengalokasikan sumber daya untuk kampanye Digital PR yang intensif dan akuisisi backlink berkualitas tinggi secara cepat, serta mengoptimalkan struktur internal linking untuk memaksimalkan distribusi equity yang ada, guna mengejar target metrik secepat mungkin tanpa harus melanggar pedoman webmaster secara terang-terangan.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menolak melakukan optimasi agresif yang berisiko, dan sebagai gantinya, fokus pada perombakan arsitektur teknis situs secara fundamental untuk meningkatkan Topical Authority dan performa Core Web Vitals, sembari menyusun dokumentasi teknis yang kuat untuk meyakinkan klien bahwa stabilitas jangka panjang jauh lebih berharga daripada metrik vanity yang rentan terhadap volatilitas algoritma.",
                    "score": 10
                }
            ]
        },
        {
            "id": "dm-8",
            "question": "Startup Anda memiliki sisa runway dua bulan. Investor menuntut efisiensi pemasaran untuk pendanaan darurat, namun tim pemasaran berargumen bahwa memotong anggaran iklan akan menghancurkan akuisisi pengguna di tengah kompetisi agresif. Sebagai Growth Lead, Anda dihadapkan pada pilihan sulit antara menjaga stabilitas operasional, mempertahankan pangsa pasar, atau melakukan restrukturisasi teknis yang mendalam. Langkah strategis apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi forum diskusi terbuka untuk menyelaraskan ekspektasi antara tim pemasaran dan investor, guna membangun konsensus kolektif yang menjaga moral tim tetap stabil di tengah ketidakpastian, sehingga setiap anggota merasa memiliki tanggung jawab bersama dalam melewati masa transisi ini.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan audit teknis mendalam dengan menerapkan model atribusi berbasis cohort dan analisis marginal contribution per channel untuk menghentikan pengeluaran pada kanal dengan LTV:CAC negatif, guna memastikan setiap rupiah yang dikeluarkan memiliki dampak struktural yang terukur bagi keberlanjutan jangka panjang perusahaan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengalihkan fokus pada optimalisasi konversi organik dan retensi pengguna melalui kampanye taktis jangka pendek yang minim biaya, guna menjaga momentum pertumbuhan tetap positif di mata investor tanpa harus mengorbankan visibilitas merek secara drastis dalam jangka waktu dua bulan ke depan.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-9",
            "question": "Anda adalah Lead Growth Strategist untuk sebuah e-commerce besar yang menghadapi penurunan akurasi atribusi data sebesar 60% pasca pembaruan privasi iOS. Di satu sisi, tim IT memprioritaskan stabilitas sistem dan menolak perubahan arsitektur mendadak sebelum peak season. Di sisi lain, manajemen menuntut pemulihan performa iklan secara instan untuk mencapai target revenue. Anda harus memilih pendekatan strategis yang memiliki konsekuensi berbeda terhadap stabilitas operasional, akurasi data, dan dinamika tim.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi forum sinkronisasi lintas departemen untuk memetakan risiko teknis dan menetapkan ekspektasi realistis kepada stakeholder, sembari mengalihkan fokus kampanye ke kanal-kanal yang tidak bergantung pada pihak ketiga untuk menjaga harmoni tim dan keberlanjutan bisnis jangka panjang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan Meta Conversion API (CAPI) melalui server-side gateway sebagai solusi teknis yang mandiri; pendekatan ini memitigasi keterbatasan tracking tanpa mengganggu infrastruktur core tim IT, sehingga memberikan akurasi data yang lebih presisi untuk optimasi jangka panjang.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan optimasi pada parameter UTM dan memanfaatkan data historis untuk memodelkan atribusi secara manual guna memberikan hasil instan yang dibutuhkan manajemen, meskipun pendekatan ini bersifat sementara dan memerlukan pemeliharaan intensif selama periode peak season.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-10",
            "question": "Anda memimpin peluncuran produk baru dengan anggaran terbatas. Direktur Pemasaran menuntut laporan konversi penjualan instan di akhir minggu pertama, sementara data analitik menunjukkan audiens masih berada di tahap pengenalan brand (top-funnel). Mengingat tekanan target perusahaan dan integritas data yang Anda pegang, langkah strategis apa yang akan Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengadakan sesi diskusi mendalam dengan Direktur Pemasaran untuk menyelaraskan ekspektasi manajemen dengan realitas perilaku konsumen saat ini, guna membangun pemahaman bersama dan memastikan seluruh tim bergerak dengan visi yang harmonis serta dukungan penuh dari pemangku kepentingan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan realokasi anggaran secara taktis ke kanal konversi langsung untuk memenuhi target penjualan jangka pendek, dengan menerima risiko bahwa data atribusi mungkin belum matang, demi menjaga momentum bisnis dan memenuhi ekspektasi performa yang mendesak.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mempertahankan alokasi pada metrik top-funnel untuk mengakumulasi data user-intent yang akurat, kemudian mengimplementasikan model atribusi berbasis data untuk mengidentifikasi mikro-konversi sebagai proxy performa sebelum melakukan retargeting berbasis perilaku yang lebih presisi.",
                    "score": 10
                }
            ]
        }
    ],
    "business-development": [
        {
            "id": "bd-1",
            "question": "Kamu mengirim ratusan email Cold Outreach ke B2B Client, tetapi open rate (rasio buka email) di bawah 5%. Kesalahan utamanya biasanya pada?",
            "options": [
                {
                    "label": "A",
                    "text": "Isi email kurang panjang.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Subjek email (Subject Line) terlihat seperti spam, terlalu salesy, atau database tidak disaring.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Kurangnya lampiran PDF.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-2",
            "question": "Dalam Enterprise Sales Cycle, calon klien setuju menggunakan softwaremu, namun mentok di departemen Legal dan IT Security. Apa langkah mitigasinya?",
            "options": [
                {
                    "label": "A",
                    "text": "Memaksa klien menandatangani secara sepihak.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melibatkan tim Legal & IT internalmu sejak awal untuk menyiapkan SLA dan jaminan keamanan (ISO/Compliance) secara proaktif.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Membatalkan kesepakatan.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-3",
            "question": "Saat melakukan kualifikasi prospek (Leads), framework 'BANT' sangat populer. Kepanjangannya adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Budget, Authority, Need, Timeline.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Brand, Acquisition, Nurture, Target.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Base, Amount, Negotation, Trust.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-4",
            "question": "Klien membandingkan harga jasamu dengan kompetitor yang jauh lebih murah dan meminta diskon 50%. Sikap negosiasi Business Development yang kuat?",
            "options": [
                {
                    "label": "A",
                    "text": "Langsung setuju demi closing target bulanan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengalihkan percakapan dari 'Harga' ke 'Value/ROI', menjelaskan mengapa produkmu lebih premium (tidak perang harga).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Marah kepada klien.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-5",
            "question": "Manajemen Data di CRM (Customer Relationship Management) seperti HubSpot/Salesforce berantakan karena tim sales malas input data log telepon. Dampak terburuknya?",
            "options": [
                {
                    "label": "A",
                    "text": "Kehilangan visibilitas Pipeline, forecast penjualan menjadi buta, dan follow-up sering tumpang tindih.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "UI CRM menjadi lambat.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Tidak ada dampak yang berarti.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-6",
            "question": "Untuk ekspansi pasar baru, perusahaanmu butuh strategi B2B Partnership (Channel Partner). Apa kriteria partner yang ideal?",
            "options": [
                {
                    "label": "A",
                    "text": "Perusahaan kompetitor langsung.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Perusahaan yang memiliki target audiens sama namun menjual produk komplementer (saling melengkapi).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Perusahaan yang sedang bangkrut agar mudah diakuisisi.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-7",
            "question": "Calon klien menolak (Objection) dengan alasan: 'Kami sudah memakai vendor lama bertahun-tahun'. Teknik handling objection yang tepat?",
            "options": [
                {
                    "label": "A",
                    "text": "Menjelek-jelekkan vendor lama tersebut.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menggali kepuasan mereka (Empathize & Explore) tanpa memaksa pindah, lalu menawarkan audit gratis untuk celah yang mungkin ada.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menutup telepon segera.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-8",
            "question": "Perbedaan utama Sales Executive dan Business Development (BD) di perusahaan startup teknologi?",
            "options": [
                {
                    "label": "A",
                    "text": "BD membagikan brosur di jalan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Sales fokus transaksi/closing harian; BD fokus mencari peluang/saluran baru, kemitraan strategis, dan strategi pasar jangka panjang.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Sales gajinya lebih besar.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-9",
            "question": "Kamu menghubungi calon klien via LinkedIn (Social Selling). Kesalahan fatal di pesan pertama (InMail)?",
            "options": [
                {
                    "label": "A",
                    "text": "Langsung jualan keras (Hard-selling pitch) dan melampirkan proposal panjang di pesan pembuka.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Menghubungkan konteks dengan postingan terakhir klien.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Bertanya tentang tantangan industri saat ini.",
                    "score": 0
                }
            ]
        },
        {
            "id": "bd-10",
            "question": "Seorang prospek berada di stage 'Nurturing' di dalam pipeline selama 6 bulan tanpa keputusan. Apa yang biasanya BD lakukan?",
            "options": [
                {
                    "label": "A",
                    "text": "Menelepon setiap hari untuk memaksa closing.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Memberikan konten edukasi (Case Study/Webinar) secara berkala (Drip Campaign) sampai trigger pembelian muncul.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menghapus nomornya dari kontak.",
                    "score": 0
                }
            ]
        }
    ],
    "ecommerce-specialist": [
        {
            "id": "ecom-1",
            "question": "Toko onlinemu di Marketplace (Shopee/Tokopedia) traffic-nya tinggi tapi konversi (penjualan) sangat rendah (High Bounce Rate). Hal pertama yang dioptimasi?",
            "options": [
                {
                    "label": "A",
                    "text": "Menambah budget iklan internal.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Audit gambar produk (apakah jelas), kejelasan deskripsi, rating/review, dan harga yang kompetitif.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengganti nama toko.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-2",
            "question": "Sebagai Dropshipper, masalah paling sering terjadi adalah 'Barang Habis' di supplier saat konsumen sudah terlanjur bayar. Manajemen operasional terbaik?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengabaikan komplain pembeli.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Membangun relasi erat dengan multi-supplier, sinkronisasi stok rutin, atau menggunakan tool manajemen API order otomatis.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengirim barang lain secara acak.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-3",
            "question": "Tingkat 'Cart Abandonment' (keranjang ditinggalkan) toko mencapai 75%. Fitur promo apa yang paling ampuh mengurangi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Harga produk dinaikkan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Pesan otomatis pengingat keranjang + Gratis Ongkir atau Voucher Diskon batas waktu (Urgency/Scarcity).",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menyembunyikan keranjang.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-4",
            "question": "Livestream Commerce (misal TikTok Live) membutuhkan strategi agar penonton bertahan (retention). Apa komponen pentingnya selain harga murah?",
            "options": [
                {
                    "label": "A",
                    "text": "Host yang diam saja.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Interaksi real-time (tanya jawab), flash sale 'hanya di live ini', dan peragaan produk fisik secara jelas.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Musik berisik.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-5",
            "question": "Agar produk Dropshipmu muncul di pencarian organik Marketplace (Marketplace SEO), strategi penulisan judul yang benar adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Judul pendek: 'Baju Murah'.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Format lengkap: Merek + Kata Kunci Utama + Spesifikasi/Warna + Kata Kunci Tambahan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menggunakan banyak emoji di judul.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-6",
            "question": "Perhitungan profitabilitas E-commerce bukan cuma soal margin kotor, tapi harus menghitung Net Margin. Komponen biaya tersembunyi apa yang sering lupa dihitung Dropshipper?",
            "options": [
                {
                    "label": "A",
                    "text": "Biaya kuota internet rumahan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Biaya Admin/Layanan platform marketplace (bisa 2-8%), retur/refund barang rusak, dan biaya packaging/iklan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Biaya cicilan mobil pribadi.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-7",
            "question": "Strategi 'Cross-Selling' di platform e-commerce (Shopify) bertujuan untuk meningkatkan AOV (Average Order Value). Contoh fiturnya?",
            "options": [
                {
                    "label": "A",
                    "text": "Menampilkan rekomendasi 'Sering dibeli bersamaan' (Bundle case hp + antigores) saat user checkout hp.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Membatasi pembelian maksimal 1 barang.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menghapus menu navigasi website.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-8",
            "question": "Kompetitor menjual barang dari supplier yang sama persis dengan hargamu, namun tokonya lebih laris. Strategi diferensiasi (pembeda) yang bisa kamu buat?",
            "options": [
                {
                    "label": "A",
                    "text": "Menurunkan harga hingga rugi (Bakar uang tiada akhir).",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Memperbaiki Branding, membuat foto/video produk sendiri (UGC), dan menawarkan layanan Garansi/Customer Service superior.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan spam chat ke kompetitor.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-9",
            "question": "Kamu mengandalkan fitur Affiliate Marketing di e-commerce untuk mendorong kreator mempromosikan produkmu. Faktor utama agar kreator tertarik berafiliasi?",
            "options": [
                {
                    "label": "A",
                    "text": "Persentase komisi yang menarik, sampel produk gratis, dan aset foto yang siap pakai.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Persyaratan KYC yang sangat rumit.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Memaksa kreator wajib beli barangmu dulu harga normal.",
                    "score": 0
                }
            ]
        },
        {
            "id": "ecom-10",
            "question": "Saat menjalankan kampanye Pay-Per-Click (CPAS/Facebook Ads to Marketplace), tantangan analisis data utamanya adalah?",
            "options": [
                {
                    "label": "A",
                    "text": "Piksel tracking sulit dipasang secara penuh di dalam aplikasi marketplace pihak ketiga dibanding web sendiri.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Facebook melarang e-commerce.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Budget selalu ditolak sistem.",
                    "score": 0
                }
            ]
        }
    ]
};
