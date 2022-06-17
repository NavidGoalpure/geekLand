interface Config {
  siteMetadata: {
    title: string
    description: string
    author: string
    siteUrl: string
    developerName: string
    developerUrl: string
    instagramUsername?: string
    linkedinUsername: string
  }
}
export const useConfig = (): Config => {
  const siteMetadata = {
    title: "GeekLand",
    description: "A landscape for creating future magicians",
    author: "Navid Goalpure",
    siteUrl: "geekland.com",
    developerName: "Navid Goalpure",
    developerUrl: "react-resume.ir",
    linkedinUsername: "linkedin.com",
  }
  return { siteMetadata }
}
