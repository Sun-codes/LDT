"use client";

import Link from "next/link";
import { useState } from "react";

type Message = {
  sender: "business" | "you";
  name: string;
  text: string;
};

export default function FreelancerChatPage() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "business",
      name: "Kopi Senja",
      text: "Hi! We need a cleaner Instagram look for our coffee shop. Can you help with feed layout and highlight covers?",
    },
    {
      sender: "you",
      name: "You",
      text: "Yes, I can help. I’ll start by preparing a visual direction and content template options.",
    },
    {
      sender: "business",
      name: "Kopi Senja",
      text: "Great. We want something warm, modern, and easy to reuse weekly.",
    },
  ]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim()) return;

    setMessages((current) => [
      ...current,
      {
        sender: "you",
        name: "You",
        text: input.trim(),
      },
    ]);

    setInput("");
  }

  return (
    <main className="h-screen overflow-hidden bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="h-20 border-b border-white/10">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <Link
            href="/freelancer"
            className="text-2xl font-bold text-cyan-400"
          >
            GrowNow
          </Link>

          <Link
            href="/freelancer"
            className="text-sm font-semibold text-slate-300 hover:text-white"
          >
            Back to Dashboard
          </Link>
        </div>
      </nav>

      {/* CHATROOM */}
      <section className="mx-auto flex h-[calc(100vh-5rem)] max-w-5xl flex-col px-6 py-6">
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 shadow-lg shadow-cyan-500/10">

          {/* HEADER */}
          <div className="border-b border-white/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Active Project Chat
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Kopi Senja — Instagram Rebranding
            </h1>

            <p className="mt-2 text-slate-300">
              Discuss scope, assets, deadline, and project updates.
            </p>
          </div>

          {/* MESSAGES */}
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-6">

            {messages.map((message, index) => {
              const isYou = message.sender === "you";

              return (
                <div
                  key={index}
                  className={`w-full flex ${
                    isYou ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[340px] rounded-2xl px-4 py-2 text-[14px] leading-snug shadow-sm ${
                      isYou
                        ? "rounded-br-md bg-cyan-400 text-slate-950"
                        : "rounded-bl-md bg-slate-800 text-slate-100"
                    }`}
                  >
                    <p
                      className={`mb-0.5 text-[11px] font-bold ${
                        isYou ? "text-slate-800" : "text-cyan-300"
                      }`}
                    >
                      {message.name}
                    </p>

                    <p>{message.text}</p>

                    <p
                      className={`mt-1 text-right text-[10px] ${
                        isYou ? "text-slate-700" : "text-slate-400"
                      }`}
                    >
                      19:48
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* INPUT */}
          <form
            onSubmit={handleSend}
            className="border-t border-white/10 p-5"
          >
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a demo message..."
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />

              <button
                type="submit"
                className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}