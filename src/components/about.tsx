import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-container px-5 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="eyebrow mb-4 text-teal-400">About the Doctor</div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Precision oncology, delivered with <span className="serif-accent text-teal-300">compassion</span>.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-ink/10 bg-navy-850/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-navy-850">
              <div className="font-display text-2xl font-bold text-teal-400">Rank 67</div>
              <p className="mt-1 text-xs leading-relaxed text-mist">
                among ~5,00,000 aspirants in the MAHE medical entrance examination 2006, merit seat with scholarship
              </p>
            </div>
            <div className="rounded-xl border border-ink/10 bg-navy-850/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-navy-850">
              <div className="font-display text-2xl font-bold text-teal-400">Rank 1550</div>
              <p className="mt-1 text-xs leading-relaxed text-mist">
                nationwide in the NEET examination 2013, leading to a merit MD seat at Tata Memorial Hospital
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="space-y-5 text-base leading-relaxed text-mist md:text-lg">
          <p>
            Dr. Achuth S. Nayak is a radiation oncologist currently serving as{" "}
            <span className="font-semibold text-ink">
              Associate Professor in the Department of Radiation Oncology at Yenepoya Medical College Hospital,
              Deralakatte, Mangaluru
            </span>
            , a role he has held since May 2026, after serving as Assistant Professor at the same department since
            November 2021.
          </p>
          <p>
            He completed his MBBS at Kasturba Medical College, Mangalore, followed by his{" "}
            <span className="font-semibold text-ink">MD in Radiation Oncology at Tata Memorial Hospital, Mumbai</span>{" "}
            under Homi Bhabha National University, and the DNB in Radiation Oncology. After his MD, he served three
            years as Senior Resident at Tata Memorial Hospital, then two years as Consultant Radiation Oncologist at
            Radon Cancer Centre, Hubli.
          </p>
          <p>
            His outpatient practice covers the diagnosis and treatment of oral cavity cancers, laryngeal and
            pharyngeal carcinomas, gynaecological cancers, breast cancers, gastrointestinal malignancies, brain
            tumours and paediatric solid tumours. His MD thesis on{" "}
            <span className="italic text-ink">
              transabdominal ultrasonography-based intracavitary planning in cervical cancer
            </span>
            , guided by Dr. Reena Engineer, Professor of Radiation Oncology, was selected for poster presentation at
            the ASTRO Annual Conference 2017.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
