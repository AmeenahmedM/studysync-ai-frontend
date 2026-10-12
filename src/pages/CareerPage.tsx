import Card from '../components/Card';
import { mockCareerDomains } from '../data/mockData';

export default function CareerPage() {
  return (
    <div className="space-y-6">
      <section className="card p-5">
        <h2 className="text-2xl font-bold text-slate-900">Career domains</h2>
        <p className="mt-1 text-sm text-slate-500">Choose a path and track your preparation.</p>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {mockCareerDomains.map((domain) => (
          <Card key={domain.id} title={domain.name}>
            <p className="text-sm text-slate-600">{domain.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {domain.skills.map((skill) => (
                <span key={skill} className="badge border-slate-200 bg-slate-50 text-slate-700">{skill}</span>
              ))}
            </div>
            <button className="btn-primary mt-5 w-full">Select career path</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
