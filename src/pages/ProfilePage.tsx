import { useState } from 'react';
import { initialProfile } from '../data/mockData';
import { useAuthStore } from '../store/authStore';

export default function ProfilePage() {
  const { user, setUser } = useAuthStore();
  const [form, setForm] = useState({
    name: user?.name || initialProfile.name,
    email: user?.email || initialProfile.email,
    course: 'B.Tech Computer Science',
    semester: '6th Semester'
  });

  const handleSave = () => {
    setUser({ ...user!, name: form.name, email: form.email, course: form.course, semester: form.semester, token: user?.token || 'demo-token' });
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <div className="card p-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-700">
          {user?.name?.slice(0, 1) || 'A'}
        </div>
        <h2 className="mt-5 text-2xl font-bold text-slate-900">{form.name}</h2>
        <p className="text-sm text-slate-500">{form.course}</p>
        <div className="mt-5 rounded-xl bg-brand-50 p-3 text-sm text-brand-700">
          Current streak: {user?.streak || 12} days
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-xl font-bold text-slate-900">Edit profile</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
            <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
            <input className="input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Course</label>
            <input className="input" value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Semester</label>
            <input className="input" value={form.semester} onChange={(e) => setForm({ ...form, semester: e.target.value })} />
          </div>
        </div>
        <button className="btn-primary mt-5" onClick={handleSave}>Save changes</button>
      </div>
    </div>
  );
}
