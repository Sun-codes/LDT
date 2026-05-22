import Link from "next/link";
import AppNavbar from "@/components/AppNavbar";

export default function FreelancerDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <AppNavbar
        homeHref="/freelancer"
        items={[
          { label: "Dashboard", href: "/freelancer", active: true },
          { label: "Project Map", href: "/freelancer/project-map" },
          { label: "Classes", href: "/freelancer/classes" },
          { label: "Portfolio", href: "/freelancer/portfolio" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
          Freelancer Dashboard
        </p>

        <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
          Complete quests. Gain progress. Unlock benefits.
        </h2>

        <p className="mt-6 max-w-2xl text-slate-300">
          GrowNow helps freelancers grow through real orders, skill classes,
          certificates, progress levels, and benefit points.
        </p>
      </section>

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

          <Link
            href="/freelancer/project-map"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Project Map
            </p>

            <h3 className="mt-4 text-3xl font-bold">12 Available</h3>

            <p className="mt-3 text-slate-300">
              Browse projects matching your skills.
            </p>
          </Link>

          <Link
            href="/freelancer/classes"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Classes
            </p>

            <h3 className="mt-4 text-3xl font-bold">3 Active</h3>

            <p className="mt-3 text-slate-300">Continue skill training.</p>
          </Link>

          <Link
            href="/freelancer/benefits"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Benefits
            </p>

            <h3 className="mt-4 text-3xl font-bold">2,450 Points</h3>

            <p className="mt-3 text-slate-300">Redeem perks and boosts.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/10 to-slate-900 p-6 shadow-lg shadow-cyan-500/10 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Active Work
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Instagram Rebranding
              </h2>
            </div>

            <span className="w-fit rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
              In Progress
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-slate-300">
            Redesign branding and social media strategy for a local coffee
            business.
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

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/freelancer/chat"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center font-bold text-slate-950 hover:bg-cyan-300"
            >
              Open Chat
            </Link>

            <Link
              href="/freelancer/project-map"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
            >
              Browse More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}