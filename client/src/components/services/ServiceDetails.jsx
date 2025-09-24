export default function ServiceDetails({ service }) {
  if (!service) return null;
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{service.fullDescription}</p>
      {/* Could include images, bullet lists, etc. */}
    </div>
  );
}
