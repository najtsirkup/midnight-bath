import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import aboutHero from "@/assets/about-hero.jpg";
import frantsSeer from "@/assets/frants-seer.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const About = () => (
  <PageShell
    eyebrow="About us"
    title="KHIS by Frants Seer"
    subtitle="Bath as a design element. Build your bathroom — or your very personal spa — around it."
    bannerImage={aboutHero}
    bannerAlt="KHIS bath in a serene interior"
  >
    <section className="py-24 md:py-32">
      <div className="container-luxe">

        {/* Bath as a design element */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <p className="eyebrow mb-4">Bath as a design element</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Meant to please your senses, even empty.</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Loneliness can be boring. Emptiness can be sad. Neither is true for a KHIS bathtub,
                with its unique design — meant to catch your attention and please the senses even when empty.
                KHIS bathtub as a design element: build your bathroom (or your very personal spa) around it.
              </p>
              <p>
                As in nature, you only can build your own universe in a safe, cozy, warm and inspiring place.
                Whether you use the things around you or contemplate them — it has to be aesthetically
                enjoyable, unique, eye-catching. Like a KHIS bathtub.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={gallery5} alt="KHIS bath in interior" loading="lazy" className="relative w-full aspect-[4/5] object-cover border border-border" />
          </div>
        </div>

        {/* Philosophy + Indulgence */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div className="border-l-2 border-primary pl-8">
            <p className="eyebrow mb-4">KHIS philosophy</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-6">Start your own tradition.</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Everything about ourselves is in constant movement, whatever efforts we make to stop time and
              capture the essence. Some traditions have to be kept and nourished — bathtubs made of fine wood;
              and some have to be started by ourselves.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With KHIS, you can start your own tradition of quality time, gliding through waves of fullness.
            </p>
          </div>
          <div className="border-l-2 border-primary pl-8">
            <p className="eyebrow mb-4">Indulgence</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-6">Your very own home spa.</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe in natural flow of time and experience. We believe that maintaining the natural rhythm
              of life is essential, keeping up with harmony around us is the path to follow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can have your very own home spa, indulge yourself with the lasting warmth of a wooden KHIS
              bathtub, experience tranquility and the relaxing effect of bathing.
            </p>
          </div>
        </div>

        {/* Frants Seer */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative md:order-2">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={frantsSeer} alt="Frants Seer — KHIS Master Craftsman" loading="lazy" className="relative w-full aspect-[4/5] object-cover border border-border" />
          </div>
          <div>
            <p className="eyebrow mb-4">Frants Seer</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-3">KHIS Master Craftsman</h2>
            <div className="gold-divider mx-0 mb-8" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I love the natural world. My family has lived in the countryside for generations, and now I am
                raising my children here. I want them to have a deep, life-long connection to nature — to trees,
                to water, to pure air.
              </p>
              <p>
                I started building KHIS baths to re-establish the link between bathing — a natural and soothing
                activity — and nature, a relationship that has been broken by building bathtubs from synthetic
                materials. Even most wooden baths are covered in varnish or plastic, so they no longer feel
                like natural wood.
              </p>
              <p>
                My challenge was to build a bath that is organic, but still durable and beautiful. After three
                years of experimenting with different materials, designs, processes and technologies, I finally
                found a special combination that works perfectly.
              </p>
              <p className="text-foreground italic font-serif">
                &ldquo;You won&rsquo;t find baths like these made by anyone else. Not only are these baths unique
                in the world, but no two baths are the same.&rdquo;
              </p>
            </div>
            <div className="mt-10">
              <GoldButton to="/tailor-made">Start your project</GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default About;
