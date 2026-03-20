import HoverCard from "../components/HoverCard";
import Reveal from "../components/Reveal";

const applications = [
  { name: "Bags", desc: "Structures built to hold shape and elevate finish." },
  { name: "Shoes", desc: "Surface-ready leather for premium comfort and style." },
  { name: "Furniture", desc: "Industrial reliability for long-lasting upholstery." },
  { name: "Belts", desc: "Durable material engineered for daily wear." },
  {
    name: "Accessories",
    desc: "Consistent tone and texture for global product lines.",
  },
] as const;

export default function Applications() {
  return (
    <section id="applications" className="bg-[#0B0B0B] text-[#F5F2EC]">
      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#C6A962]">
            APPLICATIONS
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            Built for products people notice.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#F5F2EC]/80">
            Our processed leather supports everything from everyday essentials
            to premium branded collections.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((a) => (
            <HoverCard
              key={a.name}
              className="group rounded-3xl border border-[#C6A962]/18 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-6">{a.name}</h3>
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#C6A962]/35 bg-[#0B0B0B] text-[#C6A962]">
                  <span className="text-sm font-semibold">+</span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#F5F2EC]/75">
                {a.desc}
              </p>
              <div className="mt-6 h-px w-full bg-[#C6A962]/30" />
              <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-[#C6A962]">
                PRODUCT READY
              </p>
            </HoverCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

