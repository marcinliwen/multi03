import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Gmap from '../components/Gmap'

import { useIntl } from "gatsby-plugin-intl"


export const ContactPageTemplate = ({title, subtitle, ulica, miasto, kod_pocztowy, telefon1, telefon2, mail, open_title, day_start, day_end, hour_start, hour_end}) =>  { 

    return (
        <section className="section">
          <div className="container">
            <div className="content">
                <h1>{title}</h1>
            </div>
            <div className="content">
                <div className="box">
                    <h2>{subtitle}</h2>
                    <ContactForm />
                </div>
            </div>
            <div className="content">
                <div className="box">
                    <h2>Kontakt</h2>
                    <div className="content">
                        <p>{telefon1}</p>
                        <p>{telefon2}</p>
                        <p>{mail}</p>
                        <p>{ulica}</p>
                        <p>{kod_pocztowy} {miasto}</p>
                    </div>
                </div>
                <div className="box">
                    <h2>{open_title}</h2>
                    <div className="content">
                        <p>{day_start} - {day_end}</p>
                        <p>{hour_start} - {hour_end}</p>
                    </div>
                </div>
                

            </div>
            <div className="content">
                <Gmap target={ulica+','+kod_pocztowy+' '+miasto}/>
            </div>
          </div>
        </section>
    )
  }

  const ContactPage = ({ data }) => {
    console.log(data)
  const intl = useIntl()
  //const locale = intl.locale !== "pt" ? `/${intl.locale}` : ""

  // Raw query data
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  // Filtering posts by locale
  const filteredPosts = posts.filter(edge =>
    edge.node.frontmatter.lang.includes(intl.locale)
  )
  console.log(filteredPosts)
  const { node } = filteredPosts[0] // data.markdownRemark holds your post data
  const { frontmatter, html } = node;
  console.log(frontmatter)
    return (
      <Layout>
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