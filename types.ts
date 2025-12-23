
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
