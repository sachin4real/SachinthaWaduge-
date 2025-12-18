import { SITE_CONFIG } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { experienceData } from "@/data/experience";

export function JsonLd() {
  const url = SITE_CONFIG.url;

  const alumniOf = educationData.map((edu) => {
    const parts = (edu.location || "").split(",").map((p) => p.trim());
    const locality = parts[0] || "";
    const country = parts[parts.length - 1] || "";

    return {
      "@type": "EducationalOrganization",
      name: edu.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: locality || undefined,
        addressCountry: country || undefined,
      },
    };
  });

  // pick latest/current job only (first item), or leave undefined
  const currentWork = experienceData?.[0]
    ? {
        "@type": "Organization",
        name: experienceData[0].company,
        address: {
          "@type": "PostalAddress",
          addressLocality: experienceData[0].location || undefined,
        },
      }
    : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: "Sachintha Waduge",
    alternateName: "Sachin",
    url,
    mainEntityOfPage: url,
    email: SITE_CONFIG.links.email,
    telephone: SITE_CONFIG.links.phone,
    jobTitle: "Software Engineer",
    description: SITE_CONFIG.description,
    image: `${url}/images/profile/sachintha.jpg`, // make sure this path exists in /public
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.linkedin].filter(Boolean),
    alumniOf,
    worksFor: currentWork,
    knowsAbout: [
      "Full Stack Development",
      "Backend Development",
      "SQL",
      "MongoDB",
      "Spring Boot",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
