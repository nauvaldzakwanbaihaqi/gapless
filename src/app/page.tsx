import { Navbar } from '@/components/Navbar';
import { AssessmentNav } from '@/components/AssessmentNav';
import { FooterSection } from '@/components/AnimatedSections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-space">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 py-48 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mt- mb-4 animate-slide-up delay-200">
          Temukan Karier<br /><span className="gradient-text">Terbaik Untukmu</span>
        </h1>
        <p className="text-gray-500 text-[24px] leading-relaxed mb-10 max-w-2xl mx-auto animate-slide-up delay-300">
          Bingung harus mulai dari mana? Yuk, temukan jalur karier yang paling cocok untukmu.
        </p>

        <div className="animate-slide-up delay-400">
          <AssessmentNav />
        </div>

        <p className="text-gray-400 text-sm mt-6 animate-slide-up delay-500">
          Tanpa login · Hanya 5-7 menit · Dapatkan rekomendasi karier personal.
        </p>
      </section>

      {/* RIASEC Section (Landasan Teori) */}
      <section className="relative z-10 px-6 py-30 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase">
            Landasan Teori
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mengenal Dirimu Lewat
            <br />
            <span style={{ color: 'var(--color-primary)' }}>RIASEC</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Model RIASEC membagi minat kerja ke dalam 6 tipe utama. Kombinasi dominanmu akan menentukan lingkungan kerja yang paling cocok dan memuaskan.
            <br />
            <br />
            Gapless menggunakan RIASEC sebagai salah satu fondasi untuk membantu kamu memahami pola minat dan menemukan kemungkinan arah karier di bidang digital, teknologi, dan STEM
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 items-stretch">
          {[
            { letter: 'R', name: 'Realistic', desc: 'Praktis & Teknikal' },
            { letter: 'I', name: 'Investigative', desc: 'Analisi & Riset' },
            { letter: 'A', name: 'Artistic', desc: 'Eksploratif Kreatif' },
            { letter: 'S', name: 'Social', desc: 'Membantu & Interaksi' },
            { letter: 'E', name: 'Enterprising', desc: 'Memimpin & Negosiasi' },
            { letter: 'C', name: 'Conventional', desc: 'Struktur & Detail' },
          ].map((item) => (
            <div
              key={item.letter}
              className="bg-white rounded-3xl p-5 md:p-6 flex flex-col items-center justify-start text-center h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-slate-100"
            >
              {/* Badge Huruf Biru - Terkunci rata atas */}
              <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-2xl bg-blue-600 text-white font-bold text-xl shadow-sm mb-4">
                {item.letter}
              </div>

              {/* Judul Teks */}
              <h3 className="font-bold text-blue-700 text-base md:text-lg leading-tight">
                {item.name}
              </h3>

              {/* Deskripsi */}
              <p className="text-blue-600 text-xs md:text-sm mt-1.5 leading-snug font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Fitur Unggulan Section */}
      <section className="relative z-10 px-4 md:px-6 pt-20 max-w-7xl mx-auto">
        <div className="rounded-4xl p-8 md:p-12 overflow-hidden shadow-2xl bg-[#0F62FE]">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

            {/* ---------------- BAGIAN KIRI (TEKS & FITUR) ---------------- */}
            <div className="text-white">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 bg-white text-slate-800 rounded-full text-sm font-bold mb-6 shadow-sm">
                Fitur Unggulan
              </span>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Ukur Kesiapanmu, Sebelum<br className="hidden md:block" /> Melangkah Lebih Jauh
              </h2>

              {/* Sub-deskripsi dengan garis vertikal */}
              <div className="border-l-2 border-white pl-5 py-1 mb-10">
                <p className="text-blue-50 text-base md:text-lg leading-relaxed font-medium">
                  Gapless membandingkan skill yang kamu punya dengan kebutuhan industri untuk melihat apa yang sudah kamu kuasai dan apa yang masih perlu diasah.
                </p>
              </div>

              {/* Callout Box Putih */}
              <div className="bg-white rounded-2xl p-5 md:p-6 mb-10 shadow-lg flex items-center gap-5">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#0F62FE] rounded-xl shadow-inner">
                  {/* Target/Bullseye Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <p className="text-slate-800 font-medium text-sm md:text-base leading-snug">
                  Bukan cuma tahu &quot;kamu cocok jadi apa&quot;, kamu juga tahu apa yang perlu kamu kuasai untuk sampai ke sana.
                </p>
              </div>

              {/* 3 Fitur Horizontal */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Item 1 */}
                <div className="flex items-center sm:items-start sm:flex-col gap-4 sm:gap-3 group">
                  <img src="/images/unggulan/kaca.png" alt="Kenali Skill" className="w-22 h-22 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base sm:mb-1">Kenali Skill-mu</h4>
                    <p className="text-blue-100 text-xs md:text-sm leading-tight">Pahami kekuatanmu secara objektif</p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex items-center sm:items-start sm:flex-col gap-4 sm:gap-3 group">
                  <img src="/images/unggulan/grafik.png" alt="Lihat Gap" className="w-22 h-22 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base sm:mb-1">Lihat Gap</h4>
                    <p className="text-blue-100 text-xs md:text-sm leading-tight">Temukan jarak antara skill kamu dan kebutuhan industri</p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex items-center sm:items-start sm:flex-col gap-4 sm:gap-3 group">
                  <img src="/images/unggulan/roket.png" alt="Tingkatkan Diri" className="w-22 h-22 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base sm:mb-1">Tingkatkan Diri</h4>
                    <p className="text-blue-100 text-xs md:text-sm leading-tight">Fokus pada skill yang membawa kamu lebih siap</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------- BAGIAN KANAN (RADAR CHART) ---------------- */}
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl flex flex-col h-full">
              {/* Header Card */}
              <div className="mb-8 md:mb-10">
                <span className="text-slate-500 text-sm font-medium">Contoh</span>
                <h3 className="font-bold text-blue-600 text-2xl mt-1">Skill Gap Analysis</h3>
                <p className="text-slate-400 text-sm mt-1">Untuk Peran Digital Marketing Specialist</p>
              </div>

              {/* Radar Chart Area - Ditambahkan my-auto dan max-w diperbesar */}
              <div className="relative w-full max-w-70 md:max-w-85 mx-auto aspect-square flex items-center justify-center my-auto py-8">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  {/* Radar grid (Hexagon) */}
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                  <polygon points="50,35 65,42.5 65,57.5 50,65 35,57.5 35,42.5" fill="none" stroke="#e2e8f0" strokeWidth="1" />

                  {/* Radar axes */}
                  <line x1="50" y1="50" x2="50" y2="5" stroke="#e2e8f0" strokeWidth="1" />
                  <line x1="50" y1="50" x2="95" y2="27.5" stroke="#e2e8f0" strokeWidth="1" />
                  <line x1="50" y1="50" x2="95" y2="72.5" stroke="#e2e8f0" strokeWidth="1" />
                  <line x1="50" y1="50" x2="50" y2="95" stroke="#e2e8f0" strokeWidth="1" />
                  <line x1="50" y1="50" x2="5" y2="72.5" stroke="#e2e8f0" strokeWidth="1" />
                  <line x1="50" y1="50" x2="5" y2="27.5" stroke="#e2e8f0" strokeWidth="1" />

                  {/* Level yang Diperlukan (Red Dashed Line) */}
                  <polygon points="50,15 85,32 85,60 50,85 15,68 25,25" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />

                  {/* Level Kamu Saat Ini (Blue Solid Fill) */}
                  <polygon points="50,30 70,38 75,65 50,70 30,55 35,35" fill="rgba(37, 99, 235, 0.2)" stroke="#2563eb" strokeWidth="1.5" />
                </svg>

                {/* Labels - Diposisikan absolut di sekitar radar */}
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-semibold text-blue-600 whitespace-nowrap text-center">SEO & SEM</span>
                <span className="absolute top-1/4 -right-12 md:-right-16 text-[10px] md:text-xs font-semibold text-blue-600 text-center w-20">Manajemen Iklan</span>
                <span className="absolute bottom-1/4 -right-12 md:-right-16 text-[10px] md:text-xs font-semibold text-blue-600 text-center w-20">Pelacakan Konversi</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-semibold text-blue-600 whitespace-nowrap text-center">Pemikiran Berorientasi Data</span>
                <span className="absolute bottom-1/4 -left-12 md:-left-16 text-[10px] md:text-xs font-semibold text-blue-600 text-center w-20">Kemampuan Adaptasi</span>
                <span className="absolute top-1/4 -left-12 md:-left-16 text-[10px] md:text-xs font-semibold text-blue-600 text-center w-20">Keterampilan Persuasi</span>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-12 md:mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  <span className="text-[11px] md:text-xs font-medium text-slate-600">Level Kamu Saat Ini</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 border-t-2 border-red-500 border-dashed"></div>
                  <span className="text-[11px] md:text-xs font-medium text-slate-600">Level yang Diperlukan</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Job Portal Strip */}
      <section className="relative z-10 py-6 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Container Partnership - Ukuran lebar dan rounded sudah 100% sejajar dengan Fitur Unggulan */}
        <div className="bg-white rounded-4xl py-5 px-6 lg:px-10 shadow-sm border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

          {/* 1. Bagian Kiri (Icon Database & Teks) */}
          <div className="flex items-center gap-4 lg:w-1/3">
            <div className="text-blue-600 shrink-0 flex items-center justify-center">
              {/* SVG Database */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-11 md:h-11">
                <path d="M12 2C7.58 2 4 3.79 4 6C4 8.21 7.58 10 12 10C16.42 10 20 8.21 20 6C20 3.79 16.42 2 12 2ZM4 10.1C4 10.1 4 11 4 11C4 13.21 7.58 15 12 15C16.42 15 20 13.21 20 11C20 11 20 10.1 20 10.1C18.66 11.89 15.54 13 12 13C8.46 13 5.34 11.89 4 10.1ZM4 15.1C4 15.1 4 16 4 16C4 18.21 7.58 20 12 20C16.42 20 20 18.21 20 16C20 16 20 15.1 20 15.1C18.66 16.89 15.54 18 12 18C8.46 18 5.34 16.89 4 15.1Z" />
              </svg>
            </div>
            <p className="text-blue-600 font-medium text-sm md:text-base leading-snug">
              Analisis berdasarkan data dari job portal terpercaya
            </p>
          </div>

          {/* Garis Pemisah Vertikal 1 (Hidden di Mobile) */}
          <div className="hidden lg:block w-0.5 h-14 bg-blue-600"></div>

          {/* 2. Bagian Tengah (Logo Partnership) */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 shrink-0">
            <img
              src="images/partner/linkedin.png"
              alt="LinkedIn"
              className="h-7 md:h-9 w-auto object-contain"
            />
            <img
              src="images/partner/dealls.png"
              alt="Dealls"
              className="h-7 md:h-9 w-auto object-contain"
            />
            <img
              src="images/partner/glints.png"
              alt="Glints"
              className="h-7 md:h-9 w-auto object-contain"
            />
            <img
              src="images/partner/jobstreet.png"
              alt="Jobstreet"
              className="h-7 md:h-9 w-auto object-contain"
            />
          </div>

          {/* Garis Pemisah Vertikal 2 (Hidden di Mobile) */}
          <div className="hidden lg:block w-0.5 h-14 bg-blue-600"></div>

          {/* 3. Bagian Kanan (Teks Deskripsi Tambahan) */}
          <div className="lg:w-1/3">
            <p className="text-blue-600 font-medium text-sm leading-snug lg:text-left text-center">
              Data diambil dari ribuan lowongan pekerjaan untuk berbagai posisi dan industri
            </p>
          </div>

        </div>
      </section>

      {/* Section 6: Testimoni Praktisi */}
      <section className="relative z-10 px-4 md:px-6 py-32 max-w-7xl mx-auto">

        {/* ---------------- HEADER SECTION ---------------- */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block px-5 py-2 bg-slate-100/80 text-slate-700 rounded-full text-sm font-semibold mb-6 shadow-sm border border-slate-200/50">
            Lebih Dari Sekadar Hasil Tes
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Rekomendasi Karier <span className="text-blue-600">Divalidasi</span><br className="hidden md:block" /> Langsung oleh Praktisi
          </h2>

          <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Insight dari praktisi membantu memastikan rekomendasi yang kamu dapat tetap relevan dengan skill, peran, dan kebutuhan industri saat ini.
          </p>
        </div>

        {/* ---------------- CARDS GRID ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              name: 'Rizki Teguh Putra',
              role: 'Product Manager',
              company: 'Tokopedia',
              img: '/images/mentor/mentor 1.png',
              customClass: '' // Aman, gak perlu diubah
            },
            {
              name: 'Gisellia Agnes',
              role: 'HR Business Partner',
              company: 'Gojek',
              img: '/images/mentor/mentor 2.png',
              customClass: '' // Aman, gak perlu diubah
            },
            {
              name: 'Fadel Alfarisi',
              role: 'Data Analyst',
              company: 'Traveloka',
              img: '/images/mentor/mentor 3.png',
              // Trik nge-zoom manual. Silakan ubah angka 1.15 (115%) sesuai kebutuhan
              customClass: 'scale-[1.50] translate-y-[-5px]'
            },
          ].map((person, i) => (
            <div
              key={i}
              className="bg-white rounded-4xl px-5 py-6 md:px-7 md:py-2 flex items-center gap-5 md:gap-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              {/* KOTAK FOTO */}
              <div className="relative w-33.75 h-46.25 md:w-41.25 md:h-56.25 shrink-0 flex items-center justify-center">

                {/* FOTO: customClass dipanggil di sini */}
                <img
                  src={person.img}
                  alt={person.name}
                  className={`w-full h-full object-contain drop-shadow-lg transition-transform duration-300 ${person.customClass}`}
                />
              </div>

              {/* Info Teks Praktisi */}
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight">
                  {person.name}
                </h3>
                <p className="text-blue-600 font-bold text-sm md:text-base mt-2">
                  {person.role}
                </p>
                <p className="text-slate-500 font-medium text-sm md:text-base mt-0.5">
                  {person.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / CTA Section */}
      <FooterSection />
    </div>
  );
}