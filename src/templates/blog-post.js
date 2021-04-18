import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Tocontactform from '../components/Tocontactform'
import Subheader from '../components/Subheader'
import Img from "gatsby-image"


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  imagegalery
}) => {
  const PostContent = contentComponent || Content
  console.log(imagegalery)
  return (
    <section className="">
      {helmet || ''}
      <div className=" content">
        <div className="columns is-multiline is-gapless">
          {imagegalery && imagegalery.length ? 
            imagegalery.map((item)=>(
            <div className="column is-6 galery-img">
              <Img fluid={item.image.childImageSharp.fluid}/>
              <Img fixed={item.image.childImageSharp.fixed}/>
            </div>))
          : null
          }
        </div>
        <div className="columns is-gapless">
          <div className="column">
            {/*<PostContent content={content} />*/}
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  imagegalery: PropTypes.node
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Subheader title={post.frontmatter.title} subtitle={post.frontmatter.subtitle} className="portfolio-title"/>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Realizacje">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        imagegalery={post.frontmatter.imagegalery}
      />
      <Tocontactform />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        description
        tags
        imagegalery {
          image{
            childImageSharp {
              fluid(maxWidth: 960 quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
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
`
