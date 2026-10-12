import { useMemo, useState } from 'react';
import { Plus, Search, Trash2 } from 'lucide-react';
import Card from '../components/Card';
import { mockSubjects } from '../data/mockData';
import { Subject } from '../types';

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>(mockSubjects as Subject[]);
  const [query, setQuery] = useState('');
  const [current, setCurrent] = useState<Partial<Subject>>({ name: '', difficulty: 'Medium', examDate: '2026-12-01' });

  const filtered = useMemo(() => {
    return subjects.filter((subject) => subject.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, subjects]);

  const addSubject = () => {
    if (!current.name) return;
    const nextSubject: Subject = {
      id: Date.now(),
      name: current.name,
      difficulty: current.difficulty || 'Medium',
      examDate: current.examDate || '2026-12-01',
      completion: 0,
      topics: [],
      color: 'bg-brand-500'
    };
    setSubjects((prev) => [nextSubject, ...prev]);
    setCurrent({ name: '', difficulty: 'Medium', examDate: '2026-12-01' });
  };

  const deleteSubject = (id: number) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Subjects</h2>
            <p className="text-sm text-slate-500">Organize your courses and track completion.</p>
          </div>
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-3.5 text-slate-400" size={16} />
            <input className="input pl-9" placeholder="Search subjects" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1.9fr]">
        <Card title="Add subject">
          <div className="space-y-4">
            <input className="input" value={current.name || ''} onChange={(e) => setCurrent({ ...current, name: e.target.value })} placeholder="Subject name" />
            <select className="input" value={current.difficulty || 'Medium'} onChange={(e) => setCurrent({ ...current, difficulty: e.target.value as Subject['difficulty'] })}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <input className="input" type="date" value={current.examDate || ''} onChange={(e) => setCurrent({ ...current, examDate: e.target.value })} />
            <button className="btn-primary w-full" onClick={addSubject}>
              <Plus size={16} className="mr-2" /> Add Subject
            </button>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((subject) => (
            <div key={subject.id} className="card p-5">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className={`mb-3 h-2.5 w-12 rounded-full ${subject.color}`} />
                  <h3 className="text-lg font-semibold text-slate-900">{subject.name}</h3>
                </div>
                <button onClick={() => deleteSubject(subject.id)} className="text-slate-400 hover:text-red-600">
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>{subject.difficulty}</span>
                <span>{subject.examDate}</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${subject.completion}%` }} />
              </div>

              <div className="mt-4 text-sm text-slate-500">
                {subject.topics.length} topics • {subject.completion}% complete
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
