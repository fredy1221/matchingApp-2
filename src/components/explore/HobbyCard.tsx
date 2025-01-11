import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HobbyCardProps {
  hobby: {
    name: string;
    description: string;
    image?: string;
  };
  onTry: () => void;
}

export function HobbyCard({ hobby }: HobbyCardProps) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/hobby/${hobby.name}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-40">
        {hobby.image ? (
          <img
            src={hobby.image}
            alt={hobby.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{hobby.name}</h3>
        <p className="text-gray-600">{hobby.description}</p>
        <button
          onClick={handleLearnMore}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
