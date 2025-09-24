export default function ProjectCard({ project }) {
  return (
    <div className="rounded-lg shadow bg-white dark:bg-gray-900 overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">View project →</a>
        )}
      </div>
    </div>
  );
}
