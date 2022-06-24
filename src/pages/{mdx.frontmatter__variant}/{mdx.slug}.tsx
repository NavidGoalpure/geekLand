import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import CourseTemplate from "../../templates/course-template"
import PostTemplate from "../../templates/post-template"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"

const MdxPage = ({
  data,
  data: {
    mdx: {
      frontmatter: { variant, title },
    },
  },
}) => {
  const templates = {
    posts: <PostTemplate data={data} />,
    courses: <CourseTemplate data={data} />,
  }

  return (
    <>
      <Seo title={title} />
      <Layout>{templates[variant] ? templates[variant] : null}</Layout>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        variant
        tags
      }
      body
    }
  }
`

export default MdxPage
