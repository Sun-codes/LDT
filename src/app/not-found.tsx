import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
          404
        </p>

        <h1 className="mt-4 text-5xl font-extrabold">
          This web was made in under a week, what did you expect?
        </h1>

        <p className="mt-6 text-slate-300">
          The page exists spiritually, not technically.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-purple-500 px-6 py-3 font-bold text-white hover:bg-purple-400"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}