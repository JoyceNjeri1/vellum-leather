 "use client";

import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0B0B0B] text-[#F5F2EC]">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#C6A962]">
              CONTACT
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              {siteContent.contact.heading}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#F5F2EC]/80">
              {siteContent.contact.intro}
            </p>

            <div className="mt-8 rounded-3xl border border-[#C6A962]/20 bg-white/5 p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                {siteContent.brand.companyName}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#F5F2EC]/85">
                {siteContent.contact.addressLines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < siteContent.contact.addressLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-[#C6A962]/30 bg-[#0B0B0B] text-[#C6A962]">
                    #
                  </span>
                  <p className="leading-6">
                    Phone:{" "}
                    <a className="text-[#F5F2EC] underline underline-offset-4 decoration-[#C6A962]/60 hover:decoration-[#C6A962]" href={siteContent.contact.phoneHref}>
                      {siteContent.contact.phone}
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-[#C6A962]/30 bg-[#0B0B0B] text-[#C6A962]">
                    @
                  </span>
                  <p className="leading-6">
                    Email:{" "}
                    <a className="text-[#F5F2EC] underline underline-offset-4 decoration-[#C6A962]/60 hover:decoration-[#C6A962]" href={siteContent.contact.emailHref}>
                      {siteContent.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              className="rounded-3xl border border-[#C6A962]/20 bg-white/5 p-6 sm:p-8"
              action="https://formspree.io/f/xpqygoea"
              method="POST"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                  QUICK REQUEST
                </p>
                <h3 className="text-xl font-semibold leading-7">
                  Tell us what you need
                </h3>
                <p className="text-sm leading-6 text-[#F5F2EC]/75">
                  Submissions are sent securely to our inbox.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm text-[#F5F2EC]/80">Name</span>
                  <input
                    className="h-11 rounded-2xl border border-[#C6A962]/25 bg-[#0B0B0B] px-4 text-[#F5F2EC] outline-none focus:border-[#C6A962]/60"
                    placeholder="Your name"
                    name="name"
                    type="text"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm text-[#F5F2EC]/80">Company</span>
                  <input
                    className="h-11 rounded-2xl border border-[#C6A962]/25 bg-[#0B0B0B] px-4 text-[#F5F2EC] outline-none focus:border-[#C6A962]/60"
                    placeholder="Company name"
                    name="company"
                    type="text"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm text-[#F5F2EC]/80">Email</span>
                  <input
                    className="h-11 rounded-2xl border border-[#C6A962]/25 bg-[#0B0B0B] px-4 text-[#F5F2EC] outline-none focus:border-[#C6A962]/60"
                    placeholder="you@company.com"
                    name="email"
                    type="email"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm text-[#F5F2EC]/80">What do you need?</span>
                  <textarea
                    className="min-h-28 resize-y rounded-2xl border border-[#C6A962]/25 bg-[#0B0B0B] px-4 py-3 text-[#F5F2EC] outline-none focus:border-[#C6A962]/60"
                    placeholder="Bags, shoes, quantities, timeline..."
                    name="message"
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-[#C6A962] py-3.5 text-sm font-semibold text-[#0B0B0B] transition-colors hover:bg-[#d6ba70] sm:w-auto sm:px-8"
              >
                Send Request
              </button>

              <p className="mt-4 text-xs leading-6 text-[#F5F2EC]/65">
                By sending, you agree to be contacted regarding your request.
              </p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

