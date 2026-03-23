import Reveal from "../components/Reveal";
import ZoomImage from "../components/ZoomImage";

const craftsmanshipItems = [
  {
    title: "Precision in Every Stage",
    desc: "From hide preparation to final surface finish, each stage is controlled with industrial precision to preserve consistency and quality.",
    image: "/images/craft1.jpg",
    imageAlt: "Craftsmanship process detail",
  },
  {
    title: "Industrial Process, Luxury Outcome",
    desc: "Our workflow combines measured processing with refined finishing techniques, producing leather that meets premium global standards.",
    image: "/images/craft2.jpg",
    imageAlt: "Leather finishing craftsmanship",
  },
] as const;

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="bg-[#0B0B0B] text-[#F5F2EC]">
      <Reveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#C6A962]">
            CRAFTSMANSHIP
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">
            Built with discipline. Finished with finesse.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#F5F2EC]/80">
            We combine industrial reliability and luxury detailing, ensuring each
            batch delivers both consistency and premium finish quality.
          </p>
        </div>

        <div className="mt-12 space-y-8 sm:space-y-10">
          {craftsmanshipItems.map((item, index) => (
            <article
              key={item.title}
              className="grid items-center gap-6 rounded-3xl border border-[#C6A962]/20 bg-white/5 p-4 shadow-[0_26px_80px_rgba(0,0,0,0.5)] sm:p-6 lg:grid-cols-12"
            >
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-[#C6A962]/20">
                  <div className="h-64 sm:h-72 lg:h-80">
                    <ZoomImage src={item.image} alt={item.imageAlt} />
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                  PROCESS {index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-[1.15]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#F5F2EC]/78 sm:text-base">
                  {item.desc}
                </p>
                <div className="mt-6 h-px w-full bg-[#C6A962]/30" />
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

