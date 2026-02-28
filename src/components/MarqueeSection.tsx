import { MARQUEE_ITEMS } from "@/lib/portfolio-data";

const MarqueeSection = () => {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="py-12 border-y border-glass-border overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm uppercase tracking-widest text-muted-foreground font-body flex items-center gap-4 shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-60" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
