export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="card max-w-md p-10 text-center">
        <div className="text-5xl font-black text-brand-600">404</div>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-2 text-sm text-slate-500">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
