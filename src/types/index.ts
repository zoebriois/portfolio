// Types pour le portfolio

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string; // ISO yyyy-mm-dd
  endDate?: string;  // undefined = in progress
  location: string;
  description: string;
  skills?: string[];
  type: 'tech' | 'other';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  context: string;
  decisions: {
    product: string[];
    technical: string[];
  };
  impact: string[];
  learnings: string[];
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
