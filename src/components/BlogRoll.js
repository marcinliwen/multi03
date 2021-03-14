import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

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
            <div className="is-parent column is-4 portfolio-order" key={post.id}>
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
                      <p className="post-meta">
                        <Link
                          className="title has-text-primary is-size-4 is-block"
                          to={post.frontmatter.path}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <span className="subtitle is-size-5 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    
                    <p>
                      {/*post.excerpt*/}
                      <br />
                      <br />
                      <Link className="btn second" to={post.frontmatter.path}>
                        Zobacz więcej
                      </Link>
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
                     
                        
                          
                        <h3>Portfolio</h3>

                      <p className="post-meta">
                        zobacz projekty, które juz wykonaliśmy i dowiedz się jak pracujemy
                      </p>
                    
                    <p>
                      <Link className="btn second" to="/blog">
                        Zobacz więcej
                      </Link>
                    </p>
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
