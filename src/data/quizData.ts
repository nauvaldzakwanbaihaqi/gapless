export interface PersonalityProfile {
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  traits: string[];
  strengths: string[];
  careers: string[];
}

export interface CareerPath {
  name: string;
  icon: string;
  type: string;
  description: string;
  salary: string;
  growth: string;
  gradientFrom: string;
  gradientTo: string;
}

export const personalityProfiles: Record<string, PersonalityProfile> = {
  'The Creator': {
    title: 'The Creator',
    emoji: '🎨',
    tagline: 'Kamu yang membangun visual, narasi, dan estetika.',
    description:
      'Kamu adalah tipe Visioner yang hidup dari ide-ide segar dan ekspresi kreatif. Kamu melihat dunia sebagai kanvas kosong yang menunggu untuk diisi dengan sesuatu yang baru dan bermakna.',
    traits: ['Imajinatif', 'Inovatif', 'Ekspresif', 'Visioner'],
    strengths: ['Visual Storytelling', 'Desain Estetika', 'Ideasi Produk', 'Empati Desain'],
    careers: ['UI/UX Designer', 'Product Designer', 'Content Creator'],
  },
  'The Builder': {
    title: 'The Builder',
    emoji: '⚙️',
    tagline: 'Kamu yang membangun sistem, aplikasi, dan infrastruktur.',
    description:
      'Kamu adalah tipe Pembangun yang berbakat mengubah ide abstrak menjadi kenyataan nyata. Kamu menemukan kepuasan dalam memecahkan masalah teknis dan membangun sesuatu yang bisa digunakan oleh banyak orang.',
    traits: ['Teknis', 'Fokus', 'Praktis', 'Tekun'],
    strengths: ['Problem Solving', 'Eksekusi Cepat', 'Ketelitian', 'Manajemen Kompleksitas'],
    careers: ['Software Engineer', 'AI Engineer', 'Cloud Engineer'],
  },
  'The Thinker': {
    title: 'The Thinker',
    emoji: '📊',
    tagline: 'Kamu yang menemukan pola di balik data dan riset.',
    description:
      'Kamu adalah tipe Analitis yang selalu ingin memahami "mengapa" di balik segala sesuatu. Kamu menikmati proses berpikir mendalam, menganalisis pola, dan menemukan solusi berbasis data.',
    traits: ['Analitis', 'Kritis', 'Logis', 'Observatif'],
    strengths: ['Analisis Data', 'Berpikir Kritis', 'Riset Terstruktur', 'Keputusan Objektif'],
    careers: ['Data Analyst', 'Researcher', 'Data Scientist'],
  },
  'The Connector': {
    title: 'The Connector',
    emoji: '🤝',
    tagline: 'Kamu yang menjembatani produk, pasar, dan manusia.',
    description:
      'Kamu adalah tipe Penghubung yang memiliki kemampuan luar biasa dalam menjalin relasi dan membangun komunitas. Kamu memahami bahwa dampak terbesar terjadi ketika orang-orang yang tepat saling terhubung.',
    traits: ['Empatik', 'Komunikatif', 'Sosial', 'Kolaboratif'],
    strengths: ['Komunikasi', 'Kepemimpinan', 'Membangun Relasi', 'Kolaborasi Tim'],
    careers: ['Digital Marketing', 'Business Development', 'Product Marketing'],
  },
};

export const careerPaths: Record<string, CareerPath> = {
  'UI/UX Designer': {
    name: 'UI/UX Designer',
    icon: '🎨',
    type: 'The Creator',
    description: 'Merancang pengalaman digital yang intuitif dan estetis.',
    salary: '$75k–$120k',
    growth: '13%',
    gradientFrom: '#8b5cf6',
    gradientTo: '#ec4899',
  },
  'Product Designer': {
    name: 'Product Designer',
    icon: '✨',
    type: 'The Creator',
    description: 'Memimpin visi kreatif produk dari konsep hingga implementasi.',
    salary: '$80k–$130k',
    growth: '11%',
    gradientFrom: '#8b5cf6',
    gradientTo: '#d946ef',
  },
  'Content Creator': {
    name: 'Content Creator',
    icon: '📝',
    type: 'The Creator',
    description: 'Membangun narasi dan konten digital yang menginspirasi.',
    salary: '$40k–$90k',
    growth: '16%',
    gradientFrom: '#a855f7',
    gradientTo: '#f43f5e',
  },
  'Software Engineer': {
    name: 'Software Engineer',
    icon: '💻',
    type: 'The Builder',
    description: 'Membangun sistem dan aplikasi yang menjadi tulang punggung teknologi.',
    salary: '$90k–$160k',
    growth: '22%',
    gradientFrom: '#3b82f6',
    gradientTo: '#06b6d4',
  },
  'AI Engineer': {
    name: 'AI Engineer',
    icon: '🤖',
    type: 'The Builder',
    description: 'Mengembangkan solusi kecerdasan buatan yang mengubah industri.',
    salary: '$100k–$180k',
    growth: '32%',
    gradientFrom: '#2563eb',
    gradientTo: '#0891b2',
  },
  'Cloud Engineer': {
    name: 'Cloud Engineer',
    icon: '☁️',
    type: 'The Builder',
    description: 'Merancang infrastruktur cloud yang scalable dan reliable.',
    salary: '$95k–$155k',
    growth: '15%',
    gradientFrom: '#3b82f6',
    gradientTo: '#14b8a6',
  },
  'Data Analyst': {
    name: 'Data Analyst',
    icon: '📈',
    type: 'The Thinker',
    description: 'Menerjemahkan data kompleks menjadi actionable insight.',
    salary: '$60k–$100k',
    growth: '25%',
    gradientFrom: '#10b981',
    gradientTo: '#14b8a6',
  },
  Researcher: {
    name: 'Researcher',
    icon: '🔬',
    type: 'The Thinker',
    description: 'Menjalankan riset fundamental yang membuka penemuan baru.',
    salary: '$55k–$95k',
    growth: '8%',
    gradientFrom: '#059669',
    gradientTo: '#0d9488',
  },
  'Data Scientist': {
    name: 'Data Scientist',
    icon: '🧠',
    type: 'The Thinker',
    description: 'Menggali pola tersembunyi dari data untuk keputusan strategis.',
    salary: '$95k–$165k',
    growth: '36%',
    gradientFrom: '#10b981',
    gradientTo: '#22d3ee',
  },
  'Digital Marketing': {
    name: 'Digital Marketing',
    icon: '📢',
    type: 'The Connector',
    description: 'Membangun koneksi antara produk dan audiens melalui digital.',
    salary: '$50k–$90k',
    growth: '10%',
    gradientFrom: '#f59e0b',
    gradientTo: '#f97316',
  },
  'Business Development': {
    name: 'Business Development',
    icon: '🤝',
    type: 'The Connector',
    description: 'Menjalin kemitraan strategis yang mendorong pertumbuhan.',
    salary: '$65k–$110k',
    growth: '7%',
    gradientFrom: '#d97706',
    gradientTo: '#ea580c',
  },
  'Product Marketing': {
    name: 'Product Marketing',
    icon: '🎯',
    type: 'The Connector',
    description: 'Menjadi jembatan antara produk, pasar, dan pelanggan.',
    salary: '$60k–$105k',
    growth: '12%',
    gradientFrom: '#f59e0b',
    gradientTo: '#ef4444',
  },
};
