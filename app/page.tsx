const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function Home() {
  return (
    <div
      className="relative py-24 sm:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-14">
          Our Global Impact
        </h2>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-3 p-6 rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur shadow-xl hover:bg-gray-900/60 transition"
            >
              <dd className="text-4xl font-bold tracking-tight text-indigo-400 drop-shadow-md sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="text-base text-gray-300">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
