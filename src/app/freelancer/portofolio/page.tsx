import AppNavbar from "@/components/AppNavbar";

export default function FreelancerPortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <AppNavbar
        homeHref="/freelancer"
        items={[
          { label: "Dashboard", href: "/freelancer" },
          { label: "Project Map", href: "/freelancer/project-map" },
          { label: "Classes", href: "/freelancer/classes" },
          { label: "Portfolio", href: "/freelancer/portfolio", active: true },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
          Freelancer Portfolio
        </p>

        <h1 className="mt-4 text-5xl font-extrabold">
          Showcase your work.
        </h1>

        <p className="mt-6 max-w-2xl text-slate-300">
          Display completed projects, certificates, badges, and client-ready proof of skill.
        </p>
      </section>
    </main>
  );
}