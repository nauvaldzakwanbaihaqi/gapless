'use client';

import { motion } from 'motion/react';
import { JobRole } from './GaplessApp'; // Import tipe data JobRole

interface CareerSelectionProps {
    roles: JobRole[];
    onSelect: (role: JobRole) => void; // Fungsi buat pindah ke view selanjutnya
}

export function CareerSelectionView({ roles, onSelect }: CareerSelectionProps) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Pilih Profesi Impianmu</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {roles.map((role) => (
                    <button
                        key={role.id}
                        onClick={() => onSelect(role)}
                        className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 text-left transition-all shadow-sm hover:shadow-md"
                    >
                        <h3 className="text-xl font-bold text-slate-900">{role.roleName}</h3>
                        <p className="text-sm text-gray-500 mt-1">{role.dimension}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}