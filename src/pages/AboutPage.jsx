import PageHero from '../components/PageHero.jsx';
import About from '../components/About.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTA from '../components/CTA.jsx';

function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Meridian Voss"
        title="Advisors who've made the crossing themselves."
        description="Two decades of cross-border experience, built by specialists who combine sector depth with genuine, on-the-ground presence in every market we advise on."
      />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}

export default AboutPage;
