import * as React from "react"
import { Helmet } from "react-helmet"
import { useConfig } from "../hooks/useConfig"

interface Props {
  title?: string
  description?: string
  imageUrl?: string
}
const SEO: React.FC<Props> = ({ title, description, imageUrl }) => {
  const { siteMetadata } = useConfig()

  const {
    description: siteDesc,
    title: siteTitle,
    siteUrl,
    // twitterUsername,
  } = siteMetadata
  return (
    <Helmet htmlAttribute={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={imageUrl} />
      {/* Facebook Card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:titlte" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDesc} />
      <meta property="og:image" content={`${siteUrl}${imageUrl}`} />
      <meta property="og:image" content="400" />
      <meta property="og:image:height" content="300" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={twitterUsername} /> */}
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${imageUrl}`} />
    </Helmet>
  )
}

export default SEO
