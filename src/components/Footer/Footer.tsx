import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import { allContentfulCourse } from "../../constants/contents"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa"
import { useConfig } from "../../hooks/useConfig"

const Footer = () => {
  const allProduct = allContentfulCourse
  const { siteMetadata } = useConfig()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Links</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
        {allProduct.length > 0 && (
          <FooterMenuStyles className="footer__menu products__menu">
            <h5>
              <Link to="/products">
                All Courses<span>.</span>
              </Link>
            </h5>
            <ul>
              {allProduct.map((item, index) => {
                const { gatsbyPath, title } = item

                return (
                  <li key={index}>
                    <Link to={gatsbyPath}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </FooterMenuStyles>
        )}

        {siteMetadata.instagramUsername || siteMetadata.linkedinUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Follow GeekLand<span>.</span>
            </h5>
            <ul>
              {siteMetadata.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${siteMetadata.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {siteMetadata.linkedinUsername && (
                <li>
                  <a
                    href={`https://www.linkedin.com/in/${siteMetadata.linkedinUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Linkedin />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Designed & developed by{" "}
            <a
              href={siteMetadata.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMetadata.developerName}
            </a>
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
