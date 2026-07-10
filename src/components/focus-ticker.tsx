const FOCUS_AREAS = [
  "Brachytherapy",
  "SRS & SBRT",
  "Gynaecological Cancers",
  "Head & Neck Cancers",
  "Breast Cancers",
  "GI Malignancies",
  "Brain Tumours",
  "Paediatric Solid Tumours",
  "Soft Tissue Sarcomas",
];

function TickerGroup() {
  return (
    <span className="flex shrink-0 items-center gap-10">
      {FOCUS_AREAS.map((area) => (
        <span key={area} className="flex items-center gap-10">
          <span>{area}</span>
          <span className="text-teal-400">✦</span>
        </span>
      ))}
    </span>
  );
}

export function FocusTicker() {
  return (
    <div
      className="relative z-10 overflow-hidden border-y border-ink/10 bg-navy-900/70 py-4 backdrop-blur-md"
      aria-hidden="true"
    >
      <div className="ticker-track items-center gap-10 pr-10 text-sm font-medium text-mist">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
