import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-stone-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white shadow-lg shadow-accent/20">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.5l8 4.5v6l-8 4.5-8-4.5v-6z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">TutorFlow</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {["Platform", "Features", "Resources", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:bg-accent/90"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
