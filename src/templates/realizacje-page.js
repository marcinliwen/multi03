import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Subheader from '../components/Subheader'
import Tocontactform from '../components/Tocontactform'
import BlogRoll from '../components/BlogRoll'
import { Fade } from "react-awesome-reveal";
import { useIntl, Link} from 'gatsby-plugin-intl'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import FullScreenDialog from '../components/Fullscreendialog'



export const RealizacjePageTemplate = ({ title, contentComponent, realisations }) => {
console.log(realisations)
  return (
    <section className="section portfolio is-medium p-0">
          <div className="">
            <div className="content ">
            <div className="columns is-multiline m-0" style={{}}>
        {realisations.map((item) => (
            <div className="is-parent column is-4 portfolio-order portfolio-item-hover p-0" key={item}>
              <article
                
                className={`blog-list-item tile is-child portfolio-item`}
              >
                  {item.featuredimage ? (
                    <div className="featured-thumbnail portfolio-img">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: item.featuredimage,
                          alt: `featured image thumbnail for post ${item.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="content portfolio-text">
                      <p className="post-meta" style={{padding: '1.25rem'}}>
                        <Link
                          className="title is-spaced has-text-primary is-size-4 is-block"
                        >
                        <span className="title has-text-primary is-spaced is-size-4 is-block">
                        {item.title}
                        </span>
                         
                        </Link>
                        <span className="subtitle is-block" style={{fontSize: '14px', lineHeight: '22px'}}>
                          {item.description}
                        </span>
                      </p>
                    
                    <span style={{textAlign: 'right'}}>
                      
                      {item.imagegalery && item.imagegalery.length ? 
                      <FullScreenDialog imagegalery={item.imagegalery}/>
                      : null}
                    </span>
                  </div>
                 
              </article>
            </div>
        ))}
          {/*!isServicesPage &&
            <div className="is-parent column is-8 portfolio-cover" key={cover.id}>
              <article
                className={`blog-list-item tile is-child portfolio-item `}
                >
                  <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: cover,
                          alt: 'portfolio',
                          imgclass: 'portfolio-img'
                        }}
                      />
                    </div>
                  
                    <div className="content portfolio-text">
                     
                    <Fade  triggerOnce direction="up" >
                          
                        <h3>{intl.formatMessage({ id: "Portfolio" })}</h3>

                      <p className="post-meta">
                      {intl.formatMessage({ id: "zobacz projekty, które juz wykonaliśmy i dowiedz się jak pracujemy" })}
                      </p>
                    
                    <p>
                      <Link className="btn second" to="/blog">
                      {intl.formatMessage({ id: "Zobacz więcej" })}
                      </Link>
                    </p>
                    </Fade>
                  </div>
                 
              </article>
            </div>
                      */}
      </div>
            </div>
          </div>
        </section>
  )
}

RealizacjePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const RealizacjePage = ({ data }) => {
  //const { markdownRemark: post } = data

  //console.log(data)
  const intl = useIntl()

  // Raw query data
  const posts = data.allMarkdownRemark.edges
  //console.log(posts)
  // Filtering posts by locale
  const filteredPosts = posts.filter(edge =>
    edge.node.frontmatter.lang.includes(intl.locale)
  )
  //console.log(filteredPosts)
  const { node } = filteredPosts[0] // data.markdownRemark holds your post data
  const { frontmatter } = node;
  //console.log(frontmatter)
  return (
    <Layout>
      <Subheader title={frontmatter.title} />
      <RealizacjePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        realisations={frontmatter.realisations}
      />
      <Tocontactform/>
    </Layout>
  )
}

RealizacjePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RealizacjePage

export const realizacjePageQuery = graphql`
query RealizacjeQuery {
  allMarkdownRemark(filter: {frontmatter: {path: {eq: "/realizacje"}}}) {
    edges {
      node {
        frontmatter {
          lang
          title
          realisations{
            title
            subtitle
            description
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 464, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            imagegalery{
              image{
                childImageSharp {
                  fluid(maxWidth: 1920 quality: 100) {
                    src,
                    srcSet
                  }
                  fixed(width: 200){
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


`
