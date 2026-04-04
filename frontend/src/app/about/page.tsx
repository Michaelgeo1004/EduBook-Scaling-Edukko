import Link from "next/link";
import { UiCard } from "@/components/ui-card";

export default function AboutPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background font-sans">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--accent-light)_0%,transparent_70%)] opacity-80" />
      
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Link 
            href="/"
            className="mb-8 text-sm font-medium text-accent hover:underline flex items-center gap-2"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Our Mission
          </h1>
          
          <div className="mt-12 max-w-3xl">
            <UiCard variant="glass" padding="p-10" className="text-left">
              <h2 className="text-2xl font-semibold text-accent mb-6">Modernizing Education</h2>
              <p className="text-lg leading-relaxed text-muted mb-8">
                TutorFlow (formerly EduBook) was born from a simple observation: learning is often hindered by the friction of administration. 
                Whether it's the confusion of scheduling across time zones, the manual tracking of payments, or the loss of key insights after a session ends—these are hurdles that shouldn't exist.
              </p>
              <p className="text-lg leading-relaxed text-muted">
                Our mission is to build the digital nervous system for modern tutoring. By integrating state-of-the-art tools like 
                Google Calendar, Stripe, and Read.ai, we empower educators to focus on what they do best: <strong>inspiring the next generation of thinkers.</strong>
              </p>
            </UiCard>
          </div>

          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <div className="space-y-4 text-left">
              <div className="h-1 bg-accent w-12 rounded-full" />
              <h3 className="text-xl font-bold text-foreground">Integrity First</h3>
              <p className="text-sm text-muted">We prioritize security and transparency in every transaction, ensuring tutors get paid on time and students are protected.</p>
            </div>
            <div className="space-y-4 text-left">
              <div className="h-1 bg-accent w-12 rounded-full" />
              <h3 className="text-xl font-bold text-foreground">AI Integration</h3>
              <p className="text-sm text-muted">We leverage advanced AI to capture the brilliance of every lesson, making session recaps more actionable and learning more effective.</p>
            </div>
            <div className="space-y-4 text-left">
              <div className="h-1 bg-accent w-12 rounded-full" />
              <h3 className="text-xl font-bold text-foreground">Open Ecosystem</h3>
              <p className="text-sm text-muted">TutorFlow is designed to play well with the tools you already use, reducing the cost of switching and increasing productivity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
