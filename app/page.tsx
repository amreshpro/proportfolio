"use client"
import { Container, DarkModeButton, Footer, Hero, Navbar, Projects, Skills } from "@/components";
import { Toaster } from "react-hot-toast";

export default function Main() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Skills/>
      <Projects/>
       <Footer />
       <DarkModeButton/>
       {/* for hot react toast  */}
      <Toaster
  position="bottom-center"
  reverseOrder={true}
/>
    </Container>
  );
}
