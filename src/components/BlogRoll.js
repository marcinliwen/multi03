import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import FullScreenDialog from './Fullscreendialog'
import { Fade } from "react-awesome-reveal";
import { InView } from 'react-intersection-observer';

class BlogRoll extends React.Component {
  render() {
    const isServicesPage = this.props.isServicesPage
    const { data } = this.props
    var { edges: posts } = data.allMarkdownRemark
    const cover = data.file
    posts = isServicesPage ? posts : posts.slice(0, 4)

    
    return (
      <div className="columns is-multiline" style={{}}>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4 portfolio-order portfolio-item-hover" key={post.id}>
              <article
                
                className={`blog-list-item tile is-child portfolio-item ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
               
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail portfolio-img">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                 
                  <div className="content portfolio-text">
                      <p className="post-meta" style={{padding: '1.25rem'}}>
                        {/*<Link
                          className="title is-spaced has-text-primary is-size-4 is-block"
                          to={post.frontmatter.path}
                        >*/}
                        <span className="title has-text-primary is-spaced is-size-4 is-block">
                        {post.frontmatter.title}
                        </span>
                         
                        {/*</Link>*/}
                        <span className="subtitle is-block" style={{fontSize: '14px', lineHeight: '22px'}}>
                          {post.frontmatter.description}
                        </span>
                      </p>
                    
                    <p style={{textAlign: 'right'}}>
                      {/*post.excerpt*/}
                      
                     {/* <Link className="btn second" to={post.frontmatter.path} style={{background: 'none', boxShadow: 'none', padding: '15px', transitionDuration: '0.3s'}}>
                        <More fill="#DAC596"  width="24px" style={{verticalAlign:'bottom'}} />
                      </Link>*/}
                      {post.frontmatter.imagegalery && post.frontmatter.imagegalery.length ? 
                      <FullScreenDialog imagegalery={post.frontmatter.imagegalery}/>
                      : null}
                    </p>
                  </div>
                 
              </article>
            </div>
        ))}
          {!isServicesPage &&
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
                          
                        <h3>Portfolio</h3>

                      <p className="post-meta">
                        zobacz projekty, które juz wykonaliśmy i dowiedz się jak pracujemy
                      </p>
                    
                    <p>
                      <Link className="btn second" to="/blog">
                        Zobacz więcej
                      </Link>
                    </p>
                    </Fade>
                  </div>
                 
              </article>
            </div>
            }
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                description
                path
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 464, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
                imagegalery {
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
    render={(data, count) => <BlogRoll data={data} count={count} isServicesPage={props.isServicesPage} />}
  />
)
