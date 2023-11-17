import { Skills, Contact, TechSkill, Project, About } from "@/components";

import Hero from "@/components/Hero";

export default function MainPage() {
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      <TechSkill />

      <Project />
      <Contact />
    </div>
  );
}
