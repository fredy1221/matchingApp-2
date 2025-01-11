import { User } from '../types';
import { additionalUsers } from './additionalUsers';

const originalUsers: User[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 28,
    bio: 'Piano enthusiast looking for fellow musicians to practice and perform together.',
    hobbies: ['Piano', 'Classical Music', 'Music Theory'],
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    location: 'New York'
  },
  {
    id: '2',
    name: 'Eddy',
    age: 31,
    bio: 'Passionate about cooking Italian cuisine. Looking for cooking buddies!',
    hobbies: ['Cooking', 'Italian Cuisine', 'Wine Tasting'],
    profileImage: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&q=80',
    location: 'Chicago'
  },
  {
    id: '3',
    name: 'Emma',
    age: 26,
    bio: 'Paddle tennis player seeking partners for regular matches and practice.',
    hobbies: ['Paddle Tennis', 'Fitness', 'Sports'],
    profileImage: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80',
    location: 'Los Angeles'
  },
  {
    id: '4',
    name: 'Sophie',
    age: 29,
    bio: 'Looking for a paddle tennis partner in Paris 15ème. Available weekends and evenings after work!',
    hobbies: ['Paddle Tennis', 'Tennis', 'Sports'],
    profileImage: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&q=80',
    location: 'Paris 15ème'
  },
  {
    id: '5',
    name: 'Tia',
    age: 22,
    bio: 'Preparing for SAT and seeking a study buddy in Riyadh. Let\'s ace this together! 📚',
    hobbies: ['SAT Prep', 'Mathematics', 'English'],
    profileImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80',
    location: 'Riyadh'
  },
  {
    id: '6',
    name: 'Fatima',
    age: 27,
    bio: 'GMAT prep partner needed in Dubai! Currently scoring 650, aiming for 720+. Available for regular study sessions.',
    hobbies: ['GMAT Prep', 'Business', 'Analytics'],
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    location: 'Dubai'
  }
];

export const mockUsers: User[] = [...originalUsers, ...additionalUsers];
