import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Credibility from '@/components/Credibility';
import Services from '@/components/Services';
import SelectedWork from '@/components/SelectedWork';
import WhyUs from '@/components/WhyUs';
import GlobalReadiness from '@/components/GlobalReadiness';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Marquee />
      <Credibility />
      <Services />
      <SelectedWork />
      <WhyUs />
      <GlobalReadiness />
      <CTA />
      <Footer />
    </main>
  );
}
