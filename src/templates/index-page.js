import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import logo from '../img/logo.svg'


import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Material_Icon from '../assets/material.svg'
import Chat_Icon from '../assets/chat.svg'
import Needle_Icon from '../assets/needle.svg'
import Design from '../assets/design.svg'

import Brand1 from '../assets/brand-1.svg'
import Brand2 from '../assets/brand-2.svg'
import Brand3 from '../assets/brand-3.svg'
import Brand4 from '../assets/brand-4.svg'


export const IndexPageTemplate = ({
  image,
  imghome,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  brands_img
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
          className="home-header-content"
        >
           <img src={logo} alt="KAJA decor" className="logo-h1"/>
          <h1
            className="is-size-2-tablet is-size-10-widescreen home-title"
            style={{
              color: '#2D2D2F',
              lineHeight: '1',
              padding: '0.25em 0 0',
            }}
          >
            {title}
          </h1>
          <h3
            className="is-size-3-mobile is-size-5-tablet is-size-1-widescreen"
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
          {/*<Link to='/products' className="btn" style={{flex:'1', width: 'max-content', margin:'0px 25px 0 0'}}>Poznaj nasze usługi</Link>*/}
        </div>
        </div>
        
      </div>
      <Img className="home-img" fluid={imghome}/>
    </div>
    <section className="section bg-primary">
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
                    <div class="title"><Design height="42px" width="42px" fill="#D9C693"/></div>
                      <p class="heading">Działamy kompleksowo, od projektu po montaż</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <div class="title"><Material_Icon height="42px" width="42px" fill="#D9C693"/></div>
                      <p class="heading">Kożystamy z materiałów najlepszej jakości</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <div class="title"><Needle_Icon height="42px" width="42px" fill="#D9C693"/></div>
                      <p class="heading">Wszystkie usługi wykonujemy ręcznie w naszej pracowni</p>
                    </div>
                  </div>
                  <div class="column has-text-centered">
                    <div>
                    <div class="title"><Chat_Icon height="42px" width="42px" fill="#D9C693"/></div>
                      <p class="heading">Fachowo doradzamy, dzielimy się wiedzą i doświadczeniem</p>
                    </div>
                  </div>
                </div>
                </div>
               
    </section>
    <section className="section section--gradient">
      <div className="container">    
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn first" to="/products">
                      Poznaj nasze usługi
                    </Link>
                  </div>
                </div>
                </div>
                </div>
      </section>
    <section className="section is-medium portfolio" style={{background: '#2D2D2F'}}>   
      <div className="container">    
          <div className="content">
            <div className="columns">         
            <div className="column is-12">
              <h3 className="">
                Ostatnie realizacje
              </h3>
              <BlogRoll />
              {/*<div className="column is-12 has-text-centered">
                <Link className="btn second" to="/blog">
                  Zobacz więcej
                </Link>
        </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>            
    <section className="section is-medium brands bg-primary">
      <div className="container">
        <div className="content">
          <h3>Nasi partnerzy</h3>
        </div>
        <div className="content">
        <div className="columns is-multiline brands-items">
          {brands_img.map((node)=>
             <div className="column brands-item"><Img fluid={node.childImageSharp.fluid} /></div>
          )}
          
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
  const { frontmatter } = data.markdownRemark
  const { nodes } = data.allFile
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
        brands_img={nodes}
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
      }
    }
    file(relativePath: {eq: "curtains-8.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100){
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    },
    allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "brands"}}) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100){
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`
