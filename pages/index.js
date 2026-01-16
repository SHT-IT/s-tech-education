import Head from "next/head";
import HeroSection from "../components/herosection";
import Services from "./software-development";
import AboutUs from "./about-us";
import TechCards from "../components/TechCards";
import Testimonials from "../components/Testimonials";
import SHTMap from "../components/SHTMap";


export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SHT IT Solution",
    url: "https://www.shtitsolution.com",
    logo: "https://www.shtitsolution.com/images/logo/logo.png",
    description:
      "SHT IT Solution is a technology-driven company delivering premium web, mobile, and software solutions using modern technologies.",
    foundingDate: "2023-01-01",
    founder: {
      "@type": "Organization",
      name: "SHT IT Solution",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/sht-it-solution",
      "https://www.instagram.com/shtitsolution",
      "https://www.facebook.com/shtitsolution",
    ],
  };

  return (
    <>
      <Head>
        {/* BASIC SEO */}
        <title>SHT IT Solution | Software & IT Services in Nashik</title>
        <meta name="description" content="Software development, web development, CCTV, networking & IT services in Nashik." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.shtitsolution.com" />

        {/* FAVICON */}
        <link rel="icon" href="/favicon.ico" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="SHT IT Solution | Web & Software Development Company" />
        <meta
          property="og:description"
          content="Premium web, software, and IT solutions powered by modern technologies."
        />
        <meta
          property="og:image"
          content="/images/logo/logo.png"
        />
        <meta property="og:url" content="https://www.shtitsolution.com" />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SHT IT Solution" />
        <meta
          name="twitter:description"
          content="Premium web, software, and IT solutions powered by modern technologies."
        />
        <meta
          name="twitter:image"
          content="/images/logo/logo.png"
        />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>


      <main className="">
        <HeroSection />
        <Services />
        <AboutUs />
        <TechCards />
        <Testimonials />
        <SHTMap />
      </main>
    </>
  );
}
