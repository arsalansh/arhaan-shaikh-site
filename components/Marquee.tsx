export default function Marquee({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={`marquee overflow-hidden border-y-2 py-5 ${dark ? "border-cream bg-brand text-cream" : "border-brand text-brand"}`}
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={i} className="display flex items-center whitespace-nowrap text-5xl md:text-7xl" style={{ color: "inherit" }}>
                {t}
                <span className="mx-8 inline-block h-3 w-3 bg-current md:mx-12" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
