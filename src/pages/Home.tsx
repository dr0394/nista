import Hero from '../components/Hero';
import MenuOverview from '../components/MenuOverview';
import Bestsellers from '../components/Bestsellers';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import OrderCTA from '../components/OrderCTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <MenuOverview />
      <Bestsellers />
      <HowItWorks />
      <About />
      <Gallery />
      <Reviews />
      <OrderCTA />
      <FAQ />
      <Contact />
    </main>
  );
}
