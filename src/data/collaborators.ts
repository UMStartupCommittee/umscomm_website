export interface Collaborator {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
  alt: string;
}

export const collaborators: Collaborator[] = [
  {
    id: '1',
    name: 'Collaborator 1',
    logo: '/images/Grab_Logo.png',
    width: 200,
    height: 100,
    alt: 'Collaborator 1 logo'
  },
  {
    id: '2',
    name: 'Collaborator 2',
    logo: '/images/gdg_university_of_malaya_logo.jpeg',
    width: 200,
    height: 100,
    alt: 'Collaborator 2 logo'
  },
  {
    id: '3',
    name: 'Collaborator 3',
    logo: '/images/JobStreet-logo.png',
    width: 200,
    height: 100,
    alt: 'Collaborator 3 logo'
  },
  {
    id: '4',
    name: 'Collaborator 4',
    logo: '/images/Ludius_Logo.png',
    width: 200,
    height: 100,
    alt: 'Collaborator 4 logo'
  },
  // {
  //   id: '5',
  //   name: 'Collaborator 5',
  //   logo: '/images/Samsung_Logo.png',
  //   width: 200,
  //   height: 100,
  //   alt: 'Collaborator 5 logo'
  // }
];