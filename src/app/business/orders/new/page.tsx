"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewOrderPage() {
  const router = useRouter();

  const [businessName, setBusinessName] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/business/orders/demo-order");
  }

  return (
  <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
    <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center">
      <div className="w-full max-w-4xl rounded-[2rem] bg-[#262b3d] p-10 shadow-2xl shadow-purple-500/10">
        <p className="text-lg font-bold text-purple-400">
          Creating New Order
        </p>

        <h1 className="mt-3 text-5xl font-extrabold">
          Request A Digital Service
        </h1>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block text-xl font-bold">
              Business Name
            </label>

            <input
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Kopi Senja"
              className="w-full rounded-xl bg-[#5d6373] px-5 py-4 text-lg text-white placeholder:text-slate-300 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xl font-bold">
              Price Range (in IDR)
            </label>

            <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              placeholder="Rp 500.000 - Rp 1.000.000"
              className="w-full rounded-xl bg-[#5d6373] px-5 py-4 text-lg text-white placeholder:text-slate-300 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-xl font-bold">
              Job Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your project goals and expectations..."
              rows={7}
              className="w-full resize-none rounded-xl bg-[#5d6373] px-5 py-4 text-lg text-white placeholder:text-slate-300 outline-none"
            />
          </div>

          <div className="mt-8 flex items-center justify-end gap-4">
  <Link
    href="/business"
    className="flex items-center justify-center rounded-full bg-[#a8a8a8] px-8 py-3 text-xl font-extrabold text-white shadow-lg transition hover:bg-[#bdbdbd]"
  >
    Cancel
  </Link>

  <button
    type="submit"
    className="flex items-center justify-center rounded-full bg-[#8b4dff] px-8 py-3 text-xl font-extrabold text-white shadow-lg transition hover:bg-[#9d66ff]"
  >
    Submit Order
  </button>
</div>
        </form>
      </div>
    </section>
  </main>
);
}