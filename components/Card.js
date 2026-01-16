'use client'

export default function Card({ icon: Icon, title, gradient, children }) {
  return (
    <div
      className="group rounded-3xl bg-white p-6 shadow
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl"
    >
      {/* ICON */}
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center
        rounded-xl bg-gradient-to-br ${gradient}
        text-white shadow-lg
        transition-transform duration-300
        group-hover:scale-110`}
      >
        {Icon && <Icon size={22} />}
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-gray-950">
        {title}
      </h3>

      {/* DESC */}
      <p className="mt-2 text-gray-600 text-sm">
        {children}
      </p>
    </div>
  )
}
