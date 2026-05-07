import { GoldButton } from "@/components/site/GoldButton";
import { useLang } from "@/lib/i18n";

interface Props {
  embedded?: boolean;
}

const labelCls = "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3";
const fieldCls =
  "w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors";

export const ContactForm = ({ embedded = false }: Props) => {
  const { t } = useLang();

  const fields: [string, string, boolean][] = [
    [t("contact.name"), "text", true],
    [t("contact.email"), "email", true],
    [t("contact.country"), "text", true],
    [t("contact.phone"), "tel", false],
  ];

  const form = (
    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-10">
        {fields.map(([label, type, required]) => (
          <div key={label}>
            <label className={labelCls}>{label}</label>
            <input type={type} required={required} className={fieldCls} />
          </div>
        ))}
      </div>
      <div>
        <label className={labelCls}>{t("contact.preferred")}</label>
        <select className={`${fieldCls} appearance-none cursor-pointer`}>
          <option>{t("contact.not_sure")}</option>
          <option>First KHIS (up to 380 L)</option>
          <option>Eternal KHIS (up to 700 L)</option>
          <option>Natural KHIS (up to 960 L)</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>{t("contact.tellus")}</label>
        <textarea rows={5} required className={`${fieldCls} resize-none`} />
      </div>
      <div className="text-center pt-6">
        <GoldButton type="submit">{t("contact.send")}</GoldButton>
        <p className="mt-6 text-xs text-muted-foreground">{t("contact.personal")}</p>
      </div>
    </form>
  );

  if (embedded) return form;

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40 border-t border-border scroll-mt-24">
      <div className="container-luxe max-w-3xl">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">{t("contact.eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{t("contact.title")}</h2>
          <p className="mt-6 text-muted-foreground">{t("contact.lead")}</p>
        </div>
        {form}
      </div>
    </section>
  );
};

export default ContactForm;
