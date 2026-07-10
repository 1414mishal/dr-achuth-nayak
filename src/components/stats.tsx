import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

const STATS = [
  { value: 9, suffix: "+", label: "Years Post-MD Experience" },
  { value: 3, suffix: "", label: "Peer-Reviewed Publications" },
  { value: 2, suffix: "", label: "International Conference Posters" },
  { value: 6, suffix: "", label: "Languages Spoken" },
];

export function Stats() {
  return (
    <section className="border-b border-ink/10">
      <div className="mx-auto w-full max-w-container">
        <div className="grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="group flex flex-col items-center bg-navy-900/75 px-4 py-10 text-center backdrop-blur-md md:px-6 md:py-14">
                <div className="font-display text-[2rem] font-bold tracking-tight text-teal-400 transition-transform duration-300 group-hover:scale-110 sm:text-4xl md:text-5xl">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="eyebrow mt-3 text-mist">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
