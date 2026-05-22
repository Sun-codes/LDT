import Link from "next/link";

export default function DemoOrderPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-slate-900 p-10">
        <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
          Order Submitted
        </p>

        <h1 className="mt-4 text-5xl font-extrabold">
          Instagram Rebranding
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Your order has been matched with a freelancer and is now in progress.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">
            <p className="text-sm text-slate-400">Assigned Freelancer</p>
            <h2 className="mt-2 text-2xl font-bold">Aldo Creative</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">
            <p className="text-sm text-slate-400">Current Status</p>
            <h2 className="mt-2 text-2xl font-bold text-cyan-400">
              In Progress
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">
            <p className="text-sm text-slate-400">Estimated Completion</p>
            <h2 className="mt-2 text-2xl font-bold">3 Days</h2>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-slate-800 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Project Progress</p>
              <h3 className="mt-2 text-3xl font-bold">65%</h3>
            </div>

            <div className="rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-bold text-cyan-400">
              Editing Feed Layout
            </div>
          </div>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-700">
            <div className="h-full w-[65%] rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/business/chat"
            className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
          >
            Open Project Chat
          </Link>

          <Link
            href="/business"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}