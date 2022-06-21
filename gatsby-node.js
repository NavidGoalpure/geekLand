const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  console.log("Page - " + page.page)
  if (page.path.match(/^\/courses/)) {
    createPage({
      path: "/courses",
      matchPath: "/courses/:slug",
      component: path.resolve("src/pages/courses.tsx"),
    })
  }
}
