import { GoldButton } from "@/components/site/GoldButton";

interface Props {
  /** When true, renders without the surrounding section/title (for embedding). */
  embedded?: boolean;
}

const labelCls = "block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3";
const fieldCls =
  "w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors";

export const ContactForm = ({ embedded = false }: Props) => {
  const form = (
    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-10">
        {[
          ["Name", "text", true],
          ["Email", "email", true],
          ["Country", "text", true],
          ["Phone (optional)", "tel", false],
        ].map(([label, type, required]) => (
          <div key={label as string}>
            <label className={labelCls}>{label as string}</label>
            <input
              type={type as string}
              required={required as boolean}
              className={fieldCls}
            />
          </div>
        ))}
      </div>
      <div>
        <label className={labelCls}>Preferred model</label>
        <select className={`${fieldCls} appearance-none cursor-pointer`}>
          <option>Not sure yet — please advise</option>
          <option>First KHIS (up to 380 L)</option>
          <option>Eternal KHIS (up to 700 L)</option>
          <option>Natural KHIS (up to 960 L)</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Tell us about your project</label>
        <textarea
          rows={5}
          required
          className={`${fieldCls} resize-none`}
        />
      </div>
      <div className="text-center pt-6">
        <GoldButton type="submit">Send my request</GoldButton>
        <p className="mt-6 text-xs text-muted-foreground">
          We respond personally — never with a templated reply.
        </p>
      </div>
    </form>
  );

  if (embedded) return form;

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40 border-t border-border scroll-mt-24">
      <div className="container-luxe max-w-3xl">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Free quote — no commitment</p>
          <h2 className="font-serif text-4xl md:text-5xl">Tell us about your project</h2>
          <p className="mt-6 text-muted-foreground">
            Looking for a tailor-made bath or more information? Write to us — usually within 48 hours.
          </p>
        </div>
        {form}
      </div>
    </section>
  );
};

export default ContactForm;
