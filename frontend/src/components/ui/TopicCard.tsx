
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

interface TopicCardProps {
  title: string
  description: string
  icon: LucideIcon
  completed: number
  total: number
  iconColor: string
  iconBackground: string
  path: string
}

export default function TopicCard({
  title,
  description,
  icon: Icon,
  completed,
  total,
  iconColor,
  iconBackground,
  path,
}: TopicCardProps) {
  const progress = total > 0
    ? Math.round((completed / total) * 100)
    : 0

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-cyan-500/40">

      <div className="flex items-start justify-between">
        <div className={`rounded-xl p-3 ${iconBackground}`}>
          <Icon size={22} className={iconColor} />
        </div>

        <a
          href={path}
          aria-label={`Explore ${title}`}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-cyan-400"
        >
          <ArrowUpRight size={19} />
        </a>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {description}
      </p>

      <div className="mt-5 flex items-center justify-between text-xs">
        <span className="text-slate-400">
          {completed} of {total} lessons
        </span>

        <span className="font-semibold text-cyan-400">
          {progress}%
        </span>
      </div>

      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${title} progress`}
      >
        <div
          className="h-full rounded-full bg-cyan-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  )
}
