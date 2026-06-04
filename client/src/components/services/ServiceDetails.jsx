export default function ServiceDetails({ service }) {
  if (!service) return null;
  return (
    <div className="brand-panel space-y-4">
      <h2 className="text-2xl font-black text-slate-950 dark:text-white">{service.title}</h2>
      <p className="leading-7 text-slate-700 dark:text-slate-300">{service.fullDescription}</p>
    </div>
  );
}
