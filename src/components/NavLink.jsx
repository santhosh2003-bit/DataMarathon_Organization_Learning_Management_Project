import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      // className="underline_to_list hidden rounded-lg px-2 py-1 text-[18px] text-black hover:text-slate-900 md:block md:text-sm md:text-slate-700"
    >
      {children}
    </Link>
  )
}
