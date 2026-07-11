import { Reveal } from "@/components/reveal";

const MILESTONES = [
  {
    date: "May 2026 – Present",
    title: "Associate Professor, Radiation Oncology",
    place: "Yenepoya Medical College Hospital, Deralakatte, Mangaluru",
    active: true,
  },
  {
    date: "Nov 2021 – May 2026",
    title: "Assistant Professor, Radiation Oncology",
    place: "Yenepoya Medical College Hospital, Deralakatte, Mangaluru",
  },
  {
    date: "Sep 2019 – Oct 2021",
    title: "Consultant Radiation Oncologist",
    place: "Radon Cancer Centre, Hubli, Karnataka",
  },
  {
    date: "Aug 2016 – Aug 2019",
    title: "Senior Resident, Radiation Oncology",
    place: "Tata Memorial Hospital, Mumbai",
  },
  {
    date: "2017",
    title: "DNB, Radiation Oncology",
    place: "Diplomate of National Board, passed November 2017",
  },
  {
    date: "Aug 2013 – Jul 2016",
    title: "MD, Radiation Oncology",
    place:
      "Tata Memorial Hospital, Mumbai · Homi Bhabha National University, guided by Dr. Reena Engineer, Professor of Radiation Oncology",
  },
  {
    date: "Jun 2006 – Jun 2012",
    title: "MBBS",
    place: "Kasturba Medical College, Mangalore, merit seat with an educational scholarship from Manipal",
  },
];

export function Journey() {
  return (
    <section id="journey" className="mx-auto w-full max-w-container px-5 py-24 md:px-10 md:py-32">
      <Reveal className="mb-16 max-w-2xl">
        <div className="eyebrow mb-4 text-teal-400">Professional Journey</div>
        <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Two decades of medicine, <span className="serif-accent text-teal-300">one focus</span>.
        </h2>
      </Reveal>

      <ol className="relative ml-3 space-y-10 pl-8 md:ml-6 md:pl-12">
        <span className="timeline-line absolute bottom-0 left-0 top-1 w-px" aria-hidden="true" />
        {MILESTONES.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.05} className="relative">
            <li className="relative">
              <span
                className={`absolute -left-[39px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 bg-navy-900 md:-left-[55px] ${
                  m.active ? "shadow-glow-sm border-teal-400" : "border-ink/30"
                }`}
              />
              <div className={`eyebrow ${m.active ? "text-teal-400" : "text-mist"}`}>{m.date}</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink md:text-2xl">{m.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist md:text-base">{m.place}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
