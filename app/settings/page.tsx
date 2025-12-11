export default function SettingsPage() {
  return (
    <div className="space-y-6 text-white">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your account, preferences, and notifications.
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column – Account & Preferences */}
        <div className="space-y-6 lg:col-span-2">
          {/* Account settings */}
          <section className="rounded-2xl border border-white/10 bg-gray-900/60 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Account</h2>
            <p className="text-sm text-gray-400 mt-1">
              Update your basic account information.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  defaultValue="Tom Cook"
                  className="w-full rounded-lg border border-white/10 bg-gray-900/80 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    defaultValue="tom@example.com"
                    className="w-full rounded-lg border border-white/10 bg-gray-900/80 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    defaultValue="tom.cook"
                    className="w-full rounded-lg border border-white/10 bg-gray-900/80 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  defaultValue="San Francisco, USA"
                  className="w-full rounded-lg border border-white/10 bg-gray-900/80 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="pt-2">
                <button className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-sm font-medium transition">
                  Save changes
                </button>
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section className="rounded-2xl border border-white/10 bg-gray-900/60 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Preferences</h2>
            <p className="text-sm text-gray-400 mt-1">
              Customize how the dashboard looks and behaves.
            </p>

            <div className="mt-4 space-y-4 text-sm text-gray-200">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3">
                <div>
                  <p className="font-medium text-white">Theme</p>
                  <p className="text-xs text-gray-400">
                    Dark mode is currently enabled.
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs text-indigo-300 border border-indigo-500/40">
                  Dark
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3">
                <div>
                  <p className="font-medium text-white">Language</p>
                  <p className="text-xs text-gray-400">
                    Choose the language for the interface.
                  </p>
                </div>
                <select className="rounded-lg border border-white/10 bg-gray-900/80 px-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Gujarati</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Right column – Notifications & Danger */}
        <div className="space-y-6">
          {/* Notifications */}
          <section className="rounded-2xl border border-white/10 bg-gray-900/60 p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-white">
              Notifications
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Choose what you want to be notified about.
            </p>

            <div className="mt-4 space-y-3 text-sm text-gray-200">
              <label className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3 cursor-pointer">
                <span>Product updates</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>

              <label className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3 cursor-pointer">
                <span>Team activity</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>

              <label className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3 cursor-pointer">
                <span>Security alerts</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
            </div>
          </section>

          {/* Danger zone */}
          <section className="rounded-2xl border border-red-500/50 bg-red-950/50 p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-red-100">
              Danger zone
            </h2>
            <p className="text-xs text-red-100 mt-1">
              Deleting your account is permanent and cannot be undone.
            </p>
            <button className="mt-4 w-full rounded-full bg-red-600 hover:bg-red-700 text-sm text-white py-2 transition">
              Delete account
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
