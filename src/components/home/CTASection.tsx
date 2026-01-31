import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SaduPattern from "@/components/decorative/SaduPattern";

const CTASection = () => {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Sadu Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <SaduPattern />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Let's Build Your Future Together
          </h2>

          <p className="text-lg text-primary-foreground/80">
            Our Saudi Arabia-based team is here to support you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
            <a
              href="tel:0532954117"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">0532954117</span>
            </a>
            <span className="hidden sm:inline text-primary-foreground/50">|</span>
            <a
              href="tel:0541811151"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">0541811151</span>
            </a>
            <span className="hidden sm:inline text-primary-foreground/50">|</span>
            <a
              href="tel:0534709134"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">0534709134</span>
            </a>
          </div>

          <Link to="/contact">
            <Button
              variant="secondary"
              size="xl"
              className="group mt-4"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
