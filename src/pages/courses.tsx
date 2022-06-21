import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import useContentfulCourse from "../hooks/useContentfulCourse"
import CourseTemplate from "../templates/course-template"

const Course = ({ slug }) => {
  const contentfulCourse = useContentfulCourse(slug)
  return (
    <>
      <Seo title={contentfulCourse.title} />
      <Layout>
        <CourseTemplate {...contentfulCourse} />
      </Layout>
    </>
  )
}

export default Course
