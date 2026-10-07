export type GuideId = 'alex' | 'violet' | 'solariun';

export interface Mission {
  id: number;
  title: string;
  situation: string;
  question: string;
  options: string[];
  conversation: string;
}

export interface Phase {
  id: number;
  name: string;
  skill: string;
  guide: GuideId;
  description: string;
  guideLine: string;
  missions: Mission[];
}

export interface Character {
  name: string;
  tagline: string;
  image: string;
  full: string;
  color: string;
}
