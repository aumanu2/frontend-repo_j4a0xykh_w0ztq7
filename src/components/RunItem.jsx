import { Play, Clock3, CheckCircle2, XCircle } from 'lucide-react'

export default function RunItem({ name, status, time }) {
  const statusColor = {
    running: 'bg-amber-100 text-amber-800',
    success: 'bg-emerald-100 text-emerald-800',
    failed: 'bg-rose-100 text-rose-800',
  }[status]

  const StatusIcon = {
    running: Clock3,
    success: CheckCircle2,
    failed: XCircle,
  }[status]

  const Icon = StatusIcon || Clock3

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border bg-white">
      <button className="h-8 w-8 rounded-md bg-blue-600 text-white grid place-items-center">
        <Play className="h-4 w-4" />
      </button>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium truncate">{name}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <span className={`px-2 py-1 text-xs rounded-md ${statusColor}`}>{status}</span>
    </div>
  )
}
