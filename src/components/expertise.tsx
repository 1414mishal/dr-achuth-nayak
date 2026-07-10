import { Target, Crosshair, HeartPulse } from "lucide-react";
import { Reveal } from "@/components/reveal";

const CARDS = [
  {
    icon: Target,
    title: "Brachytherapy",
    description:
      "Intracavitary and interstitial brachytherapy procedures, performed and assisted, in gynaecological tumours, head & neck cancers, breast cancers and soft tissue sarcomas.",
    items: ["Gynaecological tumours", "Head & neck cancers", "Breast & soft tissue sarcomas"],
  },
  {
    icon: Crosshair,
    title: "SRS & SBRT",
    description:
      "Experienced in stereotactic radiosurgery and stereotactic body radiotherapy, high-precision, image-guided treatment for tumours in critical locations.",
    items: ["Brain tumours", "GI & lung tumours", "Bone tumours"],
  },
  {
    icon: HeartPulse,
    title: "Comprehensive Cancer Care",
    description:
      "Extensive OPD experience diagnosing and treating malignancies across the spectrum, from head and neck to paediatric solid tumours.",
    items: ["Oral, laryngeal & pharyngeal", "Gynaecological & breast", "GI, brain & paediatric tumours"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-ink/10">
      <div className="mx-auto w-full max-w-container px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mb-16 max-w-2xl">
          <div className="eyebrow mb-4 text-teal-400">Clinical Expertise</div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Advanced radiation therapy, <span className="serif-accent text-teal-300">across all fronts</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="shadow-glow-sm group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-navy-900/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/40 hover:bg-navy-900/95">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-teal-400/25 bg-teal-400/10 transition-transform duration-300 group-hover:scale-110">
                  <card.icon size={24} strokeWidth={1.8} style={{ color: "#14b8a6" }} />
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{card.title}</h3>
                <p className="mt-4 flex-grow text-sm leading-relaxed text-mist">{card.description}</p>
                <ul className="mt-8 space-y-0 border-t border-ink/10 pt-2 text-sm font-medium">
                  {card.items.map((item, idx) => (
                    <li
                      key={item}
                      className={`flex items-center justify-between py-3.5 ${
                        idx < card.items.length - 1 ? "border-b border-ink/5" : ""
                      }`}
                    >
                      {item} <span className="text-teal-400">·</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
