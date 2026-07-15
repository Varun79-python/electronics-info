import { Helmet } from 'react-helmet-async'

export default function SEOHead({ title, description, path, image }) {
  const siteName = 'Electronics Hub'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const defaultDesc = 'Interactive Electronics Learning Platform — Understand Electronics One Component at a Time'
  const url = path ? `https://electronics-hub.app${path}` : 'https://electronics-hub.app'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
