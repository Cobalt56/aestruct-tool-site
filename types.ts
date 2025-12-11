
export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullPrice: number;
  category: ToolCategory;
  productLine: ProductLine;
  systemPromptTeaser: string;
  features: string[];
  demoPlaceholder: string;
  scenarios?: TeaserScenario[];
  demoFilePath?: string;
  demoFileSize?: string;
}

export interface TeaserScenario {
  id: string;
  label: string;
  input: string;
  output: string;
}

export const ToolCategory = {
  SCRIPT: 'Script & Content Analysis',
  FINANCE: 'Finance & Operations',
  MARKET: 'Market & Strategy',
  PRODUCTION: 'Production Management'
} as const;

export type ToolCategory = typeof ToolCategory[keyof typeof ToolCategory];

export const ProductLine = {
  INDY_STUDIO: 'Indy Studio Production Skills',
  CREATOR: 'Creator Production Skills'
} as const;

export type ProductLine = typeof ProductLine[keyof typeof ProductLine];

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
}

export interface NavItem {
  label: string;
  path: string;
}
