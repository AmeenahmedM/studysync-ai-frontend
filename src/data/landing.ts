import { ArrowLeft, BarChart3, Sparkles, Target, TrendingUp } from 'lucide-react';

export const landingFeatures = [
  { icon: Target, title: 'Smart Planning', text: 'Create study schedules around exams, subjects, and available time.' },
  { icon: TrendingUp, title: 'Career Growth', text: 'Track skill gaps and roadmap progress for target roles.' },
  { icon: Sparkles, title: 'AI Guidance', text: 'Get concise explanations, project ideas, and task suggestions.' },
  { icon: BarChart3, title: 'Progress Analytics', text: 'Monitor academic readiness and productivity weekly.' }
];

export const quickPrompts = [
  'Explain this topic',
  'Create a quiz',
  'Suggest a project',
  'Improve my study schedule',
  'Help me prepare for interview'
];

export const stats = [
  { label: 'Study hours today', value: '3.5h' },
  { label: 'Completed tasks', value: '12' },
  { label: 'Upcoming exams', value: '3' },
  { label: 'Streak', value: '12 days' }
];

export const roadmapPhases = [
  { name: 'Foundations', status: 'Done', percent: 100 },
  { name: 'Core Practice', status: 'Active', percent: 72 },
  { name: 'Projects', status: 'Pending', percent: 42 },
  { name: 'Interview Prep', status: 'Pending', percent: 18 }
];

export const subjectProgress = [
  { name: 'Data Structures', percent: 72 },
  { name: 'Operating Systems', percent: 58 },
  { name: 'DBMS', percent: 64 },
  { name: 'Algorithms', percent: 80 }
];

export const weekBars = [45, 68, 52, 74, 60, 81, 70];

export const quickActions = [
  'Generate a study plan',
  'Review my progress',
  'Build a roadmap',
  'Ask AI for help'
];

export const topNav = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Login', href: '/login' }
];

export const appName = 'StudySync AI';
