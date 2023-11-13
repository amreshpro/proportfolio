import { Skills,Contact, TechSkill, Project } from "@/components";

import Hero from "@/components/Hero";


export default function MainPage() {
  return (
    <div className="flex flex-col gap-4">
      <Hero/>
<TechSkill/>
<Project/>
      <Contact/>
    </div>
  )
}