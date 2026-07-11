import { Building2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-ink/10">
      <div className="mx-auto w-full max-w-container px-5 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="eyebrow mb-4 text-teal-400">Get in Touch</div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Book a <span className="serif-accent text-teal-300">consultation</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mist md:text-lg">
              For appointments, second opinions or academic enquiries, visit the Department of Radiation Oncology
              at Yenepoya Medical College Hospital.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="shadow-glow-sm rounded-2xl border border-ink/10 bg-navy-900/85 p-8 backdrop-blur-md">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-teal-400/25 bg-teal-400/10">
                <Building2 size={22} strokeWidth={1.8} style={{ color: "#14b8a6" }} />
              </div>
              <div className="eyebrow mb-2 text-teal-400">Hospital</div>
              <div className="font-display text-xl font-semibold text-ink">Department of Radiation Oncology</div>
              <p className="mt-2 text-sm leading-relaxed text-mist md:text-base">
                Yenepoya Medical College Hospital, Deralakatte, Mangaluru, Karnataka
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
