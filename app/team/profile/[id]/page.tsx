// app/team/profile/[id]/page.tsx

const teamMembers = [
  {
    name: "John Carter",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Experienced project manager focused on efficient workflow and team success.",
  },
  {
    name: "Sarah Miller",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "Creative designer passionate about building beautiful user experiences.",
  },
  {
    name: "David Thompson",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    bio: "Specializes in React, Next.js, and building modern interfaces.",
  },
  {
    name: "Emily Rodriguez",
    role: "Backend Engineer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Backend expert skilled in Node.js, APIs, and scalable architectures.",
  },
];

type ProfilePageProps = {
  params: {
    id: string;
  };
};

export default function ProfilePage({ params }: ProfilePageProps) {
  const index = Number(params.id);

  // Guard: invalid or out-of-range id
  if (Number.isNaN(index) || index < 0 || index >= teamMembers.length) {
    return (
      <div className="rounded-lg border border-red-500/40 bg-red-950/40 p-6 text-center text-red-100">
        <h1 className="text-xl font-semibold mb-2">Profile not found</h1>
        <p className="text-sm">
          We couldn’t find a team member with this ID.
        </p>
        <a
          href="/team"
          className="mt-4 inline-block rounded-full bg-red-600 hover:bg-red-700 text-sm text-white px-4 py-2 transition"
        >
          ← Back to Team
        </a>
      </div>
    );
  }

  const member = teamMembers[index];

  return (
    <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-gray-900/70 p-6 sm:p-8 shadow-lg backdrop-blur">
      <div className="flex flex-col items-center text-center gap-4">
        <img
          src={member.img}
          alt={member.name}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/20 shadow-lg object-cover"
        />

        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            {member.name}
          </h1>
          <p className="text-indigo-300 text-sm sm:text-base mt-1">
            {member.role}
          </p>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
          {member.bio}
        </p>

        <a
          href="/team"
          className="mt-4 inline-block rounded-full bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white px-6 py-2 transition"
        >
          ← Back to Team
        </a>
      </div>
    </div>
  );
}
