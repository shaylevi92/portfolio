export interface Project {
  id: string
  num: string
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  href: string
  previewImage: string
  meta: { role: string; timeframe: string; tools: string; tags: string; extra: string }
}

export const projects: Project[] = [
  {
    id: 'hfs',
    num: '001',
    year: '2026',
    title: 'Dropit',
    subtitle: 'Hands-Free Shopping',
    description: 'Rebuilding the Hands-Free Shopping experience for Dropit — turning a fragmented hub-based flow into a single continuous path.',
    tags: ['UX', 'Flow architecture'],
    href: '/work/hfs',
    previewImage: 'https://cdn.prod.website-files.com/68a99d547e65bfdde9c33430/69a6d979631d2c5bb52effaa_acdefdf0fe020902a7e1579014750a38_Hands%20free%20shopping%20-%20hero.png',
    meta: {
      role: 'Product Designer · UX/UI',
      timeframe: '3 Weeks · Q1 2026',
      tools: 'Figma · Amplitude',
      tags: 'Retail · Consumer',
      extra: '0 hub returns · Complete flow',
    },
  },
  {
    id: 'dropit-rules',
    num: '002',
    year: '2024',
    title: 'Dropit',
    subtitle: 'Inventory Rule Builder',
    description: 'Redesigning Dropit\'s Inventory Rule Builder — replacing a fragmented, technical interface with a structured, AI-assisted flow.',
    tags: ['SaaS', 'Retail ops'],
    href: '/work/dropit-rules',
    previewImage: 'https://cdn.prod.website-files.com/68a99d547e65bfdde9c33430/699b615daba0955bebf4a319_hero-screen-dropit.png',
    meta: {
      role: 'Product Designer · UX/UI',
      timeframe: '1 Week · Q4 2024',
      tools: 'Figma · After Effects',
      tags: 'SaaS · Retail ops',
      extra: 'Enterprise · Inventory',
    },
  },
  {
    id: 'iplant',
    num: '003',
    year: '2023',
    title: 'iPlant',
    subtitle: 'Smart IoT Greenhouse',
    description: 'Designing an AI-based IoT greenhouse management system — turning the complexity of precision agriculture into an interface any farmer can operate.',
    tags: ['IoT', 'Consumer'],
    href: '/work/iplant',
    previewImage: 'https://cdn.prod.website-files.com/68a99d547e65bfdde9c33430/69b16bc0fc1ab10962efbea9_cbca3c0db6f3f9a4812cfcc162e02454_Image-container-iplant.png',
    meta: {
      role: 'Product Designer · UX/UI',
      timeframe: '9 Weeks · Q3 2023',
      tools: 'Figma · After Effects',
      tags: 'IoT · AI · Automation',
      extra: 'Web + Mobile',
    },
  },
  {
    id: 'careery',
    num: '004',
    year: '2023',
    title: 'Careery',
    subtitle: 'Paths to Clarity',
    description: 'Designing Careery — a mobile app that helps people navigate career transitions through personalized assessments and expert mentorship.',
    tags: ['Consumer', 'Mobile'],
    href: '/work/careery',
    previewImage: 'https://shaylevi.com/wp-content/uploads/2024/04/Frame-1948754694.webp',
    meta: {
      role: 'Product Designer · UX/UI',
      timeframe: '12 Weeks · 2023–2024',
      tools: 'Figma',
      tags: 'Consumer · Mobile',
      extra: 'iOS · Mobile-first',
    },
  },
]
