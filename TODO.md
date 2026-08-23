# TODO Revisi — Gapless (Fase UX & Reasoning Improvement)

> Fokus fase ini: menambahkan transparansi (reasoning) di hasil archetype & analisis AI, memperbaiki flow interaksi, dan merapikan kualitas data assessment.

---

## ⚠️ Catatan Prioritas (Baca Dulu Sebelum Mulai)

Urutan pengerjaan di bawah **bukan urutan sesuai list awal**, tapi disusun berdasarkan dependency:

1. **#4 dulu** (kualitas jawaban kuis) — ini fondasi data. Reasoning yang dibangun di atas data yang bias akan menghasilkan penjelasan yang *meyakinkan tapi salah*, itu lebih buruk daripada tidak ada reasoning sama sekali.
2. **#1 dan #2** bisa dikerjakan paralel setelah #4 selesai (beda logic: satu deterministik/scoring, satu AI-generated).
3. **#3** independen — bisa dikerjakan kapan saja, cocok didelegasikan ke anggota tim lain sebagai quick win paralel.

Kalau tim kalian punya divisi kerja (misal 1 orang fokus AI/logic, 1 orang fokus UI), jalankan **#4 + #3 secara paralel** duluan, baru **#1 + #2** setelah data quality aman.

---

## 1. [DATA QUALITY] Merapikan Variasi Jawaban Kuis & Case Study

**Kenapa penting:** Jawaban yang "mencolok" (panjang/tone/gaya beda-beda antar opsi) membuat user bisa menebak archetype yang "diharapkan" dari sebuah opsi, bukan menjawab jujur. Ini merusak validitas seluruh sistem di hierarki bawahnya (archetype → rekomendasi karier → skill-gap → roadmap).

**File yang kemungkinan terdampak:**
- Data/config pertanyaan kuis (kemungkinan `data/questions.ts`, `lib/quiz-data.ts`, atau sejenisnya — sesuaikan dengan struktur project kalian)
- Component render pertanyaan (`QuizQuestion.tsx` / komponen assessment)
- Case study content (kemungkinan generated statis atau di prompt AI)

**Checklist:**
- [x] Audit semua pertanyaan & opsi jawaban existing — screenshot/list mana yang "mencolok" (beda panjang signifikan, beda tone formal/santai, ada kata kunci yang terlalu jelas nunjuk ke 1 archetype)
- [x] Buat template standar per opsi jawaban: rentang panjang karakter yang konsisten (misal 40–70 karakter), tone netral yang sama
- [x] Randomize urutan opsi jawaban per sesi (kalau belum) agar posisi opsi (A/B/C/D) tidak berkorelasi dengan archetype tertentu
- [x] Untuk case study: pastikan setiap skenario punya 4 opsi respons yang setara secara "effort tampilan" — tidak ada opsi yang terasa "obviously the smart pick"
- [x] Review ulang oleh minimal 2 anggota tim (blind review — tanpa tahu opsi mana untuk archetype apa) untuk validasi bahwa tidak ada opsi yang menonjol

**Acceptance criteria:** Ambil 3 orang di tim untuk coba isi kuis tanpa tahu tujuan tes → jika hasil archetype mereka terasa "kebetulan tertebak dari opsi", berarti masih perlu revisi.

---

## 2. [REASONING] Menambahkan Reasoning pada Hasil Archetype

**Kenapa penting:** Saat ini user kemungkinan cuma lihat "Kamu adalah The Builder" tanpa tahu *kenapa*. Menambahkan reasoning di sini meningkatkan trust dan membuat hasil terasa personal, bukan random.

**Catatan desain penting:** Ini idealnya **deterministik/rule-based**, bukan dari AI — karena datanya berasal dari skor kuis yang sudah dihitung (4 dimensi), bukan butuh generative reasoning. Menjaga ini tetap deterministik juga lebih murah (no API cost) dan lebih konsisten.

**File yang kemungkinan terdampak:**
- Logic scoring (kemungkinan di `CareerContext.tsx` atau `lib/scoring.ts`)
- Component hasil archetype (`page.tsx` result section)

**Checklist:**
- [x] Simpan breakdown skor per dimensi (Thinker/Creator/Connector/Builder) di state, bukan cuma archetype final
- [x] Buat mapping template reasoning per kombinasi skor tertinggi, contoh pola:
  > "Kamu paling dominan di [Archetype] karena kecenderungan kamu menjawab [pola jawaban] pada pertanyaan-pertanyaan bertema [tema]. Skor kamu: Thinker (X), Creator (Y), Connector (Z), Builder (W)."
- [x] Tambahkan visual breakdown (bar chart sederhana atau progress bar per dimensi) agar reasoning terasa didukung data, bukan cuma teks
- [x] Handle edge case: skor yang hampir seri antar 2 archetype (misal Thinker 8, Builder 7) — reasoning harus menjelaskan bahwa user adalah "hybrid", bukan maksa ke 1 kategori

**Acceptance criteria:** User bisa melihat *alasan kuantitatif* (skor) + *alasan kualitatif* (penjelasan pola jawaban) di balik archetype mereka, bukan cuma label.

---

## 3. [REASONING] Menambahkan Reasoning saat Analisis AI (Psikolog Karier)

**Kenapa penting:** Ini beda dari poin 2 — ini soal output AI (Groq/Gemini) yang saat ini kemungkinan cuma kasih ringkasan kepribadian + rekomendasi karier tanpa "menunjukkan cara berpikirnya". Menambahkan reasoning di sini membuat rekomendasi AI terasa lebih bisa dipercaya (explainable AI).

**File yang kemungkinan terdampak:**
- `api/analyze/route.ts` (prompt engineering + response parsing)
- Component yang render hasil analisis AI

**Checklist:**
- [x] Ubah prompt system di `api/analyze/route.ts` untuk secara eksplisit meminta AI mengembalikan **structured output** dengan field terpisah, contoh:
  ```json
  {
    "summary": "...",
    "reasoning": "...",
    "strengths": ["...", "..."],
    "recommended_careers": [...]
  }
  ```
- [x] Validasi response AI pakai schema (Zod) sebelum dikirim ke frontend — jangan asumsikan AI selalu balikin JSON valid
- [x] Di frontend, render `reasoning` sebagai bagian terpisah dari `summary` (misal expandable section "Kenapa AI menyarankan ini?")
- [x] Pertimbangkan pakai streaming response (Vercel AI SDK sudah support) supaya reasoning yang lebih panjang tidak terasa lambat saat loading
- [x] Tambahkan fallback UI kalau field `reasoning` gagal di-generate/parse (jangan sampai break seluruh card hasil analisis)

**Acceptance criteria:** User bisa klik/lihat bagian "kenapa AI menyarankan ini" yang isinya bukan basa-basi generik, tapi merujuk langsung ke skor/jawaban spesifik user.

---

## 4. [UX/INTERAKSI] Tombol "Selanjutnya" di Skill Gap & Roadmap Box Clickable

**Kenapa penting:** Dua masalah UX terpisah tapi sama-sama soal *user control & affordance* — user perlu merasa aksi mereka jelas dan bisa dikontrol, bukan auto-advance atau elemen yang terlihat interaktif tapi nggak bisa diklik.

### 4a. Tombol "Selanjutnya" di Assessment Skill Gap

**File terdampak:** Component skill-gap self-rating (kemungkinan `app/skill-gap/page.tsx` atau sejenis)

**Checklist:**
- [x] Tambahkan state untuk tracking apakah user sudah rating skill saat ini sebelum enable tombol "Selanjutnya" (disable dulu sampai ada input, hindari user skip tanpa sadar)
- [x] Tombol harus punya loading/disabled state yang jelas (visual feedback)
- [x] Pastikan progress tidak hilang kalau user klik "back" — simpan state per skill yang sudah dirating

### 4b. Kotak Learning Roadmap jadi Clickable

**File terdampak:** Component roadmap (`CareerRoadmap.tsx` atau sejenis)

**Checklist:**
- [x] Tambahkan `onClick` handler + cursor pointer + hover state (visual affordance — user harus tahu box ini bisa diklik tanpa coba-coba)
- [x] Tentukan behavior saat diklik: expand detail inline, atau navigate ke halaman/modal detail resource untuk skill tersebut
- [x] Tambahkan indikator progress/selesai per box (misal checkbox atau badge "completed") supaya klik terasa punya konsekuensi/reward
- [x] Test accessibility: pastikan box bisa di-trigger juga via keyboard (Enter/Space), bukan cuma mouse click

**Acceptance criteria:** User tidak pernah bingung "ini bisa diklik atau enggak" — semua elemen interaktif punya visual cue yang konsisten (cursor, hover, active state).

---

## Ringkasan Urutan Eksekusi

| Urutan | Poin | Bisa Paralel? |
|--------|------|----------------|
| 1 | #4 Kualitas jawaban kuis | Ya, paralel dengan #3 |
| 1 | #3 Tombol & clickable box | Ya, paralel dengan #4 |
| 2 | #1 Reasoning archetype | Setelah #4 selesai |
| 2 | #2 Reasoning AI analysis | Setelah #4 selesai, bisa paralel dengan #1 |

---

## Risiko yang Perlu Diwaspadai

- **Cost API AI:** Menambahkan reasoning ke prompt (poin 2) akan menambah token output → cek budget API Groq/Gemini kalian, terutama kalau user Free tier juga dapat fitur ini.
- **Konsistensi tone reasoning:** Reasoning archetype (deterministik) dan reasoning AI (generative) harus terasa "satu suara" secara bahasa, jangan sampai satu terasa kaku template dan satu terasa terlalu casual — akan terasa inconsistent di mata juri lomba.
- **Regresi UX:** Menambahkan tombol "Selanjutnya" bisa mengubah flow yang sebelumnya auto-advance — pastikan di-test end-to-end, jangan sampai user yang terbiasa flow lama jadi bingung (kalau ada waktu, tambahkan micro-interaction/animasi transisi biar terasa natural).