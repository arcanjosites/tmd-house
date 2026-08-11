import { SITE_CONTACT } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "TMD House",
    description: "Instituto de Brazilian Jiu-Jitsu. Jiu-Jitsu, Muay Thai, Karatê, Kids e Performance.",
    url: "https://tmdhouse.com.br",
    image: IMAGES.logo,
    telephone: `+${SITE_CONTACT.whatsapp}`,
    email: SITE_CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONTACT.endereco,
      addressLocality: "Taguatinga Sul, Brasília",
      addressRegion: "DF",
      postalCode: SITE_CONTACT.cep,
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "22:00",
      },
    ],
    sameAs: [SITE_CONTACT.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
