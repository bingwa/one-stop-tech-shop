import { useState } from 'react';

export default function ProjectFilter({ categories, onFilterChange }) {
  const [active, setActive] = useState('all');

  const handleClick = (cat) => {
    setActive(cat);
    onFilterChange(cat);
  };

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {['all', ...categories].map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => handleClick(cat)}
          className={`min-h-11 border-2 px-4 py-2 text-sm font-bold transition-colors ${
            active === cat
              ? 'border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950'
              : 'border-slate-950 bg-white text-slate-800 hover:bg-slate-100 dark:border-white dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900'
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
