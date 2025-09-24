export default function ServiceCard({ service }) {
  return (
    <div className="p-6 rounded-lg shadow bg-white dark:bg-gray-900 h-full">
      <h3 className="font-semibold text-xl mb-2 text-primary-blue">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 flex-grow">{service.description}</p>
    </div>
  );
}
