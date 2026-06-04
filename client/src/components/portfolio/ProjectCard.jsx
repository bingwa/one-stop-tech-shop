export default function ProjectCard({ project }) {
  return (
    <article className="surface-card overflow-hidden">
      <img src={project.image} alt={project.title} className="h-48 w-full object-cover" loading="lazy" />
      <div className="p-5">
        <h3 className="mb-2 text-lg font-black text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mb-4 leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-black text-slate-950 underline decoration-2 underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-300">
            View project
          </a>
        )}
      </div>
    </article>
  );
}
