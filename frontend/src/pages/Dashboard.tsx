
import {
  Code2,
  Flame,
  Target,
  Clock3,
  Layers,
  GitBranch,
  Database,
  Network,
} from 'lucide-react'

import DashboardHeader from '../components/layout/DashboardHeader'
import StatsCard from '../components/ui/StatsCard'
import TopicCard from '../components/ui/TopicCard'
import ProblemCard from '../components/ui/ProblemCard'
import ActivityHeatmap from '../components/ui/ActivityHeatmap'

const dashboardStats = [
  {
    title: 'Problems Solved',
    value: '24',
    description: 'Demo completed problems',
    icon: Code2,
    iconColor: 'text-cyan-400',
    iconBackground: 'bg-cyan-500/10',
  },
  {
    title: 'Current Streak',
    value: '5 Days',
    description: 'Demo consecutive learning days',
    icon: Flame,
    iconColor: 'text-orange-400',
    iconBackground: 'bg-orange-500/10',
  },
  {
    title: 'Learning Progress',
    value: '68%',
    description: 'Demo course completion',
    icon: Target,
    iconColor: 'text-violet-400',
    iconBackground: 'bg-violet-500/10',
  },
  {
    title: 'Study Time',
    value: '32 hrs',
    description: 'Demo total learning time',
    icon: Clock3,
    iconColor: 'text-emerald-400',
    iconBackground: 'bg-emerald-500/10',
  },
]

const topics = [
  {
    title: 'Arrays',
    description: 'Master array operations and techniques.',
    icon: Layers,
    completed: 8,
    total: 12,
    iconColor: 'text-cyan-400',
    iconBackground: 'bg-cyan-500/10',
    path: '/learn',
  },
  {
    title: 'Linked Lists',
    description: 'Understand nodes, pointers and traversal.',
    icon: GitBranch,
    completed: 5,
    total: 10,
    iconColor: 'text-violet-400',
    iconBackground: 'bg-violet-500/10',
    path: '/learn',
  },
  {
    title: 'Stacks & Queues',
    description: 'Explore linear data structures.',
    icon: Database,
    completed: 6,
    total: 8,
    iconColor: 'text-orange-400',
    iconBackground: 'bg-orange-500/10',
    path: '/learn',
  },
  {
    title: 'Trees & Graphs',
    description: 'Learn hierarchical and network structures.',
    icon: Network,
    completed: 3,
    total: 12,
    iconColor: 'text-emerald-400',
    iconBackground: 'bg-emerald-500/10',
    path: '/learn',
  },
]

const recommendedProblems = [
  {
    title: 'Two Sum',
    topic: 'Arrays',
    difficulty: 'Easy' as const,
    completed: true,
  },
  {
    title: 'Reverse a Linked List',
    topic: 'Linked Lists',
    difficulty: 'Easy' as const,
    completed: false,
  },
  {
    title: 'Valid Parentheses',
    topic: 'Stacks',
    difficulty: 'Medium' as const,
    completed: false,
  },
  {
    title: 'Binary Tree Level Order Traversal',
    topic: 'Trees',
    difficulty: 'Medium' as const,
    completed: false,
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950">

      <DashboardHeader />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">

        {/* Welcome section */}
        <section className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/60 p-8">

          <div className="relative z-10 max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Your coding journey
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Build your logic.
              <br />
              Master your algorithms.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">
              Learn data structures, practice coding problems,
              visualize algorithms and get guidance from your
              AI-powered learning companion.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/learn"
                className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Start Learning
              </a>

              <a
                href="/problems"
                className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Problems
              </a>
            </div>

          </div>

          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-cyan-400/10" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-cyan-400/10" />

        </section>

        {/* Statistics */}
        <section className="mt-10">

          <div className="mb-5">
            <h2 className="text-xl font-bold text-white">
              Your Learning Overview
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Track your coding journey and learning progress.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

        </section>

        {/* DSA Topics */}
        <section className="mt-12">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                Explore DSA Topics
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Continue building your data structures and algorithms skills.
              </p>
            </div>

            <a
              href="/learn"
              className="hidden text-sm font-medium text-cyan-400 hover:text-cyan-300 sm:block"
            >
              View all topics →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {topics.map((topic) => (
              <TopicCard key={topic.title} {...topic} />
            ))}
          </div>

        </section>

        {/* Recommended Problems */}
        <section className="mt-12">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                Recommended Problems
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Practice popular coding challenges.
              </p>
            </div>

            <a
              href="/problems"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              View all →
            </a>
          </div>

          <div className="space-y-3">
            {recommendedProblems.map((problem) => (
              <ProblemCard
                key={problem.title}
                {...problem}
              />
            ))}
          </div>

        </section>
                      {/* Daily Coding Activity */}
        <section className="mt-10">
          <ActivityHeatmap />
        </section>
        <p className="mt-10 text-center text-xs text-slate-600">
          Demo dashboard data · Real progress tracking will be connected to the backend.
        </p>

      </div>
    </div>
  )
}
