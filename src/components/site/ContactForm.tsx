import { useState, FormEvent } from "react";
import { GoldButton } from "@/components/site/GoldButton";
import { useLang } from "@/lib/i18n";
import { toast } from "@/hooks/use-toast";

interface Props {
  embedded?: boolean;
}

const labelCls = "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3";
const fieldCls =
  "w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k] ?? ""))
    .join("&");

export const ContactForm = ({ embedded = false }: Props) => {
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const fields: { label: string; name: string; type: string; required: boolean }[] = [
    { label: t("contact.name"), name: "name", type: "text", required: true },
    { label: t("contact.email"), name: "email", type: "email", required: true },
    { label: t("contact.country"), name: "country", type: "text", required: true },
    { label: t("contact.phone"), name: "phone", type: "tel", required: false },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const data: Record<string, string> = {};
    formData.forEach((v, k) => (data[k] = String(v)));

    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });
      setSent(true);
      formEl.reset();
      toast({ title: t("contact.send"), description: t("contact.personal") });
    } catch (err) {
      toast({ title: "Error", description: String(err), variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const form = (
    <form
      className="space-y-10"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {fields.map((f) => (
          <div key={f.name}>
            <label className={labelCls} htmlFor={f.name}>{f.label}</label>
            <input id={f.name} name={f.name} type={f.type} required={f.required} className={fieldCls} />
          </div>
        ))}
      </div>
      <div>
        <label className={labelCls} htmlFor="preferred-model">{t("contact.preferred")}</label>
        <select id="preferred-model" name="preferred-model" className={`${fieldCls} appearance-none cursor-pointer`}>
          <option>{t("contact.not_sure")}</option>
          <option>First KHIS (up to 380 L)</option>
          <option>Eternal KHIS (up to 700 L)</option>
          <option>Natural KHIS (up to 960 L)</option>
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="message">{t("contact.tellus")}</label>
        <textarea id="message" name="message" rows={5} required className={`${fieldCls} resize-none`} />
      </div>
      <div className="text-center pt-6">
        <GoldButton type="submit" disabled={submitting}>
          {submitting ? "…" : sent ? "✓" : t("contact.send")}
        </GoldButton>
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
