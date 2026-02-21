import { useState } from "react"

const initialRows = [
  { id: 1, name: "John Carter", email: "john.carter@example.com", role: "Admin" },
  { id: 2, name: "Sarah Lee", email: "sarah.lee@example.com", role: "Editor" },
  { id: 3, name: "Michael Chen", email: "michael.chen@example.com", role: "Viewer" },
]

const Admin = () => {
  const [rows, setRows] = useState(initialRows)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ name: "", email: "", role: "Viewer" })
  const [activePage, setActivePage] = useState("dashboard")
  const [dataItems, setDataItems] = useState([])
  const [dataInput, setDataInput] = useState("")
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isMobileSidebarClosing, setIsMobileSidebarClosing] = useState(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const startCreate = () => {
    setEditingId(null)
    setFormData({ name: "", email: "", role: "Viewer" })
  }

  const startEdit = (row) => {
    setEditingId(row.id)
    setFormData({ name: row.name, email: row.email, role: row.role })
  }

  const handleDelete = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id))
    if (editingId === id) {
      startCreate()
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim()) return

    if (editingId == null) {
      const nextId = rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1
      setRows((prev) => [...prev, { id: nextId, ...formData }])
    } else {
      setRows((prev) =>
        prev.map((row) =>
          row.id === editingId ? { ...row, ...formData } : row
        )
      )
    }
    startCreate()
  }

  const handleAddData = (e) => {
    e.preventDefault()
    if (!dataInput.trim()) return
    setDataItems((prev) => [
      ...prev,
      { id: prev.length ? prev[prev.length - 1].id + 1 : 1, value: dataInput.trim() },
    ])
    setDataInput("")
  }

  const handleOpenMobileSidebar = () => {
    setIsMobileSidebarClosing(false)
    setIsMobileSidebarOpen(true)
  }

  const handleCloseMobileSidebar = () => {
    setIsMobileSidebarClosing(true)
    setTimeout(() => {
      setIsMobileSidebarOpen(false)
      setIsMobileSidebarClosing(false)
    }, 250)
  }

  const headerTitle =
    activePage === "dashboard"
      ? "Crew Management"
      : activePage === "crew"
        ? "Crew"
        : activePage === "missions"
          ? "Missions"
          : "Settings"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 flex">
      <div
        className="hidden md:block relative transition-all duration-300 ease-in-out"
        style={{ width: isSidebarVisible ? "16rem" : "0rem" }}
      >
        <aside
          className={`absolute inset-0 md:flex md:flex-col bg-white border-r border-slate-200 shadow-sm px-6 py-8 overflow-hidden transform transition-all duration-300 ease-in-out ${
            isSidebarVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
        <div className="flex items-center gap-3 mb-10">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#3CAA7B] to-[#296E49]" />
          <div>
            <p className="rajdhani-font text-xl font-semibold text-slate-900">Mission Control</p>
            <p className="text-xs text-slate-500">Admin Panel</p>
          </div>
        </div>
        <nav className="space-y-2">
          <button
            type="button"
            onClick={() => setActivePage("dashboard")}
            className={
              activePage === "dashboard"
                ? "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-slate-100 border border-slate-300"
                : "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
            }
          >
            <span className="text-sm">Dashboard</span>
            {activePage === "dashboard" && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                Active
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setActivePage("crew")}
            className={
              activePage === "crew"
                ? "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-slate-100 border border-slate-300"
                : "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
            }
          >
            <span className="text-sm">Crew</span>
            {activePage === "crew" && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                Active
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setActivePage("missions")}
            className={
              activePage === "missions"
                ? "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-slate-100 border border-slate-300"
                : "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
            }
          >
            <span className="text-sm">Missions</span>
            {activePage === "missions" && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                Active
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setActivePage("settings")}
            className={
              activePage === "settings"
                ? "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-slate-100 border border-slate-300"
                : "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
            }
          >
            <span className="text-sm">Settings</span>
            {activePage === "settings" && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                Active
              </span>
            )}
          </button>
        </nav>
          <div className="mt-auto pt-8 border-t border-slate-200 text-xs text-slate-500">
            <p>Logged in as</p>
            <p className="font-medium text-slate-900">admin@mission.to</p>
          </div>
        </aside>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSidebarVisible((prev) => !prev)}
              className={`hidden md:inline-flex flex-col justify-center gap-[3px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 transition-transform duration-300 ${
                isSidebarVisible ? "" : "-translate-x-1"
              }`}
              aria-label="Toggle sidebar"
            >
              <span className="h-[2px] w-4 bg-slate-800 rounded" />
              <span className="h-[2px] w-4 bg-slate-800 rounded" />
            </button>
            <div className="flex flex-col">
              <p className="text-xs md:text-sm text-slate-500">Control Room</p>
              <h1 className="rajdhani-font text-xl md:text-2xl lg:text-3xl font-semibold">
                {headerTitle}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {(activePage === "dashboard" || activePage === "crew") && (
              <button
                type="button"
                onClick={startCreate}
                className="hidden sm:inline-block text-xs md:text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white"
              >
                New Crew Member
              </button>
            )}
            <button
              type="button"
              onClick={handleOpenMobileSidebar}
              className="md:hidden inline-flex flex-col justify-center gap-[3px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800"
              aria-label="Open navigation"
            >
              <span className="h-[2px] w-5 bg-slate-800 rounded" />
              <span className="h-[2px] w-5 bg-slate-800 rounded" />
              <span className="h-[2px] w-5 bg-slate-800 rounded" />
            </button>
          </div>
        </header>

        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <button
              type="button"
              className={`absolute inset-0 bg-black/30 ${
                isMobileSidebarClosing ? "mobile-sidebar-overlay-out" : "mobile-sidebar-overlay"
              }`}
              onClick={handleCloseMobileSidebar}
              aria-label="Close navigation overlay"
            />
            <div
              className={`relative z-50 h-full w-64 bg-white border-r border-slate-200 shadow-xl px-6 py-8 flex flex-col ${
                isMobileSidebarClosing ? "mobile-sidebar-panel-out" : "mobile-sidebar-panel"
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#3CAA7B] to-[#296E49]" />
                  <div>
                    <p className="rajdhani-font text-lg font-semibold text-slate-900">
                      Mission Control
                    </p>
                    <p className="text-[11px] text-slate-500">Admin Panel</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCloseMobileSidebar}
                  className="ml-2 inline-flex items-center justify-center h-8 w-8 rounded-full border border-slate-300 text-slate-700"
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>
              <nav className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setActivePage("dashboard")
                    handleCloseMobileSidebar()
                  }}
                  className={
                    activePage === "dashboard"
                      ? "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-slate-100 border border-slate-300"
                      : "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
                  }
                >
                  <span className="text-sm">Dashboard</span>
                  {activePage === "dashboard" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                      Active
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActivePage("crew")
                    handleCloseMobileSidebar()
                  }}
                  className={
                    activePage === "crew"
                      ? "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-slate-100 border border-slate-300"
                      : "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
                  }
                >
                  <span className="text-sm">Crew</span>
                  {activePage === "crew" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                      Active
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActivePage("missions")
                    handleCloseMobileSidebar()
                  }}
                  className={
                    activePage === "missions"
                      ? "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-slate-100 border border-slate-300"
                      : "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
                  }
                >
                  <span className="text-sm">Missions</span>
                  {activePage === "missions" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                      Active
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActivePage("settings")
                    handleCloseMobileSidebar()
                  }}
                  className={
                    activePage === "settings"
                      ? "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-slate-100 border border-slate-300"
                      : "w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-100"
                  }
                >
                  <span className="text-sm">Settings</span>
                  {activePage === "settings" && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white">
                      Active
                    </span>
                  )}
                </button>
              </nav>
            </div>
          </div>
        )}

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 flex flex-col gap-6 md:gap-8">
          {activePage === "dashboard" && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs text-slate-500">Total Crew</p>
                <p className="rajdhani-font text-2xl md:text-3xl font-semibold mt-2">
                  {rows.length}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs text-slate-500">Admins</p>
                <p className="rajdhani-font text-2xl md:text-3xl font-semibold mt-2">
                  {rows.filter((r) => r.role === "Admin").length}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs text-slate-500">Last Update</p>
                <p className="rajdhani-font text-sm md:text-base font-semibold mt-2">
                  Mission To MARS
                </p>
              </div>
            </section>
          )}

          {(activePage === "dashboard" || activePage === "crew") && (
            <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-6 md:gap-8">
              <div className="rounded-2xl border border-slate-200 bg-white overflow-x-auto shadow-sm">
                <table className="min-w-full text-left text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-4 md:px-6 py-3 font-semibold">Name</th>
                      <th className="px-4 md:px-6 py-3 font-semibold">Email</th>
                      <th className="px-4 md:px-6 py-3 font-semibold">Role</th>
                      <th className="px-4 md:px-6 py-3 font-semibold text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-slate-100 odd:bg-white even:bg-slate-50"
                      >
                        <td className="px-4 md:px-6 py-3">{row.name}</td>
                        <td className="px-4 md:px-6 py-3 text-slate-600">
                          {row.email}
                        </td>
                        <td className="px-4 md:px-6 py-3">
                          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] md:text-xs bg-slate-100 text-slate-700">
                            {row.role}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-3 text-right space-x-2">
                          <button
                            type="button"
                            onClick={() => startEdit(row)}
                            className="text-[10px] md:text-xs px-2 py-1 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-100"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(row.id)}
                            className="text-[10px] md:text-xs px-2 py-1 rounded-lg border border-red-500/60 text-red-500 hover:bg-red-500/10"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                    {rows.length === 0 && (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-4 md:px-6 py-6 text-center text-slate-500"
                        >
                          No crew members yet. Use the form to add one.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 md:px-6 md:py-6 shadow-sm">
                <h2 className="rajdhani-font text-lg md:text-xl font-semibold mb-4">
                  {editingId == null ? "Add Crew Member" : "Edit Crew Member"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-left">
                    <label className="block text-xs md:text-sm mb-1 text-slate-700">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none"
                      placeholder="Crew member name"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs md:text-sm mb-1 text-slate-700">
                      Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none"
                      placeholder="crew@example.com"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs md:text-sm mb-1 text-slate-700">
                      Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={startCreate}
                      className="text-xs md:text-sm px-3 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      Clear
                    </button>
                    <button
                      type="submit"
                      className="text-xs md:text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-[#3CAA7B] to-[#296E49]"
                    >
                      {editingId == null ? "Add Crew" : "Save Changes"}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}

          {activePage === "missions" && (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs text-slate-500">Mission</p>
                <p className="rajdhani-font text-lg md:text-xl font-semibold mt-1">
                  Mission To MARS
                </p>
                <p className="text-xs text-slate-500 mt-2">Status: Active</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs text-slate-500">Mission</p>
                <p className="rajdhani-font text-lg md:text-xl font-semibold mt-1">
                  Lunar Outpost
                </p>
                <p className="text-xs text-slate-500 mt-2">Status: Planning</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs text-slate-500">Mission</p>
                <p className="rajdhani-font text-lg md:text-xl font-semibold mt-1">
                  Deep Space Probe
                </p>
                <p className="text-xs text-slate-500 mt-2">Status: In Review</p>
              </div>
            </section>
          )}

          {activePage === "settings" && (
            <section className="max-w-xl rounded-2xl border border-slate-200 bg-white px-5 py-5 md:px-6 md:py-6 shadow-sm">
              <h2 className="rajdhani-font text-lg md:text-xl font-semibold mb-4">
                Settings
              </h2>
              <form className="space-y-4">
                <div className="text-left">
                  <label className="block text-xs md:text-sm mb-1 text-slate-700">
                    Admin Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none"
                    placeholder="Admin name"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-xs md:text-sm mb-1 text-slate-700">
                    Contact Email
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none"
                    placeholder="admin@mission.to"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs md:text-sm text-slate-700">
                    Dark Theme
                  </span>
                  <span className="text-[10px] md:text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    Light Theme
                  </span>
                </div>
              </form>
            </section>
          )}
          {activePage === "dashboard" && (
            <section className="rounded-2xl border border-slate-200 bg-white px-5 py-5 md:px-6 md:py-6 shadow-sm">
              <h2 className="rajdhani-font text-lg md:text-xl font-semibold mb-4">
                Data Entries
              </h2>
              <form onSubmit={handleAddData} className="flex flex-col md:flex-row gap-3 md:items-center">
                <input
                  value={dataInput}
                  onChange={(e) => setDataInput(e.target.value)}
                  className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none"
                  placeholder="Add a note or data point"
                />
                <button
                  type="submit"
                  className="text-xs md:text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white"
                >
                  Add Data
                </button>
              </form>
              <ul className="mt-4 space-y-2 text-xs md:text-sm text-slate-700">
                {dataItems.length === 0 && (
                  <li className="text-slate-400">No data yet. Add your first entry above.</li>
                )}
                {dataItems.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    {item.value}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default Admin
