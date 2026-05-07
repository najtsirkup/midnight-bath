import { PageShell } from "@/components/site/PageShell";
import ContactForm from "@/components/site/ContactForm";
import gallery5 from "@/assets/gallery-5.jpg";
import { useLang } from "@/lib/i18n";

const Contact = () => {
  const { t } = useLang();
  return (
    <PageShell
      eyebrow={t("nav.contact")}
      title={<>{t("contactpg.title_1")} <em className="text-primary-glow not-italic">{t("contactpg.title_em")}</em>{t("contactpg.title_2")}</>}
      subtitle={t("contactpg.subtitle")}
      bannerImage={gallery5}
      bannerAlt="KHIS bath in a luxury bathroom"
    >
      <ContactForm />
    </PageShell>
  );
};

export default Contact;
