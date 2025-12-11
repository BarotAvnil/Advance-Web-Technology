export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack online store built with Next.js and Node.js.",
      status: "In Progress",
      progress: 65,
    },
    {
      title: "AI Chatbot System",
      description: "An intelligent assistant integrated with machine learning.",
      status: "Completed",
      progress: 100,
    },
    {
      title: "Inventory Management App",
      description: "A mobile and web solution to track stock & suppliers.",
      status: "Planning",
      progress: 10,
    },
    {
      title: "Social Media Dashboard",
      description: "A dashboard to visualize social engagement metrics.",
      status: "In Progress",
      progress: 40,
    },
  ];

  const statusColors: any = {
    "Completed": "bg-green-600",
    "In Progress": "bg-yellow-600",
    "Planning": "bg-blue-600",
  };

  return (
    <div className="rounded-lg border border-white/10 bg-gray-800/60 p-6">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>

      <p className="text-gray-300 mt-2">
        Overview of all ongoing, upcoming, and completed projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700/40 p-5 rounded-lg border border-white/10 shadow hover:shadow-lg transition"
          >
            <h3 className="text-white text-xl font-medium">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>

            {/* Status Badge */}
            <span
              className={`inline-block mt-3 px-3 py-1 text-sm rounded-full text-white ${statusColors[project.status]}`}
            >
              {project.status}
            </span>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-600/50 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="text-gray-400 text-sm mt-1">
                {project.progress}% completed
              </p>
            </div>

            <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
