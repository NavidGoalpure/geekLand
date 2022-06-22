import { FeaturedCoursesCard } from "../Interfaces"

const useFeaturedCourses = (): FeaturedCoursesCard[] => {
  return [
    {
      id: "1",
      title: "Scrach Preliminary",
      slug: "scrach_preliminary",
      featureThisProduct: true,
      introduction: "Introduction to programming and philosophical thinking",
      headerImage:
        "https://images.ctfassets.net/mnkt79v03pjk/31cGhK2Odf4okLinsIjZuO/8b3c4572c34150fa6e06d8005e5935ee/apple-airpods-pro.jpg?w=1000&h=667&fl=progressive&q=50&fm=jpg",
    },
    {
      id: "2",
      title: "Scrach Advanced",
      slug: "scrach_advanced",
      featureThisProduct: true,
      introduction: "Basic programming and philosophical thinking skills",
      headerImage:
        "https://images.ctfassets.net/mnkt79v03pjk/10UfnAeEbkWC6kO9aKfz7W/6e167ac4485c66c48e6e9a3c1eb30b0f/iphone.jpg?w=1000&h=751&fl=progressive&q=50&fm=jpg",
    },
    {
      id: "3",
      title: "HTML & CSS",
      slug: "html_and_css",
      featureThisProduct: true,
      introduction: "HTML and CSS training course",
      headerImage:
        "https://images.ctfassets.net/mnkt79v03pjk/4eQqwG5ZjoQyAJhKW3vmBr/b1591b9ce8138665814816ad6c50961a/ipad.jpg?w=1000&h=712&fl=progressive&q=50&fm=jpg",
    },
  ]
}

export default useFeaturedCourses
