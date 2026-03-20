import Reveal from "../components/Reveal";

export default function Hero() {
  const glow =
    "radial-gradient(ellipse at top, rgba(198,169,98,0.26) 0%, rgba(198,169,98,0) 55%)";
  const vignette =
    "linear-gradient(180deg, rgba(11,11,11,0.90) 0%, rgba(59,47,47,0.75) 55%, rgba(11,11,11,1) 100%)";

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[#0B0B0B] text-[#F5F2EC]"
    >
      <div className="absolute inset-0" style={{ backgroundImage: glow }} />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: vignette }}
        aria-hidden="true"
      />

      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.24em] text-[#C6A962]"
          >
            VELLUM LEATHER LTD
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            <a className="text-sm text-[#F5F2EC]/75 hover:text-[#F5F2EC]" href="#about">
              About
            </a>
            <a
              className="text-sm text-[#F5F2EC]/75 hover:text-[#F5F2EC]"
              href="#expertise"
            >
              Expertise
            </a>
            <a
              className="text-sm text-[#F5F2EC]/75 hover:text-[#F5F2EC]"
              href="#materials"
            >
              Materials
            </a>
            <a
              className="text-sm text-[#F5F2EC]/75 hover:text-[#F5F2EC]"
              href="#applications"
            >
              Applications
            </a>
            <a
              className="text-sm text-[#F5F2EC]/75 hover:text-[#F5F2EC]"
              href="#why"
            >
              Why Choose Us
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#C6A962]/45 px-4 py-2 text-sm font-medium text-[#F5F2EC] transition-colors hover:bg-[#C6A962]/10"
          >
            Request a Quote
          </a>
        </div>
      </header>

      <Reveal className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12">
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A962]/60" />
              <span className="text-xs font-semibold tracking-[0.22em] text-[#C6A962]">
                NAIROBI, KENYA
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Authentic Leather.{" "}
              <span className="text-[#C6A962]">Timeless Craft.</span>
            </h1>

            <p className="mt-5 text-base leading-7 text-[#F5F2EC]/85 sm:text-lg">
              Vellum Leather Limited is a Nairobi-based leather processing company
              operating across the full value chain — from raw hides to premium
              finished leather.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#C6A962] px-6 py-3 text-sm font-semibold text-[#0B0B0B] transition-colors hover:bg-[#d6ba70]"
              >
                Request a Quote
              </a>
              <a
                href="#materials"
                className="inline-flex items-center justify-center rounded-full border border-[#C6A962]/45 px-6 py-3 text-sm font-semibold text-[#F5F2EC] transition-colors hover:bg-[#C6A962]/10"
              >
                Explore Materials
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#C6A962]/20 bg-[#0B0B0B]/50 p-5 backdrop-blur">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                FULL VALUE CHAIN
              </p>
              <p className="mt-2 text-2xl font-semibold">Raw to Finished</p>
            </div>

            <div className="rounded-2xl border border-[#C6A962]/20 bg-[#0B0B0B]/50 p-5 backdrop-blur">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                QUALITY ASSURANCE
              </p>
              <p className="mt-2 text-2xl font-semibold">Consistent Craft</p>
            </div>

            <div className="rounded-2xl border border-[#C6A962]/20 bg-[#0B0B0B]/50 p-5 backdrop-blur">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                GLOBAL PARTNERS
              </p>
              <p className="mt-2 text-2xl font-semibold">Built to Supply</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[#F5F2EC]/70 sm:flex-row sm:items-center sm:gap-6">
            <span>Industrial premium • Minimal luxury</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A962]" />
              Materials-grade leather
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

