import { Contact, Container, Footer, Hero, Navbar, Projects, Skills } from "@/components";

export default function Main() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </Container>
  );
}
