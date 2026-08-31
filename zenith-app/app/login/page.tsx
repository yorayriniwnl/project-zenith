"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Enter both fields to continue.")
      return
    }

    if (email === "admin@zenith.com" && password === "zenith123") {
      localStorage.setItem("isLoggedIn", "true")
      window.dispatchEvent(new Event("auth-changed"))
      const redirectPath = localStorage.getItem("redirectAfterLogin")
      localStorage.removeItem("redirectAfterLogin")
      router.replace(redirectPath || "/")
      return
    }

    setError("That demo credential pair was not recognized.")
  }

  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-12 pt-32 sm:px-8">
      <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[0.82fr,1.18fr]">
        <section className="hidden flex-col justify-between rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(103,21,21,0.32),rgba(5,5,5,0.88))] p-8 lg:flex">
          <div><p className="yor-technical text-[var(--yor-warm)]">zenith / protected route</p><h1 className="yor-display mt-6 text-5xl text-[var(--yor-white)]">Keep the decision trail close.</h1><p className="mt-5 max-w-sm text-sm leading-6 text-[var(--yor-muted)]">The protected modules hold the calculations, scenarios, and output context that make a solar decision inspectable.</p></div>
          <div className="grid grid-cols-2 gap-3"><div className="yor-readout"><p className="yor-readout__label">surface</p><p className="mt-2 text-sm text-[var(--yor-white)]">private analysis</p></div><div className="yor-readout"><p className="yor-readout__label">status</p><p className="mt-2 text-sm text-[var(--yor-warm)]">DEMO / ACTIVE</p></div></div>
        </section>

        <section className="yor-panel p-6 sm:p-9">
          <button type="button" onClick={() => router.push("/")} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--yor-muted)] hover:text-[var(--yor-white)]"><ArrowLeft size={14} /> return to signal map</button>
          <div className="mt-10"><p className="yor-technical text-[var(--yor-warm)]">operator access / 00</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--yor-white)]">Open Zenith</h2><p className="mt-2 text-sm leading-6 text-[var(--yor-muted)]">Use the local demo credential to inspect the decision modules.</p></div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div><label htmlFor="email" className="yor-technical block">email or username</label><input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="admin@zenith.com" autoComplete="username" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[var(--yor-white)] outline-none placeholder:text-white/30 focus:border-[var(--yor-warm)]" /></div>
            <div><label htmlFor="password" className="yor-technical block">password</label><div className="relative mt-2"><input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" autoComplete="current-password" className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 pr-12 text-sm text-[var(--yor-white)] outline-none placeholder:text-white/30 focus:border-[var(--yor-warm)]" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[var(--yor-muted)] hover:text-[var(--yor-white)]" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></div>
            {error && <p role="alert" className="rounded-xl border border-[rgba(232,75,75,0.3)] bg-[rgba(232,75,75,0.1)] px-3 py-2 text-sm text-[var(--yor-warm)]">{error}</p>}
            <button type="submit" className="yor-button yor-button--primary w-full">Continue to modules <ArrowRight size={16} /></button>
          </form>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4"><p className="yor-technical">demo credential</p><p className="mt-2 font-mono text-sm text-[var(--yor-white)]">admin@zenith.com / zenith123</p><p className="mt-2 text-xs leading-5 text-[var(--yor-muted)]">This is a local demo account. It is not a production identity or access-control system.</p></div>
        </section>
      </div>
    </main>
  )
}
