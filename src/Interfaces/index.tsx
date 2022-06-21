export interface FeaturedCoursesCard {
  id: string
  title: string
  slug: string
  featureThisProduct: boolean
  introduction: string
  headerImage: string
}
export interface FAQ {
  question: string
  answer: string
}
export interface ContentfulCourse {
  id: string
  title: string
  slug: string
  introduction: string
  price: number
  headerImage: string
  description: string
  faqs: FAQ[]
  gallery?: string[]
}
