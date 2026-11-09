
import { CalendarDays, ChevronDown } from 'lucide-react'

export default function DashboardHeader() {
  const today = new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  return (
    <header className="flex flex-col gap-4 border-b border-slate-800 bg-slate-950 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">

      {/* Page heading */}
      <div>
        <p className="mb-1 text-sm text-slate-400">
          Workspace / Overview
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back! Ready to improve your coding skills?
        </p>
      </div>

      {/* Right section */}
      <div className="flex items-center justify-between gap-5 sm:justify-end">

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <CalendarDays size={18} className="text-cyan-400" />
          <span>{today}</span>
        </div>

        {/* User profile */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 transition hover:border-cyan-500/50"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 font-bold text-cyan-400">
            G
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-white">
              Guest User
            </p>
            <p className="text-xs text-slate-500">
              Free Account
            </p>
          </div>

          <ChevronDown size={16} className="text-slate-400" />
        </button>

      </div>
    </header>
  )
}
