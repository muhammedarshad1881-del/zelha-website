import { MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import WaveDivider from "@/components/decorative/WaveDivider";
import { useSeo } from "@/hooks/use-seo";

interface Destination {
  country: string;
  flag: string;
  highlights: string[];
  popular: string[];
}

const destinations: Destination[] = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    highlights: [
      "World-renowned universities like Oxford and Cambridge",
      "Strong research opportunities",
      "Post-study work visa options",
    ],
    popular: ["Business", "Engineering", "Medicine", "Law"],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    highlights: [
      "Diverse range of programs and institutions",
      "Cutting-edge research facilities",
      "Extensive scholarship opportunities",
    ],
    popular: ["STEM", "Business", "Arts", "Technology"],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    highlights: [
      "Affordable quality education",
      "Excellent immigration pathways",
      "Safe and multicultural environment",
    ],
    popular: ["Engineering", "IT", "Healthcare", "Business"],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    highlights: [
      "High-quality education system",
      "Post-study work opportunities",
      "Beautiful lifestyle and climate",
    ],
    popular: ["Medicine", "Engineering", "Business", "Environmental Science"],
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    highlights: [
      "Affordable tuition and living costs",
      "English-medium instruction",
      "Cultural familiarity for GCC students",
    ],
    popular: ["Medicine", "Engineering", "Islamic Finance", "IT"],
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    highlights: [
      "Rich cultural heritage",
      "Growing academic reputation",
      "Strategic location between East and West",
    ],
    popular: ["Medicine", "Engineering", "Architecture", "Business"],
  },
  {
    country: "UAE & Saudi Arabia",
    flag: "🇦🇪",
    highlights: [
      "Top-tier local institutions",
      "Close to home",
      "Growing international partnerships",
    ],
    popular: [
      "Business",
      "Engineering",
      "Healthcare",
      "Hospitality",
    ],
  },
];

const Destinations = () => {
  useSeo({
    title: "Study Destinations | Global Education Opportunities",
    description: "Explore top study destinations for GCC students. Get guidance on UK, USA, Canada, Australia, Malaysia, Turkey, and local universities.",
    keywords: "study abroad destinations, international universities, study in UK, study in USA, study abroad guidance, global education",
    canonicalUrl: "https://zelha-education.com/destinations",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://zelha-education.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Study Destinations",
          "item": "https://zelha-education.com/destinations"
        }
      ]
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
                Study Destinations
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Explore <span className="text-primary">Global</span> Opportunities
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the best study destinations for GCC students, from
                prestigious UK universities to emerging Asian hubs.
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <div
                  key={dest.country}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Header */}
                  <div className="bg-muted p-6 flex items-center gap-4">
                    <span className="text-4xl">{dest.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {dest.country}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>Study Destination</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Why Choose {dest.country.split("&")[0].trim()}?
                      </h4>
                      <ul className="space-y-2">
                        {dest.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Popular Programs:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dest.popular.map((program) => (
                          <span
                            key={program}
                            className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Personalized Guidance
                </Button>
              </Link>
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

export default Destinations;
