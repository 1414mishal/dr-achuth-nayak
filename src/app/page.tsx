import { ShaderBackground } from "@/components/shader-background";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FocusTicker } from "@/components/focus-ticker";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Journey } from "@/components/journey";
import { Academics } from "@/components/academics";
import { MembershipsLanguages } from "@/components/memberships-languages";
import { CtaBand } from "@/components/cta-band";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <Hero />
      <FocusTicker />
      <Stats />
      <About />
      <Expertise />
      <Journey />
      <Academics />
      <MembershipsLanguages />
      <CtaBand />
      <Contact />
      <Footer />
    </>
  );
}
