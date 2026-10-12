export type Subject = {
  id: number;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  examDate: string;
  completion: number;
  topics: string[];
  color: string;
};

export type StudySession = {
  id: number;
  title: string;
  date: string;
  time: string;
  subject: string;
  status: 'Completed' | 'Upcoming' | 'In Progress';
};

export type CareerDomain = {
  id: number;
  name: string;
  description: string;
  skills: string[];
};

export type ChatMessage = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
};

export type UserProfile = {
  name: string;
  email: string;
  course: string;
  semester: string;
  streak: number;
};
