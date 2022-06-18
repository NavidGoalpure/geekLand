import * as React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedCourseStyles } from "./FeaturesStyles"

const FeaturedCourse = ({ feature }) => {
  const { gatsbyPath, headerImage, title, introduction } = feature
  const image = getImage(headerImage)

  return (
    <FeaturedCourseStyles>
      <Link to={gatsbyPath}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="Product Image"
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
