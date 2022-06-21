import { allContentfulCourse } from "../constants/contents"
import { ContentfulCourse } from "../Interfaces"

const useContentfulCourse = (slug: string): ContentfulCourse => {
  return allContentfulCourse.find((course) => course.slug === slug)
}

export default useContentfulCourse
