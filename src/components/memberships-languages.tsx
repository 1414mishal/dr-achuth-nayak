import { Reveal } from "@/components/reveal";

const MEMBERSHIPS = [
  { initial: "A", name: "ASTRO", detail: "American Society for Radiation Oncology" },
  { initial: "A", name: "AROI", detail: "Association of Radiation Oncologists of India" },
  { initial: "M", name: "MH-AROI", detail: "Maharashtra Association of Radiation Oncology" },
];

const LANGUAGES = [
  { label: "Konkani · mother tongue", accent: true },
  { label: "English" },
  { label: "Malayalam" },
  { label: "Hindi" },
  { label: "Kannada" },
  { label: "Tamil" },
];

export function MembershipsLanguages() {
  return (
    <section className="mx-auto w-full max-w-container px-5 py-24 md:px-10 md:py-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="eyebrow mb-4 text-teal-400">Professional Memberships</div>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">Affiliations</h2>
          <ul className="space-y-4">
            {MEMBERSHIPS.map((m) => (
              <li
                key={m.name}
                className="flex items-start gap-4 rounded-xl border border-ink/10 bg-navy-850/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-navy-850"
              >
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-teal-400/25 bg-teal-400/10 text-sm font-bold text-teal-400">
                  {m.initial}
                </span>
                <div>
                  <div className="font-semibold text-ink">{m.name}</div>
                  <p className="text-sm text-mist">{m.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="eyebrow mb-4 text-teal-400">Languages</div>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Speaks <span className="serif-accent text-teal-300">your</span> language
          </h2>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map((lang) => (
              <span
                key={lang.label}
                className={`rounded-md border px-5 py-2.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 ${
                  lang.accent
                    ? "border-teal-400/25 bg-teal-400/10 text-teal-300"
                    : "border-ink/15 bg-navy-850/70 text-ink"
                }`}
              >
                {lang.label}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-mist">
            Clear communication matters in cancer care. Consultations are available in six languages, so patients
            and families can discuss diagnosis and treatment in the language they are most comfortable with.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
