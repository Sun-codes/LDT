"use client";

import Link from "next/link";
import { useState } from "react";

type Message = {
  sender: "freelancer" | "you";
  name: string;
  text: string;
};

export default function BusinessChatPage() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "freelancer",
      name: "Freelancer",
      text: "Hi! I’ve received your order request for Instagram Rebranding.",
    },
    {
      sender: "you",
      name: "You",
      text: "Great. We want the design to feel warm, modern, and easy to reuse weekly.",
    },
    {
      sender: "freelancer",
      name: "Freelancer",
      text: "Understood. I’ll prepare a visual direction and content layout draft first.",
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
            href="/business"
            className="text-2xl font-bold text-purple-400"
          >
            GrowNow
          </Link>

          <Link
            href="/business/orders/demo-orders"
            className="text-sm font-semibold text-slate-300 hover:text-white"
          >
            Back to Order
          </Link>
        </div>
      </nav>

      {/* CHATROOM */}
      <section className="mx-auto flex h-[calc(100vh-5rem)] max-w-5xl flex-col px-6 py-6">

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-3xl border border-purple-500/20 bg-white/5 shadow-lg shadow-purple-500/10">

          {/* HEADER */}
          <div className="border-b border-white/10 p-6">

            <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">
              Active Project Chat
            </p>

            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h1 className="text-3xl font-bold">
                  You — Instagram Rebranding
                </h1>

                <p className="mt-2 text-slate-300">
                  Discuss project scope, references, deadline, and updates with the assigned freelancer.
                </p>
              </div>

              <span className="w-fit rounded-full bg-purple-500/20 px-4 py-2 text-sm font-bold text-purple-300">
                In Progress
              </span>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-6">

            {messages.map((message, index) => {
              const isYou = message.sender === "you";

              return (
                <div
                  key={index}
                  className={`flex w-full ${
                    isYou ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[340px] rounded-2xl px-4 py-2 text-[14px] leading-snug shadow-sm ${
                      isYou
                        ? "rounded-br-md bg-purple-500 text-white"
                        : "rounded-bl-md bg-slate-800 text-slate-100"
                    }`}
                  >

                    <p
                      className={`mb-0.5 text-[11px] font-bold ${
                        isYou ? "text-purple-100" : "text-purple-300"
                      }`}
                    >
                      {message.name}
                    </p>

                    <p>{message.text}</p>

                    <p
                      className={`mt-1 text-right text-[10px] ${
                        isYou ? "text-purple-100/80" : "text-slate-400"
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
                placeholder="Type a message to the freelancer..."
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-400"
              />

              <button
                type="submit"
                className="rounded-full bg-purple-500 px-6 py-3 font-bold text-white hover:bg-purple-400"
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