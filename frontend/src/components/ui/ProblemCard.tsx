
import { ArrowUpRight, CheckCircle2, Circle } from 'lucide-react'

interface ProblemCardProps {
  title: string
  topic: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  completed: boolean
}

const difficultyStyles = {
  Easy: 'bg-emerald-500/10 text-emerald-400',
  Medium: 'bg-amber-500/10 text-amber-400',
  Hard: 'bg-rose-500/10 text-rose-400',
}

export default function ProblemCard({
  title,
  topic,
  difficulty,
  completed,
}: ProblemCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-500/30 sm:flex-row sm:items-center sm:justify-between">

      <div className="flex items-start gap-3">
        <div className="mt-1">
          {completed ? (
            <CheckCircle2 size={19} className="text-emerald-400" />
          ) : (
            <Circle size={19} className="text-slate-500" />
          )}
        </div>

        <div>
          <h3 className="font-medium text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {topic}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyles[difficulty]}`}>
          {difficulty}
        </span>

        <button
          type="button"
          aria-label={`Open ${title}`}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

    </div>
  )
}
