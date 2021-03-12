import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-intl'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Subheader from '../components/Subheader'
import Tocontactform from '../components/Tocontactform'

import Material_Icon from '../assets/material.svg'
import Chat_Icon from '../assets/chat.svg'
import Needle_Icon from '../assets/needle.svg'
import Design from '../assets/design.svg'
import Curtains from '../assets/curtains.svg'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
    <>
    <section className="section is-medium offer">
      <div className="container">
        <div className="content">
          <div className="columns">
            <div className="column">
              <h3 className="">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
      </div>
    </section>
    <section className="section is-medium">
      <div className="container">
        <div className="steps-container">
              <div className="content">
                <h3>Jak pracujemy?</h3>
              </div>
              <div className="columns steps-item">
                <div className="column is-2 has-text-centered-touch ">
                  <Design width="96px"/>
                </div>
                <div className="column is-10">
                  <h4>1. Planujemy i projektujemy</h4>
                  <p>Na tym etapie poznajemy Twoje oczekiwania, upodobania i ewentualne pomysły na wystrój okna. Bierzemy te informacje pod uwagę tworząc koncepcję na aranżację okienną. Na tym etapie dokonujemy również pomiarów pomieszczenia.</p>
                  <a href="">Jak prawidłowo zmierzyć okno?</a>
                </div>
              </div>
              <div className="columns steps-item">
              <div className="column is-2 has-text-centered-touch">
                  <Material_Icon width="96px"/>
                </div>
                <div className="column is-10">
                  <h4>2. Wybieramy materiały</h4>
                  <p>Dobieramy materiały, które najlepiej oddadzą charakter Twoich wnętrz. Posiadamy firany, zasłony, rolety rzymskie, żaluzje oraz wiele innych możliwości na udekorowanie okna. Wybieramy również kolory i wzory. Kalkulujemy koszty projektu oraz przystępujemy do jego realizacji po zaakceptowaniu koncepcji.</p>
                </div>
              </div>
              <div className="columns steps-item">
                <div className="column is-2 has-text-centered-touch">
                  <Needle_Icon width="96px" height="auto"/>
                </div>
                <div className="column is-10">
                  <h4>3. Kroimy i szyjemy</h4>
                  <p>Na tym etapie szyjemy, modelujemy wybrane materiały, które będą składać się na wystrój Twoich okien. Tworzymy oraz docinamy materiały idealnie na wymiar. Realizacja usługi trwa 2-6 tygodni.</p>                
                </div>
              </div>
              <div className="columns steps-item">
                <div className="column is-2 has-text-centered-touch">
                  <Curtains width="96px" height="auto"/>
                </div>
                <div className="column is-10">
                  <h4>4. Montujemy</h4>
                  <p>Kiedy wszystko jest gotowe, przystępujemy do montażu dekoracji okna. Zakładamy materiały, modelujemy, a Ty cieszysz się wyjątkowym wystrojem swoich wnętrz.</p>                
                </div>
              </div>
          </div>
        </div>
    </section>
           
          {/*<div className="columns">
            <div className="column is-10 is-offset-1">
             
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
              <h2 className="">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
              </div>*/}
        
    </>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const img_cover  = data.file
  return (
    <Layout>
      <Subheader title={frontmatter.title}/>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
      <Tocontactform />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 684 quality: 64) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            title
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    },
    file(relativePath: {eq: "portfolio-cover.png"}){
      childImageSharp {
        fluid (maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
