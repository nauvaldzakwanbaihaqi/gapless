'use client';

import Image from 'next/image';
import { Sparkles, Target, Zap, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const archetypes = [
  { image: '/The Creator.png', name: 'The Creator', desc: 'Kamu yang membangun visual, narasi, dan estetika.', color: 'from-violet-500 to-pink-500', roles: ['UI/UX Designer', 'Content Creator', 'Product Designer'], icon: Sparkles },
  { image: '/The Builder.png', name: 'The Builder', desc: 'Kamu yang membangun sistem, aplikasi, dan infrastruktur.', color: 'from-blue-500 to-cyan-500', roles: ['Software Engineer', 'AI Engineer', 'Cloud Engineer'], icon: Zap },
  { image: '/The Thinker.png', name: 'The Thinker', desc: 'Kamu yang menemukan pola di balik data dan riset.', color: 'from-emerald-500 to-teal-500', roles: ['Data Analyst', 'Researcher', 'Data Scientist'], icon: Target },
  { image: '/The Connector.png', name: 'The Connector', desc: 'Kamu yang menjembatani produk, pasar, dan manusia.', color: 'from-amber-500 to-orange-500', roles: ['Digital Marketing', 'Bizdev', 'Product Marketing'], icon: Users },
];

/**
 * Scroll-revealed "4 Tipe Karier" section.
 * Uses IntersectionObserver to animate in as the user scrolls down.
 */
export function ArchetypesSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="reveal relative z-10 px-6 pb-28 max-w-6xl mx-auto">
      <h2 className="reveal-child text-center text-3xl font-bold text-slate-900 mb-3">4 Tipe Karier</h2>
      <p className="reveal-child text-center text-gray-500 mb-12">Kamu termasuk yang mana?</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {archetypes.map((arch, i) => (
          <div
            key={arch.name}
            className="reveal-child glass-card p-6 group hover:-translate-y-1 transition-transform duration-300"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="w-24 h-24 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image src={arch.image} alt={arch.name} width={96} height={96} className="object-contain drop-shadow-md rounded-2xl" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">{arch.name}</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">{arch.desc}</p>
            <div className="flex flex-col gap-1.5">
              {arch.roles.map((r) => (
                <span key={r} className="text-xs text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                  {r}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Scroll-revealed footer section.
 */
export function FooterSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <footer ref={ref} className="reveal border-t border-gray-200 py-8 text-center text-gray-400 text-sm">
      <p>Gapless · Ditenagai oleh AI · Dibuat untuk menemukan karier impianmu</p>
    </footer>
  );
}
