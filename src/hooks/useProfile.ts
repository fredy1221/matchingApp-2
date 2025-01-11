import { useState } from 'react';
import type { UserProfile } from '../types/profile';

// Mock current user profile - In a real app, this would come from your backend
const mockProfile: UserProfile = {
  id: 'current-user',
  name: 'Alex Thompson',
  age: 28,
  location: 'New York',
  bio: 'Passionate about connecting people through shared interests.',
  hobbies: [
    { name: 'Photography', skillLevel: 'Intermediate' },
    { name: 'Rock Climbing', skillLevel: 'Advanced' },
    { name: 'Piano', skillLevel: 'Beginner' }
  ],
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
  availability: [
    { weekday: 1, startTime: '09:00', endTime: '17:00' },
    { weekday: 3, startTime: '09:00', endTime: '17:00' },
    { weekday: 5, startTime: '09:00', endTime: '17:00' },
  ]
};

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(mockProfile);
  const [isEditing, setIsEditing] = useState(false);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
    return true;
  };

  const addHobby = (hobby: { name: string; skillLevel: string }) => {
    if (!profile.hobbies.some(h => h.name === hobby.name)) {
      setProfile(prev => ({
        ...prev,
        hobbies: [...prev.hobbies, hobby]
      }));
    }
  };

  const removeHobby = (hobby: { name: string }) => {
    setProfile(prev => ({
      ...prev,
      hobbies: prev.hobbies.filter(h => h.name !== hobby.name)
    }));
  };

  const updateSkillLevel = (hobby: { name: string }, skillLevel: string) => {
    setProfile(prev => ({
      ...prev,
      hobbies: prev.hobbies.map(h => 
        h.name === hobby.name ? { ...h, skillLevel } : h
      )
    }));
  };

  return {
    profile,
    isEditing,
    setIsEditing,
    updateProfile,
    addHobby,
    removeHobby,
    updateSkillLevel
  };
}
