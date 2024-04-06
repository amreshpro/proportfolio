import { ReactNode } from "@tanstack/react-router";

export default function LayoutContainer({ children }: { children: ReactNode }) {
  return (
    <main className="flex justify-center p-8 md:p-6 sm:p-2  sm:pt-8 ">
      {children}
    </main>
  );
}
