import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import RichText from "../components/RichText"

const DefaultTemplate = (contentfulPage) => {
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <SimpleBanner title={contentfulPage.title}>
          <img className="banner__image" src={contentfulPage.headerImage} />
        </SimpleBanner>
        <div className="section">
          <div className="container container__tight">
            <RichText richText={contentfulPage.mainContent} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default DefaultTemplate
