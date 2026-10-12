import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/navigation';
import { Menu, X } from 'lucide-react';

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const location = useLocation();

  return (
    <>
      <div className="lg:hidden">
        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <aside className={`${open ? 'block' : 'hidden'} w-full lg:block lg:w-72`}>
        <div className="card h-full p-4">
          <div className="mb-7 flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">S</div>
            <div>
              <div className="text-lg font-bold text-slate-900">StudySync</div>
              <div className="text-xs text-slate-500">AI planner</div>
            </div>
          </div>

          <nav className="space-y-1.5">
            {navItems.map(({ label, to, icon: Icon }) => {
              const active = location.pathname === to;
              return (
                <Link key={to} to={to} className={`nav-link ${active ? 'active' : ''}`}>
                  <Icon size={16} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
