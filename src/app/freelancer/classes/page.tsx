import AppNavbar from "@/components/AppNavbar";

export default function FreelancerClassesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <AppNavbar
        homeHref="/freelancer"
        items={[
          { label: "Dashboard", href: "/freelancer" },
          { label: "Project Map", href: "/freelancer/project-map" },
          { label: "Classes", href: "/freelancer/classes", active: true },
          { label: "Portfolio", href: "/freelancer/portfolio" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-green-400">
          Freelancer Classes
        </p>

        <h1 className="mt-4 text-5xl font-extrabold">
          Improve your skills.
        </h1>

        <p className="mt-6 max-w-2xl text-slate-300">
          Access digital marketing, branding, design, and content creation classes.
        </p>
      </section>
    </main>
  );
}