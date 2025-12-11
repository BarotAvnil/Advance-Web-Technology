import Link from "next/link";
export default function TeamPage() {
    const teamMembers = [
        {
            name: "John Carter",
            role: "Project Manager",
            img: "https://randomuser.me/api/portraits/men/11.jpg",
        },
        {
            name: "Sarah Miller",
            role: "UI/UX Designer",
            img: "https://randomuser.me/api/portraits/women/22.jpg",
        },
        {
            name: "David Thompson",
            role: "Frontend Developer",
            img: "https://randomuser.me/api/portraits/men/33.jpg",
        },
        {
            name: "Emily Rodriguez",
            role: "Backend Engineer",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
    ];

    return (
        <div className="rounded-lg border border-white/10 bg-gray-800/60 p-6">
            <h2 className="text-2xl font-semibold text-white">Team</h2>

            <p className="text-gray-300 mt-2">
                Meet the amazing team members working behind this project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-gray-700/40 p-4 rounded-lg border border-white/10 flex flex-col items-center"
                    >
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-24 h-24 rounded-full border border-white/10"
                        />

                        <h3 className="text-white text-lg font-medium mt-3">
                            {member.name}
                        </h3>

                        <p className="text-gray-400 text-sm">{member.role}</p>

                        <Link
                            href={`/team/profile/${index}`}
                            className="mt-4 w-full text-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white py-2 transition block">
                            View Profile
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
