"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { UiCard } from "@/components/ui-card";
import { api } from "@/lib/api";

export default function DashboardHomePage() {
  const { user } = useAuth();

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Hi, {user?.full_name?.split(" ")[0] ?? "there"}
        </h1>
        <p className="mt-2 text-stone-600 dark:text-stone-400">
          You&apos;re signed in as a{" "}
          <span className="font-medium capitalize text-stone-800 dark:text-stone-200">
            {user?.role}
          </span>
          . Open a session to chat, pay, and view Read.ai recaps.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/dashboard/sessions" className="group block">
          <UiCard variant="glass" className="h-full">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">
              My sessions
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              List bookings, open Stripe payment, live chat, and meeting recap
              panel.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
              View sessions →
            </span>
          </UiCard>
        </Link>
        {user?.role === "student" && (
          <Link href="/dashboard/book" className="group block">
            <UiCard variant="glass" className="h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">
                Book a session
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Choose a tutor, subject, and time slot. Conflicts are checked on
                the server.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                Start booking →
              </span>
            </UiCard>
          </Link>
        )}
        {user?.role === "tutor" && (
          <button
            onClick={async () => {
              try {
                const data = await api<{ url: string }>("/calendar/auth");
                window.location.href = data.url;
              } catch (e) {
                alert(e instanceof Error ? e.message : "Auth failed");
              }
            }}
            className="group block w-full text-left"
          >
            <UiCard variant="glass" className="h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-foreground">
                Google Calendar Sync
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Connect your account via OAuth2 to automatically block timeslots when you have external events.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline dark:text-blue-400">
                Connect Calendar →
              </span>
            </UiCard>
          </button>
        )}
      </div>
    </div>
  );
}
