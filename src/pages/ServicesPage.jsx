import PageHero from '../components/PageHero.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import CTA from '../components/CTA.jsx';

function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Do"
        title="Six practice areas, one coordinated advisory team."
        description="From first market scan to final signature, our specialists work alongside yours — engage a single service, or combine several as your organisation moves through its next chapter."
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}

export default ServicesPage;
