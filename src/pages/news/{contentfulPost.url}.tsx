import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "../../templates/post-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Post = ({ data: { contentfulPost } }) => {
  return (
    <>
      {/* <Seo title={contentfulPost.title} /> */}
      <Layout>
        {/* <PostTemplate {...contentfulPost} /> */}
        navid
      </Layout>
    </>
  )
}

export default Post
