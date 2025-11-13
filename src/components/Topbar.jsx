import { Bell, Search, User } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 text-gray-500">
          <Search className="h-4 w-4" />
          <input
            className="outline-none text-sm bg-transparent placeholder:text-gray-400"
            placeholder="Search flows, runs, or resources..."
          />
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button className="relative p-2 rounded-md hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-blue-600 rounded-full" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center text-white">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  )
}
