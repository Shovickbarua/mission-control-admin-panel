export default function Input({ icon, type, placeholder, value, onChange, className }) {
  const Icon = icon

  return (
    <div className={`border border-white/80 p-3 flex items-center rounded-xl w-full h-[52px] ${className ?? ""}`}>
      {Icon && <Icon className="text-white/80 mr-2" />}
      <input
        className="bg-transparent outline-none text-white/80 text-xs w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
