import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-2xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
        comeet
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        Vite + React + TanStack Router, installable as a PWA.
      </p>
    </main>
  );
}
