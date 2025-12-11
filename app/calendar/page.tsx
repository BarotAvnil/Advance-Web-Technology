export default function CalenderPage() {
  const today = new Date();
  const year = today.getFullYear();
  const monthIndex = today.getMonth(); // 0-11
  const monthName = today.toLocaleString("default", { month: "long" });

  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay(); // 0 (Sun) - 6 (Sat)
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const daysArray = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array(daysInMonth)
      .fill(0)
      .map((_, i) => i + 1),
  ];

  const events = [
    { date: "5", title: "Team Meeting", description: "Sprint planning with dev team" },
    { date: "12", title: "Project Deadline", description: "Submit client deliverables" },
    { date: "18", title: "Design Review", description: "UI/UX feedback session" },
    { date: "25", title: "Release Day", description: "Deploy new version to production" },
  ];

  return (
    <div className="rounded-lg border border-white/10 bg-gray-800/60 p-6">
      <h2 className="text-2xl font-semibold text-white">Calendar</h2>
      <p className="text-gray-300 mt-2">
        View your schedule and upcoming events for this month.
      </p>

      {/* Month Header */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {monthName} {year}
          </h3>
          <p className="text-sm text-gray-400">Current month overview</p>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mt-4 border border-white/10 rounded-lg overflow-hidden">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 bg-gray-900/70 text-center text-sm font-medium text-gray-300">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="py-2 border-b border-white/10">
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-center text-sm">
          {daysArray.map((day, index) => {
            const isToday = day === today.getDate();
            const hasEvent = events.some((e) => e.date === String(day));

            return (
              <div
                key={index}
                className={`h-16 border border-white/5 flex flex-col items-center justify-center
                ${day ? "text-gray-200" : "bg-gray-900/30"}
                ${isToday ? "bg-indigo-600/60 border-indigo-400" : ""}
              `}
              >
                {day && (
                  <>
                    <span className="text-sm">{day}</span>
                    {hasEvent && (
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white">Upcoming Events</h3>
        <div className="mt-4 space-y-3">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-gray-700/40 px-4 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600 text-white text-base font-semibold">
                {event.date}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{event.title}</p>
                <p className="text-gray-300 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
