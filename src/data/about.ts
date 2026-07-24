export type AboutIcon = 'education' | 'skills' | 'hobbies';

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
  'I enjoy building intelligent systems that bridge research and real-world applications. My interests span machine learning, computer vision, generative AI, MLOps, and autonomous agents, with a focus on scalable, maintainable software.',
  'AI capabilities are advancing rapidly; the decisive challenge for many organisations is adapting workflows and supplying the context that models need to work reliably. I want to help teams redesign those processes and integrate AI into practical, effective day-to-day systems.',
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Education',
    items: [
      { label: 'PhD in Video Coding — Technical University of Berlin' },
      { label: 'M.Sc. in Mathematics — Technical University of Berlin' },
      { label: 'B.Sc. in Mathematics — Technical University of Berlin' },
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
];
