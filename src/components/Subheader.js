import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

const Subheader = (props)=>{
    return(
        <div
            className={`full-width-image-container margin-top-0 subheader margin-bottom-0 ${props.className && props.className}`}
        >
        <h1>
          {props.title}
        </h1>
        {props.subtitle && <p>{props.subtitle}</p>}
        <Img className="home-img" fluid={props.data.file.childImageSharp.fluid}/>
      </div>
    )
}
export default (props) => (
    <StaticQuery
      query={graphql`
        query Subheaderquery {
            file(relativePath: {eq: "curtains-8.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 60){
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
      `}
      render={(data) => <Subheader data={data} title={props.title} subtitle={props.subtitle} className={props.className}/>}
    />
  )