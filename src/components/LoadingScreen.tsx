import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  message?: string;
}

export function LoadingScreen({ message = "Memuat..." }: LoadingScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full p-8">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin relative z-10" />
      </div>
      <p className="mt-6 text-slate-600 font-medium animate-pulse text-lg tracking-wide">{message}</p>
    </div>
  );
}
