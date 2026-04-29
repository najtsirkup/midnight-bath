import { PageShell } from "@/components/site/PageShell";
import ContactForm from "@/components/site/ContactForm";
import gallery5 from "@/assets/gallery-5.jpg";

const Contact = () => (
  <PageShell
    eyebrow="Contact"
    title={<>Let&rsquo;s build your <em className="text-primary-glow not-italic">KHIS</em>.</>}
    subtitle="Tell us about your space and your wishes — we'll come back with a personal proposal."
    bannerImage={gallery5}
    bannerAlt="KHIS bath in a luxury bathroom"
  >
    <ContactForm />
  </PageShell>
);

export default Contact;
