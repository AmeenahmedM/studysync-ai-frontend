import { ReactNode } from 'react';

export default function Card({ title, children, action }: { title?: string; action?: ReactNode; children: ReactNode }) {
  return (
    <div className="card p-5">
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between">
          {title && <h3 className="text-lg font-semibold text-slate-800">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
