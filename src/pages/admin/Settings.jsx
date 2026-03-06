const Settings = () => {
  return (
    <section className="max-w-xl rounded-2xl border border-slate-200 bg-white px-5 py-5 md:px-6 md:py-6 shadow-sm">
      <h2 className="rajdhani-font text-lg md:text-xl font-semibold mb-6 text-slate-900 border-b border-slate-100 pb-2">
        General Settings
      </h2>
      <form className="space-y-5">
        <div className="text-left">
          <label className="block text-xs md:text-sm font-medium mb-1.5 text-slate-700">
            Admin Name
          </label>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none focus:border-[#3CAA7B] transition-colors"
            placeholder="Admin name"
            defaultValue="Admin"
          />
        </div>
        <div className="text-left">
          <label className="block text-xs md:text-sm font-medium mb-1.5 text-slate-700">
            Contact Email
          </label>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm text-slate-900 outline-none focus:border-[#3CAA7B] transition-colors"
            placeholder="admin@mission.to"
            defaultValue="admin@mission.to"
          />
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-6">
          <span className="text-xs md:text-sm font-medium text-slate-700">
            Current Theme
          </span>
          <span className="text-[10px] md:text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider">
            Light Theme
          </span>
        </div>
        <div className="flex justify-end pt-4">
          <button
            type="button"
            className="text-xs md:text-sm font-semibold px-6 py-2 rounded-xl bg-gradient-to-r from-[#3CAA7B] to-[#296E49] text-white shadow-md hover:shadow-lg transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default Settings;
