/**
 * SEO Configuration for Zelha Education Consultancy
 * Centralized metadata for all pages and social sharing
 */

export const seoConfig = {
  // Organization Details
  organization: {
    name: "Zelha Education Consultancy",
    description: "Expert career assessments, university admissions guidance, and study abroad consulting for students across the GCC",
    url: "https://zelha-education.com",
    logo: "https://zelha-education.com/logo.svg",
    foundingDate: "2020",
  },

  // Contact Information
  contact: {
    address: {
      country: "SA",
      locality: "Riyadh",
      region: "Riyadh",
    },
    phone: ["+966541811151", "+966534709134"],
    email: "contact@zelha-education.com",
  },

  // Service Areas
  areaServed: ["SA", "AE", "KW", "QA", "BH", "OM"],

  // Social Media
  social: {
    linkedin: "https://www.linkedin.com/company/zelha-education",
    instagram: "https://www.instagram.com/zelha_education",
    facebook: "https://www.facebook.com/zelha.education",
    twitter: "@zelha_education",
  },

  // Pages Configuration
  pages: {
    home: {
      title: "Career Guidance & University Admissions | Zelha Education",
      description: "Expert education counseling for GCC students. Personalized career assessments, university admissions guidance, and study abroad consulting in Saudi Arabia.",
      keywords: "career guidance, university admissions, education consultancy, study abroad, career assessments, Saudi Arabia, GCC",
      path: "/",
    },
    about: {
      title: "About Us | Education Consultancy Experts",
      description: "Learn about Zelha Education Consultancy's mission, vision, and values. We provide expert guidance for GCC students pursuing higher education and career success.",
      keywords: "about Zelha Education, education consultancy, career guidance experts, GCC education, student counseling",
      path: "/about",
    },
    services: {
      title: "Education Services | Career Guidance & University Admissions",
      description: "Zelha Education offers career assessments, university admissions support, study abroad consulting, and scholarship guidance for GCC students.",
      keywords: "education services, career assessments, university admissions, study abroad, scholarship guidance, career counseling",
      path: "/services",
    },
    destinations: {
      title: "Study Destinations | Global Education Opportunities",
      description: "Explore top study destinations for GCC students. Get guidance on UK, USA, Canada, Australia, Malaysia, Turkey, and local universities.",
      keywords: "study abroad destinations, international universities, study in UK, study in USA, study abroad guidance, global education",
      path: "/destinations",
    },
    testimonials: {
      title: "Testimonials | Success Stories from GCC Students",
      description: "Read success stories from students and parents who've benefited from Zelha Education's career guidance and university admissions support.",
      keywords: "success stories, student testimonials, education consultancy reviews, career guidance results",
      path: "/testimonials",
    },
    contact: {
      title: "Contact Us | Get in Touch with Zelha Education",
      description: "Contact Zelha Education Consultancy in Riyadh for career guidance, university admissions support, and study abroad consulting. Reach us by phone or WhatsApp.",
      keywords: "contact Zelha Education, education consultancy contact, career guidance consultation, student services",
      path: "/contact",
    },
  },

  // Open Graph Images (Update with actual image URLs)
  images: {
    ogImage: "https://zelha-education.com/og-image.jpg",
    twitterImage: "https://zelha-education.com/twitter-image.jpg",
  },

  // Structured Data - Services
  services: [
    "Career Assessments & Counselling",
    "Individual Career Mapping",
    "College & University Admissions",
    "Study Abroad Consulting",
    "Scholarship Support",
  ],

  // JSON-LD Schema Fragments
  schemas: {
    organization: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Zelha Education Consultancy",
      "description": "Expert career assessments and university admissions guidance for GCC students",
      "url": "https://zelha-education.com",
      "logo": "https://zelha-education.com/logo.svg",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh",
      },
      "areaServed": ["SA", "AE", "KW", "QA", "BH", "OM"],
      "sameAs": [
        "https://www.linkedin.com/company/zelha-education",
        "https://www.instagram.com/zelha_education",
        "https://www.facebook.com/zelha.education",
      ],
      "serviceType": "EducationalServices",
    },
  },
};

export default seoConfig;
