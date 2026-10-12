import { FormEvent, useState } from 'react';
import { Eye, EyeOff, Lock, Mail, UserRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { initialProfile } from '../data/mockData';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: 'Aisha Khan', email: 'aisha@example.com', password: 'password123' });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const token = 'demo-token';
    setUser({ ...initialProfile, ...{ name: form.name, email: form.email }, token });
    navigate('/app/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="card w-full max-w-md p-7">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
            <UserRound size={22} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Create account</h2>
          <p className="mt-2 text-sm text-slate-500">Start your smarter study journey.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
            <input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-3.5 text-slate-400" size={18} />
              <input className="input pl-10" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-3.5 text-slate-400" size={18} />
              <input className="input pl-10 pr-10" type={showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
              <button type="button" className="absolute right-3 top-3.5 text-slate-500" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">Create account</button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-600">
          Already have an account? <Link to="/login" className="font-semibold text-brand-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
