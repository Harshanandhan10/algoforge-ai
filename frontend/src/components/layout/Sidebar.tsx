
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  Code2,
  Boxes,
  Bot,
  Settings,
  ChevronRight,
  X,
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigationItems = [
  { title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { title: 'Learn DSA', path: '/learn', icon: BookOpen },
  { title: 'Coding Problems', path: '/problems', icon: Code2 },
  { title: 'Visualizer', path: '/visualizer', icon: Boxes },
  { title: 'AI Tutor', path: '/ai-tutor', icon: Bot },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-800 bg-slate-950 transition-transform duration-300 lg:static lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Brand */}
      <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
        <div>
          <h1 className="text-xl font-bold tracking-wide text-white">
            AlgoForge <span className="text-cyan-400">AI</span>
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            Master Data Structures & Algorithms
          </p>
        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
          aria-label="Close navigation menu"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-6">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        {navigationItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-3">
                    <Icon size={19} />
                    {item.title}
                  </span>

                  {isActive && <ChevronRight size={16} />}
                </>
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-slate-800 p-4">
        <button
          type="button"
          className="mb-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <Settings size={19} />
          Settings
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-slate-900 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-400">
            GU
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Guest User</p>
            <p className="text-xs text-slate-500">Free Account</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
