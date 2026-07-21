import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-4">
      
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
          Investasi Untuk <br/> <span className="text-blue-600">Masa Depanmu.</span>
        </h1>
        <p className="text-gray-500 text-lg">
          Pilih paket yang sesuai dengan tahap pengembangan <br className="hidden md:block"/> karirmu saat ini.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch max-w-5xl mx-auto w-full">
        
        {/* Free Tier Card */}
        <div className="flex-1 w-full max-w-sm bg-gray-100 rounded-4xl p-10 flex flex-col relative">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Free</h2>
            <p className="text-gray-500 text-sm">Esensi untuk eksplorasi awal.</p>
          </div>
          
          <div className="flex items-baseline mb-8">
            <span className="text-gray-500 font-medium mr-2">Rp</span>
            <span className="text-7xl font-black text-slate-900 tracking-tighter">0</span>
            <span className="text-gray-500 font-medium ml-2">/Bulan</span>
          </div>

          <ul className="space-y-4 mb-auto">
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">1x Assessment Dasar</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">Eksplorasi Karir Terbatas</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">Public Learning Roadmap</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">Community Access</span>
            </li>
          </ul>

          <Link href="/" className="mt-10 block w-full bg-white border border-gray-200 text-slate-900 text-center py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors">
            Mulai Gratis
          </Link>
        </div>

        {/* Student Pro Tier Card */}
        <div className="flex-1 w-full max-w-sm bg-white rounded-4xl p-10 flex flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-500">
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-full whitespace-nowrap shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
            Most Recommended
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Student Pro</h2>
            <p className="text-gray-500 text-sm">Akselerasi karir dengan AI penuh.</p>
          </div>
          
          <div className="flex items-baseline mb-8">
            <span className="text-gray-500 font-medium mr-2">Rp</span>
            <span className="text-7xl font-black text-slate-900 tracking-tighter">69.000</span>
            <span className="text-gray-500 font-medium ml-2">/Bulan</span>
          </div>

          <ul className="space-y-4 mb-auto">
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">Unlimited Advanced Assessments</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">AI Career Persona Matching</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">Personalized Skill Gap Analysis</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">Locked Roadmap Tiers Unlocked</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-slate-800 text-sm font-semibold">Direct Industry Mentoring</span>
            </li>
          </ul>

          <button className="mt-10 block w-full bg-[#0066FF] hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-bold transition-all shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1">
            Upgrade Sekarang
          </button>
        </div>

      </div>
      </div>
      
      {/* Footer Text */}
      <div className="py-8 text-center mt-auto">
        <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
          Semua paket termasuk update roadmap bulanan dan akses komunitas global.
        </p>
      </div>

    </div>
  );
}
