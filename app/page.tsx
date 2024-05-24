import { Contact, Container, Footer, Hero, Navbar, Projects, Skills } from "@/components";
import { Toaster } from "react-hot-toast";

export default function Main() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
      <Toaster
  position="bottom-center"
  reverseOrder={true}
/>
    </Container>
  );
}
