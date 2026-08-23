# Product Requirements Document (PRD) - Gapless

## Problem Statement
Bagian krusial yang menjawab kenapa produk ini perlu ada. Berdasarkan observasi dan keresahan pengguna (terutama *fresh graduate*, mahasiswa tingkat akhir, dan pekerja muda), banyak dari mereka kebingungan menentukan arah karier yang cocok dengan potensi dan kepribadian mereka. Selain itu, ketika mereka ingin *switch career* atau mulai belajar, mereka dihadapkan pada masalah *information overload* (terlalu banyak course/tutorial di internet). Mereka tidak tahu secara spesifik *skill* apa yang kurang dari diri mereka dan apa yang sebenarnya dibutuhkan oleh standar industri saat ini. Akibatnya, banyak waktu dan uang terbuang untuk mempelajari hal yang salah atau tidak efisien.

## Goals
- Membantu pengguna menemukan 1-3 rekomendasi jalur karier yang paling sesuai dengan profil kepribadian mereka dalam waktu kurang dari 10 menit.
- Memberikan visualisasi *skill-gap* yang jelas dan personal antara kemampuan pengguna saat ini vs standar yang dibutuhkan industri.
- Meningkatkan efisiensi belajar pengguna dengan menyediakan *learning roadmap* spesifik, sehingga pengguna hanya perlu mempelajari *skill* yang masih belum mereka kuasai (Gap > 0).

## Target User
- **Fresh Graduates / Mahasiswa Tingkat Akhir:** Mereka yang baru mau masuk dunia kerja, butuh validasi arah karier apa yang cocok untuk mereka agar tidak salah langkah di awal.
- **Career Switchers:** Pekerja yang merasa "stuck" di pekerjaannya saat ini, ingin pindah ke bidang lain (misal dari non-IT ke IT), tapi bingung harus mulai belajar dari mana.
- *Pain points mereka:* Bingung mengenali kelebihan diri sendiri, tidak paham requirement industri (seperti apa ekspektasi perusahaan), dan tidak punya kurikulum belajar yang terarah.

## User Stories
- **Sebagai pengguna baru**, saya ingin mengikuti kuis singkat (*assessment*) supaya saya tahu tipe kepribadian dan gaya kerja saya (Thinker, Creator, Connector, atau Builder).
- **Sebagai pencari kerja**, saya ingin membaca analisis AI tentang kelebihan dan kepribadian saya, supaya saya lebih percaya diri saat *interview* kerja.
- **Sebagai *career switcher***, saya ingin melakukan *self-rating* (menilai kemampuan diri sendiri) pada *skill-skill* tertentu, supaya saya bisa melihat *gap* (kesenjangan) saya dibanding standar industri.
- **Sebagai pembelajar mandiri**, saya ingin mendapatkan *roadmap* kurikulum yang dinamis, di mana modul yang sudah saya kuasai di-*skip*, supaya saya bisa fokus belajar materi yang memang kurang saja.

## Functional Requirements
- **FR-1 (Assessment System):** Sistem harus menyediakan antarmuka kuis pilihan ganda yang jawabannya dapat dikalkulasi menjadi skor 4 dimensi karakter dominan. [P0]
- **FR-2 (AI Analysis):** Sistem harus mengintegrasikan Vercel AI SDK untuk mengirim data skor ke LLM (Groq/Gemini) dan mengembalikan respons berformat JSON yang berisi ringkasan psikologi karier. [P0]
- **FR-3 (Career Recommendation):** Sistem harus merekomendasikan daftar profesi (lengkap dengan *required skills*) berdasarkan *dominant trait* pengguna. [P0]
- **FR-4 (Self-Rating & Gap Calculation):** Sistem harus menyediakan UI *slider/input* untuk pengguna menilai *skill*-nya (1-5), lalu secara otomatis menghitung *delta* (Required - Current). [P0]
- **FR-5 (Dynamic Roadmap):** Sistem harus merender *roadmap* pembelajaran yang mengecualikan (menandai 'selesai') modul/materi yang *skill gap*-nya sudah bernilai 0. [P1]
- **FR-6 (Authentication):** Sistem harus mendukung login menggunakan Google OAuth untuk menyimpan sesi pengguna. [P1]

## Non-Functional Requirements
- **NFR-1 (Response Time AI):** Pemrosesan AI untuk *generate* profil kepribadian harus selesai dan dirender di layar pengguna dalam waktu di bawah 4 detik.
- **NFR-2 (UI/UX Responsiveness):** Karena *state* kuis disimpan di memori *client-side* (Context), perpindahan antar pertanyaan kuis harus terasa instan (< 100ms) tanpa ada *loading page*.
- **NFR-3 (Availability & Scalability):** *API route* `/api/analyze` harus menggunakan *Edge Runtime* agar sistem mampu menangani setidaknya 1000 *concurrent users* tanpa menyebabkan *timeout* atau *bottleneck* di sisi server.
- **NFR-4 (Aesthetics):** UI harus menggunakan desain modern (glassmorphism, transisi mulus dengan Framer Motion) agar sistem terasa premium dan profesional.

## Scope
### In Scope (v1.0 - Rilisan Saat Ini)
- Kuis kepribadian statis (pertanyaan *hardcoded* di frontend).
- Integrasi AI menggunakan model cepat (Llama 3 via Groq atau Gemini Flash) untuk *free tier*.
- Visualisasi *skill-gap* menggunakan Recharts.
- Login eksklusif via Google OAuth (NextAuth).
- Manajemen *state* sepenuhnya di *client-side* menggunakan React Context.
- *Roadmap* pembelajaran statis yang menyesuaikan *gap* (belum ada link *course* eksternal dinamis).

### Out of Scope (Direncanakan untuk v2.0)
- Sistem RAG (*Retrieval-Augmented Generation*) dengan Vector Database (Pinecone/pgvector) untuk menyedot jutaan *link course* gratis dari internet.
- Model AI *Reasoning* kelas berat (Claude 3.5 Sonnet / Gemini 1.5 Pro) untuk pengguna berbayar (Pro Tier).
- Login via Email/Password.
- *Payment Gateway* untuk langganan *tier* berbayar.
