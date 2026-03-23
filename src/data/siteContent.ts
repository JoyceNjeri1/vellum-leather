export const siteContent = {
  brand: {
    companyName: "Vellum Leather Ltd",
    displayName: "VELLUM LEATHER LTD",
    tagline: "Authentic Leather. Timeless Craft.",
    locationLabel: "NAIROBI, KENYA",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Materials", href: "#materials" },
    { label: "Applications", href: "#applications" },
    { label: "Why Choose Us", href: "#why" },
  ],
  hero: {
    headlinePrimary: "Authentic Leather.",
    headlineAccent: "Timeless Craft.",
    description:
      "Vellum Leather Limited is a Nairobi-based leather processing company operating across the full value chain — from raw hides to premium finished leather.",
    primaryCta: "Request a Quote",
    secondaryCta: "Explore Materials",
    highlights: [
      { label: "FULL VALUE CHAIN", value: "Raw to Finished" },
      { label: "QUALITY ASSURANCE", value: "Consistent Craft" },
      { label: "GLOBAL PARTNERS", value: "Built to Supply" },
    ],
    footerNote: "Industrial premium • Minimal luxury",
    footerBadge: "Materials-grade leather",
  },
  about: {
    title: "Nairobi leather processing, built for consistency.",
    paragraphs: [
      "Vellum Leather Limited is a Nairobi-based leather processing company operating across the full value chain — from raw hides to premium finished leather.",
      "We combine industrial reliability with timeless craft, so each hide moves from processing to finishing with measured quality at every step.",
    ],
    tags: ["INDUSTRIAL QUALITY", "TIMELINE FOR SUPPLY", "FINISH-READY LEATHER"],
  },
  expertise: [
    {
      title: "Raw Material Sourcing",
      desc: "Sourcing raw hides with consistent standards to support stable processing outcomes.",
    },
    {
      title: "Wet Blue Processing",
      desc: "Controlled wet blue steps engineered for uniformity and dependable downstream finishing.",
    },
    {
      title: "Finishing",
      desc: "Premium finishing designed to deliver surface quality that elevates the final product.",
    },
    {
      title: "Quality Assurance",
      desc: "Measured inspections and documentation so what you receive matches what you expect.",
    },
  ],
  materials: [
    { name: "Vegetable-Tanned Leather", note: "Deep character, natural finish." },
    { name: "Chrome-Tanned Leather", note: "Durable structure for daily use." },
    { name: "Wet Blue Base", note: "Reliable foundation for premium finishing." },
    { name: "Finished Full Grain", note: "Refined texture for global brands." },
    { name: "Suede & Split", note: "Versatile surfaces for accessories." },
    { name: "Color-Ready Stock", note: "Consistent tone for uniform outcomes." },
  ],
  applications: [
    { name: "Bags", desc: "Structures built to hold shape and elevate finish." },
    { name: "Shoes", desc: "Surface-ready leather for premium comfort and style." },
    { name: "Furniture", desc: "Industrial reliability for long-lasting upholstery." },
    { name: "Belts", desc: "Durable material engineered for daily wear." },
    {
      name: "Accessories",
      desc: "Consistent tone and texture for global product lines.",
    },
  ],
  whyChooseUs: [
    {
      title: "Full Value Chain",
      desc: "From raw hides to premium finished leather, managed for consistency.",
    },
    {
      title: "Industrial Reliability",
      desc: "Process control designed to keep outputs stable across orders.",
    },
    {
      title: "Premium Finishing",
      desc: "Surface quality engineered to support global brand expectations.",
    },
    {
      title: "Quality Documentation",
      desc: "Clear checks and communication so you know what to expect.",
    },
  ],
  contact: {
    heading: "Request pricing, samples, or production support.",
    intro:
      "Tell us what you're building and we'll respond with the right materials and process guidance.",
    addressLines: [
      "Salama House, Suite 401",
      "Wabera Street",
      "P.O Box 3494-00100",
      "Nairobi, Kenya",
    ],
    phone: "+254 746 022204",
    phoneHref: "tel:+254746022204",
    email: "velllumltd@outlook.com",
    emailHref: "mailto:velllumltd@outlook.com",
  },
} as const;

