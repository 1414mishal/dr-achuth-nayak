"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Target, LineChart, ArrowUpRight } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";

export function Hero() {
  return (
    <section id="home" className="relative isolate">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center text-center"
        >
          <span className="eyebrow mb-5 text-teal-400">
            Associate Professor · Yenepoya Medical College Hospital
          </span>
          <h1 className="font-display bg-gradient-to-br from-ink to-teal-600 bg-clip-text py-2 text-5xl font-bold tracking-tight text-transparent md:text-7xl">
            Dr. Achuth
            <br />
            S. Nayak
          </h1>
          <p className="font-display mt-5 text-lg font-medium text-mist md:text-xl">
            Radiation Oncologist <span className="text-teal-500">·</span> MBBS · MD · DNB
          </p>

          <div className="shadow-glow-sm relative mx-auto mt-8 w-32 overflow-hidden rounded-2xl border border-teal-400/25 bg-navy-900/85 p-1 backdrop-blur-md md:w-40">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/dr-achuth-nayak.jpg"
                alt="Dr. Achuth S. Nayak, Radiation Oncologist"
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </LampContainer>

      <div className="mx-auto grid w-full max-w-container grid-cols-1 items-center gap-14 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative z-10 max-w-2xl">
          <p className="max-w-lg text-base leading-relaxed text-mist md:text-lg">
            Trained at Tata Memorial Hospital, Mumbai, with expertise spanning brachytherapy,
            stereotactic radiosurgery (SRS/SBRT) and comprehensive cancer care, and a special
            interest in gynaecological and head &amp; neck cancers.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group shadow-glow-lg inline-flex items-center gap-2.5 rounded-full bg-teal-400 px-8 py-4 text-base font-semibold text-ink transition-all duration-300 hover:scale-[1.04] hover:bg-teal-300 hover:text-white active:scale-[0.98]"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-ink/10 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight size={12} strokeWidth={2.2} />
              </span>
              Book a Consultation
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-navy-900/60 px-8 py-4 text-base font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-teal-400/50 hover:text-teal-300"
            >
              Areas of Expertise
            </a>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block">
          <div className="space-y-4">
            <div className="shadow-glow-sm relative mx-auto w-56 overflow-hidden rounded-3xl border border-teal-400/25 bg-navy-900/85 p-1.5 backdrop-blur-md">
              <div className="relative aspect-square overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/dr-achuth-nayak.jpg"
                  alt="Dr. Achuth S. Nayak, Radiation Oncologist"
                  fill
                  sizes="224px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <CredentialCard
              icon={GraduationCap}
              eyebrow="Trained At"
              title="Tata Memorial Hospital, Mumbai"
              detail="MD Radiation Oncology · Homi Bhabha National University"
            />
            <CredentialCard
              icon={Target}
              eyebrow="Special Interest"
              title="Gynaecological & Head and Neck Cancers"
              detail="Brachytherapy · SRS / SBRT · Precision radiotherapy"
              accent
              className="ml-8"
            />
            <CredentialCard
              icon={LineChart}
              eyebrow="Presented At"
              title="ASTRO · SIOP · AROI"
              detail="San Diego · Washington DC · Maharashtra"
            />
            <div className="ml-8 flex items-center gap-3 rounded-full border border-ink/10 bg-navy-900/85 py-2.5 pl-3 pr-5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
              </span>
              <span className="text-xs font-semibold text-ink">Consulting at Deralakatte, Mangaluru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialCard({
  icon: Icon,
  eyebrow,
  title,
  detail,
  accent,
  className = "",
}: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  eyebrow: string;
  title: string;
  detail: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
        accent
          ? "border-teal-400/25 bg-teal-400/8 hover:border-teal-400/45"
          : "border-ink/10 bg-navy-900/85 hover:border-teal-400/35"
      } ${className}`}
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-teal-400/25 bg-teal-400/10">
        <Icon size={20} style={{ color: "#14b8a6" }} />
      </div>
      <div>
        <div className="eyebrow mb-1.5 text-teal-400">{eyebrow}</div>
        <div className="font-display text-lg font-semibold leading-snug text-ink">{title}</div>
        <p className="mt-1 text-sm text-mist">{detail}</p>
      </div>
    </div>
  );
}
