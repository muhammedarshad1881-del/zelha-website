import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoLandscape from "@/assets/logo-landscape.svg";
import SaduPattern from "@/components/decorative/SaduPattern";

const Footer = () => {
  return (
    <footer className="relative bg-zelha-green-dark text-primary-foreground overflow-hidden">
      {/* Sadu Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <SaduPattern />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logoLandscape}
              alt="Zelha Education Consultancy"
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering students across the GCC to make confident, informed
              academic and career decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Study Destinations", path: "/destinations" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Career Assessments",
                "Career Mapping",
                "University Admissions",
                "Study Abroad",
                "Scholarship Support",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:0532954117"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
                  >
                    0532954117
                  </a>
                  <a
                    href="tel:0541811151"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
                  >
                    0541811151
                  </a>
                  <a
                    href="tel:0534709134"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors block"
                  >
                    0534709134
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Riyadh, Saudi Arabia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Zelha Education Consultancy. All
              rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Supporting students across Saudi Arabia, UAE, Kuwait, Qatar,
              Bahrain & Oman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
