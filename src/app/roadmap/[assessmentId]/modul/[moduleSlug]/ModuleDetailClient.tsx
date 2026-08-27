'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronRight, ArrowLeft, Target, Play, Book, Lock, Unlock, CheckCircle2 } from 'lucide-react';
import type { CareerProfile, CurriculumPhase, ModuleDetail } from '@/data/gaplessData';

interface Props {
  assessmentId: string;
  moduleSlug: string;
  profile: CareerProfile;
  phaseData: CurriculumPhase;
  phaseIndex: number;
  detailData: ModuleDetail;
  isCompleted: boolean;
}

export default function ModuleDetailClient({
  assessmentId,
  moduleSlug,
  profile,
  phaseData,
  phaseIndex,
  detailData,
  isCompleted: initialCompleted,
}: Props) {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(initialCompleted);
  const [isLoading, setIsLoading] = useState(false);

  const handleMarkAsComplete = async () => {
    if (isCompleted) return; // do nothing if already complete
    
    setIsLoading(true);
    try {
      const res = await fetch('/api/roadmap/complete-module', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assessmentId, moduleSlug })
      });
      if (res.ok) {
        setIsCompleted(true);
        // Bisa navigasi balik ke roadmap atau tetap di halaman ini
        router.push(`/roadmap`);
        router.refresh();
      } else {
        alert('Gagal menandai modul selesai.');
      }
    } catch (e) {
      console.error(e);
      alert('Terjadi kesalahan jaringan.');
    } finally {
      setIsLoading(false);
    }
  };

  const badgeStatus = isCompleted ? (
    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
      Skill Terpenuhi
    </span>
  ) : (
    <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
      Belum Selesai
    </span>
  );

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-slate-500 gap-1.5 font-medium">
        <Link href="/roadmap" className="hover:text-blue-600 hover:underline transition-colors">
          Roadmap {profile.title}
        </Link>
        <ChevronRight size={14} className="opacity-50" />
        <Link href="/roadmap" className="hover:text-blue-600 hover:underline transition-colors">
          Fase {phaseIndex + 1}: {phaseData.title}
        </Link>
        <ChevronRight size={14} className="opacity-50" />
        <span className="text-slate-800 underline decoration-slate-300 underline-offset-4">
          {detailData.title}
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="w-max bg-slate-200/60 text-slate-700 px-4 py-1.5 rounded-full text-sm font-bold border border-slate-300/50">
          Modul Fase {phaseIndex + 1}: {phaseData.title}
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {detailData.title}
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
          Pahami konsep ini dan cara menerapkannya untuk memecahkan masalah nyata dari sudut pandang profesional.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
            {detailData.duration}
          </span>
          {badgeStatus}
        </div>
      </div>

      {/* Target Modul */}
      <div className="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm flex items-start gap-4">
        <div className="bg-blue-600 text-white p-2.5 rounded-lg shrink-0 shadow-md">
          <Target size={24} />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-slate-900 text-lg">Target Modul</h3>
          <p className="text-slate-600 font-medium leading-relaxed mt-1 border-b border-dashed border-slate-400 inline-block">
            {detailData.target}
          </p>
        </div>
      </div>

      {/* Konten 2 Kolom (Card Fase ditarik sedikit sbg container) */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        {/* Header Card Fase */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex flex-col items-center justify-center bg-blue-700 text-white rounded-2xl w-24 h-24 shrink-0 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full blur-md"></div>
            <span className="text-sm font-semibold opacity-90">Fase {phaseIndex + 1}</span>
            <span className="text-2xl font-black">{phaseData.title}</span>
          </div>
          <div className="flex-1">
            <div className="text-sm text-slate-500 font-bold mb-1 tracking-wider uppercase">{phaseData.duration}</div>
            <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{phaseData.subtitle}</h2>
            <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">{phaseData.description}</p>
          </div>
        </div>

        {/* 2 Kolom Konten */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Kolom Kiri: Breakdown Materi */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <Book className="text-blue-600" size={24} />
              <h3 className="text-xl font-bold text-blue-700">Breakdown Materi</h3>
            </div>
            
            <div className="space-y-6">
              {detailData.breakdown.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 text-base">{item.title}</span>
                    <span className="text-slate-500 text-sm mt-0.5">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Sumber Belajar */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Unlock className="text-blue-600" size={24} />
              <h3 className="text-xl font-bold text-blue-700">Sumber Belajar Rekomendasi</h3>
            </div>

            <div className="space-y-4">
              {detailData.resources.map((res, idx) => {
                const isVideo = res.type === 'Video';
                const Icon = isVideo ? Play : res.isFree ? Book : Lock;
                
                return (
                  <div key={idx} className="flex items-center p-4 rounded-xl border border-blue-200 bg-white shadow-sm hover:border-blue-400 transition-colors gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg shrink-0">
                      <Icon size={20} fill={isVideo ? "currentColor" : "none"} />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <a href={res.url} target="_blank" rel="noreferrer" className="font-bold text-blue-700 text-sm truncate hover:underline">
                        {res.title}
                      </a>
                      <span className="text-xs text-slate-500">{res.provider}</span>
                      <div className="flex items-center gap-2 mt-2">
                        {res.isFree ? (
                          <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Free</span>
                        ) : (
                          <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-[10px] font-bold">{res.price}</span>
                        )}
                        <span className="bg-white border border-slate-200 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">{res.type}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigasi */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link 
          href="/roadmap"
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-200 text-slate-700 font-bold hover:bg-slate-300 transition-colors"
        >
          <ArrowLeft size={18} /> Kembali ke Roadmap
        </Link>

        {isCompleted ? (
          <button 
            disabled
            className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-emerald-100 text-emerald-700 font-bold border border-emerald-200 opacity-80 cursor-not-allowed"
          >
            <CheckCircle2 size={18} /> Sudah Selesai
          </button>
        ) : (
          <button 
            onClick={handleMarkAsComplete}
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? "Memproses..." : "Tandai Selesai"}
          </button>
        )}
      </div>
    </div>
  );
}
