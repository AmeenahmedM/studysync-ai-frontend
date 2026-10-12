import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BackButton({ to = '/app/dashboard' }: { to?: string }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
    >
      <ArrowLeft size={16} />
      Back
    </button>
  );
}
