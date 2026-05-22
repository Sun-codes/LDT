import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

type AppNavbarProps = {
  homeHref: string;
  items: NavItem[];
};

export default function AppNavbar({
  homeHref,
  items,
}: AppNavbarProps) {
  return (
    <nav className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row">

        <Link
          href={homeHref}
          className="text-2xl font-bold text-cyan-400"
        >
          GrowNow
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-300">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.active
                  ? "text-cyan-400"
                  : "hover:text-white"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}