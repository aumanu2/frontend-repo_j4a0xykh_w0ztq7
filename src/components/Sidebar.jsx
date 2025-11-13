import { Home, Workflow, BarChart3, Settings, Sparkles } from 'lucide-react'

const NavItem = ({ icon: Icon, label, active }) => (
  <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors
    ${active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </button>
)

export default function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen sticky top-0 w-64 flex-col border-r bg-white/80 backdrop-blur">
      <div className="p-4 flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center text-white">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight">Consistent Flow Hub</p>
          <p className="text-xs text-gray-500 -mt-0.5">Automation Dashboard</p>
        </div>
      </div>
      <nav className="p-3 space-y-1">
        <NavItem icon={Home} label="Dashboard" active />
        <NavItem icon={Workflow} label="Workflows" />
        <NavItem icon={BarChart3} label="Analytics" />
        <NavItem icon={Settings} label="Settings" />
      </nav>
      <div className="mt-auto p-4 text-xs text-gray-500">
        <p>v1.0 • All systems operational</p>
      </div>
    </aside>
  )
}
