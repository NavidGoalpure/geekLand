import React from "react"
import FeaturedCourse from "../Courses/FeaturedCourse"
import { allContentfulCourse } from "../../constants/contents"

const ProductFeed = () => {
  const allProduct = allContentfulCourse
  return (
    <>
      {allProduct.map((node, index) => {
        return <FeaturedCourse key={index} course={node} />
      })}
    </>
  )
}

export default ProductFeed
