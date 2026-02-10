import { Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import WaveDivider from "@/components/decorative/WaveDivider";
import { useSeo } from "@/hooks/use-seo";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Zelha helped my son choose the right career path with confidence. Their understanding of our culture and values made all the difference.",
    author: "Fatima Al-Rashid",
    role: "Parent",
    location: "Riyadh",
  },
  {
    quote:
      "Their guidance made my university application journey smooth and stress-free. I got accepted to my dream university in the UK!",
    author: "Ahmed Hassan",
    role: "Student",
    location: "Dammam",
  },
  {
    quote:
      "The career assessment opened my eyes to possibilities I never considered. Now I'm pursuing engineering with a clear vision.",
    author: "Sara Al-Otaibi",
    role: "Student",
    location: "Jeddah",
  },
  {
    quote:
      "Professional, transparent, and genuinely caring. Zelha's team went above and beyond to help my daughter secure a scholarship.",
    author: "Mohammed Al-Harbi",
    role: "Parent",
    location: "Riyadh",
  },
  {
    quote:
      "From career mapping to visa assistance, every step was handled with expertise. Highly recommend for any GCC student!",
    author: "Noura Al-Shamsi",
    role: "Student",
    location: "Dubai, UAE",
  },
  {
    quote:
      "The counsellors truly understand the GCC education system and helped us make informed decisions for our son's future.",
    author: "Abdullah Al-Dosari",
    role: "Parent",
    location: "Doha, Qatar",
  },
];

const Testimonials = () => {
  useSeo({
    title: "Testimonials | Success Stories from GCC Students",
    description: "Read success stories from students and parents who've benefited from Zelha Education's career guidance and university admissions support.",
    keywords: "success stories, student testimonials, education consultancy reviews, career guidance results",
    canonicalUrl: "https://zelha-education.com/testimonials",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ReviewPage",
      "name": "Zelha Education Testimonials",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "50"
      }
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
                Testimonials
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                What <span className="text-primary">Families Say</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Real stories from students and parents across the GCC who
                trusted Zelha with their educational journey.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-8 space-y-6 hover:shadow-lg transition-shadow"
                >
                  <Quote className="h-10 w-10 text-primary/20" />
                  <p className="text-card-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 space-y-6">
              <p className="text-lg text-muted-foreground">
                Ready to start your success story?
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Book Your Consultation
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

export default Testimonials;
