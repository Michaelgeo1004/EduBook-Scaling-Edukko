import type { ReactNode } from "react";

export function UiCard({
  children,
  className = "",
  padding = "p-6",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
  variant?: "default" | "glass" | "outline";
}) {
  const variants = {
    default: "bg-surface border-border-subtle shadow-sm hover-lift",
    glass: "glass-panel shadow-lg hover-lift",
    outline: "bg-transparent border-border-subtle shadow-none",
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${variants[variant]} ${padding} ${className}`}
    >
      {children}
    </div>
  );
}

export function UiCardHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
