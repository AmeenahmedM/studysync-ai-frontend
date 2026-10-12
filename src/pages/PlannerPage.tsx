import { useState } from 'react';
import Card from '../components/Card';
import { mockSessions } from '../data/mockData';

const initialPlan = [
  { title: 'Algorithms Review', time: '09:00 AM', subject: 'Data Structures' },
  { title: 'Operating System Practice', time: '11:00 AM', subject: 'OS' },
  { title: 'DBMS Lab', time: '02:30 PM', subject: 'Database Management' }
];

export default function PlannerPage() {
  const [plan, setPlan] = useState(initialPlan);
  const completeSession = (index: number) => {
    setPlan((prev) => prev.map((session, idx) => idx === index ? { ...session, title: `${session.title} (Done)` } : session));
  };

  return (
    <div className="space-y-6">
      <section className="card p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Study planner</h2>
            <p className="text-sm text-slate-500">Generate and manage your study routine.</p>
          </div>
          <button className="btn-primary">Regenerate plan</button>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card title="Generated schedule">
          <div className="space-y-4">
            {plan.map((item, index) => (
              <div key={index} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                <div>
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="text-sm text-slate-500">{item.subject} • {item.time}</div>
                </div>
                <button className="btn-secondary" onClick={() => completeSession(index)}>Mark done</button>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Week summary">
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between text-sm"><span>Time planned</span><span>16 hrs</span></div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '80%' }} /></div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm"><span>Revision</span><span>65%</span></div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '65%' }} /></div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm"><span>Practice</span><span>82%</span></div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '82%' }} /></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
