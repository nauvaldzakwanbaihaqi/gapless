import { db } from "@/db"; // Sesuaikan dengan instance Drizzle lu
import { jobRoles } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        // Menghapus data lama terlebih dahulu agar tidak duplikat saat di-refresh
        await db.delete(jobRoles);

        const fullRolesData = [
            // ──────────────────────────────────────────────
            // 🎨 DIMENSI KREATIF & USER EXPERIENCE: THE CREATOR
            // ──────────────────────────────────────────────
            {
                dimension: "The Creator",
                roleName: "UI/UX Designer",
                salaryRange: "Rp 5.000.000 - Rp 9.000.000/bulan",
                companies: ["PT Sigma Global Teknologi", "PT 4net Prima Solusi", "PT Ciputra Development", "Leverate Group"],
                hardSkills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "HTML/CSS Dasar", "Usability Testing", "CRO"],
                softSkills: ["Pemecahan Masalah", "Empati Pengguna (User-Centered)", "Komunikasi Lintas Fungsi", "Perhatian pada Detail", "Kemampuan Presentasi Ide", "Penerimaan Umpan Balik"],
            },
            {
                dimension: "The Creator",
                roleName: "Graphic Designer / Digital Creative Product Designer",
                salaryRange: "Rp 4.000.000 - Rp 9.000.000/bulan",
                companies: ["PT Hebros", "CV Wisnu Grafika", "PT MEA Digital Marketing"],
                hardSkills: ["Adobe Illustrator", "Photoshop", "InDesign", "CorelDRAW", "Visual Layouting", "Branding", "Video Editing"],
                softSkills: ["Pemikiran Kreatif", "Estetika Visual", "Manajemen Waktu", "Kemandirian", "Kolaborasi Tim", "Pengetahuan Tren Desain Daring"],
            },
            {
                dimension: "The Creator",
                roleName: "Content Creator / Social Media Specialist",
                salaryRange: "Negotiable / Uang Saku Magang",
                companies: ["Segari", "United Creative", "FACETOLOGY", "Lembaga Kantor Berita Antara"],
                hardSkills: ["Copywriting", "Video Editing Seluler (CapCut/Premiere)", "Social Media Analytics", "SEO Content Writing"],
                softSkills: ["Kelincahan Tren (Agility)", "Pemahaman Narasi", "Kecepatan Adaptasi Tren", "Persuasi Teks/Visual", "Komunikasi Massa", "Pemikiran Kritis"],
            },

            // ──────────────────────────────────────────────
            // ⚙️ ARSITEKTUR LOGIKA & KOMPUTASI: THE BUILDER
            // ──────────────────────────────────────────────
            {
                dimension: "The Builder",
                roleName: "Software Engineer (Front/Back/Full-Stack)",
                salaryRange: "Rp 8.000.000 - Rp 15.000.000/bulan",
                companies: ["GoTo", "PT Quintal Edutama", "HITHINK TECHNOLOGY", "Odoo"],
                hardSkills: ["JavaScript (React, Vue)", "Java", "PHP", "Python", "Tailwind", "Database (SQL/NoSQL)", "Integrasi API", "Pengujian Unit"],
                softSkills: ["Analytical Thinking", "Logika Deduktif", "Pemecahan Masalah Kritis", "Kerja Sama Tim (Agile/Scrum)", "Komunikasi Teknis"],
            },
            {
                dimension: "The Builder",
                roleName: "AI/ML Engineer / Machine Learning Engineer",
                salaryRange: "Rp 7.000.000 - Rp 20.000.000/bulan",
                companies: ["Sinergimp", "PT Avows Technologies", "eVantage HR", "PT Badr Interactive"],
                hardSkills: ["Python", "R", "TensorFlow", "LLMs (LLAMA)", "RAG Pipelines", "FAISS (Vector DB)", "Prompt Engineering", "Big Data (Hadoop)"],
                softSkills: ["Kompleksitas Algoritmik", "Inovasi", "Analisis Matematis Lanjut", "Literasi Literatur Riset", "Rasa Ingin Tahu Teknis yang Tinggi", "Kolaborasi Riset", "Orientasi Logika"],
            },
            {
                dimension: "The Builder",
                roleName: "DevOps Engineer / QA Automation Engineer",
                salaryRange: "Rp 7.500.000 - Rp 14.000.000/bulan",
                companies: ["Appliance.io", "PT Sepulsa Teknologi", "PT Infokes", "PT Global Media Dev.id", "PT Intikom Berlian Mustika"],
                hardSkills: ["CI/CD", "AWS/Cloud Computing", "Docker/Kubernetes", "Appium/Selenium (Automation)", "Analisis Defect", "Validasi Data SQL"],
                softSkills: ["Tanggung Jawab Keandalan (Ownership)", "Ketelitian Ekstrem", "Pemikiran Antisipatif dan Struktural", "Keteraturan Sistematis", "Komunikasi Defect (Celah)", "Metodologi Agile"],
            },

            // ──────────────────────────────────────────────
            // 📊 EKSTRAKSI PENGETAHUAN & JAMINAN MUTU: THE THINKER
            // ──────────────────────────────────────────────
            {
                dimension: "The Thinker",
                roleName: "Data Analyst / Business Intelligence",
                salaryRange: "Rp 6.000.000 - Rp 15.000.000/bulan",
                companies: ["Astra Life", "Bank Mayapada", "Cakrawala Univ", "Mitracomm"],
                hardSkills: ["Pengolahan Basis Data (SQL)", "Python", "Data Cleansing", "Alat Visualisasi Data (Tableau, Power BI, Looker)"],
                softSkills: ["Business Acumen (Ketajaman Bisnis)", "Keterampilan Bercerita dengan Data (Data Storytelling)", "Orientasi Solusi", "Presentasi Kompleksitas", "Ketelitian"],
            },
            {
                dimension: "The Thinker",
                roleName: "Data Researcher / Strategy Analyst",
                salaryRange: "Negotiable / Kompensasi Magang",
                companies: ["PT Katadata Indonesia", "Y Ventures Group"],
                hardSkills: ["Riset Kualitatif/Kuantitatif", "Data Mining", "Pemodelan Prediktif", "Penelusuran Platform Digital", "Eksplorasi Data", "Penyusunan Laporan Wawasan Pasar"],
                softSkills: ["Kemampuan Sintesis Informasi", "Ketelitian Akademis", "Komunikasi Laporan Manajerial", "Integritas Kerahasiaan", "Analytical Thinking", "Rasa Ingin Tahu Tinggi", "Dokumentasi"],
            },

            // ──────────────────────────────────────────────
            // 🤝 MESIN PENDORONG KOMERSIAL: THE CONNECTOR
            // ──────────────────────────────────────────────
            {
                dimension: "The Connector",
                roleName: "Digital Marketing Specialist",
                salaryRange: "Rp 5.000.000 - Rp 15.000.000/bulan",
                companies: ["Agoda", "Mama Roz", "PT Bogamas Maju"],
                hardSkills: ["SEO", "SEM", "Manajemen Iklan Berbayar (Google/Meta/Tik Tok Ads)", "Funneling Strategy", "Pelacakan Konversi", "CRM Analytic", "E-commerce Management"],
                softSkills: ["Pemikiran Berorientasi Pertumbuhan", "Kepemimpinan Proyek", "Negosiasi", "Kemampuan Adaptasi Kampanye Cepat", "Orientasi Target", "Keterampilan Persuasi"],
            },
            {
                dimension: "The Connector",
                roleName: "Business Development / Account Executive",
                salaryRange: "Rp 6.000.000 - Rp 14.000.000/bulan",
                companies: ["Odoo", "PT ARC Teknologi", "GoTo (Gojek Tokopedia)"],
                hardSkills: ["Cold Calling", "Manajemen CRM (Salesforce/HubSpot)", "Analisis Metrik Keuangan (ROI)", "Proyeksi Penjualan", "Market Analysis"],
                softSkills: ["Keterampilan Membangun Relasi (Networking) via LinkedIn", "Komunikasi Bisnis Persuasif", "Resiliensi Mental", "Fokus Pencapaian", "Negosiasi"],
            },
            {
                dimension: "The Connector",
                roleName: "E-Commerce / Dropship Specialist",
                salaryRange: "Rp 2.250.000 - Rp 8.000.000/bulan",
                companies: ["Kuka Home Furniture", "Aneka Dropship"],
                hardSkills: ["Platform E-Commerce", "Affiliate Marketing", "Livestream Commerce"],
                softSkills: ["Manajemen Pelanggan", "Proaktif", "Kepekaan Tren Belanja Daring"],
            },
        ];

        // Suntik semua data ke Neon Database
        await db.insert(jobRoles).values(fullRolesData);

        return NextResponse.json({
            success: true,
            message: `${fullRolesData.length} data peran industri berhasil di-seeding ke Neon DB! 🚀`,
        });
    } catch (error) {
        console.error("Gagal melakukan seeding data kualifikasi:", error);
        return NextResponse.json(
            { success: false, error: "Proses transfer data PDF gagal dieksekusi." },
            { status: 500 }
        );
    }
}