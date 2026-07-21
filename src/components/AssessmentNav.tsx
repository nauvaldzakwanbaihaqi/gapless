'use client';

import Link from 'next/link';
import { Brain, Compass, ArrowRight } from 'lucide-react';
import { useGaplessContext } from '@/contexts/CareerContext';

export function AssessmentNav() {
    const { setSelectedRole, setCurrentView } = useGaplessContext();

    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Left: AI Assessment */}
            <Link
                href="/assessment"
                onClick={() => {
                    setSelectedRole(null);
                    setCurrentView('assessment');
                }}
                className="w-full sm:w-auto"
            >
                <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-xl font-medium text-white transition-all duration-200" style={{ backgroundColor: '#3b82f6' }}>
                    Saya Belum Tahu Minat Saya
                </button>
            </Link>

            {/* Right: Career Test */}
            <Link 
                href="/career-test" 
                onClick={() => setCurrentView('selection')}
                className="w-full sm:w-auto"
            >
                <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-xl font-medium text-slate-900 border border-slate-300 hover:bg-slate-50 transition-all duration-200 bg-transparent">
                    Saya Sudah Tahu Minat Saya
                </button>
            </Link>
        </div>
    );
}