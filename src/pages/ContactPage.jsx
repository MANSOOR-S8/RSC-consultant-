import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';

function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Let's plan your next move."
        description="Tell us a little about your organisation and where you're headed — we typically reply within one business day."
      />
      <Contact />
    </>
  );
}

export default ContactPage;
