import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * Custom hook to manage SEO meta tags for each page
 * Updates document head with relevant meta information
 */
export const useSeo = (config: SEOConfig) => {
  useEffect(() => {
    // Update title
    document.title = `${config.title} | Zelha Education Consultancy`;

    // Update meta description
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", config.description);
    }

    // Update keywords
    if (config.keywords) {
      let keywordTag = document.querySelector('meta[name="keywords"]');
      if (!keywordTag) {
        keywordTag = document.createElement("meta");
        keywordTag.setAttribute("name", "keywords");
        document.head.appendChild(keywordTag);
      }
      keywordTag.setAttribute("content", config.keywords);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `${config.title} | Zelha Education Consultancy`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", config.description);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType && config.ogType) {
      ogType.setAttribute("content", config.ogType);
    }

    if (config.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement("meta");
        ogImage.setAttribute("property", "og:image");
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute("content", config.ogImage);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", `${config.title} | Zelha Education Consultancy`);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", config.description);
    }

    if (config.twitterImage) {
      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (!twitterImage) {
        twitterImage = document.createElement("meta");
        twitterImage.setAttribute("name", "twitter:image");
        document.head.appendChild(twitterImage);
      }
      twitterImage.setAttribute("content", config.twitterImage);
    }

    // Update canonical URL
    if (config.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", config.canonicalUrl);
    }

    // Update JSON-LD structured data
    if (config.structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.textContent = JSON.stringify(config.structuredData);
      }
    }
  }, [config]);
};
