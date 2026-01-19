export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SpaceMinds',
    url: 'https://www.spaceminds.agency',
    logo: 'https://www.spaceminds.agency/logo.png',
    description: "Premium software development for governments, NGOs, and large institutions.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lusaka',
      addressCountry: 'ZM'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+260-975-471-081',
      contactType: 'customer service',
      areaServed: 'Global',
      availableLanguage: ['English', 'French', 'Spanish']
    },
    sameAs: [
      'https://twitter.com/spaceminds',
      'https://linkedin.com/company/spaceminds'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
