import Hero from "../sections/Hero";
import About from "../sections/About";
import Expertise from "../sections/Expertise";
import Materials from "../sections/Materials";
import Craftsmanship from "../sections/Craftsmanship";
import Applications from "../sections/Applications";
import WhyChooseUs from "../sections/WhyChooseUs";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <About />
      <Expertise />
      <Materials />
      <Craftsmanship />
      <Applications />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
