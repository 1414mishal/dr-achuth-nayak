import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PUBLICATIONS = [
  {
    citation: (
      <>
        Krishnan J, <span className="font-semibold">Nayak AS</span>, Farooq N, Dinesh M, Kunikullaya S, Shafeeque M.{" "}
        <span className="italic">
          Validation of Treatment Planning Systems based on Dose Calculation Accuracy for Extended SSD Total Body
          Irradiation with and without Beam Spoiler.
        </span>
      </>
    ),
    meta: "Journal of Medical Physics, 50(3):501–509, Jul–Sep 2025",
    doi: "10.4103/jmp.jmp_103_25",
    href: "https://doi.org/10.4103/jmp.jmp_103_25",
  },
  {
    citation: (
      <>
        Krishnan J, Farooq N, <span className="font-semibold">Nayak AS</span>, Anu D, Angana B, Dinesh M, et al.{" "}
        <span className="italic">
          Development of a Brachytherapy Applicator with In-Vivo Dosimetry Using 3D Printing Technology for the
          Treatment of Gynaecological Cancers.
        </span>
      </>
    ),
    meta: "Asian Pacific Journal of Cancer Care, 11(2):157–167, 2026",
    doi: "10.31557/apjcc.2026.11.2.157-167",
    href: "https://doi.org/10.31557/apjcc.2026.11.2.157-167",
  },
  {
    citation: (
      <>
        Mitra SA, Shetty V, <span className="font-semibold">Nayak AS</span>, Raja A.{" "}
        <span className="italic">
          Squamous cell carcinoma of renal pelvis and percutaneous nephrolithotomy tracts after PCNL for staghorn
          calculus: point of surgical technique.
        </span>
      </>
    ),
    meta: "ecancer 19:1900, 2025",
    doi: null,
    href: null,
  },
];

const PRESENTATIONS = [
  {
    title: "ASTRO Annual Conference, San Diego, Sep 2017",
    detail:
      "Poster: “Transabdominal ultrasonography based intracavitary planning in cervical cancer” (Nayak A, Engineer R, Chopra S, Mahantshetty U)",
  },
  {
    title: "SIOP Annual Conference, Washington DC, Sep 2017",
    detail:
      "Poster: “Desmoplastic small round cell tumors - a single institution experience” (Khanna N, Nayak A, Laskar S)",
  },
  {
    title: "Maharashtra AROI Conference, Aug 2016",
    detail: "Speaker: Current advances in molecular profiles of medulloblastoma",
  },
  {
    title: "CME “Decoding Oral Cancer - An Update on Current Concepts”, 2026",
    detail: "Invited speaker · Yenepoya Dental College, Mangalore",
  },
];

export function Academics() {
  return (
    <section id="academics" className="border-t border-ink/10">
      <div className="mx-auto w-full max-w-container px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mb-16 max-w-2xl">
          <div className="eyebrow mb-4 text-teal-400">Academic Work</div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Research, publications & <span className="serif-accent text-teal-300">presentations</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h3 className="eyebrow mb-6 text-teal-400">Peer-Reviewed Publications</h3>
            <div className="space-y-6">
              {PUBLICATIONS.map((pub, i) => {
                const cardClass =
                  "group block rounded-xl border border-ink/10 bg-navy-900/85 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-navy-900";
                const content = (
                  <>
                    <p className="text-sm leading-relaxed text-ink">{pub.citation}</p>
                    <p className="mt-3 flex flex-wrap items-center gap-x-2 text-xs font-medium text-mist">
                      {pub.meta}
                      {pub.doi && (
                        <span className="inline-flex items-center gap-1 text-teal-500 transition-colors group-hover:text-teal-400">
                          DOI: {pub.doi} <ArrowUpRight size={12} />
                        </span>
                      )}
                    </p>
                  </>
                );
                return pub.href ? (
                  <a key={i} href={pub.href} target="_blank" rel="noreferrer" className={cardClass}>
                    {content}
                  </a>
                ) : (
                  <div key={i} className={cardClass}>
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="space-y-12">
            <div>
              <h3 className="eyebrow mb-6 text-teal-400">Conference Presentations</h3>
              <ul className="space-y-0 border-t border-ink/10">
                {PRESENTATIONS.map((p, i) => (
                  <li
                    key={p.title}
                    className={`py-5 ${i < PRESENTATIONS.length - 1 ? "border-b border-ink/10" : ""}`}
                  >
                    <div className="text-sm font-semibold text-ink">{p.title}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{p.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-teal-400/20 bg-teal-400/5 p-7">
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(20,184,166,0.10) 0%, transparent 60%)" }}
                aria-hidden="true"
              />
              <h3 className="eyebrow mb-3 text-teal-400">MD Thesis</h3>
              <p className="relative text-sm leading-relaxed text-ink md:text-base">
                <span className="italic">
                  &ldquo;Transabdominal Ultrasonography based Intracavitary Planning in Cervical Cancer&rdquo;
                </span>
                , accepted by Homi Bhabha National University in February 2016 and selected for poster presentation
                at the ASTRO Annual Conference, September 2017.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
