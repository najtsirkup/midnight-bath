import { PageShell } from "@/components/site/PageShell";
import { SEO } from "@/components/site/SEO";
import ContactForm from "@/components/site/ContactForm";
import gallery5 from "@/assets/gallery-5.jpg";
import { useLang } from "@/lib/i18n";

const Contact = () => {
  const { t } = useLang();
  return (
    <>
    <SEO
      title="Contact KHIS Bath — Request a Quote"
      description="Get in touch with KHIS Bath to request a personalised quote for a handcrafted wooden bathtub. We reply personally to every enquiry."
      path="/contact"
    />
    <PageShell
      eyebrow={t("nav.contact")}
      title={<>{t("contactpg.title_1")} <em className="text-primary-glow not-italic">{t("contactpg.title_em")}</em>{t("contactpg.title_2")}</>}
      subtitle={t("contactpg.subtitle")}
      bannerImage={gallery5}
      bannerAlt="KHIS bath in a luxury bathroom"
    >
      <ContactForm />
    </PageShell>
    </>
  );
};

export default Contact;
