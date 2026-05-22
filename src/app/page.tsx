"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "register">("login");

  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"umkm" | "freelancer">("umkm");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);
  setMessage("");

  if (mode === "login") {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("No user found after login.");
      setLoading(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      setMessage("Profile not found. Please register again.");
      setLoading(false);
      return;
    }

    if (profile.role === "freelancer") {
      router.push("/freelancer");
      return;
    }

    if (profile.role === "umkm") {
      router.push("/business");
      return;
    }

    setMessage("Unknown role.");
    setLoading(false);
    return;
  }

  if (mode === "register") {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    const userId = data.user?.id;

    if (!userId) {
      setMessage("Account created, but user ID was not found.");
      setLoading(false);
      return;
    }

    const { error: profileInsertError } = await supabase
      .from("profiles")
      .insert({
        id: userId,
        full_name: fullName,
        role,
      });

    if (profileInsertError) {
      setMessage(profileInsertError.message);
      setLoading(false);
      return;
    }

    setMessage("Account created. You can now log in.");
    setMode("login");
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-purple-50 text-slate-950">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-10 md:grid-cols-2 md:px-6 md:py-12">
        
        {/* LEFT SIDE */}
        <div>
          <div className="mb-4 inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            GrowNow Marketplace
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Connect UMKM with the right freelance talent.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            GrowNow helps businesses find skilled freelancers for branding,
            content, photography, design, and digital marketing projects.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full rounded-3xl bg-white p-6 shadow-xl shadow-purple-100 sm:p-8">
          <h2 className="text-3xl font-bold">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h2>

          <p className="mt-2 text-slate-600">
            {mode === "login"
              ? "Log in to continue."
              : "Choose your role and join GrowNow."}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">

            {mode === "register" && (
              <>
                <div>
                  <label className="text-sm font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-2xl border border-purple-100 px-4 py-3 outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Role
                  </label>

                  <select
                    value={role}
                    onChange={(e) =>
                      setRole(e.target.value as "umkm" | "freelancer")
                    }
                    className="mt-2 w-full rounded-2xl border border-purple-100 px-4 py-3 outline-none focus:border-purple-500"
                  >
                    <option value="umkm">Small Business (UMKM)</option>
                    <option value="freelancer">Freelancer</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="text-sm font-semibold">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-purple-100 px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Minimum 6 characters"
                className="mt-2 w-full rounded-2xl border border-purple-100 px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            {message && (
              <div className="rounded-2xl bg-purple-50 px-4 py-3 text-sm text-purple-700">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-purple-700 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-200 hover:bg-purple-800 disabled:opacity-60"
            >
              {loading
                ? "Processing..."
                : mode === "login"
                ? "Log In"
                : "Create Account"}
            </button>
          </form>

          <button
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setMessage("");
            }}
            className="mt-6 w-full text-sm font-semibold text-purple-700 hover:text-purple-900"
          >
            {mode === "login"
              ? "No account yet? Register here"
              : "Already have an account? Log in"}
          </button>
        </div>
      </section>
    </main>
  );
}