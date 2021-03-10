import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Gmap from '../components/Gmap'
import Subheader from '../components/Subheader'
import FeaturesMark from '../components/FeaturesMark'
import { useIntl } from "gatsby-plugin-intl"


export const ContactPageTemplate = ({title, subtitle, ulica, miasto, kod_pocztowy, telefon1, telefon2, mail, open_title, day_start, day_end, hour_start, hour_end}) =>  { 

    return (
        <section className="section kontakt-block is-medium" style={{background: '#2D2D2F'}}>
          <div className="container"> 
          <div className="columns">
            <div className="column">
                <div className="box">    
                    <div className="content">
                        <h2>Kontakt</h2>
                        <p>
                          <div>{telefon1}</div>
                          <div>{telefon2}</div>
                        </p>                       
                        <p>{mail}</p>
                        <p>
                          <div>{ulica}</div>
                          <div>{kod_pocztowy} {miasto}</div>
                        </p>
                    </div>
                    <div className="content">
                        <h2>{open_title}</h2>
                        <p>
                          <div>{day_start} - {day_end}</div>
                          <div>{hour_start} - {hour_end}</div>
                        </p>                        
                    </div>
                </div>
                
              </div>
              <div className="column">
                <div className="box">
                  <div className="content">
                    <h2>{subtitle}</h2>
                    <ContactForm />
                  </div>
                   
                </div>
            </div>
            </div>
          </div>
        </section>
    )
  }

  const ContactPage = ({ data }) => {
  const intl = useIntl()
  //const locale = intl.locale !== "pt" ? `/${intl.locale}` : ""

  // Raw query data
  const posts = data.allMarkdownRemark.edges
  //console.log(posts)
  // Filtering posts by locale
  const filteredPosts = posts.filter(edge =>
    edge.node.frontmatter.lang.includes(intl.locale)
  )
  //console.log(filteredPosts)
  const { node } = filteredPosts[0] // data.markdownRemark holds your post data
  const { frontmatter, html } = node;
  //console.log(frontmatter)
    return (
      <Layout>
        <Subheader title={frontmatter.title}/>
        <section>
            <div className="gmap">
                <Gmap target={frontmatter.address.ulica+','+frontmatter.address.kod_pocztowy+' '+frontmatter.address.miasto}/>
            </div>
        </section>
        <ContactPageTemplate
          title={frontmatter.title}
          subtitle={frontmatter.subtitle}
          telefon1={frontmatter.contact.telefon1}
          telefon2={frontmatter.contact.telefon2}
          ulica={frontmatter.address.ulica}
          miasto={frontmatter.address.miasto}
          kod_pocztowy={frontmatter.address.kod_pocztowy}
          mail={frontmatter.contact.mail}
          open_title={frontmatter.open_hours.title}          
          day_start={frontmatter.open_hours.day_start}
          day_end={frontmatter.open_hours.day_end}
          hour_start={frontmatter.open_hours.hour_start}
          hour_end={frontmatter.open_hours.hour_end}
        />
        <FeaturesMark />
      </Layout>
    )
    
  }
  ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
  }
  
  export default ContactPage

  export const contactPageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/kontakt" } } }) {
      edges {
        node {
          frontmatter {
            lang
            title
            subtitle
            address{
                ulica
                miasto
                kod_pocztowy
            }
            contact{
                telefon1
                telefon2
                mail
            }
            open_hours{
                title
                day_start
                day_end
                hour_start
                hour_end
            }
          }
        }
      }
    }
  }
  `