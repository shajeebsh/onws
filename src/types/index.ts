export interface HeroProps {
  title: string;
  subtitle: string;
  cta1: { text: string; href: string };
  cta2?: { text: string; href: string };
  imageSrc?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export interface GradientCardProps {
  variant?: 'emerald' | 'navy' | 'slate';
  class?: string;
  children: any;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: 'streetview' | 'erp-crm' | 'recruitment' | 'other';
  message: string;
  budget?: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export interface TechStack {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'infrastructure';
  logo?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}
