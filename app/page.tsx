import { Toaster } from "react-hot-toast";

import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className=" ">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster position="top-center" reverseOrder={true} />
    </main>
  );
}
