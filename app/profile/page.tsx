export default function ProfilePage() {
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    role: "Senior Developer",
    username: "tom.cook",
    location: "San Francisco, USA",
    phone: "+1 (555) 123-4567",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    joined: "January 2023",
  };

  return (
    <div className="space-y-6">
      {/* Top profile card */}
      <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-6 shadow-md backdrop-blur">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={user.imageUrl}
              alt={user.name}
              className="h-24 w-24 rounded-full border border-white/20 shadow-lg object-cover"
            />
          </div>

          {/* Name + info */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  {user.name}
                </h1>
                <p className="text-sm text-gray-300">{user.role}</p>
                <p className="text-sm text-gray-400 mt-1">
                  @{user.username} · Joined {user.joined}
                </p>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white transition">
                  Edit Profile
                </button>
                <button className="px-4 py-2 rounded-full border border-white/20 bg-gray-900/60 text-sm text-gray-200 hover:bg-gray-800 transition">
                  View Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side: personal & contact */}
        <div className="space-y-6 lg:col-span-2">
          {/* Personal info */}
          <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-white">
              Personal Information
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Basic details about your account.
            </p>

            <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-gray-400">Full Name</dt>
                <dd className="text-gray-100">{user.name}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Username</dt>
                <dd className="text-gray-100">@{user.username}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Email</dt>
                <dd className="text-gray-100">{user.email}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Phone</dt>
                <dd className="text-gray-100">{user.phone}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Location</dt>
                <dd className="text-gray-100">{user.location}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Role</dt>
                <dd className="text-gray-100">{user.role}</dd>
              </div>
            </dl>
          </div>

          {/* Security */}
          <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-white">Security</h2>
            <p className="text-sm text-gray-400 mt-1">
              Manage how you sign in and secure your account.
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-gray-900/70 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    Password
                  </p>
                  <p className="text-xs text-gray-400">
                    Last changed 3 months ago
                  </p>
                </div>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">
                  Change
                </button>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-gray-900/70 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">
                    Two-factor authentication
                  </p>
                  <p className="text-xs text-gray-400">
                    Add an extra layer of security to your account.
                  </p>
                </div>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">
                  Enable
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: small cards */}
        <div className="space-y-6">
          {/* Plan / status */}
          <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-br from-indigo-600/30 via-gray-900 to-gray-900 p-5 shadow-md">
            <p className="text-xs uppercase tracking-wide text-indigo-200 mb-1">
              Plan
            </p>
            <p className="text-lg font-semibold text-white">Pro Member</p>
            <p className="text-sm text-indigo-100 mt-1">
              You are using all premium dashboard features.
            </p>
            <button className="mt-4 w-full rounded-full bg-white/10 hover:bg-white/20 text-sm text-white py-2 transition">
              Manage Subscription
            </button>
          </div>

          {/* Activity summary */}
          <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-white">
              Activity Summary
            </h2>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              <div className="flex items-center justify-between">
                <span>Last login</span>
                <span className="text-gray-200">Today, 09:24 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Devices</span>
                <span className="text-gray-200">3 active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Projects</span>
                <span className="text-gray-200">12 total</span>
              </div>
            </div>
          </div>

          {/* Danger zone */}
          <div className="rounded-2xl border border-red-500/40 bg-red-950/40 p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-red-200">
              Danger Zone
            </h2>
            <p className="text-xs text-red-100 mt-1">
              Deleting your account will remove all your data from this dashboard.
            </p>
            <button className="mt-4 w-full rounded-full bg-red-600 hover:bg-red-700 text-sm text-white py-2 transition">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
