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
    "@type": "EducationalOrganization",
    name: "S Tech Education",
    url: "https://www.stech-info.co.in",
    logo: "https://www.stech-info.co.in/images/logo/logoo.png",
    description:
      "S Tech Education is a professional DevOps and Cloud training institute offering hands-on training in DevOps, AWS, Docker, Kubernetes, Linux and CI/CD with real-time projects and job assistance.",
    foundingDate: "2024-01-01",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Admissions",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/s-tech-education",
      "https://www.instagram.com/stecheducation",
      "https://www.facebook.com/stecheducation",
    ],
  };

  return (
    <>
      <Head>
        {/* BASIC SEO */}
        <title>S Tech Education | DevOps & Cloud Training Institute</title>
        <meta
          name="description"
          content="Learn DevOps, AWS Cloud, Docker, Kubernetes, Linux and CI/CD with hands-on training, real-time projects and placement support at S Tech Education."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CANONICAL */}
        <link rel="canonical" href="https://www.stech-info.co.in" />

        {/* FAVICON */}
        <link rel="icon" href="/favicon.ico" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="S Tech Education | DevOps & Cloud Training Institute"
        />
        <meta
          property="og:description"
          content="Professional DevOps & Cloud training with real-world projects, expert mentors and job-oriented curriculum."
        />
        <meta
          property="og:image"
          content="/images/logo/logoo.png"
        />
        <meta property="og:url" content="https://www.stech-info.co.in" />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="S Tech Education | DevOps Training"
        />
        <meta
          name="twitter:description"
          content="Master DevOps, AWS, Docker, Kubernetes & Cloud with hands-on training and placement support."
        />
        <meta
          name="twitter:image"
          content="/images/logo/logoo.png"
        />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>

      <main>
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
