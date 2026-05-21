import Link from "next/link";

const projects = {
  "instagram-rebranding": {
    title: "Instagram Rebranding",
    tier: "Bronze",
    category: "Branding",
    reward: "+250 XP",
    description:
      "Help a local coffee shop redesign their branding and content strategy.",
    skills: ["Branding", "Content", "Instagram"],
  },
  "product-campaign": {
    title: "Product Campaign",
    tier: "Silver",
    category: "Photography",
    reward: "+420 XP",
    description:
      "Capture promotional visuals for a batik business launching a new collection.",
    skills: ["Photography", "Editing", "Marketing"],
  },
  "growth-strategy": {
    title: "UMKM Growth Strategy",
    tier: "Gold",
    category: "Marketing",
    reward: "+700 XP",
    description:
      "Build a complete digital growth campaign for a scaling local business.",
    skills: ["Strategy", "Analytics", "Social Media"],
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 p-10 text-white">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link href="/freelancer/project-map" className="mt-6 inline-block text-cyan-400">
          Back to Project Map
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/freelancer" className="text-2xl font-bold text-cyan-400">
            GrowNow
          </Link>

          <Link href="/freelancer/project-map" className="text-sm font-semibold text-slate-300">
            Back to Project Map
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold text-cyan-300">
              {project.category}
            </span>
            <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-semibold text-purple-300">
              {project.tier}
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-extrabold">{project.title}</h1>

          <p className="mt-6 text-lg text-slate-300">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Reward</p>
            <p className="mt-1 text-3xl font-bold text-cyan-300">
              {project.reward}
            </p>
          </div>

          <button className="mt-8 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300">
            Confirm Accept Project
          </button>
        </div>
      </section>
    </main>
  );
}