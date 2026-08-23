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
            "question": "Sistem payment gateway mengalami latensi ekstrem akibat lonjakan trafik 50x lipat saat event peluncuran produk. Database utama terkunci (deadlock) dan antrean message broker mencapai ambang batas kritis, mengancam kegagalan transaksi massal. CTO memberikan ultimatum: pulihkan layanan dalam 3 menit atau reputasi perusahaan hancur. Sebagai Lead Engineer, tindakan apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Segera mengumpulkan seluruh anggota tim untuk melakukan sesi brainstorming darurat guna memastikan setiap keputusan diambil secara konsensus, sehingga beban tanggung jawab terbagi rata dan moral tim tetap terjaga di tengah tekanan tinggi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan kill pada koneksi database yang idle, mengalihkan traffic ke read-replica dengan mode read-only untuk transaksi non-kritis, serta melakukan drop pada queue message broker yang tidak memiliki status 'in-progress' untuk memulihkan throughput sistem secara instan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menghentikan seluruh layanan sementara untuk melakukan restart pada seluruh cluster database dan memvalidasi ulang integritas data secara manual, demi menjamin tidak ada data transaksi yang korup sebelum sistem diaktifkan kembali.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-2",
            "question": "Sistem pembayaran e-commerce sedang dalam fase deployment final, namun QA menemukan race condition pada modul saldo dompet digital yang menyebabkan inkonsistensi data saat transaksi dilakukan secara simultan. Stakeholder menuntut rilis tetap berjalan sesuai jadwal dalam 3 jam ke depan. Sebagai lead engineer, kamu memahami bahwa masalah ini disebabkan oleh absennya mekanisme locking pada level database atau implementasi atomic operation. Apa tindakan teknis yang paling krusial untuk diambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan penundaan rilis kepada manajemen untuk melakukan sesi brainstorming dan evaluasi menyeluruh bersama tim agar seluruh anggota memahami akar masalah, menjaga moral tim tetap solid, dan memastikan tidak ada pihak yang merasa tertekan oleh tenggat waktu.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan optimistic locking pada level database dengan menambahkan versioning column atau menerapkan atomic update query (UPDATE wallet SET balance = balance - :amount WHERE id = :id AND balance >= :amount) untuk memastikan integritas data tetap terjaga saat terjadi concurrent write.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengadakan pertemuan darurat dengan seluruh stakeholder untuk menjelaskan risiko teknis secara transparan, lalu mencari jalan tengah dengan membatasi fitur transaksi hanya untuk pengguna tertentu agar beban sistem berkurang dan keharmonisan hubungan kerja tetap terjaga.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-3",
            "question": "Platform e-commerce Anda mendadak mengalami lonjakan trafik 10x lipat saat flash sale. Service inventaris mulai mengalami latensi ekstrem yang memicu efek domino, menghabiskan thread pool pada service pembayaran dan mengancam crash total pada seluruh sistem. Di tengah kepanikan manajemen yang menuntut sistem tetap berjalan, Anda harus mengambil keputusan teknis dalam hitungan detik sebelum database terkunci sepenuhnya.",
            "options": [
                {
                    "label": "A",
                    "text": "Segera mengaktifkan circuit breaker pada service inventaris untuk memutus komunikasi sinkron, lalu mengalihkan proses pemesanan ke antrean asinkron (message queue) guna menjaga availability service pembayaran agar tidak terjadi cascading failure.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Mengumpulkan seluruh tim teknis untuk melakukan rapat darurat guna mendiskusikan akar permasalahan secara transparan, memastikan setiap anggota tim merasa didengar, dan mencapai konsensus bersama agar keputusan yang diambil memiliki dukungan penuh dari seluruh departemen.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Melakukan scale-up instan pada resource server dan meningkatkan nilai timeout pada konfigurasi koneksi antar-service secara drastis agar setiap permintaan yang tertunda memiliki waktu lebih lama untuk diproses oleh service inventaris yang sedang kewalahan.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-4",
            "question": "Dua jam sebelum jadwal rilis fitur utama yang sudah tertunda, kamu menemukan celah Broken Object Level Authorization (BOLA) pada API yang memungkinkan akses data sensitif pengguna lain hanya dengan mengubah ID pada parameter endpoint. Manajer proyek bersikeras rilis tetap berjalan karena tekanan investor, sementara tim keamanan menuntut penundaan total. Bagaimana kamu mengomunikasikan urgensi ini kepada tim teknis agar perbaikan segera diprioritaskan tanpa mengabaikan tekanan bisnis?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan rapat koordinasi lintas departemen untuk mendiskusikan nilai etika perusahaan dan dampak reputasi jangka panjang, guna mencari jalan tengah yang dapat diterima oleh semua pemangku kepentingan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menunda peluncuran fitur untuk melakukan audit keamanan menyeluruh dan dokumentasi ulang guna memastikan seluruh sistem memenuhi standar kepatuhan data yang berlaku demi menjaga kepercayaan pengguna.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menginstruksikan tim untuk melakukan hotfix dengan menerapkan middleware validasi kepemilikan objek berbasis UUID pada layer controller dan melakukan load testing singkat untuk memastikan tidak ada regresi pada latensi API, agar rilis tetap berjalan dengan mitigasi risiko teknis yang terukur.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-5",
            "question": "Dua jam sebelum peluncuran fitur utama, pengujian beban menunjukkan latensi kritis pada dashboard admin akibat masalah N+1 query pada modul artikel. Sebagai Lead Developer, Anda berada di bawah tekanan besar dari stakeholder untuk tetap rilis tepat waktu, sementara tim Anda mulai panik dan menyarankan untuk menunda peluncuran. Apa tindakan yang paling tepat untuk diambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh anggota tim untuk melakukan diskusi terbuka guna mengevaluasi dampak risiko secara kolektif dan menunda rilis demi memastikan kualitas kode yang sempurna serta menjaga moral tim tetap terjaga.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan eager loading pada query ORM yang bermasalah serta mengaktifkan layer caching pada level aplikasi untuk mereduksi beban database secara instan tanpa mengubah arsitektur inti.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan refactoring total pada seluruh modul artikel dengan beralih menggunakan raw SQL untuk membuang ketergantungan pada ORM agar performa database lebih optimal dan terukur di masa depan.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-6",
            "question": "Platform e-commerce Anda mengalami lonjakan trafik ekstrem yang menyebabkan latensi query pencarian produk melonjak hingga 10 detik, tepat dua jam sebelum kampanye promosi besar dimulai. Infrastruktur saat ini telah mencapai batas kapasitas CPU 99% dan manajemen menuntut pemulihan instan tanpa toleransi downtime. Sebagai lead engineer, langkah apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh anggota tim untuk melakukan sesi evaluasi mendalam dan diskusi terbuka guna memastikan setiap individu merasa didengar, serta membangun konsensus bersama agar seluruh tim memiliki keterlibatan emosional yang kuat dalam menghadapi krisis ini secara kolaboratif.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan migrasi instan seluruh basis data ke sistem penyimpanan berbasis cloud yang memiliki spesifikasi hardware lebih tinggi dan kapasitas lebih besar untuk menampung beban trafik yang tidak terprediksi tersebut secara langsung.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menerapkan covering index pada kolom pencarian untuk eliminasi lookup data, mengaktifkan query caching pada layer aplikasi untuk memangkas eksekusi, serta melakukan load shedding pada service non-kritis guna membebaskan siklus CPU tanpa mengubah skema database.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-7",
            "question": "Sistem payment gateway mengalami deadlock pada database saat peak traffic akibat dua refactoring yang saling bertabrakan di shared service. Waktu tersisa sebelum sistem crash total adalah 4 jam. Sebagai lead, bagaimana Anda bertindak?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh tim untuk melakukan sesi brainstorming dan voting demokratis agar setiap pengembang merasa dihargai kontribusinya, sehingga keputusan yang diambil mencerminkan konsensus kolektif demi menjaga moral tim di tengah tekanan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan hard-revert ke state terakhir yang stabil, mengimplementasikan database-level pessimistic locking pada resource yang diperebutkan, serta melakukan refactoring cepat dengan memisahkan logic ke dalam isolated service worker untuk memutus dependensi langsung.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Meminta kedua pengembang untuk melakukan pair programming secara intensif guna menggabungkan kedua logika tersebut menjadi satu fungsi tunggal yang komprehensif, sehingga fitur dari kedua pihak tetap bisa berjalan tanpa ada yang dikorbankan.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-8",
            "question": "Website portal berita klien mengalami lonjakan trafik 500% yang tidak terprediksi tepat 24 jam sebelum peluncuran besar. Infrastruktur saat ini tidak mampu menangani beban tersebut, dan metrik Core Web Vitals (CWV) anjlok drastis. Sebagai Lead Developer, langkah taktis apa yang Anda ambil untuk memastikan sistem tetap live dengan performa optimal?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi rapat darurat dengan seluruh pemangku kepentingan untuk mendiskusikan penundaan peluncuran, guna memastikan setiap anggota tim merasa nyaman dan menjaga moral kolektif agar kualitas kerja tetap terjaga di tengah tekanan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan strategi Static Site Generation (SSG) dengan Incremental Static Regeneration (ISR) serta mengonfigurasi layer CDN edge caching yang agresif untuk memindahkan beban komputasi dari server origin ke edge nodes, sembari melakukan optimasi payload aset statis.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengaktifkan mode sinkronisasi data real-time pada database utama untuk setiap permintaan pengguna guna memastikan akurasi konten 100% dan menghindari risiko data basi yang mungkin dikeluhkan oleh tim redaksi saat peluncuran.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-9",
            "question": "Anda memimpin tim engineering dalam fase krusial peluncuran dashboard real-time. Tepat 4 jam sebelum deadline, sistem mengalami memory leak yang menyebabkan crash setelah penggunaan intensif. Klien menuntut stabilitas segera, sementara tim sudah kelelahan dan cemas. Apa tindakan prioritas Anda?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh anggota tim untuk melakukan evaluasi bersama dan menyamakan persepsi agar setiap individu merasa didukung dalam menghadapi tekanan deadline yang sangat ketat ini.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengisolasi heap dump pada environment staging untuk mengidentifikasi objek yang tidak ter-garbage collected, lalu menerapkan hotfix pada lifecycle hook komponen yang menyebabkan dangling references.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menginstruksikan tim untuk melakukan pembersihan menyeluruh pada seluruh aset statis dan melakukan kompresi ulang pada file gambar serta script agar beban muatan halaman menjadi jauh lebih ringan bagi browser klien.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-10",
            "question": "Sistem pemesanan tiket konser Anda akan dibuka dalam 60 menit, namun simulasi beban terakhir menunjukkan database utama mengalami deadlock kronis akibat lonjakan transaksi konkuren yang masif. Sebagai Lead Engineer, Anda harus segera mengambil tindakan teknis untuk memastikan sistem tetap tersedia saat penjualan dimulai.",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh anggota tim untuk melakukan sesi brainstorming darurat guna menyelaraskan visi dan memastikan setiap orang merasa dilibatkan dalam pengambilan keputusan demi menjaga moral serta kohesi tim di tengah tekanan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menunda waktu peluncuran tiket selama beberapa jam untuk melakukan audit kode secara menyeluruh dan memastikan setiap fitur berjalan dengan sempurna demi menjaga kepercayaan serta kenyamanan pengalaman pengguna.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mengimplementasikan 'database sharding' berbasis user-id untuk memecah lock contention, mengaktifkan 'read-replica' untuk offloading query SELECT, serta menerapkan 'optimistic locking' pada level aplikasi untuk memitigasi race condition saat transaksi berlangsung.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-11",
            "question": "Aplikasi e-commerce Anda akan rilis dalam dua jam. Audit performa mendadak menunjukkan ukuran bundle JavaScript mencapai 3MB dengan TTI di atas 10 detik. Investor menuntut rilis tepat waktu, namun performa saat ini akan menyebabkan bounce rate yang sangat tinggi. Sebagai lead developer, tindakan apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh anggota tim untuk melakukan evaluasi mendalam, mendiskusikan risiko teknis secara transparan, dan memutuskan penundaan rilis demi menjaga integritas produk serta moral tim agar tidak terjadi burnout.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan code-splitting berbasis rute dan menerapkan dynamic imports pada komponen non-kritis untuk memangkas initial payload, serta mengonfigurasi tree-shaking pada bundler guna mengeliminasi dead code secara instan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan kompresi ulang pada seluruh aset gambar dan menghapus komentar pada source code secara manual untuk mengurangi beban payload tanpa menyentuh struktur logika aplikasi yang sudah stabil.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-12",
            "question": "Sistem inti perusahaan mengalami degradasi performa kritis akibat bottleneck pada modul otorisasi. Anda memiliki waktu 24 jam untuk memulihkan layanan sebelum terjadi kerugian finansial masif, namun struktur data 'Many-to-Many' yang ada sangat rapuh dan berisiko tinggi terhadap anomali data jika dilakukan migrasi skema secara penuh. Bagaimana langkah teknis yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Melakukan normalisasi database secara menyeluruh dengan menerapkan tabel junction, constraint foreign key yang ketat, serta indeks komposit untuk memastikan integritas referensial jangka panjang, meskipun proses ini berisiko melebihi batas waktu 24 jam.",
                    "score": 5
                },
                {
                    "label": "B",
                    "text": "Mengumpulkan seluruh pemangku kepentingan untuk melakukan sesi brainstorming dan diskusi mendalam guna menyamakan visi, memastikan setiap anggota tim merasa dilibatkan, serta mencari konsensus bersama sebelum mengambil tindakan teknis yang krusial ini.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Mengimplementasikan caching layer pada level aplikasi menggunakan Redis untuk menyimpan mapping User-Role sebagai key-value pair guna memotong latensi query database secara instan tanpa menyentuh skema relasional yang rapuh di backend.",
                    "score": 10
                }
            ]
        },
        {
            "id": "se-13",
            "question": "Sistem autentikasi Anda sedang mengalami serangan distributed brute force yang sangat canggih selama peak season. Latensi database melonjak hingga 95% dan sistem akan crash dalam hitungan menit. Di saat yang sama, tim manajemen mendesak Anda untuk tetap membuka akses bagi user VIP, sementara tim operasional meminta rapat darurat untuk membahas dampak reputasi perusahaan. Apa tindakan Anda?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh pemangku kepentingan untuk melakukan rapat koordinasi guna merumuskan strategi mitigasi yang inklusif dan transparan, memastikan setiap divisi merasa dilibatkan dalam pengambilan keputusan demi menjaga moral dan keselarasan visi perusahaan di tengah krisis.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengaktifkan mekanisme circuit breaker pada API gateway, menerapkan rate limiting berbasis token bucket dengan prioritas pada session ID yang sudah terautentikasi, serta melakukan drop pada request yang tidak memiliki valid JWT signature untuk memitigasi beban database secara instan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menghentikan seluruh akses masuk ke sistem dan mengalihkan trafik ke halaman maintenance statis untuk melindungi integritas data, sambil menunggu instruksi lebih lanjut dari manajemen terkait prosedur komunikasi krisis kepada pelanggan agar reputasi tetap terjaga.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-14",
            "question": "Aplikasi internal perusahaan akan diluncurkan dalam 24 jam. Manajer produk menuntut fitur 'One-Click Account Recovery' agar user tidak perlu menunggu proses verifikasi email, sementara tim keamanan menolak keras karena risiko eksfiltrasi data. Sebagai lead developer, bagaimana Anda memitigasi konflik ini di tengah tekanan deadline yang ketat?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan penundaan peluncuran aplikasi selama satu minggu untuk mengadakan sesi diskusi lintas departemen guna menyelaraskan visi antara kebutuhan user experience dan standar keamanan perusahaan demi menjaga keharmonisan tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan mekanisme password reset berbasis token JWT dengan durasi TTL sangat singkat dan menerapkan sistem rate-limiting pada endpoint pemulihan untuk meminimalisir attack surface tanpa mengorbankan kecepatan akses user.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan kompromi dengan mengaktifkan fitur pemulihan instan namun membatasi aksesnya hanya untuk user dengan level akses rendah, sementara user dengan hak akses administratif tetap diwajibkan melalui prosedur verifikasi manual.",
                    "score": 5
                }
            ]
        },
        {
            "id": "se-15",
            "question": "Sebagai Lead Engineer, kamu menghadapi situasi di mana sistem pembayaran utama mengalami latensi ekstrem tepat 45 menit sebelum peluncuran fitur global. Tim SRE melaporkan adanya kebocoran memori pada service mesh yang tidak terdeteksi di staging, sementara CEO menuntut kepastian rilis tepat waktu tanpa penundaan sedikit pun. Apa langkah taktis yang paling tepat untuk diambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh pemangku kepentingan untuk melakukan sesi brainstorming darurat guna menyelaraskan ekspektasi bisnis dan memutuskan penundaan rilis demi menjaga integritas data serta reputasi perusahaan di mata pengguna.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan bypass pada sidecar proxy yang bermasalah untuk memutus jalur komunikasi service mesh, mengalihkan trafik secara manual ke load balancer cadangan dengan konfigurasi statis, serta menerapkan limitasi rate-limiting pada level ingress controller untuk menstabilkan throughput.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengadakan rapat koordinasi lintas departemen untuk mengevaluasi dampak risiko teknis terhadap target KPI, serta mencari kompromi yang adil agar tim pengembang tidak merasa tertekan oleh tenggat waktu yang tidak realistis.",
                    "score": 5
                }
            ]
        }
    ],
    "ui-ux-designer": [
        {
            "id": "uiux-1",
            "question": "Anda adalah Lead Data Engineer di sebuah startup fintech. Saat proses batch processing data transaksi harian berjalan, sistem mengalami lonjakan latensi yang menyebabkan kegagalan sinkronisasi ke database utama, sementara tim operasional menuntut laporan status segera karena investor sedang menunggu data performa kuartalan. Infrastruktur cloud menunjukkan penggunaan CPU dan memori dalam batas normal, namun antrean message broker terus membengkak. Apa langkah teknis yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi rapat darurat dengan seluruh kepala departemen untuk menyelaraskan ekspektasi dan menyusun narasi komunikasi yang transparan kepada investor agar kepercayaan pemangku kepentingan tetap terjaga selama masa investigasi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan profiling pada consumer group di message broker, memverifikasi status lock pada row database, serta menganalisis trace ID pada distributed tracing untuk mengidentifikasi adanya contention pada shared resource atau deadlock pada query transaksi yang berjalan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menghentikan sementara seluruh proses batch yang sedang berjalan dan melakukan rollback ke versi deployment sebelumnya untuk memastikan stabilitas sistem kembali normal sebelum melakukan audit menyeluruh terhadap kode program.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-2",
            "question": "Produk aplikasi kamu akan rilis dalam 48 jam. Tiba-tiba, tim frontend melaporkan bahwa implementasi grid kustom yang kamu rancang menyebabkan Cumulative Layout Shift (CLS) yang parah dan drop pada frame rate di perangkat mobile entry-level. Jika kamu melakukan rollback ke standar CSS Grid, estetika visual yang menjadi nilai jual utama produk akan berkurang drastis. Sebagai lead engineer, apa tindakan teknis yang kamu ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi rapat darurat dengan seluruh stakeholder untuk mencari jalan tengah yang menjaga estetika desain sekaligus memenuhi standar performa, demi memastikan seluruh tim tetap selaras dan tidak ada pihak yang merasa dirugikan oleh perubahan mendadak ini.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan refactoring komponen ke sistem CSS Grid standar dan menerapkan contain-intrinsic-size pada container utama untuk mengunci dimensi layout, serta memangkas kompleksitas layer CSS untuk memitigasi paint cost, meskipun fidelitas visual menurun.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menginstruksikan tim untuk mempertahankan kode saat ini namun melakukan optimasi pada sisi server dan caching layer agar beban rendering di sisi klien berkurang, sehingga desain tetap presisi sesuai spesifikasi Figma tanpa harus mengubah struktur grid.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-3",
            "question": "Produk Anda mengalami penurunan retensi 15% MoM. Stakeholder menuntut fitur 'Social Feed' ala kompetitor dirilis dalam 14 hari untuk menahan churn. Namun, telemetry menunjukkan aplikasi sudah mencapai limit kognitif pengguna dan latensi tinggi. Penambahan fitur ini diprediksi meningkatkan payload sebesar 40%, yang secara teknis akan memperburuk stabilitas sistem dan UX yang sudah rapuh. Bagaimana langkah Anda?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan rapat koordinasi lintas departemen untuk menyelaraskan visi produk, mendiskusikan dampak jangka panjang terhadap pengalaman pengguna, serta mencari kompromi yang menjaga keharmonisan tim demi keberlanjutan kualitas aplikasi.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan fitur tersebut dengan arsitektur modular, menerapkan lazy-loading pada aset berat, serta mengaktifkan edge-caching untuk menekan latensi, sambil menjalankan A/B testing pada 5% user untuk memvalidasi korelasi fitur terhadap churn sebelum rilis skala penuh.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menolak permintaan fitur tersebut karena melanggar prinsip desain berpusat pada pengguna, lalu mengalihkan seluruh sumber daya tim untuk melakukan refactoring total pada alur navigasi guna memperbaiki masalah latensi yang ada saat ini.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-4",
            "question": "Sebagai Lead Design System, kamu baru saja mempublikasikan update pada library 'Master Button'. Akibat perubahan struktur layer, ratusan instance di file produk mengalami 'override reset' yang merusak layout tepat dua jam sebelum deadline rilis fitur yang sangat krusial bagi bisnis. Tim engineering sudah menunggu aset untuk implementasi final. Bagaimana langkah strategis yang harus kamu ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Segera mengumpulkan seluruh desainer dalam rapat koordinasi untuk menenangkan situasi, mendengarkan masukan mereka, serta mencari jalan tengah yang paling adil tengah yang paling adil bagi semua pihak agar moral tim tetap terjaga di tengah tekanan deadline.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan rollback ke versi library sebelumnya melalui Figma Version History, melakukan audit pada 'Component Properties' untuk memisahkan layer styling dari struktur, serta mewajibkan penggunaan 'Publishing Branch' dengan changelog yang terverifikasi sebelum update berikutnya diizinkan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menginstruksikan seluruh tim untuk menunda rilis fitur guna melakukan perbaikan manual pada setiap layar, demi memastikan kualitas desain tetap konsisten dan menjaga standar profesionalisme perusahaan di mata stakeholder.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-5",
            "question": "Anda adalah Lead Engineer untuk aplikasi perbankan mobile yang akan diluncurkan dalam 48 jam. Hasil audit keamanan terakhir menunjukkan celah kerentanan pada enkripsi data lokal yang dapat dieksploitasi jika perangkat pengguna di-root. Manajemen menuntut peluncuran tetap berjalan sesuai jadwal karena alasan komitmen investor, namun Anda tahu bahwa memperbaiki arsitektur enkripsi secara total akan memakan waktu setidaknya satu minggu.",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan penundaan peluncuran kepada manajemen dan mengadakan sesi diskusi terbuka dengan seluruh pemangku kepentingan untuk menyelaraskan ekspektasi serta memastikan integritas produk tetap menjadi prioritas utama demi menjaga kepercayaan jangka panjang pengguna.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan mekanisme 'root detection' pada runtime untuk memblokir eksekusi aplikasi pada perangkat yang tidak aman, serta menerapkan enkripsi berbasis hardware (Keystore/Keychain) secara terbatas pada data sensitif saja untuk meminimalisir surface area serangan tanpa mengubah arsitektur utama.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menambahkan peringatan (disclaimer) pada syarat dan ketentuan aplikasi yang menyatakan bahwa penggunaan aplikasi pada perangkat yang dimodifikasi adalah tanggung jawab pengguna, guna memindahkan risiko hukum dari perusahaan ke pihak pengguna.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-6",
            "question": "Anda sedang mengembangkan fitur krusial di bawah tekanan deadline investor yang menuntut mockup High-Fidelity dalam 24 jam. Sebagai desainer, Anda menyadari bahwa melompat langsung ke visual tanpa struktur yang tervalidasi akan menciptakan utang desain (design debt) yang masif di masa depan. Bagaimana Anda merespons situasi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengadakan rapat koordinasi lintas departemen untuk menyelaraskan ekspektasi stakeholder dan menjelaskan pentingnya menjaga kualitas desain demi kepuasan pengguna jangka panjang, meskipun harus menunda jadwal rilis.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan atomic design system yang sudah ada dengan memanfaatkan library komponen modular dan auto-layout berbasis grid untuk memvalidasi alur informasi secara cepat, sehingga output tetap akurat secara teknis dan dapat diskalakan tanpa mengabaikan aspek visual.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Meminta waktu tambahan kepada stakeholder untuk melakukan riset pengguna secara mendalam dan sesi brainstorming tim agar setiap elemen visual yang dihasilkan benar-benar mencerminkan visi bersama dan menjaga keharmonisan kerja.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-7",
            "question": "Anda memimpin tim produk di tengah sprint kritis, 24 jam sebelum peluncuran fitur utama. Data A/B testing menunjukkan tombol 'Beli' berwarna merah (di luar palet brand) meningkatkan CTR sebesar 15% dibandingkan warna biru brand. Tim Brand menolak keras perubahan tersebut karena dianggap merusak identitas visual perusahaan. Jika Anda tidak merilis fitur tepat waktu, target kuartal akan meleset, namun jika Anda melanggar brand guidelines, Anda akan menghadapi teguran disipliner dari manajemen senior.",
            "options": [
                {
                    "label": "A",
                    "text": "Melakukan komputasi ulang pada kontras rasio WCAG 2.1 dengan menerapkan saturasi warna biru pada spektrum 85-90% untuk meningkatkan visibilitas visual tanpa melanggar kode hex brand, lalu melakukan deployment hotfix berbasis data tersebut untuk mengoptimalkan konversi tanpa mengubah palet warna.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Mengadakan rapat darurat lintas departemen untuk memediasi konflik antara tim produk dan tim brand, mencari jalan tengah yang dapat mengakomodasi nilai estetika perusahaan sekaligus meningkatkan performa demi menjaga keharmonisan dan budaya kerja tim yang kolaboratif.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Menunda rilis fitur selama 48 jam untuk melakukan pengujian tambahan guna menemukan warna komplementer yang disetujui oleh tim brand, memastikan bahwa keputusan yang diambil tidak hanya berorientasi pada angka, tetapi juga menjaga integritas reputasi jangka panjang perusahaan.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-8",
            "question": "Sistem payment gateway pada aplikasi e-commerce Anda mengalami kegagalan transaksi sebesar 40% pasca-deployment fitur baru. Stakeholder menuntut pemulihan layanan dalam 12 jam, namun tim desain menolak melakukan rollback karena menganggap perubahan UI adalah prioritas branding yang krusial. Sebagai lead engineer, langkah apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi rapat koordinasi darurat dengan seluruh pemangku kepentingan untuk mendiskusikan kompromi desain yang dapat diterima semua pihak, guna menjaga moral tim dan memastikan setiap departemen merasa suaranya didengar dalam pengambilan keputusan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan isolasi pada service payment melalui feature flag untuk menonaktifkan sementara modul UI baru, melakukan hotfix pada endpoint API yang terpengaruh, serta menerapkan rollback parsial pada aset CSS/JS yang menyebabkan konflik pada DOM mobile.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menyetujui permintaan tim desain untuk mempertahankan fitur baru sambil mencoba melakukan optimasi pada query database di sisi backend, dengan harapan bahwa peningkatan kecepatan server dapat menutupi latensi yang disebabkan oleh rendering UI yang berat.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-9",
            "question": "Aplikasi e-commerce Anda dijadwalkan meluncur dalam 72 jam, namun log server mendeteksi anomali latensi pada API gateway saat beban transaksi tinggi. Tim infrastruktur mengklaim ini adalah masalah limitasi pihak ketiga, sementara stakeholder menuntut jaminan stabilitas 99,9% tanpa menunda peluncuran. Anda memiliki akses penuh ke environment staging dan log data, namun tidak ada waktu untuk refactoring besar-besaran. Apa tindakan Anda?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi rapat koordinasi lintas departemen untuk menyusun strategi mitigasi risiko bersama, mendokumentasikan setiap kekhawatiran stakeholder, dan menyepakati penundaan rilis guna memastikan stabilitas sistem yang sempurna demi menjaga reputasi jangka panjang perusahaan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan implementasi circuit breaker pattern pada service checkout dan mengonfigurasi ulang load balancer untuk menerapkan rate limiting agresif pada endpoint non-esensial, guna memprioritaskan throughput transaksi utama di tengah keterbatasan resource.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menjalankan skrip stress testing secara manual pada seluruh modul aplikasi untuk mengumpulkan data kuantitatif yang komprehensif, lalu mempresentasikan temuan tersebut kepada manajemen agar keputusan peluncuran dapat diambil secara demokratis oleh seluruh tim.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-10",
            "question": "Anda adalah Lead Product Designer di sebuah startup fintech yang sedang mengalami penurunan konversi sebesar 40% pada funnel pendaftaran. CEO menuntut perbaikan instan dalam 24 jam sebelum audit investor besok pagi. Tim engineering menolak merombak backend karena risiko stabilitas sistem dan durasi implementasi yang mencapai dua minggu. Bagaimana Anda merespons situasi ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengusulkan rapat darurat lintas divisi untuk melakukan brainstorming komprehensif, mendokumentasikan setiap kendala teknis secara transparan, dan menyusun rencana mitigasi jangka panjang yang dapat disetujui oleh seluruh stakeholder demi menjaga integritas produk dan harmoni tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan injeksi skrip client-side untuk melakukan A/B testing pada UI existing dengan menyederhanakan validasi input via regex lokal dan memangkas langkah form menjadi single-page view menggunakan state management sementara, tanpa menyentuh API backend.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Meminta penundaan audit kepada CEO dengan menyertakan laporan analisis data pengguna yang mendalam sebagai bukti bahwa perubahan terburu-buru tanpa riset UX yang valid justru akan meningkatkan risiko churn rate di masa depan.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-11",
            "question": "Aplikasi e-commerce Anda akan rilis ke publik dalam 24 jam. Saat melakukan final code review, Anda mendapati bahwa tim engineering menggunakan nilai spacing yang tidak konsisten (12px, 15px, 17px) pada komponen utama. Mengingat waktu yang sangat sempit dan risiko regresi jika dilakukan perubahan besar, langkah teknis apa yang harus Anda ambil sebagai Lead?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh tim untuk melakukan diskusi terbuka guna menyamakan persepsi mengenai standar kualitas visual, sehingga setiap anggota tim merasa dihargai kontribusinya dan tidak ada yang merasa tertekan di menit terakhir.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Membiarkan inkonsistensi tersebut tetap ada untuk saat ini demi menjaga stabilitas build yang sudah lulus QA, lalu menjadwalkan sesi refactoring teknis pada sprint berikutnya agar hubungan kerja tetap kondusif dan tidak ada risiko bug baru.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menginstruksikan engineering untuk melakukan hotfix pada CSS variable/token dengan memetakan ulang nilai tersebut ke sistem spacing berbasis kelipatan 4 atau 8, serta menjalankan unit test terbatas pada komponen terdampak untuk memastikan integritas layout tanpa mengubah struktur DOM.",
                    "score": 10
                }
            ]
        },
        {
            "id": "uiux-12",
            "question": "Sistem e-commerce Anda mengalami lonjakan 15% kegagalan pengiriman akibat kesalahan input alamat oleh pengguna. Manajemen menuntut penurunan angka ini dalam 48 jam sebelum peak season dimulai. Di sisi lain, tim engineering sedang dalam fase code-freeze untuk sprint refactoring backend yang kritis dan berisiko tinggi jika diinterupsi. Sebagai lead, langkah apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi rapat darurat dengan seluruh stakeholder untuk menyelaraskan empati pengguna dan melakukan sesi brainstorming kolektif, guna memastikan setiap departemen merasa didengar dalam pengambilan keputusan demi menjaga harmoni tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menunda rilis fitur hingga seluruh tim mencapai konsensus bersama, guna memastikan solusi yang dihasilkan mencerminkan budaya perusahaan yang mengutamakan kualitas dan kepuasan pelanggan di atas segalanya.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menginjeksi validasi regex pada sisi klien untuk format alamat, serta mengimplementasikan modal konfirmasi berbasis state-machine yang memicu trigger 'address_review' sebelum payload dikirim ke API checkout, guna meminimalisir intervensi pada codebase backend yang sedang refactoring.",
                    "score": 10
                }
            ]
        },
        {
            "id": "uiux-13",
            "question": "Sisa waktu rilis fitur krusial tinggal dua jam lagi. Saat melakukan final QA pada prototipe Figma, stakeholder memberikan feedback kritis bahwa transisi antar layar terasa sangat berat, laggy, dan tidak intuitif bagi pengguna. Tim engineering sudah mulai melakukan deployment backend, sehingga Anda harus melakukan perbaikan teknis secara mandiri tanpa mengganggu alur kerja tim yang sedang berada dalam fase krusial. Langkah apa yang paling tepat untuk menangani masalah performa animasi tersebut?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengumpulkan seluruh anggota tim desain dan stakeholder untuk mengadakan sesi diskusi mendalam guna menyamakan persepsi mengenai standar estetika transisi, sehingga keputusan yang diambil mencerminkan visi kolektif dan menjaga keharmonisan tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan audit struktur layer untuk memastikan konsistensi penamaan antar frame, menonaktifkan layer yang tidak terlihat (hidden) pada instance, serta mengoptimalkan properti 'Smart Animate' dengan membatasi durasi transisi maksimal 300ms menggunakan kurva 'Ease Out' untuk memangkas overhead rendering.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengajukan penundaan jadwal rilis selama dua hari kepada manajer proyek agar tim memiliki waktu yang cukup untuk melakukan brainstorming ulang mengenai alur navigasi, demi memastikan kualitas pengalaman pengguna yang optimal dan bebas dari risiko teknis.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-14",
            "question": "Aplikasi e-commerce Anda mengalami penurunan konversi 15% pasca-update UI. Di tengah tekanan target kuartalan, stakeholder mendesak penempatan banner iklan pihak ketiga di area 'white space' halaman checkout untuk mendongkrak revenue. Anda memahami bahwa intervensi ini akan memicu cognitive load yang signifikan pada tahap krusial user flow, namun menolak secara langsung akan dianggap menghambat target finansial perusahaan. Bagaimana langkah Anda?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi forum diskusi lintas departemen untuk menyelaraskan visi jangka panjang perusahaan, mencari solusi kompromistis yang menjaga keharmonisan tim, serta memastikan setiap pihak merasa didengarkan demi keberlangsungan budaya kerja yang positif.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan A/B testing dengan segmentasi trafik 50/50, menggunakan metrik konversi (CR) dan Average Order Value (AOV) sebagai variabel dependen, serta memonitor bounce rate melalui event tracking untuk membuktikan secara empiris dampak negatif penambahan elemen visual terhadap funnel checkout.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menyetujui permintaan tersebut sebagai bentuk dukungan profesional terhadap target finansial perusahaan, sembari melakukan optimasi pada loading time aset iklan agar tidak memperburuk latensi aplikasi yang sudah ada.",
                    "score": 5
                }
            ]
        },
        {
            "id": "uiux-15",
            "question": "Aplikasi finansial Anda menghadapi krisis churn rate 15% pada tahap onboarding akibat friction autentikasi. Manajemen menuntut implementasi 'Biometric Login' segera, namun backend sedang dalam fase migrasi database yang sangat rentan terhadap latensi API. Jika sistem dipaksa menerima beban query tambahan, risiko downtime total sangat tinggi. Sebagai lead engineer, bagaimana Anda mengeksekusi integrasi ini di tengah tekanan deadline?",
            "options": [
                {
                    "label": "A",
                    "text": "Menunda perilisan fitur biometrik dan menginisiasi serangkaian rapat koordinasi lintas departemen untuk menyelaraskan ekspektasi stakeholder, guna memastikan perubahan alur user journey tidak mengganggu stabilitas operasional maupun harmoni tim.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengimplementasikan mekanisme client-side caching untuk session token dan memicu biometrik melalui local authentication provider tanpa melakukan API call ke database utama, serta menerapkan circuit breaker pada endpoint autentikasi untuk memitigasi lonjakan latensi saat migrasi.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengintegrasikan prompt aktivasi biometrik tepat setelah handshake pertama selesai untuk memastikan adopsi pengguna maksimal, sembari membagi beban query database ke dalam beberapa batch kecil untuk menghindari bottleneck selama proses migrasi.",
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
            "question": "Anda adalah Performance Marketer yang sedang ditekan oleh klien karena kampanye Meta Ads baru saja mencapai CTR 4% namun konversi penjualan di website tetap 0%. Klien menuntut solusi instan sebelum anggaran habis sore ini. Langkah taktis apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Segera melakukan audit pada payload size landing page, mengeliminasi script pihak ketiga yang memblokir rendering, serta memvalidasi konsistensi intent antara headline iklan dengan value proposition di above-the-fold section.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Menghentikan sementara iklan untuk mengadakan rapat koordinasi lintas departemen guna menyelaraskan visi tim kreatif dan tim IT agar tercipta sinergi pesan yang lebih harmonis bagi calon pelanggan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Meningkatkan alokasi anggaran harian secara signifikan untuk memperluas jangkauan audiens, dengan asumsi bahwa peningkatan traffic yang lebih masif akan secara otomatis memperbaiki rasio konversi yang saat ini rendah.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dm-2",
            "question": "Klien Anda adalah pemilik bisnis e-commerce yang sedang mengalami krisis arus kas dan menuntut lonjakan traffic organik dalam 48 jam untuk menyelamatkan operasional perusahaan. Anda menemukan dua landing page yang saling berkompetisi untuk keyword yang sama, menyebabkan kanibalisasi SEO yang membuat kedua halaman tersebut terlempar dari halaman pertama Google. Sebagai ahli, langkah krusial apa yang harus Anda ambil di tengah tekanan waktu yang ekstrem ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Segera melakukan 301 redirect dari URL dengan performa lebih rendah ke URL utama, memperbarui internal link secara masif untuk mengarahkan link equity ke satu titik, serta menerapkan canonical tag yang tepat untuk menghentikan fluktuasi indeks.",
                    "score": 10
                },
                {
                    "label": "B",
                    "text": "Mengajak seluruh tim konten dan manajemen untuk melakukan sesi brainstorming mendalam guna menyusun strategi jangka panjang yang inklusif, memastikan kedua halaman tetap ada demi menjaga keberagaman konten dan kepuasan audiens.",
                    "score": 0
                },
                {
                    "label": "C",
                    "text": "Melakukan penambahan variasi keyword long-tail dan modifikasi meta description pada kedua halaman tersebut agar Google memiliki lebih banyak sinyal untuk membedakan relevansi konten tanpa harus mengorbankan salah satu halaman.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-3",
            "question": "Klien utama Anda menuntut penjelasan mendesak karena ROAS kampanye Google Ads anjlok dari 4.0 ke 1.2 dalam 48 jam terakhir, sementara CEO menuntut laporan performa lengkap dalam satu jam. Di tengah kepanikan tim yang mulai menyalahkan algoritma, langkah audit teknis pertama apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Segera mengumpulkan seluruh anggota tim untuk melakukan sesi brainstorming dan evaluasi kolektif guna menyelaraskan persepsi mengenai penurunan performa serta menjaga moral tim agar tetap fokus pada tujuan jangka panjang perusahaan di tengah tekanan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan segmentasi data pada 'Search Terms' untuk mengidentifikasi lonjakan impresi pada query non-konversi, mengevaluasi perubahan 'Search Impression Share' akibat kompetitor, dan memvalidasi anomali pada 'Conversion Tracking' melalui Tag Assistant.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Segera menghentikan seluruh kampanye yang berjalan untuk mencegah kerugian lebih lanjut dan memprioritaskan penyusunan permohonan maaf resmi kepada klien agar hubungan profesional serta kepercayaan tetap terjaga dengan baik.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-4",
            "question": "Anda adalah Growth Lead di sebuah e-commerce yang sedang mengalami penurunan drastis pada metrik konversi checkout. Data menunjukkan 70% user melakukan 'Add to Cart' namun melakukan churn sebelum payment gateway. CFO menuntut pemulihan metrik dalam 48 jam dengan budget yang sangat terbatas. Langkah apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi sesi diskusi lintas divisi untuk membedah akar masalah secara holistik, membangun empati terhadap pengalaman pengguna, serta menyelaraskan visi tim agar setiap departemen merasa terlibat dalam solusi jangka panjang yang berkelanjutan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan audit menyeluruh terhadap seluruh komponen UI/UX aplikasi selama satu minggu untuk memastikan konsistensi desain dan kenyamanan navigasi, guna meminimalisir potensi friksi yang mungkin dirasakan oleh pengguna saat proses checkout.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Menerapkan event-trigger pada API payment gateway untuk mendeteksi drop-off, mengaktifkan retargeting pixel pada segmen 'Add to Cart' dengan dynamic product ads, serta menyuntikkan skrip countdown timer berbasis urgensi pada checkout page untuk memicu konversi instan.",
                    "score": 10
                }
            ]
        },
        {
            "id": "dm-5",
            "question": "Anda menghadapi tekanan deadline 48 jam untuk meningkatkan konversi email marketing. Tim kreatif bersikeras merombak total visual untuk estetika, sementara tim data menuntut validitas hasil yang ketat. Mengingat keterbatasan waktu dan audiens yang terbatas, bagaimana Anda mengeksekusi pengujian ini agar tetap valid secara statistik?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengadakan rapat koordinasi lintas divisi untuk menyelaraskan visi kreatif dan teknis, guna memastikan setiap perubahan desain dan konten mencerminkan nilai perusahaan secara harmonis sebelum pengiriman.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan pengujian multivariat dengan mengubah subjek, isi email, dan gambar secara bersamaan untuk mempercepat proses riset dan mendapatkan insight komprehensif dalam satu siklus pengiriman.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mengisolasi satu variabel independen pada elemen dengan dampak CTR tertinggi, menerapkan pembagian audiens 50/50 dengan randomisasi berbasis hash, serta menetapkan confidence level 95% dengan power analysis untuk menentukan ukuran sampel minimum sebelum pengiriman.",
                    "score": 10
                }
            ]
        },
        {
            "id": "dm-6",
            "question": "Anda adalah Lead Data Analyst yang baru saja memigrasikan atribusi klien ke model Data-Driven di GA4. Tiba-tiba, klien menelepon dengan nada marah karena metrik konversi di dashboard mereka anjlok 40% dibandingkan periode sebelumnya, padahal spend iklan tidak berubah. Klien menuntut jawaban instan dalam 10 menit sebelum mereka memutuskan untuk menghentikan kontrak kerja sama. Langkah apa yang Anda ambil?",
            "options": [
                {
                    "label": "A",
                    "text": "Segera mengusulkan pertemuan darurat dengan seluruh pemangku kepentingan untuk menenangkan situasi, mendengarkan kekhawatiran klien, dan menyelaraskan ekspektasi agar hubungan profesional tetap terjaga di tengah transisi sistem yang kompleks.",
                    "score": 5
                },
                {
                    "label": "B",
                    "text": "Melakukan komparasi data 'Model Comparison Tool' antara Last-Click dan Data-Driven, mengidentifikasi penurunan pada channel top-funnel yang kehilangan kredit atribusi, serta menyajikan laporan teknis mengenai perubahan bobot konversi berdasarkan path-dependent probability untuk memvalidasi akurasi data baru.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Mengembalikan konfigurasi atribusi ke model Last-Click secara sementara untuk memulihkan angka konversi di dashboard agar klien merasa tenang dan memberikan waktu tambahan bagi tim untuk melakukan audit mendalam tanpa tekanan panik.",
                    "score": 0
                }
            ]
        },
        {
            "id": "dm-7",
            "question": "Anda memimpin proyek SEO untuk klien korporat yang sedang dalam masa krisis. Klien menuntut kenaikan Domain Authority (DA) sebesar 20 poin dalam 28 hari agar mereka memenuhi syarat administratif tender nasional. Jika gagal, agensi Anda akan kehilangan kontrak senilai miliaran rupiah. Di sisi lain, tim internal Anda menyarankan untuk menolak target tersebut karena risiko penalti Google sangat tinggi jika dilakukan secara agresif dalam waktu singkat. Bagaimana Anda mengambil keputusan di bawah tekanan ini?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengadakan pertemuan darurat dengan seluruh pemangku kepentingan untuk merumuskan strategi komunikasi yang transparan, menekankan pentingnya integritas brand, serta menyusun rencana mitigasi risiko jangka panjang agar hubungan kerja sama tetap terjaga tanpa mengorbankan etika profesional.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan eksekusi teknis berupa audit link profile untuk mengidentifikasi domain 'toxic', melakukan disavow file secara masif, serta mengalokasikan budget untuk akuisisi backlink melalui Digital PR pada media Tier-1 dan implementasi struktur internal linking berbasis topical authority untuk memanipulasi distribusi link equity secara agresif namun tetap dalam koridor algoritma.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Menginstruksikan tim untuk segera membeli paket backlink dari jaringan PBN (Private Blog Network) yang memiliki metrik DA tinggi dan trafik organik yang sudah teruji, guna memastikan kenaikan metrik secara instan sebelum tenggat waktu tender berakhir demi menyelamatkan kontrak agensi.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-8",
            "question": "Startup Anda berada di ambang kebangkrutan dengan sisa runway hanya dua bulan. Investor menuntut bukti efisiensi pemasaran yang konkret sebelum menyetujui pendanaan darurat, sementara tim pemasaran bersikeras bahwa lonjakan biaya iklan adalah satu-satunya cara menjaga visibilitas di tengah kompetisi yang agresif. Sebagai Growth Lead, tindakan apa yang Anda ambil untuk memvalidasi efektivitas pengeluaran tersebut di tengah tekanan waktu yang ekstrem?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengadakan sesi brainstorming lintas departemen untuk membangun moral tim dan menyelaraskan visi strategis, guna memastikan setiap anggota merasa dilibatkan dalam proses pengambilan keputusan yang krusial bagi masa depan perusahaan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan dekomposisi CAC berdasarkan cohort dan channel-specific attribution modeling, serta menghitung LTV:CAC ratio per segmen untuk mengidentifikasi kanal dengan marginal contribution negatif yang harus segera dihentikan.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan penyesuaian harga jual produk secara merata di seluruh platform untuk menutupi defisit anggaran, guna menghindari beban kerja tambahan bagi tim pemasaran yang saat ini sedang mengalami kelelahan akibat target yang terlalu tinggi.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-9",
            "question": "Klien e-commerce Anda mengalami penurunan atribusi data Meta Pixel hingga 60% pasca update iOS 14.5, yang menyebabkan ROAS kampanye anjlok drastis. Stakeholder menuntut pemulihan data instan sebelum peak season dimulai minggu depan. Tim IT menolak perubahan infrastruktur besar-besaran karena risiko downtime, sementara Anda berada di bawah tekanan untuk segera mengoptimalkan performa iklan yang saat ini hanya mengandalkan data parsial.",
            "options": [
                {
                    "label": "A",
                    "text": "Menginisiasi pertemuan lintas departemen untuk menyelaraskan ekspektasi stakeholder dengan realitas teknis, serta menyusun strategi konten organik yang lebih humanis guna menjaga loyalitas pelanggan tanpa harus memaksakan implementasi teknis yang berisiko di tengah peak season.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Mengonfigurasi Meta Conversion API (CAPI) melalui server-side gateway untuk memintas batasan browser-side tracking, memastikan pengiriman event data langsung dari server ke server guna memitigasi dampak ITP tanpa menyentuh infrastruktur core yang dikelola tim IT.",
                    "score": 10
                },
                {
                    "label": "C",
                    "text": "Melakukan penyesuaian manual pada parameter UTM di setiap link iklan dan memperpanjang durasi window atribusi di dashboard Meta Ads untuk mengompensasi hilangnya data dari pengguna perangkat iOS secara bertahap.",
                    "score": 5
                }
            ]
        },
        {
            "id": "dm-10",
            "question": "Anda memimpin kampanye peluncuran produk baru dengan anggaran terbatas. Direktur Pemasaran menuntut laporan konversi penjualan instan di akhir minggu pertama, padahal data analitik menunjukkan audiens masih berada di tahap pengenalan brand (top-funnel). Sebagai spesialis, langkah teknis apa yang Anda ambil untuk mengoptimalkan performa tanpa mengorbankan integritas data?",
            "options": [
                {
                    "label": "A",
                    "text": "Mengadakan rapat koordinasi lintas departemen untuk menyelaraskan ekspektasi manajemen dengan realitas pasar, guna memastikan seluruh tim merasa didengar dan menjaga keharmonisan budaya kerja perusahaan.",
                    "score": 0
                },
                {
                    "label": "B",
                    "text": "Melakukan pergeseran alokasi anggaran secara mendadak ke kanal konversi langsung meskipun data atribusi belum matang, demi memenuhi target penjualan bulanan dan menjaga hubungan profesional dengan pemangku kepentingan.",
                    "score": 5
                },
                {
                    "label": "C",
                    "text": "Mempertahankan alokasi pada metrik top-funnel untuk mengakumulasi data user-intent, lalu mengimplementasikan model atribusi berbasis data untuk mengidentifikasi mikro-konversi yang relevan sebagai proxy performa sebelum melakukan retargeting berbasis perilaku.",
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
