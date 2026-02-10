import {
  ClipboardCheck,
  Map,
  GraduationCap,
  Globe,
  Award,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import NajdiIcon from "@/components/decorative/NajdiIcon";
import WaveDivider from "@/components/decorative/WaveDivider";
import { useSeo } from "@/hooks/use-seo";

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string;
}

const services: ServiceDetail[] = [
  {
    icon: ClipboardCheck,
    title: "Career Assessments & Counselling",
    subtitle: "Discover your strengths and unlock your potential",
    description:
      "Our comprehensive assessment program helps students understand their unique abilities, interests, and potential career paths through scientific evaluation methods.",
    features: [
      "Psychometric & aptitude assessments",
      "Personality & interest evaluations",
      "One-on-one counselling sessions",
      "Guidance tailored to GCC academic pathways",
    ],
    idealFor:
      "Students unsure about their strengths, interests, or future direction.",
  },
  {
    icon: Map,
    title: "Individual Career Mapping",
    subtitle: "A customized roadmap for long-term success",
    description:
      "We create personalized academic and career plans that align with your goals, the GCC job market, and global opportunities.",
    features: [
      "Personalized academic & career plans",
      "Skill-gap analysis",
      "Short- and long-term goal setting",
      "Guidance aligned with GCC & global job markets",
    ],
    idealFor:
      "Students who want a clear, structured plan for their future.",
  },
  {
    icon: GraduationCap,
    title: "College & University Admission Support",
    subtitle: "End-to-end assistance for smooth admissions",
    description:
      "From university selection to application submission, we guide you through every step of the admission process.",
    features: [
      "University shortlisting",
      "Application planning & documentation",
      "SOPs, essays & interview preparation",
      "Admissions to GCC, regional & international institutions",
    ],
    idealFor: "Students applying to universities locally or abroad.",
  },
  {
    icon: Globe,
    title: "Study Abroad Consulting",
    subtitle: "Pursue world-class education across the globe",
    description:
      "We help GCC students navigate the complexities of international education, from country selection to pre-departure preparation.",
    features: [
      "Country & program selection",
      "Application & visa guidance",
      "Scholarship & financial planning",
      "Pre-departure orientation",
    ],
    idealFor:
      "Students aiming for global exposure and international degrees.",
  },
  {
    icon: Award,
    title: "Student Profiling for Scholarships",
    subtitle: "Maximize your scholarship opportunities",
    description:
      "Our experts help high-achieving students identify and secure merit-based and need-based scholarships.",
    features: [
      "Comprehensive profile evaluation",
      "Identifying suitable scholarships",
      "Essay, recommendation & submission support",
      "Strategies to strengthen academic & extracurricular profiles",
    ],
    idealFor: "High-achieving students seeking financial support.",
  },
];

const Services = () => {
  useSeo({
    title: "Education Services | Career Guidance & University Admissions",
    description: "Zelha Education offers career assessments, university admissions support, study abroad consulting, and scholarship guidance for GCC students.",
    keywords: "education services, career assessments, university admissions, study abroad, scholarship guidance, career counseling",
    canonicalUrl: "https://zelha-education.com/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Education Consulting Services",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Zelha Education Consultancy"
      },
      "areaServed": ["SA", "AE", "KW", "QA", "BH", "OM"],
      "serviceType": ["Career Counseling", "University Admissions", "Study Abroad Consulting", "Scholarship Support"]
    },
  });
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Comprehensive{" "}
                <span className="text-primary">Education Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From career discovery to university admissions, we provide
                end-to-end guidance for students across the GCC.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <NajdiIcon icon={service.icon} size="lg" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-lg text-primary font-medium">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={`bg-muted rounded-2xl p-8 space-y-6 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="font-semibold text-foreground">
                      What We Offer:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Ideal For:{" "}
                        </span>
                        {service.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider className="text-primary" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
