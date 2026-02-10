import { Target, Eye, Heart, BookOpen, Users, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import NajdiIcon from "@/components/decorative/NajdiIcon";
import WaveDivider from "@/components/decorative/WaveDivider";
import { useSeo } from "@/hooks/use-seo";

const values = [
  { icon: Heart, name: "Integrity" },
  { icon: Eye, name: "Transparency" },
  { icon: Users, name: "Cultural Sensitivity" },
  { icon: BookOpen, name: "Student-Centered Support" },
  { icon: Award, name: "Excellence in Guidance" },
];

const philosophyPoints = [
  "Psychometric science",
  "Global education insights",
  "GCC cultural understanding",
  "Personalized mentorship",
];

const About = () => {
  useSeo({
    title: "About Us | Education Consultancy Experts",
    description: "Learn about Zelha Education Consultancy's mission, vision, and values. We provide expert guidance for GCC students pursuing higher education and career success.",
    keywords: "about Zelha Education, education consultancy, career guidance experts, GCC education, student counseling",
    canonicalUrl: "https://zelha-education.com/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Zelha Education Consultancy",
      "description": "Zelha Education Consultancy - Expert career guidance and university admissions support",
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Who <span className="text-primary">We Are</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zelha Education Consultancy is a student‑focused guidance
                institution dedicated to helping learners across the GCC
                discover their strengths, explore global opportunities, and
                build meaningful academic and career pathways.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">
                  Our Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Every Student Deserves{" "}
                  <span className="text-primary">Clarity</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  We believe every student deserves clarity. Our approach blends:
                </p>
                <ul className="space-y-3">
                  {philosophyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-muted rounded-xl p-8 space-y-4">
                  <NajdiIcon icon={Target} size="lg" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    To empower students with the knowledge, confidence, and
                    direction needed to make informed academic and career
                    decisions.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-8 space-y-4">
                  <NajdiIcon icon={Eye} size="lg" />
                  <h3 className="text-xl font-semibold text-secondary-foreground">
                    Our Vision
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    To become the most trusted education and career guidance
                    partner for families across the GCC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-20 bg-muted">
          <WaveDivider className="absolute top-0 left-0 text-background" flip />

          <div className="container mx-auto px-4 pt-8">
            <div className="text-center space-y-4 mb-16">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="text-primary">Values</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="flex items-center gap-3 bg-background px-6 py-4 rounded-xl shadow-sm border border-border"
                >
                  <value.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">
                    {value.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <WaveDivider className="absolute bottom-0 left-0 text-background" />
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
