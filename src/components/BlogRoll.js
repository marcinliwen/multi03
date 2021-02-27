import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const cover = data.file
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
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                        <span className="subtitle is-size-5 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="btn second" to={post.fields.slug}>
                        Zobacz więcej
                      </Link>
                    </p>
                  </div>
                  
              </article>
            </div>
          ))}

        <div className="is-parent column is-8 portfolio-cover" key={cover.id}>
              <article
                className={`blog-list-item tile is-child portfolio-item `}
                >
                  <div className="featured-thumbnail portfolio-img">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: cover,
                         
                        }}
                      />
                    </div>
                    <div className="content portfolio-text">
                      <p className="post-meta">
                        
                          
                        <h3>Portfolio</h3>
                      </p>
                    
                    <p>
                      <Link className="btn second" >
                        Zobacz więcej
                      </Link>
                    </p>
                  </div>
                  
              </article>
            </div>
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

export default () => (
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
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 464, quality: 100) {
                      ...GatsbyImageSharpFluid
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
