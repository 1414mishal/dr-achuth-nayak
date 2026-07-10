export function RadiationMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#14b8a6"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 4v3.2M12 16.8V20M4 12h3.2M16.8 12H20M6.4 6.4l2.2 2.2M15.4 15.4l2.2 2.2M17.6 6.4l-2.2 2.2M8.6 15.4l-2.2 2.2" />
    </svg>
  );
}
