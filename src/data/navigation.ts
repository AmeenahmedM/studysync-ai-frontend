import { BookOpen, BriefcaseBusiness, CalendarDays, LayoutGrid, MessageSquareText, UserRound } from 'lucide-react';

export const navItems = [
  { label: 'Dashboard', to: '/app/dashboard', icon: LayoutGrid },
  { label: 'Subjects', to: '/app/subjects', icon: BookOpen },
  { label: 'Planner', to: '/app/planner', icon: CalendarDays },
  { label: 'Career', to: '/app/career', icon: BriefcaseBusiness },
  { label: 'AI Assistant', to: '/app/ai', icon: MessageSquareText },
  { label: 'Profile', to: '/app/profile', icon: UserRound }
];
