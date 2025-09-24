import { useState } from 'react';

export default function ProjectFilter({ categories, onFilterChange }) {
  const [active, setActive] = useState('all');

  const handleClick = (cat) => {
    setActive(cat);
    onFilterChange(cat);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {['all', ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            active === cat
              ? 'bg-primary-blue text-black border-primary-blue'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
