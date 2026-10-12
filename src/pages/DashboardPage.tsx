import { BookOpenCheck, CalendarCheck2, Clock3, Trophy } from 'lucide-react';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import { mockSessions, mockSubjects, subjectProgress } from '../data/mockData';
import { stats } from '../data/landing';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="card p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-brand-600">Welcome back</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Your plan is on track</h2>
          </div>
          <button className="btn-primary">Generate My Study Plan</button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Study hours today" value="3.5h" hint="+1.2h vs yesterday" icon={<Clock3 size={20} />} />
        <StatCard title="Completed tasks" value="12" hint="3 tasks due this week" icon={<BookOpenCheck size={20} />} />
        <StatCard title="Upcoming exams" value="3" hint="Next exam in 5 days" icon={<CalendarCheck2 size={20} />} />
        <StatCard title="Study streak" value="12 days" hint="Strong consistency" icon={<Trophy size={20} />} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <Card title="Today's study schedule">
          <div className="space-y-4">
            {mockSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                <div>
                  <div className="font-semibold text-slate-900">{session.title}</div>
                  <div className="text-sm text-slate-500">{session.subject} • {session.time}</div>
                </div>
                <span className={`badge ${session.status === 'Completed' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : session.status === 'In Progress' ? 'border-amber-200 bg-amber-50 text-amber-700' : 'border-sky-200 bg-sky-50 text-sky-700'}`}>
                  {session.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Subject progress">
          <div className="space-y-5">
            {subjectProgress.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{item.name}</span>
                  <span className="text-slate-500">{item.percent}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
