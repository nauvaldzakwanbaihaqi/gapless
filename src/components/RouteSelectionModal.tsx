'use client';

import { motion, AnimatePresence } from 'motion/react';
import { RouteSelectionCards } from './RouteSelectionCards';

interface RouteSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RouteSelectionModal({ isOpen, onClose }: RouteSelectionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-100"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl pointer-events-auto border border-slate-100 relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pilih Jalur Asesmen</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
                  Pilih salah satu dari opsi di bawah untuk menyesuaikan pengalaman tes kariermu.
                </p>
              </div>

              <RouteSelectionCards onSelect={onClose} />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
