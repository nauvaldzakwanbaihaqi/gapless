const fs = require('fs');
const path = './src/data/gaplessData.ts';
let content = fs.readFileSync(path, 'utf-8');

const newQuestions = `export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: "Kalau kamu dikasih waktu luang 3 jam tanpa tugas kuliah, kamu paling kemungkinan bakal...",
    dimension: "Interest",
    options: [
      { label: "A", text: "Baca artikel/riset tentang topik yang lagi kamu penasarin", trait: "The Thinker" },
      { label: "B", text: "Nongkrong, chat, atau ngobrol sama temen soal ide-ide baru", trait: "The Connector" },
      { label: "C", text: "Ngulik desain, bikin konten, atau coba tools kreatif baru", trait: "The Creator" },
      { label: "D", text: "Beresin planner, rapiin file, atau ngerjain checklist yang tertunda", trait: "The Builder" }
    ]
  },
  {
    id: 2,
    question: "Dalam kerja kelompok, kamu biasanya paling nyaman ambil peran sebagai...",
    dimension: "Social Role Preference",
    options: [
      { label: "A", text: "Orang yang jadi penghubung, presentasi, atau negosiasi ke pihak luar", trait: "The Connector" },
      { label: "B", text: "Orang yang mikirin ide \\"out of the box\\" atau visual project", trait: "The Creator" },
      { label: "C", text: "Orang yang riset data/referensi buat mendukung keputusan tim", trait: "The Thinker" },
      { label: "D", text: "Orang yang bikin timeline, bagi tugas, dan mastiin semua on-track", trait: "The Builder" }
    ]
  },
  {
    id: 3,
    question: "Lingkungan kerja \\"dream job\\" kamu itu yang kayak gimana?",
    dimension: "Environment Preference",
    options: [
      { label: "A", text: "Terstruktur, ada SOP jelas, target terukur", trait: "The Builder" },
      { label: "B", text: "Dinamis, banyak interaksi sama orang tiap hari", trait: "The Connector" },
      { label: "C", text: "Fleksibel, banyak ruang eksplorasi, gak monoton", trait: "The Creator" },
      { label: "D", text: "Tenang, fokus deep-work, banyak waktu buat mikir", trait: "The Thinker" }
    ]
  },
  {
    id: 4,
    question: "Pas ngerjain tugas kuliah, kamu paling puas kalau hasilnya...",
    dimension: "Task Satisfaction Style",
    options: [
      { label: "A", text: "Bisa dipresentasiin dan bikin orang lain paham/terinspirasi", trait: "The Connector" },
      { label: "B", text: "Analisisnya dalam dan datanya solid", trait: "The Thinker" },
      { label: "C", text: "Rapi, sistematis, dan sesuai rubrik", trait: "The Builder" },
      { label: "D", text: "Unik dan beda dari yang lain", trait: "The Creator" }
    ]
  },
  {
    id: 5,
    question: "Kalau harus milih salah satu skill buat diasah minggu ini, kamu bakal pilih...",
    dimension: "Skill Orientation",
    options: [
      { label: "A", text: "Data analysis/riset (SQL, riset pasar, problem solving)", trait: "The Thinker" },
      { label: "B", text: "Project management/tools teknis (Excel, Notion, automation)", trait: "The Builder" },
      { label: "C", text: "Public speaking/networking (pitching, komunikasi, leadership)", trait: "The Connector" },
      { label: "D", text: "Design/content creation (Canva, video editing, copywriting)", trait: "The Creator" }
    ]
  },
  {
    id: 6,
    question: "Kalau kamu ngerasa salah jurusan atau ragu sama jalur karier sekarang, reaksi pertama kamu biasanya...",
    dimension: "Concern",
    options: [
      { label: "A", text: "Cerita ke orang lain, cari mentor atau teman buat diskusi", trait: "The Connector" },
      { label: "B", text: "Riset dalam-dalam dulu, baca-baca, bandingin opsi, dan cari data", trait: "The Thinker" },
      { label: "C", text: "Bikin rencana konkret step-by-step buat pindah jalur", trait: "The Builder" },
      { label: "D", text: "Coba eksplorasi hal baru di luar jurusan, siapa tau nemu passion lain", trait: "The Creator" }
    ]
  },
  {
    id: 7,
    question: "Pas ada info lowongan magang yang deadline-nya besok, kamu...",
    dimension: "Control",
    options: [
      { label: "A", text: "Cek checklist requirement satu-satu biar gak ada yang kelewat", trait: "The Builder" },
      { label: "B", text: "Tanya-tanya kontak atau senior yang mungkin kenal orang dalam", trait: "The Connector" },
      { label: "C", text: "Langsung improvisasi portofolio/CV kreatif seadanya", trait: "The Creator" },
      { label: "D", text: "Cari tau dulu detail perusahaannya sebelum apply", trait: "The Thinker" }
    ]
  },
  {
    id: 8,
    question: "Menurut kamu, cara paling efektif belajar skill baru itu...",
    dimension: "Curiosity",
    options: [
      { label: "A", text: "Pahami dulu konsep dasarnya secara mendalam sebelum praktik", trait: "The Thinker" },
      { label: "B", text: "Belajar bareng orang lain / cari mentor yang udah berpengalaman", trait: "The Connector" },
      { label: "C", text: "Langsung praktik & experimen, belajar dari trial-error", trait: "The Creator" },
      { label: "D", text: "Ikutin kursus/modul terstruktur step-by-step", trait: "The Builder" }
    ]
  },
  {
    id: 9,
    question: "Kalau rencana karier kamu tiba-tiba berubah drastis (misal: perusahaan impian gak buka lowongan), kamu...",
    dimension: "Control",
    options: [
      { label: "A", text: "Segera susun ulang rencana B dengan target & timeline baru", trait: "The Builder" },
      { label: "B", text: "Anggap ini kesempatan buat eksplorasi arah yang lebih otentik buat kamu", trait: "The Creator" },
      { label: "C", text: "Reach out ke network buat cari opsi/insight lain", trait: "The Connector" },
      { label: "D", text: "Analisis dulu kenapa itu terjadi dan apa pelajarannya", trait: "The Thinker" }
    ]
  },
  {
    id: 10,
    question: "Rasa \\"cemas soal masa depan karier\\" biasanya paling mereda kalau kamu...",
    dimension: "Confidence",
    options: [
      { label: "A", text: "Ngobrol sama orang yang dipercaya buat dapet perspektif", trait: "The Connector" },
      { label: "B", text: "Nyalurin ke hal kreatif (nulis, bikin moodboard masa depan, dll)", trait: "The Creator" },
      { label: "C", text: "Nyari lebih banyak informasi/data biar gak \\"buta arah\\"", trait: "The Thinker" },
      { label: "D", text: "Bikin action plan konkret biar ada rasa \\"in control\\"", trait: "The Builder" }
    ]
  },
  {
    id: 11,
    question: "Kalau ditanya \\"kerja itu buat apa sih sebenarnya?\\", jawaban paling jujur kamu...",
    dimension: "Meaning of Work",
    options: [
      { label: "A", text: "Buat terus belajar dan memecahkan masalah yang menantang", trait: "The Thinker" },
      { label: "B", text: "Buat stabilitas, pencapaian yang jelas, dan rasa aman", trait: "The Builder" },
      { label: "C", text: "Buat bisa berdampak dan terhubung sama orang lain", trait: "The Connector" },
      { label: "D", text: "Buat bisa berekspresi dan ninggalin jejak karya", trait: "The Creator" }
    ]
  },
  {
    id: 12,
    question: "Kamu bakal ngerasa paling \\"berarti\\" di tempat kerja kalau...",
    dimension: "Self-Concept at Work",
    options: [
      { label: "A", text: "Kamu bisa bantu/mengembangkan orang lain di sekitar kamu", trait: "The Connector" },
      { label: "B", text: "Ide/karya kamu dipakai dan diapresiasi", trait: "The Creator" },
      { label: "C", text: "Kamu berhasil nemuin insight/solusi yang orang lain gak lihat", trait: "The Thinker" },
      { label: "D", text: "Sistem yang kamu bangun berjalan lancar dan efisien", trait: "The Builder" }
    ]
  },
  {
    id: 13,
    question: "Warisan (legacy) yang pengen kamu tinggalkan lewat karier kamu adalah...",
    dimension: "Legacy Narrative",
    options: [
      { label: "A", text: "Sistem/proses yang bikin sesuatu jadi lebih baik dan tahan lama", trait: "The Builder" },
      { label: "B", text: "Komunitas/relasi yang bertumbuh karena kehadiran kamu", trait: "The Connector" },
      { label: "C", text: "Karya atau ide orisinal yang diingat orang", trait: "The Creator" },
      { label: "D", text: "Kontribusi pengetahuan atau solusi atas masalah besar", trait: "The Thinker" }
    ]
  },
  {
    id: 14,
    question: "Di antara ini, yang paling bikin kamu \\"males kerja\\" adalah lingkungan yang...",
    dimension: "Values Misfit",
    options: [
      { label: "A", text: "Semua serba buru-buru tanpa waktu buat mikir mendalam", trait: "The Thinker" },
      { label: "B", text: "Kaku, gak ada ruang buat coba hal baru", trait: "The Creator" },
      { label: "C", text: "Individualis, minim interaksi atau kolaborasi", trait: "The Connector" },
      { label: "D", text: "Berantakan, gak jelas arah dan prosesnya", trait: "The Builder" }
    ]
  },
  {
    id: 15,
    question: "Kalau kamu bayangin diri kamu 10 tahun lagi sukses, gambaran yang paling relate...",
    dimension: "Future Career",
    options: [
      { label: "A", text: "Punya jaringan luas dan berperan besar mengembangkan orang lain", trait: "The Connector" },
      { label: "B", text: "Jadi expert/rujukan di bidang yang kamu dalami", trait: "The Thinker" },
      { label: "C", text: "Dikenal karena karya/kreativitas kamu yang khas", trait: "The Creator" },
      { label: "D", text: "Punya posisi/pencapaian yang solid dan terukur jelas", trait: "The Builder" }
    ]
  }
];`;

content = content.replace(/export const ASSESSMENT_QUESTIONS: AssessmentQuestion\[\] = \[[\s\S]*?\];\n/, newQuestions + '\n');
fs.writeFileSync(path, content);
