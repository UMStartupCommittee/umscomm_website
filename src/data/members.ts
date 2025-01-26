export interface Member {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
  alt: string;
}

export const members: Member[] = [
  {
    id: '1',
    name: 'Member 1',
    logo: '/images/cat1.jpg',
    width: 200,
    height: 100,
    alt: 'Member 1 logo'
  },
  {
    id: '2',
    name: 'Member 2',
    logo: '/images/cat2.jpeg',
    width: 200,
    height: 100,
    alt: 'Member 2 logo'
  },
  {
    id: '3',
    name: 'Member 3',
    logo: '/images/cat3.jpg',
    width: 200,
    height: 100,
    alt: 'Member 3 logo'
  },
  {
    id: '4',
    name: 'Member 4',
    logo: '/images/cat4.jpg',
    width: 200,
    height: 100,
    alt: 'Member 4 logo'
  },
  {
    id: '5',
    name: 'Member 5',
    logo: '/images/cat5.jpeg',
    width: 200,
    height: 100,
    alt: 'Member 5 logo'
  }
];