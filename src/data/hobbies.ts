export const hobbies = [
  {
    name: 'Photography',
    description: 'Learn photography techniques and meet fellow enthusiasts!',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80'
  },
  {
    name: 'Rock Climbing',
    description: 'Challenge yourself with rock climbing adventures!',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Piano',
    description: 'Discover the joy of playing the piano and join music lovers!',
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80'
  },
  {
    name: 'Cooking',
    description: 'Explore culinary arts and cook delicious meals!',
    image: 'https://images.unsplash.com/photo-1512058564366-c9e1ed7b3ef7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Yoga',
    description: 'Find peace and flexibility through yoga practice.',
    image: 'https://images.unsplash.com/photo-1554311885-3d35f8f6295b?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Gardening',
    description: 'Grow your own plants and enjoy the beauty of nature.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80'
  }
];

export const getHobbyImage = (hobbyName: string) => {
  const hobby = hobbies.find(h => h.name === hobbyName);
  return hobby ? hobby.image : '';
};
