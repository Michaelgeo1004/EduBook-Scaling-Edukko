import Image from "next/image";
import Link from "next/link";
import { UiCard } from "@/components/ui-card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 pb-32 sm:pt-32 lg:px-8">
        {/* Background Accents */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-[#f0f9ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-7xl">
            Empowering Education through <br />
            <span className="text-accent underline decoration-accent/20 underline-offset-8">Modern Tutoring</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-muted sm:text-xl">
            Learn how TutorFlow streamlines scheduling, learning, and <br className="hidden sm:block" />
            growth for educators and students.
          </p>

          {/* Glass Mission Card */}
          <div className="mt-20 relative px-4 sm:px-0">
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 -z-10 opacity-40 dark:opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-stone-200 rotate-45 transform" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent rotate-12 transform" />
              <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-stone-300 -rotate-12 transform" />
            </div>

            <UiCard variant="glass" padding="p-10 sm:p-16" className="max-w-3xl mx-auto text-center relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Our Mission</p>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-foreground">
                To modernize learning experiences by providing educators and students with intuitive, seamless technology for growth and connection.
              </h2>
            </UiCard>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Timeline + Features) */}
      <section className="py-24 bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            
            {/* Our Journey (Timeline) */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-12">Our Journey</h2>
              <div className="relative pl-8">
                {/* Vertical Line */}
                <div className="absolute left-[3px] top-2 bottom-2 w-[2px] bg-accent/20" />
                
                <div className="space-y-12">
                  {[
                    { year: "2018", title: "Visionary Start", desc: "To modernize learning experiences providing educators:students." },
                    { year: "2019", title: "Founding & Prototype", desc: "Founding & prototype was launching and prototype." },
                    { year: "2021", title: "Growth Phase", desc: "Growth Phase-to growth pioneering student and translates." },
                    { year: "2023", title: "Feature Expansion", desc: "Feature expansionally associate learners and culture." },
                    { year: "2024", title: "TutorFlow Launched", desc: "TutorFlow launched as place for educators and growth.", current: true },
                  ].map((step, i) => (
                    <div key={i} className="relative">
                      {/* Circle Indicator */}
                      <div className={`absolute -left-[33px] top-1.5 h-2 w-2 rounded-full border-2 ${step.current ? 'bg-accent border-accent' : 'bg-surface border-accent/40'}`} />
                      
                      <div>
                        <span className="text-sm font-bold text-accent">{step.year} —</span>
                        <h3 className="text-lg font-bold text-foreground mt-1">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted max-w-xs">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Platform Features */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-12">Core Platform Features</h2>
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  {
                    title: "Google Calendar Sync",
                    desc: "Seamless scheduling icon to allow context and growth and refreshing habits.",
                    icon: (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-stone-100 bg-white shadow-sm">
                        <Image src="/globe.svg" alt="Calendar" width={24} height={24} className="opacity-80" />
                      </div>
                    )
                  },
                  {
                    title: "AI-Powered Recaps",
                    desc: "Summary recaps summary summaries AI solutions short-lived and future-ready.",
                    icon: (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-stone-100 bg-white shadow-sm">
                        <span className="text-accent font-bold text-xs">AI</span>
                      </div>
                    )
                  },
                  {
                    title: "Unified Dashboard",
                    desc: "Interface dashboard interface storage and translates your orders and experience.",
                    icon: (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-stone-100 bg-white shadow-sm">
                        <svg className="h-6 w-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                      </div>
                    )
                  }
                ].map((feature, i) => (
                  <UiCard key={i} variant="outline" padding="p-8" className="bg-white/50 border-stone-100 dark:bg-stone-800/30">
                    {feature.icon}
                    <h3 className="mt-6 text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{feature.desc}</p>
                  </UiCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center sm:text-left">Meet Our Leadership</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sarah Chen", role: "CEO", img: "/leadership/sarah.png", bio: "Sarah Chen is a pioneer of professional experience, and intuitive technology for growth and content." },
              { name: "Ben Carter", role: "CTO", img: "/leadership/ben.png", bio: "Ben Carter is a brand technology and creative profile, and connect to real-life events and research." },
              { name: "Maya Patel", role: "COO", img: "/leadership/maya.png", bio: "Maya Patel is a leader at of education in management and lead for development solutions." }
            ].map((leader, i) => (
              <UiCard key={i} variant="outline" padding="p-0" className="overflow-hidden bg-white/50 border-stone-100 dark:bg-stone-800/30 group">
                <div className="relative aspect-square w-full">
                  <Image src={leader.img} alt={leader.name} fill className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mt-1">{leader.role}</p>
                  <p className="mt-4 text-sm text-muted leading-relaxed">{leader.bio}</p>
                </div>
              </UiCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
