"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, BarChart3, Home, Landmark, Zap } from "lucide-react"

const navItems = [
  { href: "/service1", label: "Payback Pulse", detail: "bill → feasibility", icon: Activity },
  { href: "/service2", label: "20-Year Vision", detail: "cashflow → returns", icon: BarChart3 },
  { href: "/service3", label: "Subsidy Scout", detail: "policy → eligibility", icon: Landmark },
  { href: "/service4", label: "Photon Hunter", detail: "roof → placement", icon: Home },
  { href: "/service5", label: "Grid Guardian", detail: "flow → optimization", icon: Zap, aliases: ["/lumen"] },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="relative flex h-full w-[22rem] flex-col overflow-hidden border-r border-white/10 bg-[linear-gradient(180deg,rgba(11,8,8,0.98),rgba(0,0,0,0.98))] px-5 py-7 shadow-[inset_-1px_0_0_rgba(245,234,234,0.04)]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[var(--yor-crimson)] to-transparent opacity-40" />

      <div className="mb-8 px-2">
        <p className="yor-technical">Operator surface / 01</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--yor-white)]">Decision Console</h2>
        <p className="mt-2 text-sm leading-6 text-[var(--yor-muted)]">Move from household signal to installation decision without losing the evidence trail.</p>
      </div>

      <nav className="relative flex flex-col gap-2" aria-label="Zenith decision modules">
        {navItems.map(({ href, label, detail, icon: Icon, aliases }) => {
          const active = pathname === href || aliases?.includes(pathname)
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`group relative flex items-center gap-3 overflow-hidden rounded-2xl border px-3 py-3.5 transition-all duration-200 ${active ? "border-[rgba(232,75,75,0.34)] bg-[rgba(232,75,75,0.11)] text-[var(--yor-white)]" : "border-transparent text-[var(--yor-muted)] hover:border-white/10 hover:bg-white/[0.04] hover:text-[var(--yor-white)]"}`}
            >
              {active && <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-[var(--yor-crimson)] shadow-[0_0_16px_rgba(232,75,75,0.65)]" />}
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 ${active ? "bg-[rgba(232,75,75,0.12)] text-[var(--yor-warm)]" : "bg-white/[0.03] text-[var(--yor-muted)] group-hover:text-[var(--yor-warm)]"}`}>
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{label}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--yor-muted)]">{detail}</span>
              </span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="yor-technical">Evidence mode</span>
          <span className="yor-state yor-state--hot">ESTIMATE</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-[var(--yor-muted)]">Outputs are decision support. Verify tariff, subsidy, site and installer inputs before committing capital.</p>
        <Link href="/" className="yor-button yor-button--quiet mt-4 w-full">Return to signal map</Link>
      </div>
    </aside>
  )
}
