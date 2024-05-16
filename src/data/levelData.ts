const PATH = '/src/assets/level/';

export interface Level {
  level: string;
  icon: string;
  name: string;
  points: string;
}

export const levelData = [
  {
    level: 'Lv.1',
    icon: PATH + 'Lv.1.svg',
    name: '나는야 새싹',
    points: '0~16점',
  },
  {
    level: 'Lv.2',
    icon: PATH + 'Lv.2.svg',
    name: '언제나 고통을 주는 버그',
    points: '16~40점',
  },
  {
    level: 'Lv.3',
    icon: PATH + 'Lv.3.svg',
    name: '열정열정열정!',
    points: '40~80점',
  },
  {
    level: 'Lv.4',
    icon: PATH + 'Lv.4.svg',
    name: '이제 디버깅은 껌',
    points: '80~120점',
  },
  {
    level: 'Lv.5',
    icon: PATH + 'Lv.5.svg',
    name: '개발자에게 밤샘은 기본',
    points: '120점 이상',
  },
];
