import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="no-underline">
      <span className="flex items-center gap-3">
        {/* Icon */}
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white font-bold">
          S
        </span>

        {/* Text */}
        <span className="leading-tight">
          <span className="block text-lg font-semibold text-gray-950">
            S Tech
          </span>
          <span className="block text-sm font-medium text-gray-950/70">
            Education
          </span>
        </span>
      </span>
    </Link>
  )
}
