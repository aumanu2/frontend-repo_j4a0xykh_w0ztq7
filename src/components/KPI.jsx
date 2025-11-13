export default function KPI({ label, value, trend }) {
  const trendColor = trend?.startsWith('+') ? 'text-green-600' : 'text-red-600'
  return (
    <div className="rounded-xl border bg-white p-4">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold">{value}</p>
        {trend && <p className={`text-xs ${trendColor}`}>{trend}</p>}
      </div>
    </div>
  )
}
