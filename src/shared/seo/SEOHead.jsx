import { Helmet } from 'react-helmet-async'

/**
 * SEO Head component with structured data (JSON-LD) support.
 *
 * Props:
 *   title           - Page title
 *   description     - Meta description
 *   path            - URL path (e.g., /component/resistor)
 *   image           - OG image URL
 *   structuredData  - JSON-LD structured data object (optional)
 */
export default function SEOHead({ title, description, path, image, structuredData }) {
  const siteName = 'ElectronicsInfo'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const defaultDesc = 'Interactive Electronics Learning Platform - Understand Electronics One Component at a Time'
  const siteUrl = 'https://electronicsinfo.vercel.app'
  const url = path ? `${siteUrl}${path}` : siteUrl

  // Image must be absolute for OG/JSON-LD
  const ogImage = image?.startsWith('http') ? image : image ? `${siteUrl}${image}` : undefined

  return (
    <Helmet>
      {/* Primary meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={structuredData?.['@type'] === 'TechArticle' ? 'article' : 'website'} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            ...structuredData,
            url,
            publisher: { '@type': 'Organization', name: siteName },
          })}
        </script>
      )}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <link rel="apple-touch-icon" href="/icons/icon-192.png" />
    </Helmet>
  )
}
