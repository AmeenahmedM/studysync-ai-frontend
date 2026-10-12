import { ReactNode } from 'react';

export default function StatCard({ title, value, hint, icon }: { title: string; value: string; hint: string; icon: ReactNode }) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          {icon}
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">{hint}</p>
    </div>
  );
}
