import Link from "next/link";

export default function ProjectMapPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/freelancer"
            className="text-2xl font-bold text-cyan-400"
          >
            GrowNow
          </Link>

          <div className="flex gap-6 text-sm font-semibold text-slate-300">
            <Link href="/freelancer">
              Dashboard
            </Link>

            <Link
              href="/freelancer/project-map"
              className="text-cyan-400"
            >
              Project Map
            </Link>

            <Link href="/freelancer/classes">
              Classes
            </Link>

            <Link href="/freelancer/portfolio">
              Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
          Freelancer Project Map
        </p>

        <h1 className="mt-4 text-5xl font-extrabold">
          Discover available opportunities.
        </h1>

        <p className="mt-6 max-w-2xl text-slate-300">
          Browse active projects that match your skills, progression,
          and freelancer specialization.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid gap-6 xl:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-slate-900 p-6 shadow-lg shadow-cyan-500/10">

            <div className="flex items-center justify-between">
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold text-cyan-300">
                Branding
              </span>

              <span className="rounded-full bg-orange-800/30 px-3 py-1 text-sm font-semibold text-orange-200">
                Bronze
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Instagram Rebranding
            </h2>

            <p className="mt-4 text-slate-300">
              Help a local coffee shop redesign their branding and content strategy.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
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

            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Reward
                </p>

                <p className="font-bold text-cyan-300">
                  +250 XP
                </p>
              </div>

              <Link href="/freelancer/project-map/instagram-rebranding" className="rounded-full bg-cyan-400 px-5 py-2 font-bold text-slate-950 hover:bg-cyan-300">
                Accept
              </Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-slate-900 p-6 shadow-lg shadow-purple-500/10">

            <div className="flex items-center justify-between">
              <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-semibold text-purple-300">
                Photography
              </span>

              <span className="rounded-full bg-slate-400/20 px-3 py-1 text-sm font-semibold text-slate-200">
                Silver
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Product Campaign
            </h2>

            <p className="mt-4 text-slate-300">
              Capture promotional visuals for a batik business launching a new collection.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                Photography
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                Editing
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                Marketing
              </span>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Reward
                </p>

                <p className="font-bold text-purple-300">
                  +420 XP
                </p>
              </div>

              <Link href="/freelancer/project-map/product-campaign" className="rounded-full bg-purple-400 px-5 py-2 font-bold text-slate-950 hover:bg-purple-300">
                Accept
              </Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-3xl border border-fuchsia-500/20 bg-gradient-to-b from-fuchsia-500/10 to-slate-900 p-6 shadow-lg shadow-fuchsia-500/10">

            <div className="flex items-center justify-between">
              <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-sm font-semibold text-fuchsia-300">
                Marketing
              </span>

              <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-300">
                Gold
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              UMKM Growth Strategy
            </h2>

            <p className="mt-4 text-slate-300">
              Build a complete digital growth campaign for a scaling local business.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                Strategy
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                Analytics
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                Social Media
              </span>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Reward
                </p>

                <p className="font-bold text-fuchsia-300">
                  +700 XP
                </p>
              </div>

              <Link href="/freelancer/project-map/instagram-rebranding" className="rounded-full bg-cyan-400 px-5 py-2 font-bold text-slate-950 hover:bg-cyan-300">
                Accept
            </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}