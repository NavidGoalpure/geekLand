import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { FeaturedCourseStyles } from "./FeaturesStyles"

const FeaturedCourse = ({ course }) => {
  const { slug, headerImage, title, introduction } = course

  return (
    <FeaturedCourseStyles>
      <Link to={`/courses/${slug}`}>
        <img
          src={headerImage}
          alt="A kitten"
          className="features__item--img"
          loading="lazy"
        />
        {title && introduction && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {introduction && <p>{introduction}</p>}
            <Button text="Read More" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedCourseStyles>
  )
}

export default FeaturedCourse
