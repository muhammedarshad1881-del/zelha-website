import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-[60%] h-full opacity-40"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="heroGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "hsl(207, 81%, 39%)", stopOpacity: 0.3 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "hsl(93, 45%, 47%)", stopOpacity: 0.2 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "hsl(39, 45%, 79%)", stopOpacity: 0.4 }}
              />
            </linearGradient>
          </defs>
          <ellipse
            cx="500"
            cy="400"
            rx="400"
            ry="350"
            fill="url(#heroGradient)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
            <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Your Trusted Education Partner in Saudi Arabia
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Shaping Futures{" "}
              <span className="text-primary">Across the GCC</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Empowering students to make confident, informed academic and
              career decisions. Your trusted education and career guidance
              partner — right here in Saudi Arabia.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Book a Consultation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative opacity-0 animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Decorative circle behind image */}
            <div className="absolute -inset-4 bg-zelha-sand rounded-full opacity-50 blur-2xl" />
            
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Students at modern Saudi Arabian university"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zelha-green-dark/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg animate-float">
                <span className="text-sm font-semibold">Vision 2030</span>
              </div>

              {/* Stats badge */}
              <div className="absolute -bottom-4 -left-4 bg-background border border-border px-6 py-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-primary">6+</p>
                <p className="text-sm text-muted-foreground">GCC Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
