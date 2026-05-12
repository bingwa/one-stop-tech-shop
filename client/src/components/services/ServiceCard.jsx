import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function ServiceCard({ icon: Icon, title, description, price }) {
  return (
    <article className="surface-card surface-card-hover flex h-full flex-col p-6">
      {Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 dark:bg-sky-950/40 dark:text-sky-200 dark:ring-sky-900">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
      {price && <p className="mt-5 font-bold text-slate-900 dark:text-white">{price}</p>}
      <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 dark:text-sky-300">
        Get quote
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </article>
  );
}
