import Link from "next/link";

export default function BusinessDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-4 lg:flex-row lg:justify-between">
          <h1 className="text-2xl font-bold text-purple-400">GrowNow</h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-300 lg:mt-0 lg:justify-end">
            <Link href="/business" className="text-cyan-400">
              Dashboard
            </Link>
            <Link href="/business/orders/new">Create Order</Link>
            <Link href="/business/orders/demo-orders">Active Order</Link>
            <Link href="/business/chat">Chat</Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
          Small Business Order Platform
        </p>

        <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
          Your Solution for Business Growth.
        </h2>

        <p className="mt-6 max-w-2xl text-slate-300">
          GrowNow gives small businesses access to digital services, ongoing
          order tracking, talent ordering, and growth support.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/business/orders/new"
            className="rounded-full bg-cyan-400 px-6 py-3 text-center font-bold text-slate-950 hover:bg-cyan-300"
          >
            Create New Order
          </Link>

          <Link
            href="/business/orders/demo-orders"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center font-bold text-white hover:bg-white/10"
          >
            Track Active Order
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link
            href="/business/orders/new"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              New Order
            </p>
            <h3 className="mt-4 text-3xl font-bold">Create</h3>
            <p className="mt-3 text-slate-300">
              Request digital services for your business.
            </p>
          </Link>

          <Link
            href="/business/orders/demo-orders"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Active Order
            </p>
            <h3 className="mt-4 text-3xl font-bold">1 Ongoing</h3>
            <p className="mt-3 text-slate-300">
              Track current project progress.
            </p>
          </Link>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Growth
            </p>
            <h3 className="mt-4 text-3xl font-bold">+24%</h3>
            <p className="mt-3 text-slate-300">
              Simulated visibility growth after digital support.
            </p>
          </div>

          <Link
            href="/business/chat"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-400">
              Chat
            </p>
            <h3 className="mt-4 text-3xl font-bold">Open</h3>
            <p className="mt-3 text-slate-300">
              Discuss project updates with the assigned freelancer.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}