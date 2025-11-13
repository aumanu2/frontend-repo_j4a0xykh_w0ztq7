import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import KPI from './components/KPI'
import RunItem from './components/RunItem'

function App() {
  const kpis = [
    { label: 'Active Workflows', value: '24', trend: '+3.4% WoW' },
    { label: 'Successful Runs', value: '1,284', trend: '+1.1% WoW' },
    { label: 'Failed Jobs', value: '12', trend: '-0.7% WoW' },
    { label: 'Avg. Duration', value: '2m 14s' },
  ]

  const recentRuns = [
    { name: 'Sync CRM to Warehouse', status: 'success', time: '2m ago' },
    { name: 'Generate Weekly Report', status: 'running', time: '5m ago' },
    { name: 'Refresh Marketing Segments', status: 'failed', time: '9m ago' },
    { name: 'Enrich Leads via Clearbit', status: 'success', time: '14m ago' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-900">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen">
          <Topbar />

          <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold">Dashboard</h1>
                <p className="text-sm text-gray-500">Overview of your automation health</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 text-sm rounded-md border bg-white hover:bg-gray-50">Import Flow</button>
                <button className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">New Flow</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {kpis.map((k) => (
                <KPI key={k.label} {...k} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <section className="lg:col-span-2 space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold">Recent Runs</h2>
                  <button className="text-xs text-blue-600 hover:underline">View all</button>
                </div>
                <div className="space-y-3">
                  {recentRuns.map((r, idx) => (
                    <RunItem key={idx} {...r} />
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <div className="rounded-xl border bg-white p-4">
                  <h2 className="text-sm font-semibold mb-3">System Health</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between"><span>API</span><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md">Operational</span></div>
                    <div className="flex items-center justify-between"><span>Workers</span><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md">Healthy</span></div>
                    <div className="flex items-center justify-between"><span>Queue</span><span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-md">High</span></div>
                  </div>
                </div>

                <div className="rounded-xl border bg-white p-4">
                  <h2 className="text-sm font-semibold mb-3">Shortcuts</h2>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <button className="rounded-md border px-3 py-2 hover:bg-gray-50">Run a flow</button>
                    <button className="rounded-md border px-3 py-2 hover:bg-gray-50">Create step</button>
                    <button className="rounded-md border px-3 py-2 hover:bg-gray-50">Invite user</button>
                    <button className="rounded-md border px-3 py-2 hover:bg-gray-50">View logs</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
