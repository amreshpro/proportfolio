"use client"
import { Container, Footer, Hero, Navbar, Projects, Skills, VSCodeThemes } from "@/components";
import { Toaster } from "react-hot-toast";

export default function Main() {
  return (
    <Container>

      <Navbar />
      <Hero />
      <Skills/>
      <Projects/>
      <VSCodeThemes/>
       <Footer />
  
       {/* for hot react toast  */}
      <Toaster
  position="bottom-center"
  reverseOrder={true}
/>
    </Container>
  );
}
