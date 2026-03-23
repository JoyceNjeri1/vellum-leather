import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function About() {
  return (
    <section id="about" className="bg-[#F5F2EC] text-[#0B0B0B]">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#3B2F2F]/80">
              ABOUT VELLUM
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              {siteContent.about.title}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#3B2F2F]/90 sm:text-base">
              {siteContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteContent.about.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#3B2F2F]/20 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[#3B2F2F]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-[#C6A962]/25 bg-[#0B0B0B] p-0">
              <div className="absolute inset-0 opacity-90" aria-hidden="true">
                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#C6A962]/20 blur-2xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#3B2F2F]/30 blur-2xl" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(198,169,98,0.10)_0%,rgba(11,11,11,0)_45%)]" />
              </div>

              <div className="relative p-7 sm:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#C6A962]/20 bg-[#0B0B0B]/40 p-5">
                    <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                      VALUE CHAIN
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[#F5F2EC]">
                      Raw to finished
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#F5F2EC]/70">
                      Processing steps designed to keep material stable and
                      predictable.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#C6A962]/20 bg-[#0B0B0B]/40 p-5">
                    <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                      FINISHING
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[#F5F2EC]">
                      Premium surface
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#F5F2EC]/70">
                      Built for the final look that premium brands expect.
                    </p>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-[#C6A962]/15 bg-[#0B0B0B]/30 p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                    OUR PROMISE
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#F5F2EC]/80">
                    Clear process control, consistent outputs, and communication
                    that respects your timelines.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-[#3B2F2F]/70">
              Tip: replace this gradient panel with your workshop photo when
              you’re ready.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

