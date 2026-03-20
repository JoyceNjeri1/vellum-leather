import HoverCard from "../components/HoverCard";
import Reveal from "../components/Reveal";

const materials = [
  { name: "Vegetable-Tanned Leather", note: "Deep character, natural finish." },
  { name: "Chrome-Tanned Leather", note: "Durable structure for daily use." },
  { name: "Wet Blue Base", note: "Reliable foundation for premium finishing." },
  { name: "Finished Full Grain", note: "Refined texture for global brands." },
  { name: "Suede & Split", note: "Versatile surfaces for accessories." },
  { name: "Color-Ready Stock", note: "Consistent tone for uniform outcomes." },
] as const;

export default function Materials() {
  return (
    <section id="materials" className="bg-[#F5F2EC] text-[#0B0B0B]">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#3B2F2F]/80">
            MATERIALS
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            Engineered leather grades for premium outcomes.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#3B2F2F]/80">
            From sourcing to finishing, we prepare materials with consistency so
            your products look refined and feel dependable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => (
            <HoverCard
              key={m.name}
              className="group rounded-3xl border border-[#3B2F2F]/15 bg-white/70 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-6">{m.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#3B2F2F]/75">
                    {m.note}
                  </p>
                </div>
                <div className="mt-1 h-10 w-10 shrink-0 rounded-2xl border border-[#C6A962]/35 bg-[#0B0B0B] text-[#C6A962] grid place-items-center">
                  <span className="text-sm font-semibold">VL</span>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-[#C6A962]/30" />
              <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-[#3B2F2F]/70">
                INDUSTRIAL GRADE
              </p>
            </HoverCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

