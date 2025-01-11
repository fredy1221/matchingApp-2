export interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  hobbies: string[];
  profileImage: string;
  location: string;
}

export interface Match {
  id: string;
  users: [string, string];
  hobby: string;
  timestamp: Date;
}

export interface Filters {
  location: string;
  skillLevel: string;
  availability: string;
}

export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  senderId: string;
}

export interface Conversation {
  id: string;
  partner: User;
  hobby: string;
  lastMessage: Message;
}
