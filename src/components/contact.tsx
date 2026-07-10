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
              For appointments, second opinions or academic enquiries, reach out directly, or visit the Department
              of Radiation Oncology at Yenepoya Medical College Hospital.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="tel:+919833369546"
              className="shadow-glow-sm group rounded-2xl border border-ink/10 bg-navy-900/85 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/40 hover:bg-navy-900"
            >
              <div className="eyebrow mb-3 text-teal-400">Phone</div>
              <div className="font-display text-lg font-semibold text-ink group-hover:text-teal-300">
                +91 98333 69546
              </div>
            </a>
            <a
              href="https://wa.me/919833369546"
              target="_blank"
              rel="noreferrer"
              className="shadow-glow-sm group rounded-2xl border border-ink/10 bg-navy-900/85 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/40 hover:bg-navy-900"
            >
              <div className="eyebrow mb-3 text-teal-400">WhatsApp</div>
              <div className="font-display text-lg font-semibold text-ink group-hover:text-teal-300">
                +91 98333 69546
              </div>
              <p className="mt-1 text-sm leading-relaxed text-mist">Book a consultation or ask a quick question directly</p>
            </a>
            <a
              href="mailto:sumithnayak88@gmail.com"
              className="shadow-glow-sm group rounded-2xl border border-ink/10 bg-navy-900/85 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/40 hover:bg-navy-900"
            >
              <div className="eyebrow mb-3 text-teal-400">Email</div>
              <div className="break-all font-display text-lg font-semibold text-ink group-hover:text-teal-300">
                sumithnayak88@gmail.com
              </div>
            </a>
            <div className="rounded-2xl border border-ink/10 bg-navy-900/85 p-7 backdrop-blur-md sm:col-span-2">
              <div className="eyebrow mb-3 text-teal-400">Hospital</div>
              <div className="font-display text-lg font-semibold text-ink">Department of Radiation Oncology</div>
              <p className="mt-1 text-sm leading-relaxed text-mist">
                Yenepoya Medical College Hospital, Deralakatte, Mangaluru, Karnataka
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
