import HoverCard from "../components/HoverCard";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";
import ZoomImage from "../components/ZoomImage";

export default function Materials() {
  const materialsWithImages = siteContent.materials.map((m, idx) => {
    const imagesByIndex = [
      "/images/leather1.jpg",
      "/images/leather2.jpg",
      "/images/leather3.jpg",
      "/images/leather4.jpg",
      "/images/leather2.jpg",
      "/images/leather3.jpg",
    ] as const;

    return {
      ...m,
      imageSrc: imagesByIndex[idx % imagesByIndex.length],
    };
  });

  return (
    <section id="materials" className="bg-[#F5F2EC] text-[#0B0B0B]">
      <Reveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#3B2F2F]/80">
            MATERIALS
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">
            Engineered leather grades for premium outcomes.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#3B2F2F]/80">
            From sourcing to finishing, we prepare materials with consistency so
            your products look refined and feel dependable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materialsWithImages.map((m) => (
            <HoverCard
              key={m.name}
              className="group overflow-hidden rounded-3xl border border-[#3B2F2F]/15 bg-white/75 transition-shadow duration-300 shadow-[0_22px_64px_rgba(0,0,0,0.09)] group-hover:shadow-[0_30px_92px_rgba(0,0,0,0.16)]"
            >
              <div className="h-48 w-full">
                <ZoomImage src={m.imageSrc} alt={m.name} />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#3B2F2F]/70">
                  INDUSTRIAL GRADE
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-6">
                  {m.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#3B2F2F]/75">
                  {m.note}
                </p>

                <div className="mt-6 h-px w-full bg-[#C6A962]/30" />

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#3B2F2F]/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C6A962]" />
                    CRAFTED
                  </span>

                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#C6A962]/35 bg-[#0B0B0B] text-[#C6A962]">
                    <span className="text-sm font-semibold">VL</span>
                  </span>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

