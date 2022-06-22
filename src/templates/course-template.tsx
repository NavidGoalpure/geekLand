import React from "react"
import Seo from "../components/SEO"
import styled from "styled-components/macro"
import BannerModule from "../components/BannerModule/BannerModule"
import Faq from "../components/Faq/Faq"
import Features from "../components/Features/Features"

const ProductTemplateStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`

const ProductGallery = styled.section`
  width: 100%;

  > .container {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--gap) / 2);

    @media (min-width: 1024px) {
      gap: var(--gap);
    }

    > * {
      width: calc(50% - 10px);

      @media (min-width: 768px) {
        width: calc(33.333% - 14px);
      }

      @media (min-width: 1024px) {
        width: calc(25% - 30px);
      }
    }
  }
`

const CourseTemplate = (contentfulProduct) => {
  const {
    headerImage,
    title,
    price,
    introduction,
    description,
    faqs,
    gallery,
  } = contentfulProduct
  return (
    <>
      <Seo title={title} />
      <BannerModule
        title={title}
        price={price}
        subTitle={introduction}
        enquire={true}
      >
        <img className="banner__image" src={headerImage} alt={title} />
      </BannerModule>
      <ProductTemplateStyles className="section">
        <div className="container container__tight">
          {description && (
            <div className="column">
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              ></div>
            </div>
          )}
          {faqs && (
            <div className="column">
              {faqs.map((item, index) => {
                return (
                  <Faq
                    key={index}
                    title={item.question}
                    description={item.answer}
                  />
                )
              })}
            </div>
          )}
        </div>
      </ProductTemplateStyles>
      {gallery && (
        <ProductGallery className="section">
          <div className="container container__tight">
            {gallery.map((item, index) => {
              return <img key={index} src={item} />
            })}
          </div>
        </ProductGallery>
      )}
      <Features
        title="Featured Products from GeekLand."
        introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
      />
    </>
  )
}

export default CourseTemplate
