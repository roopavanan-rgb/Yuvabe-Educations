import {
  ChartColumn,
  Globe,
  LayoutTemplate,
  Mail,
  Megaphone,
  Palette,
  Presentation,
  Search,
  Share2,
  Smartphone,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ModuleItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const modules: ModuleItem[] = [
  { title: "Introduction to Digital Marketing", description: "Core concepts, the customer journey, and how AI has changed the marketer’s job", icon: Presentation },
  { title: "Digital Marketing Landscape", description: "Where audiences and budgets are going, from AI search to short-form video and creators", icon: Globe },
  { title: "Behavioral Marketing", description: "Consumer psychology, and using AI for audience research and personas", icon: Users },
  { title: "Brand Design & Strategy", description: "Positioning, voice and visual identity, plus keeping AI-made content on-brand", icon: Palette },
  { title: "Website & Landing Page Creation", description: "Building pages that convert, quickly, with AI site builders", icon: LayoutTemplate },
  { title: "Search Engine Optimization (SEO)", description: "Ranking on Google and showing up in AI search tools like ChatGPT and Perplexity", icon: Search },
  { title: "Search Engine Marketing (SEM)", description: "Google Ads, AI-driven bidding, and testing ads at scale", icon: Megaphone },
  { title: "Social Media & Content Strategy", description: "Content planning, short-form video, and AI tools for scripting, design and editing", icon: Share2 },
  { title: "Email & CRM Marketing", description: "Segmentation, automated journeys and personalisation", icon: Mail },
  { title: "Mobile & Messaging Marketing", description: "WhatsApp Business, Reels and Shorts, and AI chatbots", icon: Smartphone },
  { title: "Automation & Vibe Marketing", description: "Building marketing workflows with AI and no-code tools, and knowing where a human still needs to be involved", icon: Workflow },
  { title: "Analytics & ROI Optimization", description: "GA4, dashboards, A/B testing, and turning data into decisions", icon: ChartColumn },
];
