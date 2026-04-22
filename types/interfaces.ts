// Central place for shared TypeScript interfaces and types

export interface HeroContent {
  name: string;
  accent: string;
  label: string;
  subtitle: string;
  bio: string;
  pills: string[];
  labelBioColor: string;
  subtitleColor: string;
  bioColor: string;
  heroLineColor: string;
  pillColor: string;
  pillBorder: string;
  pillText: string;
  navLinks: string[];
  orb1: string;
  orb2: string;
  orb3: string;
  cornerLabel: string;
  cornerValue: string;
  headingFont: string;
  bodyFont: string;
  heroNameAccent?: string;
  navBrandColor: string;
  navLinkColor: string;
  navLinkHover: string;
}

export interface HeroProps {
  glitchedLabel: string;
  glitchedSubtitle: string;
  glitchedBio: string;
  firstName: string;
  lastName: string;
  c: HeroContent;
  isMusic: boolean;
}

// Add more interfaces/types here as your project grows
