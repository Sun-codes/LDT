import Link from "next/link";

export default function BusinessDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-purple-400">GrowNow</h1>

          <div className="flex gap-6 text-sm font-semibold text-slate-300">
            <Link href="/business">Dashboard</Link>
            <Link href="/business/orders">Orders</Link>
            <Link href="/business/ongoing">Ongoing</Link>
            <Link href="/business/growth">Growth</Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
          Small Business Order Platform
        </p>

        <h2 className="mt-4 text-5xl font-extrabold">
          Your Solution for Business Growth.
        </h2>

        <p className="mt-6 max-w-2xl text-slate-300">
          GrowNow gives small businesses access to digital services,
          ongoing order tracking, talent ordering, and growth support.
        </p>
      </section>
    </main>
  );
}