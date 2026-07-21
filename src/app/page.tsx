import { Sparkles } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { AssessmentNav } from '@/components/AssessmentNav';
import { ArchetypesSection, FooterSection } from '@/components/AnimatedSections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-space">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08), transparent 70%)' }} />
      </div>

      <Navbar />

      {/* Hero — slides up on page load */}
      <section className="relative z-10 text-center px-6 pt-20 pb-28 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-slide-up delay-100"
          style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)', color: '#1d4ed8' }}>
          <Sparkles size={14} /> Analysis Powered by AI
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-2 animate-slide-up delay-200">
          Temukan Karier<br /><span className="gradient-text">Terbaik Untukmu</span>
        </h1>
        <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-slide-up delay-300">
          Mulai perjalanan kariermu. Pilih jalur yang paling cocok dengan situasimu saat ini.
        </p>

        <div className="animate-slide-up delay-400">
          <AssessmentNav />
        </div>

        <p className="text-gray-400 text-sm mt-6 animate-slide-up delay-500">
          Tidak perlu login · 5–7 menit · 100% didukung AI
        </p>
      </section>

      {/* Archetype cards — scroll-triggered slide up */}
      <ArchetypesSection />

      {/* Footer — scroll-triggered slide up */}
      <FooterSection />
    </div>
  );
}