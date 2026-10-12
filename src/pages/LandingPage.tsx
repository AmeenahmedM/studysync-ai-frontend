import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { landingFeatures, topNav, appName } from '../data/landing';

export default function LandingPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">S</div>
            <span className="text-lg font-bold">{appName}</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {topNav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">{item.label}</a>
            ))}
          </div>

          <div className="hidden md:flex gap-3">
            <Link to="/login" className="btn-secondary">Login</Link>
            <Link to="/register" className="btn-primary">Get Started</Link>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
            <span className="text-xl">☰</span>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:hidden">
            {topNav.map((item) => (
              <a key={item.label} href={item.href} className="block py-2 text-sm text-slate-600">{item.label}</a>
            ))}
            <div className="mt-4 flex gap-3">
              <Link to="/login" className="btn-secondary flex-1">Login</Link>
              <Link to="/register" className="btn-primary flex-1">Get Started</Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
              <Sparkles size={16} />
              Smart learning with AI support
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              Plan Smarter.<br />
              Study Better.<br />
              Build Your Career.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Organize subjects, generate study plans, track preparation progress, and keep your academic and career goals aligned in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary">Get Started</Link>
              <Link to="/login" className="btn-secondary">Login</Link>
            </div>
          </div>

          <div className="card p-6">
            <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-100">Weekly Progress</p>
                  <h3 className="mt-2 text-3xl font-bold">82%</h3>
                </div>
                <div className="rounded-full bg-white/15 p-3">
                  <Sparkles size={24} />
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="mb-2 flex justify-between text-sm text-brand-100">
                    <span>Academic readiness</span>
                    <span>87%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill w-[87%]" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm text-brand-100">
                    <span>Career roadmap</span>
                    <span>73%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill w-[73%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Features</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Everything you need to stay on track</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {landingFeatures.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-slate-600 md:px-6 lg:px-8">
          <span>© 2026 StudySync AI</span>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
