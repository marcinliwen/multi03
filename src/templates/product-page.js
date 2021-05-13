import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-intl'
import { useIntl } from "gatsby-plugin-intl"

import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PreviewCompatibleSVG from '../components/PreviewCompatibleSVG'
import Subheader from '../components/Subheader'
import Tocontactform from '../components/Tocontactform'
import Howtomeasure from '../components/Howtomeasure'

import Material_Icon from '../assets/material.svg'
import Chat_Icon from '../assets/chat.svg'
import Needle_Icon from '../assets/needle.svg'
import Design from '../assets/design.svg'
import Curtains from '../assets/curtains.svg'
import Cancel from '../assets/close.svg'

const customStyles = {
    overlay: {
        backgroundColor: '#2d2d2fdb',
        zIndex: '99'
      },
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : 'transparent',
      maxWidth: '100%',
      border: 'none',
      height: '100%'
    }
  };


export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  //fullImage,
  pricing
}) => {

  return(
    <>
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="columns">
            <div className="column">
              <h3 className="">{intro.heading}</h3>
              <p>{intro.description}</p>
            </div>
          </div>
          <Features gridItems={intro.blurbs} className="uslugi"/>
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
)}

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
  //fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const intl = useIntl()
  //const locale = intl.locale !== "pt" ? `/${intl.locale}` : ""

  // Raw query data
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  // Filtering posts by locale
  const filteredPosts = posts.filter(edge =>
    edge.node.frontmatter.lang.includes(intl.locale)
  )
  //console.log(filteredPosts)
  const { node } = filteredPosts[0] // data.markdownRemark holds your post data
  const { frontmatter, html } = node;
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
        //fullImage={frontmatter.full_image}
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
  query{
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/uslugi" } } }) {
      edges {
        node {
      frontmatter {
        title
        lang
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
