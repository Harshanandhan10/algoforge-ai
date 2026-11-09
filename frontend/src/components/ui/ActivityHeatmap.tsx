
const activityData = [
  [0, 1, 2, 0, 3, 1, 0],
  [1, 2, 0, 1, 4, 2, 0],
  [2, 1, 3, 2, 0, 1, 0],
  [0, 2, 1, 4, 3, 2, 1],
  [1, 0, 2, 3, 1, 0, 2],
  [3, 2, 1, 0, 4, 3, 1],
  [0, 1, 2, 2, 3, 1, 0],
  [2, 3, 1, 4, 2, 0, 1],
  [1, 0, 3, 2, 1, 4, 2],
  [0, 2, 1, 3, 2, 1, 0],
  [3, 1, 2, 0, 4, 2, 1],
  [1, 2, 3, 1, 2, 0, 1],
]

const activityColors = [
  'bg-slate-800',
  'bg-cyan-950',
  'bg-cyan-800',
  'bg-cyan-600',
  'bg-cyan-400',
]

const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function ActivityHeatmap() {
  const totalActivity = activityData.flat().reduce(
    (total, value) => total + value,
    0,
  )

  const activeDays = activityData.flat().filter(
    (value) => value > 0,
  ).length

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Daily Coding Activity
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Your coding consistency over the last 12 weeks.
          </p>
        </div>

        <span className="text-sm font-semibold text-cyan-400">
          {totalActivity} demo submissions
        </span>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-[620px] gap-3">

          {/* Day labels */}
          <div className="grid shrink-0 grid-rows-7 gap-2 pt-0">
            {dayLabels.map((day) => (
              <span
                key={day}
                className="flex h-4 items-center text-[10px] text-slate-500"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Activity grid */}
          <div className="grid flex-1 grid-cols-12 gap-2">
            {activityData.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="grid grid-rows-7 gap-2"
              >
                {week.map((level, dayIndex) => (
                  <div
                    key={dayIndex}
                    title={`${dayLabels[dayIndex]} · Activity level ${level}`}
                    aria-label={`${dayLabels[dayIndex]}, activity level ${level}`}
                    className={`h-4 w-full rounded-sm ${activityColors[level]}`}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">

        <p className="text-xs text-slate-500">
          {activeDays} active demo days out of 84 days
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Less</span>

          {activityColors.map((color) => (
            <div
              key={color}
              className={`h-3 w-3 rounded-sm ${color}`}
            />
          ))}

          <span className="text-xs text-slate-500">More</span>
        </div>

      </div>

    </section>
  )
}
