import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-surface/50 py-16 dark:bg-stone-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-accent text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.5l8 4.5v6l-8 4.5-8-4.5v-6z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">TutorFlow</span>
            </Link>
            <p className="text-sm text-muted">
              Modernizing learning experiences for educators and students worldwide.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Product",
              links: ["Platform", "Features", "Pricing", "API Status"],
            },
            {
              title: "Company",
              links: ["About Us", "Our Journey", "Leadership", "Contact"],
            },
            {
              title: "Support",
              links: ["Documentation", "Help Center", "Privacy Policy", "Terms of Service"],
            },
          ].map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">{column.title}</h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-8 border-t border-border-subtle pt-8">
          <p className="text-sm text-muted">
            © 2024 TutorFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted hover:text-accent">
               {/* Facebook/Social placeholder */}
               <span className="text-xs uppercase tracking-widest font-bold">Facebook</span>
            </Link>
            <Link href="#" className="text-muted hover:text-accent">
               <span className="text-xs uppercase tracking-widest font-bold">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
