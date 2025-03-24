export interface Member {
  id: string;
  name: string;
  logo?: string; // Optional now as imageUrl might be used instead
  imageUrl?: string; // New field for profile images
  width?: number; // Optional as dimensions might be handled differently
  height?: number; // Optional as dimensions might be handled differently
  alt?: string; // Optional description
  role?: string; // Position in the organization
  bio?: string; // Brief description about the member
  links?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface DepartmentMember extends Member {
  department: string;
}

export const highCommittee: Member[] = [
  {
    id: '1',
    name: 'Joshua Chew Jay Han',
    role: 'President',
    // bio: 'Computer Science senior with a passion for AI startups. Founded two tech ventures during university.',
    imageUrl: '/images/committee/Joshua_Chew.jpeg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: 'alex@example.com',
    }
  },
  {
    id: '2',
    name: 'Lim Li Jie',
    role: 'Vice President',
    // bio: 'Business Management graduate with experience in marketing and sales. Passionate about entrepreneurship.',
    imageUrl: '/images/committee/lijie.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    }
  },
  {
    id: '3',
    name: 'Fang',
    role: 'Vice President 2',
    // bio: 'Marketing graduate with experience in social media and content marketing. Passionate about branding.',
    imageUrl: '/images/committee/FANG.JPG',
    links: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    }
  },
  {
    id: '4',
    name: 'FATIN MAISARA BINTI ABDULLAH',
    role: 'Secretary',
    // bio: 'Finance graduate with experience in financial planning and analysis. Passionate about investing.',
    imageUrl: '/images/committee/Fatin_Maisara.JPG',
    links: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    }
  },
  {
    id: '5',
    name: 'Kang Yi Yao',
    role: 'Vice Secretary',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/Kang Yi Yao.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    }
  },
  {
    id: '6',
    name: 'Yoonseo Han',
    role: 'Treasurer',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/yoonseo.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    }
  }
];


export const directorMembers: DepartmentMember[] = [
  {
    id: '1',
    name: 'OOI RUI ZHE (REXTON)',
    department: 'Sponsorship',
    role: 'Head of Sponsorship',
    // bio: 'Full-stack developer with experience in building web applications using React, Node.js, and MongoDB.',
    imageUrl: '/images/committee/Rexton.png',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '2',
    name: 'Ishwari A/P S.Manickavasagam ',
    department: 'Sponsorship',
    role: 'Deputy Head of Sponsorship',
    // bio: 'UI/UX designer with a passion for creating beautiful and user-friendly interfaces.',
    imageUrl: '/images/committee/ishwari.JPG',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '3',
    name: 'AFZAL BIN ZAINOL ARIFFIN',
    department: 'Sponsorship',
    role: 'Sponsorship Committee',
    // bio: 'Marketing graduate with experience in social media and content marketing. Passionate about branding.',
    imageUrl: '/images/committee/Afzal.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '4',
    name: 'NAZRUL IKRAM BIN NAZARULANUAR ',
    department: 'Sponsorship',
    role: 'Sponsorship Committee',
    // bio: 'Finance graduate with experience in financial planning and analysis. Passionate about investing.',
    imageUrl: '/images/committee/Nazrul.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '5',
    name: 'ADAM BIN AMRY KITHMAN (Kurokiyasaki)',
    department: 'Marketing',
    role: 'Head of Marketing',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/adam_bin_amry.png',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '6',
    name: 'SIEW WEI EN',
    department: 'Marketing',
    role: 'Deputy Head of Marketing',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/siew wei en.jpeg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '7',
    name: 'CHEU ZI YUAN',
    department: 'Marketing',
    role: 'Marketing Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/cheu zi yuan.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '8',
    name: 'Aman Iskandar bin Mohamad Dzulhaidi',
    department: 'Marketing',
    role: 'Marketing Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/aman_iskandar.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '9',
    name: 'Yah Rou Jun',
    department: 'Marketing',
    role: 'Marketing Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/yah rou jun.jpeg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '10',
    name: 'RAGAVENDRAN A/L SARAVANA KUMAR ( RAGA )',
    department: 'Design',
    role: 'Head of Design',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/Raga.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '11',
    name: 'Adeline Kong Earn Ning (Adeline)',
    department: 'Design',
    role: 'Deputy Head of Design',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/adeline.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '12',
    name: 'TENG JING TIAN',
    department: 'Design',
    role: 'Design Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/TengJingTian.JPG',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '13',
    name: 'Ali Muhammad',
    department: 'Design',
    role: 'Design Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/ali muhammad.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '14',
    name: 'Yoong Jing Yi',
    department: 'Design',
    role: 'Design Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/jingyi.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '15',
    name: 'EVA AFRINA BATRISYIA BT MOHD AZZUDIN',
    department: 'Design',
    role: 'Design Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/Eva Afrina.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '16',
    name: 'Harishankar Vinod (Hari)',
    department: 'Technical',
    role: 'Head of Technical',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/harish.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '17',
    name: 'Leong Yung Zheng',
    department: 'Technical',
    role: 'Deputy Head of Technical',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/leong yung zheng.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '18',
    name: 'Saad Ahmed Pathan',
    department: 'Technical',
    role: 'Technical Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/SAAD AHMED PATHAN.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '19',
    name: 'Amro Adel Abdulrahman Rashed ',
    department: 'Technical',
    role: 'Technical Committee',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/Amro2024_entry.jpg',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
  {
    id: '20',
    name: 'Abdul Hadi Jano (AJ)',
    department: 'Logistics',
    role: 'Head of Logistics',
    // bio: 'Economics graduate with experience in financial services. Passionate about banking.',
    imageUrl: '/images/committee/Jano.JPG',
    links: {
      linkedin: '#',
      twitter: '#',
      email: ' ',
    }
  },
]
