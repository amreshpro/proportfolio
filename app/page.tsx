import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pattern from "@/components/pattern";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Pattern/>
      <Hero />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}
