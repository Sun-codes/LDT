import Link from "next/link";

export default function FreelancerDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-purple-400">GrowNow</h1>

          <div className="flex gap-6 text-sm font-semibold text-slate-300">
            <Link href="/freelancer" className="text-cyan-400">
              Dashboard
            </Link>
            <Link href="/freelancer/project-map">Project Map</Link>
            <Link href="/freelancer/classes">Classes</Link>
            <Link href="/freelancer/portfolio">Portfolio</Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
          Freelancer Dashboard
        </p>

        <h2 className="mt-4 text-5xl font-extrabold">
          Complete quests. Gain progress. Unlock benefits.
        </h2>

        <p className="mt-6 max-w-2xl text-slate-300">
          GrowNow helps freelancers grow through real orders, skill classes,
          certificates, progress levels, and benefit points.
        </p>
      </section>
    {/* DASHBOARD SUMMARY */}
    <section className="mx-auto max-w-7xl px-6 pb-20">
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-purple-400">
        Progress
      </p>
      <h3 className="mt-4 text-3xl font-bold">Level 4</h3>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
      </div>
      <p className="mt-3 text-sm text-slate-300">
        64% progress to Level 5
      </p>
    </div>

    

    <Link href="/freelancer/project-map" className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
        Project Map
      </p>
      <h3 className="mt-4 text-3xl font-bold">12 Available</h3>
      <p className="mt-3 text-slate-300">
        Browse projects matching your skills.
      </p>
    </Link>

    <Link href="/freelancer/classes" className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
      <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
        Classes
      </p>
      <h3 className="mt-4 text-3xl font-bold">3 Active</h3>
      <p className="mt-3 text-slate-300">
        Continue skill training.
      </p>
    </Link>

    <Link href="/freelancer/benefits" className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
      <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
        Benefits
      </p>
      <h3 className="mt-4 text-3xl font-bold">2,450 Points</h3>
      <p className="mt-3 text-slate-300">
        Redeem perks and boosts.
      </p>
    </Link>

  </div>
</section>

{/* ACTIVE WORK */}
<section className="mx-auto max-w-7xl px-6 pb-20">
  <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-slate-900 p-8 shadow-lg shadow-cyan-500/10">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Active Work
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Instagram Rebranding
        </h2>
      </div>

      <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
        In Progress
      </span>
    </div>

    <p className="mt-6 max-w-3xl text-slate-300">
      Redesign branding and social media strategy for a local coffee business.
    </p>

    <div className="mt-8 flex flex-wrap gap-2">
      <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
        Branding
      </span>

      <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
        Content
      </span>

      <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
        Instagram
      </span>
    </div>

    <div className="mt-10 flex gap-4">
      <Link
        href="/freelancer/chat"
        className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
      >
        Open Chat
      </Link>

      <Link
        href="/freelancer/project-map"
        className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10"
      >
        Browse More Projects
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}