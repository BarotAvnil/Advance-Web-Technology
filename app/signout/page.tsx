export default function SignOutPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-gray-900/70 p-6 shadow-xl backdrop-blur">
        <h1 className="text-2xl font-semibold text-white text-center">
          Sign out
        </h1>
        <p className="mt-2 text-sm text-gray-300 text-center">
          Are you sure you want to sign out of your dashboard?
        </p>

        <div className="mt-6 space-y-3">
          <button
            className="w-full rounded-full bg-red-600 hover:bg-red-700 text-sm font-medium text-white py-2.5 transition"
            // onClick={() => { /* add real signout logic here */ }}
          >
            Yes, sign me out
          </button>

          <a
            href="/"
            className="w-full inline-flex items-center justify-center rounded-full border border-white/20 bg-gray-900/70 hover:bg-gray-800 text-sm font-medium text-gray-100 py-2.5 transition"
          >
            Cancel and go back
          </a>
        </div>

        <p className="mt-4 text-[11px] text-center text-gray-500">
          You can sign back in anytime using your account credentials.
        </p>
      </div>
    </div>
  );
}
