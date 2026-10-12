export const mockSubjects = [
  {
    id: 1,
    name: 'Data Structures',
    difficulty: 'Hard',
    examDate: '2026-11-20',
    completion: 72,
    topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs'],
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Operating Systems',
    difficulty: 'Medium',
    examDate: '2026-11-28',
    completion: 58,
    topics: ['Processes', 'Threads', 'Memory', 'Scheduling'],
    color: 'bg-violet-500'
  },
  {
    id: 3,
    name: 'Database Management',
    difficulty: 'Medium',
    examDate: '2026-12-04',
    completion: 64,
    topics: ['SQL', 'Indexes', 'Transactions', 'Normalization'],
    color: 'bg-emerald-500'
  }
];

export const mockSessions = [
  { id: 1, title: 'DSA Revision', date: '2026-10-13', time: '09:00 AM', subject: 'Data Structures', status: 'Upcoming' },
  { id: 2, title: 'OS Practice', date: '2026-10-13', time: '02:00 PM', subject: 'Operating Systems', status: 'In Progress' },
  { id: 3, title: 'SQL Lab', date: '2026-10-14', time: '10:30 AM', subject: 'Database Management', status: 'Completed' }
];

export const mockCareerDomains = [
  {
    id: 1,
    name: 'Java Full Stack Development',
    description: 'Build end-to-end web applications using Java, Spring Boot, and modern frontend frameworks.',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Frontend Basics']
  },
  {
    id: 2,
    name: 'Data Science',
    description: 'Turn data into insight using analytics, machine learning, and business intelligence.',
    skills: ['Python', 'Statistics', 'Machine Learning', 'Visualization']
  },
  {
    id: 3,
    name: 'Cybersecurity',
    description: 'Protect systems, analyze vulnerabilities, and secure digital assets.',
    skills: ['Networking', 'Security Basics', 'Linux', 'Threat Analysis']
  }
];

export const mockMessages = [
  { id: 1, role: 'assistant', text: 'Hi! I can help you plan study sessions, explain a concept, or suggest a project path.' },
  { id: 2, role: 'user', text: 'Help me explain binary search in simple terms.' },
  { id: 3, role: 'assistant', text: 'Binary search works on sorted data by repeatedly checking the middle value and cutting the search space in half.' }
];

export const initialProfile = {
  name: 'Aisha Khan',
  email: 'aisha@example.com',
  course: 'B.Tech Computer Science',
  semester: '6th Semester',
  streak: 12
};
