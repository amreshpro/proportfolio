import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pattern from "@/components/pattern";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ThemeSwitcher from "@/components/theme-switcher";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4  items-center">
      <Header />
      <ThemeSwitcher/>
      <Pattern/>
      <Hero />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}
