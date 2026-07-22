export type AboutIcon = 'education' | 'skills' | 'research' | 'languages';

export interface AboutHighlight {
  title: string;
  value: string;
  description: string;
  icon: AboutIcon;
}

export interface Hobby {
  name: string;
  description: string;
  icon: 'agents' | 'music' | 'travel' | 'table-tennis';
}

export const aboutIntro = [
  'My technology stack spans the entire lifecycle of modern AI applications—from mathematical foundations, machine learning, and computer vision to software development, MLOps, and agentic AI systems.',
  'My focus is not on mastering as many individual technologies as possible, but on combining them thoughtfully to build robust, scalable, and maintainable systems.',
  'This breadth enables me to approach both scientific questions and industrial development projects holistically, while integrating new technologies quickly into existing solutions.',
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Education',
    value: 'PhD in video coding',
    description: 'Technical University of Berlin',
    icon: 'education',
  },
  {
    title: 'Skills',
    value: 'AI systems & vision',
    description: 'Multi-agent workflows, MLOps, and image processing',
    icon: 'skills',
  },
  {
    title: 'Research',
    value: 'Video coding',
    description: 'Learned filters, signal processing, and quality assessment',
    icon: 'research',
  },
  {
    title: 'Languages',
    value: 'German, English, Russian',
    description: 'Native German; business-fluent English; very good Russian',
    icon: 'languages',
  },
];

export const hobbies: Hobby[] = [
  {
    name: 'Custom AI agents',
    description: 'Tinkering with new ways to make agents useful, controllable, and fun.',
    icon: 'agents',
  },
  {
    name: 'Electronic music & dancing',
    description: 'A creative reset away from screens and technical diagrams.',
    icon: 'music',
  },
  {
    name: 'Cultural exchange & traveling',
    description: 'Learning from places, people, and perspectives different from my own.',
    icon: 'travel',
  },
  {
    name: 'Table tennis',
    description: 'Fast rallies, focus, and a little friendly competition.',
    icon: 'table-tennis',
  },
];
