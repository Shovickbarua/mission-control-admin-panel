import { useState } from "react"

const initialRows = [
  { id: 1, name: "John Carter", email: "john.carter@example.com", role: "Admin" },
  { id: 2, name: "Sarah Lee", email: "sarah.lee@example.com", role: "Editor" },
  { id: 3, name: "Michael Chen", email: "michael.chen@example.com", role: "Viewer" },
]

const Crew = () => {
  const [rows, setRows] = useState(initialRows)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ name: "", email: "", role: "Viewer" })
  const [crewView, setCrewView] = useState("list") // "list" | "form"

  const startCreate = () => {
    setEditingId(null)
    setFormData({ name: "", email: "", role: "Viewer" })
  }

  const handleNewCrew = () => {
    startCreate()
    setCrewView("form")
  }

  const startEdit = (row) => {
    setEditingId(row.id)
    setFormData({ name: row.name, email: row.email, role: row.role })
    setCrewView("form") // Go to form to edit
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
    setCrewView("list")
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {crewView === "list" ? (
        <>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleNewCrew}
              className="text-xs md:text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white"
            >
              New Crew Member
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white overflow-x-auto shadow-sm">
            <table className="min-w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 md:px-6 py-3 font-semibold text-slate-900">Name</th>
                  <th className="px-4 md:px-6 py-3 font-semibold text-slate-900">Email</th>
                  <th className="px-4 md:px-6 py-3 font-semibold text-slate-900">Role</th>
                  <th className="px-4 md:px-6 py-3 font-semibold text-right text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 odd:bg-white even:bg-slate-50">
                    <td className="px-4 md:px-6 py-3 text-slate-700">{row.name}</td>
                    <td className="px-4 md:px-6 py-3 text-slate-600">{row.email}</td>
                    <td className="px-4 md:px-6 py-3">
                      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] md:text-xs bg-slate-100 text-slate-700">
                        {row.role}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-3 text-right space-x-2">
                      <button
                        type="button"
                        onClick={() => startEdit(row)}
                        className="text-[10px] md:text-xs px-2 py-1 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(row.id)}
                        className="text-[10px] md:text-xs px-2 py-1 rounded-lg border border-red-500/60 text-red-500 hover:bg-red-500/10 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 md:px-6 py-6 text-center text-slate-500">
                      No crew members yet. Use the form to add one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <section className="max-w-xl rounded-2xl border border-slate-200 bg-white px-5 py-5 md:px-6 md:py-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="rajdhani-font text-lg md:text-xl font-semibold text-slate-900">
              {editingId == null ? "New Crew Member" : "Edit Crew Member"}
            </h2>
            <button
              type="button"
              onClick={() => setCrewView("list")}
              className="text-xs md:text-sm px-3 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Back to list
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <label className="block text-xs md:text-sm mb-1 text-slate-700">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none focus:border-[#3CAA7B] transition-colors"
                placeholder="Crew member name"
                required
              />
            </div>
            <div className="text-left">
              <label className="block text-xs md:text-sm mb-1 text-slate-700">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none focus:border-[#3CAA7B] transition-colors"
                placeholder="crew@example.com"
                required
              />
            </div>
            <div className="text-left">
              <label className="block text-xs md:text-sm mb-1 text-slate-700">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none focus:border-[#3CAA7B] transition-colors"
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
            <div className="flex items-center justify-end pt-2">
              <button
                type="submit"
                className="text-xs md:text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white shadow-md hover:shadow-lg transition-all"
              >
                {editingId == null ? "Save Crew Member" : "Update Crew Member"}
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default Crew;
