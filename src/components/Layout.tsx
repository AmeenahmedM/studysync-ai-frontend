import { Outlet } from 'react-router-dom';
import { Bell, LogOut, MoonStar, SunMedium } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { useAuthStore } from '../store/authStore';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, setUser } = useAuthStore();
  const [dark, setDark] = useState(false);

  const handleLogout = () => {
    setUser(null);
    window.location.href = '/';
  };

  return (
    <div className={`app-shell ${dark ? 'dark' : ''}`}>
      <div className="bg-slate-100 dark:bg-slate-950 min-h-screen">
        <div className="mx-auto flex max-w-7xl gap-6 p-4 lg:p-6">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

          <main className="flex-1 space-y-6">
            <header className="card flex items-center justify-between p-4">
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Good morning, {user?.name?.split(' ')[0] || 'Student'}</h1>
                <p className="text-sm text-slate-500">Keep your momentum strong today.</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600" onClick={() => setDark(!dark)}>
                  {dark ? <SunMedium size={18} /> : <MoonStar size={18} />}
                </button>
                <button className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600">
                  <Bell size={18} />
                </button>
                <button className="btn-secondary" onClick={handleLogout}>
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            </header>

            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
