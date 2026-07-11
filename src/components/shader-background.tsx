import { EtherealShadow } from "@/components/ui/etheral-shadow";

export function ShaderBackground() {
  return (
    <>
      <div className="aurora-fallback fixed inset-0 -z-20" />
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <EtherealShadow
          color="rgba(20, 184, 166, 0.3)"
          animation={{ scale: 65, speed: 97 }}
          noise={{ opacity: 0.04, scale: 1.2 }}
        />
      </div>
      <div className="hatch-overlay pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
      <div className="grain-overlay pointer-events-none fixed inset-0 z-40" aria-hidden="true" />
    </>
  );
}
