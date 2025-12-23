import { NavItem, ServiceCard, PortfolioItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Ecosystem', href: '#hub' },
  { label: 'The Why', href: '#about' },
];

export interface HubItem {
  id: string;
  title: string;
  description: string;
  label: string;
  icon: string;
  href: string;
  color: string;
  category: string;
}

export const HUB_ITEMS: HubItem[] = [
  {
    id: 'learn',
    title: 'Master the Craft',
    description: 'Deep dives into high-speed editing, workflow hacks, and professional storytelling.',
    label: 'Visit YouTube',
    icon: 'fa-youtube',
    href: 'https://www.youtube.com/@VishwmitraShrivastava',
    color: 'hover:border-red-500/50',
    category: 'EDUCATION'
  },
  {
    id: 'life',
    title: 'Day-to-Day',
    description: 'Behind the scenes of a creator life, daily routines, and mini-vlogs.',
    label: 'Follow Instagram',
    icon: 'fa-instagram',
    href: 'https://instagram.com/thevishwmitra',
    color: 'hover:border-pink-500/50',
    category: 'LIFESTYLE'
  },
  {
    id: 'agency',
    title: 'Done For You',
    description: 'Scale your content with my premium video editing agency team.',
    label: 'Agency Website',
    icon: 'fa-clapperboard',
    href: 'https://vishwmitra.com/agency',
    color: 'hover:border-sky-500/50',
    category: 'SERVICES'
  },
  {
    id: 'consultancy',
    title: 'Direct Strategy',
    description: '1-on-1 calls to audit your workflow or map your agency growth.',
    label: 'Book a Call',
    icon: 'fa-calendar-check',
    href: 'https://calendly.com/thevishwmitra',
    color: 'hover:border-white/50',
    category: 'CONSULTANCY'
  },
  {
    id: 'community',
    title: 'The Inner Circle',
    description: 'Join 500+ editors and agency owners in our private Discord ecosystem.',
    label: 'Join Discord',
    icon: 'fa-discord',
    href: 'https://discord.gg/yourlink',
    color: 'hover:border-indigo-500/50',
    category: 'COMMUNITY'
  }
];

export const SERVICES: ServiceCard[] = [
  {
    title: 'Workflow Audits',
    description: 'A 360-degree review of your current technical pipeline to identify bottlenecks and speed up delivery.',
    icon: 'fa-microscope',
    tags: ['Technical', 'Audit', 'Efficiency']
  },
  {
    title: 'Team Training',
    description: 'Masterclasses for your editing team to implement high-speed workflows and standardized file management.',
    icon: 'fa-users-gear',
    tags: ['Education', 'Systems', 'Scaling']
  },
  {
    title: 'Post-Production Sync',
    description: 'Custom-built templates and automation scripts to sync your remote teams and local assets instantly.',
    icon: 'fa-rotate',
    tags: ['Automation', 'Remote', 'Cloud']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'Viral Workflow Sync', category: 'Workflow Architecture', imageUrl: 'https://images.unsplash.com/photo-1574717024453-354056afd6fc?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: '24h Delivery Pipeline', category: 'Speed Optimization', imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'High-Output Team Training', category: 'Consulting', imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800' },
];