import { RadiationMark } from "@/components/radiation-mark";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-navy-950/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-container px-5 py-12 md:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-teal-400/25 bg-teal-400/10">
              <RadiationMark className="h-4 w-4" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight">Dr. Achuth S. Nayak</span>
          </div>
          <p className="text-center text-xs font-medium text-mist md:text-right">
            Radiation Oncologist · MBBS, MD (Radiation Oncology), DNB
            <br className="sm:hidden" />
            <span className="hidden sm:inline">· </span>Yenepoya Medical College Hospital, Mangaluru
          </p>
        </div>
        <div className="mt-8 border-t border-ink/5 pt-6 text-center text-xs text-mist/70">
          © 2026 Dr. Achuth S. Nayak. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
