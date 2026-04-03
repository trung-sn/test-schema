import { Helmet } from 'react-helmet-async';
import { useGoogleReviews } from '../hooks/useGoogleReviews';

interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewItem {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

interface ImageItem {
  url: string;
  caption?: string;
  description?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaProps {
  type?: 'home' | 'service' | 'gallery' | 'about' | 'contact' | 'blog' | 'article' | 'reviews';
  serviceName?: string;
  serviceDescription?: string;
  serviceUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  faqs?: FAQItem[];
  // Article-specific props
  articleTitle?: string;
  articleDescription?: string;
  articleUrl?: string;
  articlePublishedDate?: string;
  articleModifiedDate?: string;
  articleAuthor?: string;
  articleImage?: string;
  articleKeywords?: string[];
  // Review-specific props
  reviews?: ReviewItem[];
  // Gallery-specific props
  images?: ImageItem[];
  // Breadcrumb-specific props
  breadcrumbs?: BreadcrumbItem[];
}

export function Schema({ 
  type = 'home', 
  serviceName, 
  serviceDescription, 
  serviceUrl,
  pageTitle,
  pageDescription,
  pageUrl,
  faqs,
  // Article-specific props
  articleTitle,
  articleDescription,
  articleUrl,
  articlePublishedDate,
  articleModifiedDate,
  articleAuthor,
  articleImage,
  articleKeywords,
  // Review-specific props
  reviews,
  // Gallery-specific props
  images,
  // Breadcrumb-specific props
  breadcrumbs
}: SchemaProps) {
  const baseUrl = 'https://www.wrap-wizardz.com';
  
  // Fetch real-time Google review data
  const { reviewData } = useGoogleReviews();
  
  // Use real-time data if available, otherwise fallback to defaults
  const ratingValue = reviewData?.rating?.toFixed(1) || "4.9";
  const reviewCount = reviewData?.totalReviews?.toString() || "150";
  
  // Get top reviews for individual review snippets (limit to top 10 5-star reviews)
  const topReviews = reviewData?.reviews
    ? reviewData.reviews
        .filter((review: any) => review.rating === 5)
        .sort((a: any, b: any) => b.time - a.time)
        .slice(0, 10)
    : [];
  
  // LocalBusiness Schema (appears on all pages)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    "@id": "https://www.wrap-wizardz.com/#business",
    "name": "Wrap Wizardz",
    "alternateName": "Blast Brothers Auto Spa",
    "description": "Founded in 2015, Wrap Wizardz is Warminster's premier vehicle protection and customization facility. We specialize in Vinyl Wrapping, Ceramic Coatings (Car, Marine, & Industrial), Window Tinting, and Professional Detailing.",
    "image": "https://wrapwizardz-h7hgb5g0cjgrbnbh.z03.azurefd.net/images/wrap-wizardz-logo.webp",
    "logo": "https://wrapwizardz-h7hgb5g0cjgrbnbh.z03.azurefd.net/images/wrap-wizardz-logo.webp",
    "url": "https://www.wrap-wizardz.com/",
    "telephone": "+12152976844",
    "email": "Sales@wrap-wizardz.com",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    
    "paymentAccepted": [
      "Cash",
      "Check",
      "Credit Card",
      "Visa",
      "Mastercard",
      "American Express",
      "Discover",
      "Zelle",
      "Invoice"
  ],

      "potentialAction": {
    "@type": "PayAction",
    "description": "Flexible Payment Plans and Financing Available"
  },
    
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1520 Campus Dr Unit C",
      "addressLocality": "Warminster",
      "addressRegion": "PA",
      "postalCode": "18974",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.1992,
      "longitude": -75.0838
    },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
    "sameAs": [
      "https://www.facebook.com/WrapWizardzPA",
      "https://www.instagram.com/wrapwizardz",
      "https://www.yelp.com/biz/wrap-wizardz-warminster",
      "https://maps.app.goo.gl/XH9K8AUiKF87kTo47"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Warminster",
        "containedIn": {
          "@type": "State",
          "name": "Pennsylvania"
        }
      },
      {
        "@type": "City",
        "name": "Philadelphia",
        "containedIn": {
          "@type": "State",
          "name": "Pennsylvania"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bucks County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Montgomery County"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automotive Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paint Protection Film (PPF)",
            "description": "Premium paint protection film installation to protect your vehicle from rock chips, scratches, and environmental damage.",
            "serviceType": "Paint Protection Film"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coating",
            "description": "Professional ceramic coating application for long-lasting paint protection and enhanced gloss.",
            "serviceType": "Ceramic Coating"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vehicle Wraps",
            "description": "Custom vinyl wrap installation for complete vehicle color changes and graphics.",
            "serviceType": "Vehicle Wrapping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Tinting",
            "description": "Professional window tint installation for enhanced privacy, UV protection, and heat reduction.",
            "serviceType": "Window Tinting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Auto Detailing",
            "description": "Comprehensive interior and exterior detailing services to restore and maintain your vehicle.",
            "serviceType": "Auto Detailing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Powder Coating",
            "description": "Durable powder coating services for wheels, brake calipers, and automotive parts.",
            "serviceType": "Powder Coating"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "knowsAbout": [
      "Paint Protection Film",
      "PPF Installation",
      "Ceramic Coating",
      "Window Tinting",
      "Auto Detailing",
      "Vinyl Wrapping",
      "Vehicle Wraps",
      "Powder Coating",
      "Car Protection",
      "Automotive Detailing"
    ],
    "slogan": "Warminster's Premier Automotive Protection & Detailing Specialists"
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Wrap Wizardz",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": "600",
      "height": "60"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+12152976844",
      "contactType": "customer service",
      "email": "Sales@wrap-wizardz.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1520 Campus Drive Suite C",
      "addressLocality": "Warminster",
      "addressRegion": "PA",
      "postalCode": "18974",
      "addressCountry": "US"
    }
  };

  // Service Schema (for service pages)
  const serviceSchema = serviceName && serviceDescription ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}${serviceUrl}#service`,
    "serviceType": serviceName,
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@id": `${baseUrl}/#business`
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Warminster",
        "containedIn": {
          "@type": "State",
          "name": "Pennsylvania"
        }
      },
      {
        "@type": "City",
        "name": "Philadelphia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bucks County"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName
          }
        }
      ]
    }
  } : null;

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}${pageUrl || ''}#webpage`,
    "url": `${baseUrl}${pageUrl || ''}`,
    "name": pageTitle || "Wrap Wizardz - Auto Detailing & Vehicle Protection",
    "description": pageDescription || "Professional automotive services in Warminster, PA",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Wrap Wizardz"
    },
    "about": {
      "@id": `${baseUrl}/#business`
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${baseUrl}/og-image.jpg`
    }
  };

  // BreadcrumbList Schema - Use custom breadcrumbs if provided, otherwise fall back to service breadcrumbs
  let breadcrumbSchema = null;
  
  if (breadcrumbs && breadcrumbs.length > 0) {
    // Custom breadcrumbs provided
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${baseUrl}${crumb.url}`
      }))
    };
  } else if (serviceUrl) {
    // Default service page breadcrumbs
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${baseUrl}/services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": serviceName,
          "item": `${baseUrl}${serviceUrl}`
        }
      ]
    };
  }

  // FAQPage Schema (for service pages)
  const faqPageSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Article Schema (for blog and article pages)
  const articleSchema = articleTitle && articleDescription ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${baseUrl}${articleUrl}#article`,
    "url": `${baseUrl}${articleUrl}`,
    "name": articleTitle,
    "description": articleDescription,
    "datePublished": articlePublishedDate,
    "dateModified": articleModifiedDate,
    "author": {
      "@type": "Person",
      "name": articleAuthor
    },
    "image": {
      "@type": "ImageObject",
      "url": articleImage
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${articleUrl}#webpage`
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Wrap Wizardz",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": "600",
        "height": "60"
      }
    },
    "keywords": articleKeywords
  } : null;

  // Review Schema (for review pages)
  const reviewSchema = reviews && reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#business`
    },
    "author": {
      "@type": "Person",
      "name": reviews[0].author || "Anonymous"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": reviews.map(review => `${review.author} rated us ${review.rating} stars on ${review.datePublished}: ${review.reviewBody}`).join('\n\n'),
    "datePublished": reviews[0].datePublished
  } : null;

  // ImageGallery Schema (for gallery pages)
  const imageGallerySchema = images && images.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Wrap Wizardz Gallery",
    "description": "A collection of images showcasing our automotive services and results.",
    "url": `${baseUrl}${pageUrl || ''}`,
    "image": images.map(image => ({
      "@type": "ImageObject",
      "url": image.url,
      "caption": image.caption,
      "description": image.description
    }))
  } : null;

  // Individual Review Snippets - Create separate Review objects for each top review
  // This ensures Google can crawl and display individual reviews in search results
  const individualReviewSchemas = topReviews.map((review: any, index: number) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${baseUrl}/#review${index + 1}`,
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#business`,
      "name": "Wrap Wizardz"
    },
    "author": {
      "@type": "Person",
      "name": review.author_name || "Anonymous"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.text || "",
    "datePublished": new Date(review.time * 1000).toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Google"
    }
  }));

  // Combine all schemas
  const schemas = [
    localBusinessSchema,
    organizationSchema,
    webPageSchema,
    serviceSchema,
    breadcrumbSchema,
    faqPageSchema,
    articleSchema,
    reviewSchema,
    imageGallerySchema,
    ...individualReviewSchemas // Add individual review snippets to all pages
  ].filter(Boolean);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
}
