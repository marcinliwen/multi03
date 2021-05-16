import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import FullScreenDialog from './Fullscreendialog'
import { Fade } from "react-awesome-reveal";
import { InView } from 'react-intersection-observer';
import { useIntl, Link} from 'gatsby-plugin-intl'

const  BlogRoll = (props) => {
    
    const cover = props.data.file;
    //posts = isServicesPage ? posts : posts.slice(0, 4)

    const intl = useIntl()
     // Raw query data
    const getRalisations = props.data.allMarkdownRemark.edges
    //console.log(posts)
    // Filtering posts by locale
    const filteredItem = getRalisations.filter(edge =>
        edge.node.frontmatter.lang.includes(intl.locale)
    )
    //console.log(filteredPosts)
    const { node } = filteredItem[0] 
    const realisations  = node.frontmatter.realisations;
    console.log(node)
    return (
      <div className="columns is-multiline" style={{}}>
          <Fade  triggerOnce  cascade className="is-parent column is-4 portfolio-order portfolio-item-hover" damping={0.3}>
        {realisations &&
          realisations.map(( item ) => (
           
              <article
                
                className={`blog-list-item tile is-child portfolio-item ${
                  item.featuredpost ? 'is-featured' : ''
                }`}
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
                        
                        <span className="title has-text-primary is-spaced is-size-4 is-block">
                        {item.title}
                        </span>
                         
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
                      ))}
        </Fade>
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
            
      </div>
    )
  
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query RealizacjeHomeQuery {
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
          },
        file(relativePath: {eq: "portfolio-cover.png"}){
          childImageSharp {
            fluid (maxWidth: 928, quality: 100){
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => <BlogRoll data={data} />}
  />
)
