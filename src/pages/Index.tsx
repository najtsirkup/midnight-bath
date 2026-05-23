import HomeLayout from "@/components/site/HomeLayout";
import { SEO } from "@/components/site/SEO";

const Index = () => (
  <>
    <SEO
      title="KHIS Bath — Handcrafted Luxury Wooden Bathtubs"
      description="Handcrafted, thermally treated wooden bathtubs from Estonia. Deep-soak luxury for your bathroom, custom-built and shipped worldwide."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "KHIS Bath",
        url: "https://khisbath.com",
        logo: "https://khisbath.com/favicon.png",
      }}
    />
    <HomeLayout />
  </>
);
export default Index;
