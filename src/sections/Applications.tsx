import HoverCard from "../components/HoverCard";
import Reveal from "../components/Reveal";
import { siteContent } from "../data/siteContent";
import ZoomImage from "../components/ZoomImage";

export default function Applications() {
  const appsWithImages = siteContent.applications.map((a) => {
    const imageByName: Record<string, string> = {
      Bags: "/images/bag.jpg",
      Shoes: "/images/shoes.jpg",
      Belts: "/images/belt.jpg",
      Furniture: "/images/furniture.jpg",
      Accessories: "/images/bag.jpg",
    };

    return {
      ...a,
      imageSrc: imageByName[a.name] ?? "/images/bag.jpg",
    };
  });

  return (
    <section id="applications" className="bg-[#0B0B0B] text-[#F5F2EC]">
      <Reveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#C6A962]">
            APPLICATIONS
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">
            Built for products people notice.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#F5F2EC]/80">
            Our processed leather supports everything from everyday essentials
            to premium branded collections.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appsWithImages.map((a) => (
            <HoverCard
              key={a.name}
              className="group overflow-hidden rounded-3xl border border-[#C6A962]/18 bg-white/5 shadow-[0_24px_68px_rgba(0,0,0,0.42)] transition-shadow duration-300 group-hover:shadow-[0_32px_92px_rgba(0,0,0,0.54)]"
            >
              <div className="h-48 w-full">
                <ZoomImage src={a.imageSrc} alt={a.name} />
              </div>

              <div className="p-6">
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
              </div>
            </HoverCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

