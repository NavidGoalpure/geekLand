import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { FeaturedCoursesStyles } from "./FeaturesStyles"
import FeaturedCourse from "./FeaturedCourse"
import useFeaturedCourses from "../../hooks/useFeaturedCourses"

const Features = ({ title, introduction }) => {
  const featuredCourses = useFeaturedCourses()

  return (
    <FeaturedCoursesStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {featuredCourses.map((node, index) => {
          return <FeaturedCourse course={node} key={index} />
        })}
      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/products" text="All Products" />
      </div>
    </FeaturedCoursesStyles>
  )
}

export default Features
