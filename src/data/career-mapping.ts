export type Archetype = 'The Creator' | 'The Builder' | 'The Thinker' | 'The Connector';

export interface CareerOption {
  title: string;
  archetype: Archetype;
  skills: string[];
  description: string;
}

export const CAREER_OPTIONS: CareerOption[] = [
  // The Creator
  {
    title: 'UI/UX Designer',
    archetype: 'The Creator',
    skills: ['Design Thinking', 'Figma', 'User Research', 'Prototyping', 'Visual Design'],
    description: 'Merancang pengalaman digital yang intuitif dan estetis bagi pengguna.',
  },
  {
    title: 'Product Designer',
    archetype: 'The Creator',
    skills: ['Product Strategy', 'Wireframing', 'Design Systems', 'User Testing', 'Interaction Design'],
    description: 'Memimpin visi kreatif produk dari konsep hingga ke tangan pengguna.',
  },
  {
    title: 'Content Creator',
    archetype: 'The Creator',
    skills: ['Copywriting', 'Video Editing', 'Social Media', 'Storytelling', 'Brand Building'],
    description: 'Membangun narasi dan konten digital yang menginspirasi audiens luas.',
  },
  // The Builder
  {
    title: 'Software Engineer',
    archetype: 'The Builder',
    skills: ['Programming', 'System Design', 'Problem Solving', 'Code Review', 'API Development'],
    description: 'Membangun sistem dan aplikasi yang menjadi tulang punggung teknologi.',
  },
  {
    title: 'AI Engineer',
    archetype: 'The Builder',
    skills: ['Machine Learning', 'Python', 'Data Pipelines', 'Model Deployment', 'Prompt Engineering'],
    description: 'Mengembangkan solusi kecerdasan buatan yang mengubah cara kerja industri.',
  },
  {
    title: 'Cloud Engineer',
    archetype: 'The Builder',
    skills: ['AWS/GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'],
    description: 'Merancang dan mengelola infrastruktur cloud yang scalable dan reliable.',
  },
  // The Thinker
  {
    title: 'Data Analyst',
    archetype: 'The Thinker',
    skills: ['SQL', 'Data Visualization', 'Statistical Analysis', 'Excel', 'Business Acumen'],
    description: 'Menerjemahkan data kompleks menjadi insight yang bisa ditindaklanjuti.',
  },
  {
    title: 'Researcher',
    archetype: 'The Thinker',
    skills: ['Literature Review', 'Experiment Design', 'Critical Thinking', 'Academic Writing', 'Statistical Methods'],
    description: 'Menjalankan riset fundamental yang membuka penemuan dan pemahaman baru.',
  },
  {
    title: 'Data Scientist',
    archetype: 'The Thinker',
    skills: ['Python/R', 'Machine Learning', 'Statistics', 'Deep Learning', 'Feature Engineering'],
    description: 'Menggali pola tersembunyi dari data untuk mengambil keputusan strategis.',
  },
  // The Connector
  {
    title: 'Digital Marketing',
    archetype: 'The Connector',
    skills: ['SEO/SEM', 'Content Strategy', 'Analytics', 'Social Media Ads', 'Email Marketing'],
    description: 'Membangun koneksi antara produk dan audiens melalui strategi digital.',
  },
  {
    title: 'Business Development',
    archetype: 'The Connector',
    skills: ['Negotiation', 'Relationship Building', 'Market Research', 'Strategic Partnerships', 'Sales'],
    description: 'Menjalin kemitraan strategis yang mendorong pertumbuhan bisnis.',
  },
  {
    title: 'Product Marketing',
    archetype: 'The Connector',
    skills: ['Go-to-Market', 'Competitive Analysis', 'Messaging', 'Customer Insights', 'Launch Strategy'],
    description: 'Menjadi jembatan antara produk, pasar, dan pelanggan.',
  },
];
