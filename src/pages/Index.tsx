import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  useSeo({
    title: "Career Guidance & University Admissions | Zelha Education",
    description: "Expert education counseling for GCC students. Personalized career assessments, university admissions guidance, and study abroad consulting in Saudi Arabia.",
    keywords: "career guidance, university admissions, education consultancy, study abroad, career assessments, Saudi Arabia, GCC",
    canonicalUrl: "https://zelha-education.com/",
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Zelha Education Consultancy",
      "description": "Expert career assessments and university admissions guidance for GCC students",
      "url": "https://zelha-education.com",
      "areaServed": ["SA", "AE", "KW", "QA"],
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
