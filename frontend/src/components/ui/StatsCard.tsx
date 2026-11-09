
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  iconColor: string
  iconBackground: string
}

export default function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor,
  iconBackground,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-500/40">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h3>
        </div>

        <div className={`rounded-xl p-3 ${iconBackground}`}>
          <Icon size={22} className={iconColor} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-slate-800 pt-4">
        <ArrowUpRight size={15} className="text-cyan-400" />

        <p className="text-xs text-slate-400">
          {description}
        </p>
      </div>

    </div>
  )
}
