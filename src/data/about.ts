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
  'I enjoy the space where research ideas become dependable software. My work has taken me from video coding and learned filters to industrial computer vision, MLOps, and multi-agent applications.',
  'I like making complex systems understandable: asking careful questions, building useful prototypes, and then adding the tests, documentation, and engineering discipline that make them ready to share.',
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
