// Brand Colors
export const BRAND_COLORS = {
  PRIMARY: '#034078',
  SECONDARY: '#1282a2',
  INK: '#0a1128',
  DEEP: '#001f54',
  SURFACE: '#fefcfb',
  TEXT: '#0a1128',
  TEXT_DARK: '#fefcfb',
} as const;

// Animation Delays
export const ANIMATION_DELAYS = {
  STAGGER: 0.1,
  FAST: 0.2,
  MEDIUM: 0.4,
  SLOW: 0.6,
} as const;

// Common Animation Durations
export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  MEDIUM: 0.6,
  SLOW: 0.8,
  VERY_SLOW: 1.2,
} as const;

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'info@ampliedtech.com',
  PHONE: '+91 98765 43210',
  LOCATION: 'India',
  BUSINESS_HOURS: '24/7 Support',
} as const;

// Social Links
export const SOCIAL_LINKS = {
  LINKEDIN: 'https://linkedin.com/company/ampliedtech',
  TWITTER: 'https://twitter.com/ampliedtech',
  GITHUB: 'https://github.com/ampliedtech',
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Customers', href: '/customers' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

// Company Information
export const COMPANY_INFO = {
  NAME: 'Amplied Technologies LLP',
  TAGLINE: 'Your Partner in Digital Growth.',
  DESCRIPTION: 'We deliver secure, scalable, and innovative technology-as-a-service — from software development to cloud, DevOps, and cybersecurity — helping businesses worldwide accelerate their digital transformation.',
  FOUNDING_YEAR: '2025',
  FOUNDER: 'Naveen Goswami',
} as const;

// SEO Constants
export const SEO = {
  SITE_URL: 'https://ampliedtech.com',
  SITE_NAME: 'Amplied Technologies LLP',
  DEFAULT_TITLE: 'Amplied Technologies LLP - Technology as a Service',
  DEFAULT_DESCRIPTION: 'We deliver secure, scalable, and innovative technology-as-a-service — from software development to cloud, DevOps, and cybersecurity — helping businesses worldwide accelerate their digital transformation.',
  KEYWORDS: ['technology as a service', 'software development', 'cloud services', 'DevOps', 'cybersecurity', 'digital transformation'] as string[],
} as const;
