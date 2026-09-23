import { AmbientBackground } from "@/components/ui/ambient-background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
