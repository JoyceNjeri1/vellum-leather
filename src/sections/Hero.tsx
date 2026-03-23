import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";
import HeroBackground from "../components/HeroBackground";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[#0B0B0B] text-[#F5F2EC]"
    >
      <HeroBackground />

      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.24em] text-[#C6A962]"
          >
            {siteContent.brand.displayName}
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.href}
                className="text-sm text-[#F5F2EC]/75 hover:text-[#F5F2EC]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#C6A962]/45 px-4 py-2 text-sm font-medium text-[#F5F2EC] transition-colors hover:bg-[#C6A962]/10"
          >
            {siteContent.hero.primaryCta}
          </a>
        </div>
      </header>

      <Reveal className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-14">
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A962]/60" />
              <span className="text-xs font-semibold tracking-[0.22em] text-[#C6A962]">
                {siteContent.brand.locationLabel}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              {siteContent.hero.headlinePrimary}{" "}
              <span className="text-[#C6A962]">{siteContent.hero.headlineAccent}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#F5F2EC]/85 sm:text-lg">
              {siteContent.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#C6A962] px-6 py-3 text-sm font-semibold text-[#0B0B0B] transition-colors hover:bg-[#d6ba70]"
              >
                {siteContent.hero.primaryCta}
              </a>
              <a
                href="#materials"
                className="inline-flex items-center justify-center rounded-full border border-[#C6A962]/45 px-6 py-3 text-sm font-semibold text-[#F5F2EC] transition-colors hover:bg-[#C6A962]/10"
              >
                {siteContent.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {siteContent.hero.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[#C6A962]/25 bg-[#0B0B0B]/45 p-5 backdrop-blur-[2px] shadow-[0_24px_72px_rgba(0,0,0,0.5)]"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm text-[#F5F2EC]/70 sm:flex-row sm:items-center sm:gap-6">
            <span>{siteContent.hero.footerNote}</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A962]" />
              {siteContent.hero.footerBadge}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

