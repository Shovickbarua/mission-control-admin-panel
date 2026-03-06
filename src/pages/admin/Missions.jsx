const Missions = () => {
  const missions = [
    { id: 1, name: "Mission To MARS", status: "Active" },
    { id: 2, name: "Lunar Outpost", status: "Planning" },
    { id: 3, name: "Deep Space Probe", status: "In Review" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {missions.map((mission) => (
        <div key={mission.id} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Mission</p>
          <p className="rajdhani-font text-lg md:text-xl font-semibold mt-1 text-slate-900">
            {mission.name}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className={`h-2 w-2 rounded-full ${
              mission.status === "Active" ? "bg-green-500" : 
              mission.status === "Planning" ? "bg-blue-500" : "bg-amber-500"
            }`} />
            <p className="text-xs text-slate-600 font-medium">Status: {mission.status}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Missions;
