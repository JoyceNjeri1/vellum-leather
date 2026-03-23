import HoverCard from "../components/HoverCard";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-[#F5F2EC] text-[#0B0B0B]">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#3B2F2F]/80">
              WHY CHOOSE US
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              Luxury finish, industrial discipline.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#3B2F2F]/80">
              We blend craft with repeatability. That means premium leather you
              can trust, delivered with process clarity from start to finish.
            </p>
          </div>

          <div className="rounded-3xl border border-[#3B2F2F]/15 bg-white/80 p-6 lg:w-[420px]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#3B2F2F]/70">
                  DELIVERY STANDARD
                </p>
                <p className="mt-2 text-2xl font-semibold">Consistency by design</p>
              </div>
              <div className="grid place-items-center rounded-2xl border border-[#C6A962]/30 bg-[#0B0B0B] text-[#C6A962] h-14 w-14">
                <span className="text-xl font-semibold">✓</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#3B2F2F]/75">
              We manage key stages of processing and finishing to reduce
              variance, improve predictability, and support your production
              timelines.
            </p>
            <div className="mt-6 h-px w-full bg-[#C6A962]/30" />
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#C6A962]/30 bg-[#F5F2EC] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[#3B2F2F]/80">
                CONTROLLED WORKFLOW
              </span>
              <span className="rounded-full border border-[#C6A962]/30 bg-[#F5F2EC] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[#3B2F2F]/80">
                PREMIUM FINISHING
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.whyChooseUs.map((r) => (
            <HoverCard
              key={r.title}
              className="rounded-3xl border border-[#3B2F2F]/15 bg-white/70 p-6"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                VALUE
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-6">{r.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#3B2F2F]/75">{r.desc}</p>
              <div className="mt-6 h-px w-full bg-[#C6A962]/30" />
            </HoverCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

