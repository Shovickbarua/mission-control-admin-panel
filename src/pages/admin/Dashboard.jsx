import { useState } from "react";

const Dashboard = () => {
  const [dataItems, setDataItems] = useState([]);
  const [dataInput, setDataInput] = useState("");

  const handleAddData = (e) => {
    e.preventDefault();
    if (!dataInput.trim()) return;
    setDataItems((prev) => [
      ...prev,
      { id: prev.length ? prev[prev.length - 1].id + 1 : 1, value: dataInput.trim() },
    ]);
    setDataInput("");
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs text-slate-500">Total Crew</p>
          <p className="rajdhani-font text-2xl md:text-3xl font-semibold mt-2 text-slate-900">3</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs text-slate-500">Admins</p>
          <p className="rajdhani-font text-2xl md:text-3xl font-semibold mt-2 text-slate-900">1</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <p className="text-xs text-slate-500">Last Update</p>
          <p className="rajdhani-font text-sm md:text-base font-semibold mt-2 text-slate-900">
            Mission To MARS
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white px-5 py-5 md:px-6 md:py-6 shadow-sm">
        <h2 className="rajdhani-font text-lg md:text-xl font-semibold mb-4 text-slate-900">
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
    </div>
  );
};

export default Dashboard;
