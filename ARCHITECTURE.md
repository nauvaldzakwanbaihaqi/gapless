# Architecture Document - Gapless

## 1. Overview
Gapless adalah aplikasi web modern berbasis Next.js (App Router) yang berfokus pada asesmen karier, analisis *skill-gap*, dan pembuatan *roadmap* pembelajaran otomatis menggunakan kecerdasan buatan (AI).

## 2. Technology Stack
- **Framework:** Next.js 16 (App Router)
- **Frontend & UI:** React 19, Tailwind CSS v4, Lucide React (Icons), Framer Motion (Animations), Recharts (Data Visualization).
- **AI Integration:** Vercel AI SDK (`ai`), terhubung ke *provider* `@ai-sdk/groq` dan `@ai-sdk/google`.
- **Authentication:** NextAuth.js (Auth.js) v5.
- **Database & ORM:** Neon Database (Serverless PostgreSQL), Drizzle ORM, `@auth/drizzle-adapter`.

## 3. High-Level Architecture
Aplikasi ini memisahkan secara jelas antara *State Management* di *Client-side*, pemrosesan di *Edge Server*, dan *Database Layer*.

### A. Frontend Layer (Client-Side)
- **State Management (`src/contexts/CareerContext.tsx`):** Jantung dari *frontend* aplikasi. Semua *state* selama sesi pengguna—mulai dari jawaban kuis (`answers`), hasil skor (`traitScores`), pilihan profesi (`selectedCareer`), hingga tingkat kemahiran (*self-rating* / `skillRatings`)—disimpan secara lokal di memori *browser*.
- **UI Components:** *Client Components* mengonsumsi data dari *Context* secara *real-time* untuk me-render grafik (Radar Chart untuk kepribadian, Bar Chart untuk *Skill-Gap*) menggunakan Recharts.
- **Kelebihan:** Aplikasi terasa sangat reaktif dan instan karena tidak ada penundaan *network* (*round-trip*) saat berpindah pertanyaan kuis.

### B. Backend Layer (Edge / Serverless)
- **AI Route (`src/app/api/analyze/route.ts`):** Merupakan *API endpoint* yang berjalan di atas **Edge Runtime**. 
  - Menerima *payload* JSON berisi hasil kuis dari *frontend*.
  - Menentukan model LLM mana yang dipanggil (Groq Llama 3 atau Gemini) berdasarkan parameter atau tingkat berlangganan (*Tier*).
  - Merangkai *Prompt* spesifik (*Zero-shot / Few-shot prompt engineering*) lalu mengirimkannya ke *provider* LLM.
  - Mem-parsing *output* JSON dari LLM agar siap digunakan *frontend*.
- **Kelebihan:** Menggunakan *Edge Runtime* memastikan latensi terendah (dekat dengan *user*) dan sanggup menahan ribuan *request* secara paralel (*Stateless*).

### C. Data & Auth Layer
- **Authentication (`src/auth.ts`):** Menggunakan NextAuth yang dikonfigurasi dengan Google OAuth.
- **Stateful Database Session:** Menggunakan `DrizzleAdapter` yang terkoneksi langsung ke Neon (PostgreSQL). Sesi pengguna tidak murni berupa JWT di *cookies*, melainkan tersimpan di tabel `session` di database.
- **User Tiers:** Objek `user` di *database* memiliki properti `tier` (misal: "Free", "Pro"). Nilai ini disuntikkan (*injected*) ke *Session Callback* agar *frontend* dan *backend API* tahu hak akses AI model dari *user* tersebut.

## 4. Key Workflows

### 1. Assessment Flow
1. Pengguna masuk ke halaman utama dan berinteraksi dengan komponen *Assessment*.
2. Setiap kali pengguna menjawab, *state* di `CareerContext` di-update secara asinkron.
3. Setelah selesai, fungsi *helper* `computeTraitScores` menghitung nilai dominan dari 4 dimensi kepribadian (Thinker, Creator, Connector, Builder).

### 2. AI Profile Generation Flow
1. `CareerContext` menjalankan fungsi `fetchAiInsight()`.
2. Terjadi pemanggilan HTTP POST ke `/api/analyze`.
3. Backend menerima skor pengguna, membangun instruksi (*system prompt* dan *user prompt*), dan memanggil Groq/Gemini lewat `generateText()`.
4. JSON dikembalikan, dibersihkan dari karakter *markdown* (Hacker-grade JSON cleaner), dan di-*set* ke dalam *state* `aiInsight`.
5. UI langsung menampilkan hasil analisis kepribadian dari AI tersebut.

### 3. Skill-Gap & Roadmap Flow
1. Sistem mencocokkan *dominant trait* pengguna dengan database lokal profesi (`recommendedCareers`).
2. Pengguna memilih profesi target.
3. Pengguna melakukan *self-rating* *skill* pada UI.
4. Fungsi `getSkillGapData` dijalankan; menghasilkan `delta` = *Required Skill Level* - *Current User Skill Level*.
5. Di bagian *Roadmap*, fungsi evaluasi berjalan: Jika `Current >= Required`, modul dianggap "Selesai", dan sistem hanya akan merekomendasikan modul untuk menambal nilai `delta` (Gap) yang lebih dari 0.

## 5. Future Scalability (RAG Integration Plan)
Untuk pengembangan ke depan (Rekomendasi *Course* Dinamis), arsitektur akan diperluas dengan menambahkan:
1. **Vector Database (Pinecone/pgvector)** untuk menyimpan jutaan referensi *course*.
2. Memodifikasi alur `/api/analyze` agar sebelum mengirim ke LLM, *server* melakukan *Vector Similarity Search* untuk mencari *course* paling cocok, lalu menyelipkannya sebagai *context* ke *Prompt* (*Retrieval-Augmented Generation*).
