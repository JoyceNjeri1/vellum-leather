import HoverCard from "../components/HoverCard";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function Expertise() {
  return (
    <section id="expertise" className="bg-[#0B0B0B] text-[#F5F2EC]">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#C6A962]">
            EXPERTISE
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            Industrial consistency, crafted for premium leather.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#F5F2EC]/80">
            Our workflow is designed for repeatability across the full value chain.
            Each stage is managed to keep quality stable from start to finish.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.expertise.map((item) => (
            <HoverCard
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-[#C6A962]/18 bg-white/5 p-6"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(800px circle at 30% 0%, rgba(198,169,98,0.18), rgba(198,169,98,0) 60%)",
                }}
              />

              <p className="relative text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                {item.title.split(" ")[0].toUpperCase()}
              </p>
              <h3 className="relative mt-3 text-lg font-semibold leading-6">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-[#F5F2EC]/75">
                {item.desc}
              </p>

              <div className="relative mt-6 h-px w-14 bg-[#C6A962]/40" />
            </HoverCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

