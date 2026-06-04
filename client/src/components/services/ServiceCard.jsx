import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function ServiceCard({ icon: Icon, title, description, price }) {
  return (
    <article className="surface-card surface-card-hover flex h-full min-w-0 flex-col p-6">
      {Icon && (
        <div className="brand-icon mb-5">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-xl font-black text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-700 dark:text-slate-300">{description}</p>
      {price && <p className="mt-5 font-black text-slate-950 dark:text-white">{price}</p>}
      <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950 underline decoration-2 underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-300">
        Request a quote
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </article>
  );
}
