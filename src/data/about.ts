export type AboutIcon = 'education' | 'skills' | 'hobbies' | 'languages';

export interface AboutHighlightItem {
  label: string;
  image?: string;
}

export interface AboutHighlight {
  title: string;
  value?: string;
  description?: string;
  items?: AboutHighlightItem[];
  icon: AboutIcon;
}

export const aboutIntro = [
  'My technology stack spans the entire lifecycle of modern AI applications—from mathematical foundations, machine learning, and computer vision to software development, MLOps, and agentic AI systems.',
  'My focus is not on mastering as many individual technologies as possible, but on combining them thoughtfully to build robust, scalable, and maintainable systems.',
  'This breadth enables me to approach both scientific questions and industrial development projects holistically, while integrating new technologies quickly into existing solutions.',
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Education',
    items: [
      { label: 'PhD in Video Coding — Technische Universität Berlin' },
      { label: 'M.Sc. in Mathematics — Technische Universität Berlin' },
      { label: 'B.Sc. in Mathematics — Technische Universität Berlin' },
    ],
    icon: 'education',
  },
  {
    title: 'Skills',
    items: [
      { label: 'Generative AI & Agent Systems (LangGraph, Prompt Engineering)' },
      { label: 'Computer Vision & Machine Learning (CNNs, ViTs, Fine-Tuning)' },
      { label: 'Software Development & MLOps (Python, C++, Docker, CI/CD)' },
      { label: 'Image/Video Processing & Algorithmics (Video Codecs, Deep Learning Filters)' },
    ],
    icon: 'skills',
  },
  {
    title: 'Hobbies',
    items: [
      { label: 'Tinkering with custom AI agents', image: '/assets/hobby-ai-agents.png' },
      { label: 'Electronic music & dancing', image: '/assets/hobby-music-dancing.png' },
      { label: 'Cultural exchange & traveling', image: '/assets/hobby-cultural-exchange-travel.png' },
      { label: 'Table tennis', image: '/assets/hobby-table-tennis.png' },
    ],
    icon: 'hobbies',
  },
  {
    title: 'Languages',
    value: 'German, English, Russian',
    description: 'Native German; business-fluent English; very good Russian',
    icon: 'languages',
  },
];
