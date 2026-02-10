import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  Map,
  GraduationCap,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NajdiIcon from "@/components/decorative/NajdiIcon";
import WaveDivider from "@/components/decorative/WaveDivider";

const services = [
  {
    icon: ClipboardCheck,
    title: "Career Assessments & Counselling",
    description:
      "Discover your strengths and unlock your potential with expert psychometric and aptitude assessments.",
  },
  {
    icon: Map,
    title: "Individual Career Mapping",
    description:
      "A customized roadmap designed for your long-term academic and career success.",
  },
  {
    icon: GraduationCap,
    title: "College & University Admission",
    description:
      "End-to-end assistance for smooth and successful admissions to GCC and global institutions.",
  },
  {
    icon: Globe,
    title: "Study Abroad Consulting",
    description:
      "Helping GCC students pursue world-class education across the globe.",
  },
  {
    icon: Award,
    title: "Scholarship Profiling",
    description:
      "Maximize your chances of securing merit-based and need-based scholarships.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="relative py-20 bg-muted">
      <WaveDivider className="absolute top-0 left-0 text-background" flip />
      
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-primary">Signature</span> Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <NajdiIcon icon={service.icon} className="mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {services.slice(3).map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 w-full max-w-sm md:w-auto"
              style={{
                animationDelay: `${(index + 3) * 0.1}s`,
              }}
            >
              <NajdiIcon icon={service.icon} className="mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="hero" size="lg" className="group">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <WaveDivider className="absolute bottom-0 left-0 text-secondary" />
    </section>
  );
};

export default ServicesPreview;
