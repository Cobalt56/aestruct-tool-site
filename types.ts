
export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullPrice: number;
  category: ToolCategory;
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

export enum ToolCategory {
  SCRIPT = 'Script & Content Analysis',
  FINANCE = 'Finance & Operations',
  MARKET = 'Market & Strategy',
  PRODUCTION = 'Production Management'
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
}

export interface NavItem {
  label: string;
  path: string;
}