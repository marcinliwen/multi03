import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
//import { Link } from 'gatsby-plugin-intl'
import { useIntl, Link} from 'gatsby-plugin-intl'

const Tocontactform =({data})=>{
    const img_cover  = data.file
    const intl = useIntl()
    return(
        <section className="tocontactform">
        <Img className="img_cover" width="100%" height="400px" fluid={img_cover.childImageSharp.fluid} alt="zasłony" decoding="async"/>
        <div className="container tocontactform-content content has-text-centered">
            <h3 style={{color:'#fff', fontSize: '44px'}}> {intl.formatMessage({ id: "Umów się na darmowe konsultacje" })}</h3>
            <p style={{color:'#fff', padding: '0 15px'}}>
            {intl.formatMessage({ id: "Zadzwoń do nas lub wypełnij formularz a my się z Tobą skontaktujemy" })}  
            </p>
            <p>
            <Link to="/kontakt#contact_form" className="btn second" >
            {intl.formatMessage({ id: "Zamawiam kontakt" })}
            </Link>
            </p>
        </div>
       
      </section>
    )
}

Tocontactform.propTypes = {
  data: PropTypes.object
}
 
export default () => (
    <StaticQuery
      query={graphql`
      query {
        file(relativePath: {eq: "portfolio-cover.png"}){
            childImageSharp {
              fluid (maxWidth: 1920, quality: 100){
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
      }
      `}
      render={(data) => <Tocontactform data={data}  />}
      />
    )