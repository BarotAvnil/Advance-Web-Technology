export default function ReportsPage() {
  const summary = [
    { label: "Total Revenue", value: "₹4,52,000", change: "+18.4%", positive: true },
    { label: "New Users", value: "320", change: "+9.2%", positive: true },
    { label: "Active Projects", value: "14", change: "+2", positive: true },
    { label: "Support Tickets", value: "23", change: "-5.1%", positive: false },
  ];

  const reportRows = [
    {
      name: "E-commerce Platform",
      period: "March 2025",
      revenue: "₹1,80,000",
      status: "On Track",
    },
    {
      name: "Inventory Management App",
      period: "March 2025",
      revenue: "₹95,000",
      status: "At Risk",
    },
    {
      name: "AI Chatbot System",
      period: "March 2025",
      revenue: "₹72,000",
      status: "On Track",
    },
    {
      name: "Social Media Dashboard",
      period: "March 2025",
      revenue: "₹55,000",
      status: "Delayed",
    },
  ];

  const statusColors: Record<string, string> = {
    "On Track": "bg-emerald-600/80 text-emerald-50",
    "At Risk": "bg-yellow-600/80 text-yellow-50",
    "Delayed": "bg-red-600/80 text-red-50",
  };

  return (
    <div className="rounded-lg border border-white/10 bg-gray-800/60 p-6">
      <h2 className="text-2xl font-semibold text-white">Reports</h2>
      <p className="text-gray-300 mt-2">
        High-level insights on performance, users, and projects.
      </p>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {summary.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-700/40 border border-white/10 rounded-lg p-4 flex flex-col justify-between"
          >
            <p className="text-sm text-gray-300">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {item.value}
            </p>
            <p
              className={`mt-1 text-sm ${
                item.positive ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {item.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Detailed table */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white mb-3">
          Project Revenue Summary
        </h3>

        <div className="overflow-x-auto rounded-lg border border-white/10 bg-gray-900/40">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-900/70 text-gray-300">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Project</th>
                <th className="px-4 py-3 text-left font-medium">Period</th>
                <th className="px-4 py-3 text-right font-medium">Revenue</th>
                <th className="px-4 py-3 text-center font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reportRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-800/60">
                  <td className="px-4 py-3 text-gray-100">{row.name}</td>
                  <td className="px-4 py-3 text-gray-300">{row.period}</td>
                  <td className="px-4 py-3 text-right text-gray-100">
                    {row.revenue}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${statusColors[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
