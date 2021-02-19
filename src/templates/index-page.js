import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"


import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  imghome,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
    >
      <div className="container header-section home">
        <div className="is-flex-direction-column is-flex">
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            position: 'relative',
            zIndex: '1'
          }}
          
        >
          <h1
            className="is-size-3-mobile is-size-2-tablet is-size-10-widescreen"
            style={{
              color: '#2D2D2F',
              lineHeight: '1',
              padding: '0.25em 0 0',
            }}
          >
            {title}
          </h1>
          <h3
            className="is-size-5-mobile is-size-5-tablet is-size-1-widescreen"
            style={{
              color: '#2D2D2F',
              lineHeight: '1',
              padding: '0.75em 0 0 0',
            }}
          >
            {subheading}
          </h3>
       
        </div>
        <div className="content home" style={{position:'relative', zIndex:'1'}}>
          <Link to='/kontakt' className="btn" style={{flex:'1', width: 'max-content', margin:'0px 25px 0 0'}}>Zamów darmową wycenę</Link>
          <Link to='/products' className="btn" style={{flex:'1', width: 'max-content', margin:'0px 25px 0 0'}}>Poznaj nasze usługi</Link>
        </div>
        </div>
        
      </div>
      <Img className="home-img" fluid={imghome}/>
    </div>
    <section className="section bg-invert">
              {/*<div className="container">               
                <div className="content">
                  <div className="tile">
                    <h2 className="title">{mainpitch.title}</h2>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
               </div>
          </div>*/}
                <div className="container">
                <div class="columns features"> 
                  <div class="column has-text-centered">
                    <div>
                    <p class="title">Materiał</p>

                      <p class="heading">koystamy z materiałów najlepszej jakości</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <p class="title">Ręczna robota</p>

                      <p class="heading">Wszystkie usługi wykonujemy ręcznie w naszej pracowni</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <p class="title">Wymiar</p>

                      <p class="heading">Dopasowujemy firany do okien</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <p class="title">Czas</p>

                      <p class="heading">Dbamy aby Firany były gotowe w umówionym terminie</p>
                    </div>
                  </div>
                </div>
                </div>
               
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  console.log(data.file.childImageSharp.fluid)

  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        imghome={data.file.childImageSharp.fluid}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
    file(relativePath: {eq: "curtains-8.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
