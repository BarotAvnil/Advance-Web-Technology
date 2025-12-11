export default function TeamMemberProfilePage() {
  const member = {
    name: "John Carter",
    role: "Project Manager",
    department: "Product & Delivery",
    email: "john.carter@example.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, USA",
    imageUrl:
      "https://randomuser.me/api/portraits/men/11.jpg",
    joined: "March 2022",
    about:
      "John leads cross-functional teams to deliver high-impact features on time. He focuses on communication, clarity, and alignment between design, development, and stakeholders.",
  };

  const projects = [
    { name: "E-commerce Platform Revamp", status: "In Progress", impact: "Improved conversion & performance" },
    { name: "Inventory Management Suite", status: "Completed", impact: "Streamlined stock operations" },
    { name: "AI Support Assistant", status: "Planning", impact: "Faster customer support resolution" },
  ];

  const skills = [
    "Agile & Scrum",
    "Roadmap Planning",
    "Stakeholder Management",
    "Risk Analysis",
    "Team Leadership",
    "JIRA / Trello",
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb / heading */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Team · Profile
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
            {member.name}
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {member.role} · {member.department}
          </p>
        </div>
      </div>

      {/* Top section */}
      <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-6 sm:p-7 shadow-lg backdrop-blur flex flex-col lg:flex-row gap-6">
        {/* Avatar + quick info */}
        <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/3">
          <div className="relative">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-full border border-white/20 object-cover shadow-xl"
            />
            <span className="absolute -bottom-1 -right-1 inline-flex items-center rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white shadow-md">
              Active
            </span>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-300">{member.role}</p>
            <p className="text-xs text-gray-400">{member.department}</p>
          </div>

          <div className="space-y-1 text-xs text-gray-300 w-full">
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-400">Email</span>
              <span className="text-gray-100 truncate">{member.email}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-400">Phone</span>
              <span className="text-gray-100">{member.phone}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-400">Location</span>
              <span className="text-gray-100">{member.location}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-400">Joined</span>
              <span className="text-gray-100">{member.joined}</span>
            </div>
          </div>

          <button className="mt-2 w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white py-2.5 transition">
            Message {member.name.split(" ")[0]}
          </button>
        </div>

        {/* About + skills + projects */}
        <div className="flex-1 space-y-6">
          {/* About */}
          <section className="rounded-2xl border border-white/10 bg-gray-900/60 p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-white">About</h2>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
              {member.about}
            </p>
          </section>

          {/* Skills */}
          <section className="rounded-2xl border border-white/10 bg-gray-900/60 p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-white">Key Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Projects section */}
      <div className="rounded-2xl border border-white/10 bg-gray-900/70 p-5 sm:p-6 shadow-md backdrop-blur">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-sm font-semibold text-white">
            Projects led by {member.name.split(" ")[0]}
          </h2>
          <span className="text-[11px] rounded-full border border-white/10 px-3 py-1 text-gray-300 bg-gray-900/80">
            {projects.length} active initiatives
          </span>
        </div>

        <div className="space-y-3 text-sm">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3 hover:border-indigo-500/50 hover:bg-gray-900 transition"
            >
              <div>
                <p className="font-medium text-white">{project.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {project.impact}
                </p>
              </div>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium
                bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
