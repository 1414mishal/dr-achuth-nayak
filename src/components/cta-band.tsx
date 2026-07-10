import { PhoneCall } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function CtaBand() {
  return (
    <section className="mx-auto w-full max-w-container px-5 pb-24 md:px-10">
      <Reveal className="relative overflow-hidden rounded-[28px] border border-teal-400/25 bg-teal-400/8 p-10 text-center backdrop-blur-md sm:p-14 lg:p-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(20,184,166,0.14) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Facing a diagnosis? Get <span className="serif-accent text-teal-300">clarity</span> first.
        </h2>
        <p className="relative mx-auto mt-5 max-w-md text-sm leading-relaxed text-mist md:text-base">
          Appointments, second opinions and academic enquiries are all welcome, in person at Yenepoya Medical
          College Hospital or over a call.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:+919833369546"
            className="shadow-glow-lg inline-flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:scale-[1.04] hover:bg-teal-300 hover:text-white active:scale-[0.98]"
          >
            <PhoneCall size={16} strokeWidth={1.5} />
            Call +91 98333 69546
          </a>
          <a
            href="https://wa.me/919833369546"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-navy-900/60 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-colors duration-200 hover:border-teal-400/40 hover:text-teal-300"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Message on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
