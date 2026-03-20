import Reveal from "../components/Reveal";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-[#F5F2EC]">
      <Reveal className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold tracking-[0.24em] text-[#C6A962]">
              VELLUM LEATHER LTD
            </p>
            <p className="mt-4 text-sm leading-7 text-[#F5F2EC]/75">
              Authentic Leather. Timeless Craft.
            </p>

            <div className="mt-6 space-y-2 text-sm leading-6 text-[#F5F2EC]/80">
              <p>Salama House, Suite 401, Wabera Street</p>
              <p>P.O Box 3494-00100, Nairobi, Kenya</p>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
              QUICK LINKS
            </p>
            <nav className="mt-4 grid gap-3">
              <a className="text-sm text-[#F5F2EC]/80 hover:text-[#F5F2EC]" href="#about">
                About
              </a>
              <a className="text-sm text-[#F5F2EC]/80 hover:text-[#F5F2EC]" href="#expertise">
                Expertise
              </a>
              <a className="text-sm text-[#F5F2EC]/80 hover:text-[#F5F2EC]" href="#materials">
                Materials
              </a>
              <a className="text-sm text-[#F5F2EC]/80 hover:text-[#F5F2EC]" href="#applications">
                Applications
              </a>
              <a className="text-sm text-[#F5F2EC]/80 hover:text-[#F5F2EC]" href="#contact">
                Contact
              </a>
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
              CONTACT
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <p className="text-[#F5F2EC]/80">
                Phone:{" "}
                <a className="underline underline-offset-4 decoration-[#C6A962]/60 hover:decoration-[#C6A962]" href="tel:+254746022204">
                  +254 746 022204
                </a>
              </p>
              <p className="text-[#F5F2EC]/80">
                Email:{" "}
                <a className="underline underline-offset-4 decoration-[#C6A962]/60 hover:decoration-[#C6A962]" href="mailto:velllumltd@outlook.com">
                  velllumltd@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#C6A962]/20 pt-6 text-xs text-[#F5F2EC]/60">
          © {new Date().getFullYear()} Vellum Leather Limited. All rights reserved.
        </div>
      </Reveal>
    </footer>
  );
}

