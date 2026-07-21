import Link from 'next/link';
import AuthButton from '@/components/AuthButton';

export function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-5 max-w-7xl mx-auto w-full">
      {/* Logo: slides in from left */}
      <Link
        href="/"
        className="flex items-center gap-2 transition-transform hover:scale-105 animate-slide-from-left"
      >
        <img src="/Asset 1.png" alt="Gapless Explorer Logo" className="h-10 w-auto" />
        <span className="font-bold text-slate-900 text-2xl">Gapless</span>
      </Link>

      {/* Right side: slides in from right */}
      <div className="flex items-center gap-6 animate-slide-from-right">
        <Link href="/pricing" className="text-slate-600 hover:text-blue-600 font-semibold transition-colors">
          Pricing
        </Link>
        <AuthButton />
      </div>
    </nav>
  );
}
